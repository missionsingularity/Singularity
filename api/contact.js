const RECIPIENT = "projects@missionsingularity.com"
const MAX_BODY_BYTES = 24 * 1024
const INDUSTRIES = new Set(["Government and Administration", "Defence", "Law Enforcement", "Finance", "Technology", "Other"])
const PACKAGES = new Set(["pilot", "scale", "transform", "unsure"])

const response = (res, status, payload) => {
  res.statusCode = status
  res.setHeader("Content-Type", "application/json; charset=utf-8")
  res.setHeader("Cache-Control", "no-store")
  res.end(JSON.stringify(payload))
}

function clean(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}

function validEmail(email) {
  return email.length <= 254 && /^[^\s<>(),;:\\[\]@]+@[^\s<>(),;:\\[\]@]+\.[^\s<>(),;:\\[\]@]+$/.test(email)
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character])
}

function requestSize(req) {
  const length = Number(req.headers["content-length"] || 0)
  return Number.isFinite(length) ? length : 0
}

function allowedOrigin(req) {
  const origin = req.headers.origin
  if (!origin) return false
  try {
    const parsed = new URL(origin)
    const forwardedHost = req.headers["x-forwarded-host"]
    const host = (forwardedHost || req.headers.host || "").split(",")[0].trim()
    return parsed.host.toLowerCase() === host.toLowerCase() && ["http:", "https:"].includes(parsed.protocol)
  } catch {
    return false
  }
}

async function distributedRateLimit(req, env, fetchImpl) {
  const url = env.UPSTASH_REDIS_REST_URL
  const token = env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return { configured: false }

  const ip = String(req.headers["x-forwarded-for"] || req.headers["x-real-ip"] || "unknown").split(",")[0].trim()
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(ip))
  const key = [...new Uint8Array(digest)].map(value => value.toString(16).padStart(2, "0")).join("")
  const now = Date.now()
  const script = "local k=KEYS[1]; local n=tonumber(ARGV[1]); local w=tonumber(ARGV[2]); local l=tonumber(ARGV[3]); redis.call('ZREMRANGEBYSCORE',k,0,n-w); local c=redis.call('ZCARD',k); if c>=l then return {0,redis.call('ZRANGE',k,0,0,'WITHSCORES')[2]} end; redis.call('ZADD',k,n,n..'-'..redis.call('INCR',k..':seq')); redis.call('PEXPIRE',k,w); redis.call('PEXPIRE',k..':seq',w); return {1,l-c-1}"
  const result = await fetchImpl(url.replace(/\/$/, ""), {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(["EVAL", script, "1", `singularity:contact:${key}`, String(now), "900000", "5"]),
  })
  if (!result.ok) throw new Error("Rate limit service unavailable")
  const data = await result.json()
  if (data.error) throw new Error("Rate limit service unavailable")
  const value = data.result
  return { configured: true, allowed: Array.isArray(value) && Number(value[0]) === 1 }
}

export function createContactHandler({ env = process.env, fetchImpl = fetch, now = () => new Date() } = {}) {
  return async function contactHandler(req, res) {
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST")
      return response(res, 405, { error: "Method not allowed." })
    }
    const measuredSize = requestSize(req) || Buffer.byteLength(JSON.stringify(req.body ?? ""), "utf8")
    if (measuredSize > MAX_BODY_BYTES) return response(res, 413, { error: "The request is too large." })
    if (!allowedOrigin(req)) return response(res, 403, { error: "Request origin could not be verified." })

    const idempotencyKey = String(req.headers["idempotency-key"] || "")
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(idempotencyKey)) {
      return response(res, 400, { error: "Please retry the form submission." })
    }
    if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) return response(res, 400, { error: "Invalid form submission." })
    if (clean(req.body.website, 200)) return response(res, 400, { error: "Invalid form submission." })

    if ((typeof req.body.name === "string" && req.body.name.length > 120) ||
        (typeof req.body.email === "string" && req.body.email.length > 254) ||
        (typeof req.body.organization === "string" && req.body.organization.length > 160) ||
        (typeof req.body.designation === "string" && req.body.designation.length > 120) ||
        (typeof req.body.phone === "string" && req.body.phone.length > 40) ||
        (typeof req.body.requirements === "string" && req.body.requirements.length > 5000)) {
      return response(res, 422, { error: "One or more fields exceed their allowed length." })
    }
    const data = {
      name: clean(req.body.name, 120),
      email: clean(req.body.email, 254),
      organization: clean(req.body.organization, 160),
      designation: clean(req.body.designation, 120),
      phone: clean(req.body.phone, 40),
      industry: clean(req.body.industry, 80),
      package: clean(req.body.package, 20),
      source: clean(req.body.source, 80).replace(/[\r\n\u0000-\u001f]/g, " "),
      requirements: clean(req.body.requirements, 5000),
    }
    const errors = {}
    if (!data.name) errors.name = "Enter your full name."
    if (!validEmail(data.email)) errors.email = "Enter a valid email address."
    if (!data.organization) errors.organization = "Enter your organization."
    if (req.body.industry && !INDUSTRIES.has(data.industry)) errors.industry = "Choose a listed industry."
    if (!PACKAGES.has(data.package)) errors.package = "Choose a listed implementation package."
    if (!data.requirements) errors.requirements = "Tell us a little about your project."
    if (data.requirements.length > 5000) errors.requirements = "Keep project requirements under 5,000 characters."
    if (req.body.consent !== true) errors.consent = "Please agree to be contacted about this inquiry."
    if (Object.keys(errors).length) return response(res, 422, { error: "Check the highlighted fields.", fields: errors })

    const apiKey = env.RESEND_API_KEY
    const from = env.CONTACT_FROM_EMAIL
    if (!apiKey || !from || env.CONTACT_TO_EMAIL !== RECIPIENT) {
      return response(res, 503, { error: "Email submission is not configured. Please email projects@missionsingularity.com directly." })
    }
    if (!validEmail(from)) return response(res, 503, { error: "Email submission is not configured. Please email projects@missionsingularity.com directly." })

    let limit
    try {
      limit = await distributedRateLimit(req, env, fetchImpl)
    } catch {
      return response(res, 503, { error: "Inquiry protection is temporarily unavailable. Please email projects@missionsingularity.com directly." })
    }
    if (!limit.configured) return response(res, 503, { error: "Inquiry protection is not configured. Please email projects@missionsingularity.com directly." })
    if (!limit.allowed) return response(res, 429, { error: "Too many inquiries. Please wait a little before trying again." })

    const labels = [
      ["Name", data.name], ["Work email", data.email], ["Organization", data.organization],
      ["Designation", data.designation || "Not provided"], ["Phone", data.phone || "Not provided"],
      ["Industry", data.industry || "Not provided"], ["Implementation package", data.package],
      ["Inquiry source", data.source || "Direct contact page"],
    ]
    const timestamp = now().toISOString()
    const html = `<p>New inquiry received through the Singularity corporate website.</p><table>${labels.map(([label, value]) => `<tr><th align="left" style="padding:4px 14px 4px 0">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join("")}</table><h3>Project requirements</h3><p>${escapeHtml(data.requirements).replace(/\n/g, "<br>")}</p><p>Submission timestamp: ${escapeHtml(timestamp)}</p>`
    const text = `New inquiry received through the Singularity corporate website.\n\n${labels.map(([label, value]) => `${label}: ${value}`).join("\n")}\n\nProject requirements:\n${data.requirements}\n\nSubmission timestamp: ${timestamp}`
    const subjectOrganization = data.organization.replace(/[\r\n\u0000-\u001f]/g, " ").slice(0, 160)

    try {
      const providerResponse = await fetchImpl("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": idempotencyKey },
        body: JSON.stringify({ from, to: [RECIPIENT], reply_to: data.email, subject: `New Project Inquiry — Singularity — ${subjectOrganization}`, html, text }),
      })
      if (!providerResponse.ok) return response(res, 502, { error: "We couldn't send your inquiry. Please try again or email projects@missionsingularity.com directly." })
      const accepted = await providerResponse.json()
      if (!accepted || typeof accepted.id !== "string") return response(res, 502, { error: "We couldn't confirm acceptance. Please try again or email projects@missionsingularity.com directly." })
      return response(res, 200, { accepted: true, messageId: accepted.id })
    } catch {
      return response(res, 502, { error: "We couldn't send your inquiry. Please try again or email projects@missionsingularity.com directly." })
    }
  }
}

export default createContactHandler()
