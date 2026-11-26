const form = document.querySelector("#contact-form")
const submitButton = document.querySelector("#submit-button")
const status = document.querySelector("#form-status")
const successPanel = document.querySelector("#success-panel")
const menuToggle = document.querySelector(".menu-toggle")
const mobileMenu = document.querySelector("#mobile-menu")
const requirements = document.querySelector("#requirements")
const counter = document.querySelector("#character-count")
const sourceValues = new Set(["hero", "navigation", "footer", "pricing", "implementation", "direct"])
const packageValues = new Set(["pilot", "scale", "transform"])
let lastSubmissionFingerprint = ""
let pendingIdempotencyKey = ""

const params = new URLSearchParams(location.search)
const requestedPackage = params.get("package")?.toLowerCase()
if (packageValues.has(requestedPackage)) document.querySelector("#package").value = requestedPackage

const source = params.get("source")?.toLowerCase()
const inquirySource = sourceValues.has(source) ? source : "direct"

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true"
  menuToggle.setAttribute("aria-expanded", String(!isOpen))
  menuToggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu")
  mobileMenu.hidden = isOpen
})
mobileMenu.addEventListener("click", event => {
  if (event.target.closest("a")) {
    mobileMenu.hidden = true
    menuToggle.setAttribute("aria-expanded", "false")
    menuToggle.setAttribute("aria-label", "Open menu")
  }
})

requirements.addEventListener("input", () => {
  counter.textContent = `${requirements.value.length.toLocaleString()} / 5,000`
})

document.querySelector("#copy-email").addEventListener("click", async () => {
  const feedback = document.querySelector("#copy-feedback")
  try {
    await navigator.clipboard.writeText("projects@missionsingularity.com")
    feedback.textContent = "Copied"
  } catch {
    feedback.textContent = "Select the email link to copy it"
  }
  window.setTimeout(() => { feedback.textContent = "" }, 2200)
})

function showErrors(errors) {
  for (const id of ["name", "email", "organization", "requirements", "consent"]) {
    const field = document.getElementById(id)
    const message = document.getElementById(`${id}-error`)
    const error = errors[id] || ""
    if (field) field.setAttribute("aria-invalid", String(Boolean(error)))
    if (message) message.textContent = error
  }
}

function validate() {
  const values = new FormData(form)
  const errors = {}
  if (!String(values.get("name") || "").trim()) errors.name = "Enter your full name."
  const email = String(values.get("email") || "").trim()
  if (!/^[^\s<>(),;:\\[\]@]+@[^\s<>(),;:\\[\]@]+\.[^\s<>(),;:\\[\]@]+$/.test(email)) errors.email = "Enter a valid email address."
  if (!String(values.get("organization") || "").trim()) errors.organization = "Enter your organization."
  if (!String(values.get("requirements") || "").trim()) errors.requirements = "Tell us a little about your project."
  if (!values.get("consent")) errors.consent = "Please agree to be contacted about this inquiry."
  showErrors(errors)
  if (Object.keys(errors).length) {
    const firstInvalid = form.querySelector('[aria-invalid="true"]') || document.querySelector("#consent")
    firstInvalid.focus()
    return false
  }
  return true
}

form.addEventListener("input", event => {
  const target = event.target
  if (target.name) {
    const error = document.getElementById(`${target.id}-error`)
    if (error) error.textContent = ""
    target.removeAttribute("aria-invalid")
  }
  if (target.id === "consent") document.querySelector("#consent-error").textContent = ""
})

form.addEventListener("submit", async event => {
  event.preventDefault()
  status.textContent = ""
  if (!validate()) return

  submitButton.disabled = true
  submitButton.classList.add("is-loading")
  submitButton.querySelector(".button-label").textContent = "Sending inquiry"
  const values = Object.fromEntries(new FormData(form).entries())
  const payload = {
    ...values,
    consent: form.elements.consent.checked,
    source: inquirySource,
  }
  payload.package = document.querySelector("#package").value
  const fingerprint = JSON.stringify(payload)
  if (fingerprint !== lastSubmissionFingerprint) {
    lastSubmissionFingerprint = fingerprint
    pendingIdempotencyKey = crypto.randomUUID()
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Idempotency-Key": pendingIdempotencyKey },
      body: JSON.stringify(payload),
    })
    const result = await response.json().catch(() => ({}))
    if (!response.ok || result.accepted !== true) {
      if (result.fields) showErrors(result.fields)
      throw new Error(result.error || "We couldn't send your inquiry. Please try again or email us directly at projects@missionsingularity.com.")
    }
    form.hidden = true
    document.querySelector(".form-heading").hidden = true
    successPanel.hidden = false
    successPanel.focus()
  } catch (error) {
    status.textContent = error.message || "We couldn't send your inquiry. Please try again or email us directly at projects@missionsingularity.com."
  } finally {
    submitButton.disabled = false
    submitButton.classList.remove("is-loading")
    submitButton.querySelector(".button-label").textContent = "Send inquiry"
  }
})
