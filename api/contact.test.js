import test from "node:test"
import assert from "node:assert/strict"
import { createContactHandler } from "./contact.js"

function invoke(handler, { body = {}, headers = {}, method = "POST" } = {}) {
  const responseHeaders = {}
  const res = {
    statusCode: 200,
    setHeader(name, value) { responseHeaders[name] = value },
    end(data) { this.body = JSON.parse(data) },
  }
  return Promise.resolve(handler({ method, headers: { host: "localhost:5173", origin: "http://localhost:5173", "content-length": "400", ...headers }, body }, res)).then(() => ({ status: res.statusCode, body: res.body, headers: responseHeaders }))
}

const validSubmission = {
  name: "Asha Rao", email: "asha@example.com", organization: "Example Ltd", designation: "Director",
  phone: "+91 98765 43210", industry: "Technology", package: "pilot", source: "hero",
  requirements: "We want to explore an operations project.", consent: true,
}
const idempotency = "33333333-3333-4333-8333-333333333333"

test("valid inquiry is sent to the fixed recipient with safe reply-to and idempotency", async () => {
  let providerRequest
  const handler = createContactHandler({
    env: { RESEND_API_KEY: "test-key", CONTACT_FROM_EMAIL: "website@example.com", CONTACT_TO_EMAIL: "projects@missionsingularity.com", UPSTASH_REDIS_REST_URL: "https://redis.example", UPSTASH_REDIS_REST_TOKEN: "test-token" },
    now: () => new Date("2026-01-01T00:00:00.000Z"),
    fetchImpl: async (url, options) => {
      if (url.includes("redis.example")) return Response.json({ result: [1, 4] })
      providerRequest = { url, options }
      return Response.json({ id: "email_test_123" })
    },
  })
  const result = await invoke(handler, { body: validSubmission, headers: { "idempotency-key": idempotency, "x-forwarded-for": "192.0.2.1" } })
  assert.equal(result.status, 200)
  assert.equal(result.body.accepted, true)
  assert.equal(providerRequest.url, "https://api.resend.com/emails")
  assert.equal(providerRequest.options.headers["Idempotency-Key"], idempotency)
  const email = JSON.parse(providerRequest.options.body)
  assert.deepEqual(email.to, ["projects@missionsingularity.com"])
  assert.equal(email.reply_to, validSubmission.email)
  assert.match(email.subject, /Example Ltd/)
})

test("invalid submissions are rejected before any provider call", async () => {
  let calls = 0
  const handler = createContactHandler({ fetchImpl: async () => { calls++; throw new Error("should not be called") } })
  const result = await invoke(handler, { body: { ...validSubmission, email: "nope", consent: false }, headers: { "idempotency-key": idempotency } })
  assert.equal(result.status, 422)
  assert.ok(result.body.fields.email)
  assert.ok(result.body.fields.consent)
  assert.equal(calls, 0)
})

test("unconfigured provider reports unavailable and never pretends success", async () => {
  const handler = createContactHandler()
  const result = await invoke(handler, { body: validSubmission, headers: { "idempotency-key": idempotency } })
  assert.equal(result.status, 503)
  assert.match(result.body.error, /email projects@missionsingularity.com directly/)
})

test("origin and honeypot checks reject requests", async () => {
  const handler = createContactHandler()
  const badOrigin = await invoke(handler, { body: validSubmission, headers: { origin: "https://attacker.example", "idempotency-key": idempotency } })
  assert.equal(badOrigin.status, 403)
  const trap = await invoke(handler, { body: { ...validSubmission, website: "spam" }, headers: { "idempotency-key": idempotency } })
  assert.equal(trap.status, 400)
})

test("provider errors return failure", async () => {
  const handler = createContactHandler({
    env: { RESEND_API_KEY: "test-key", CONTACT_FROM_EMAIL: "website@example.com", CONTACT_TO_EMAIL: "projects@missionsingularity.com", UPSTASH_REDIS_REST_URL: "https://redis.example", UPSTASH_REDIS_REST_TOKEN: "test-token" },
    fetchImpl: async url => url.includes("redis.example") ? Response.json({ result: [1, 4] }) : Response.json({ message: "rejected" }, { status: 422 }),
  })
  const result = await invoke(handler, { body: validSubmission, headers: { "idempotency-key": idempotency } })
  assert.equal(result.status, 502)
  assert.equal(result.body.accepted, undefined)
})

test("distributed rate limit rejects excess requests", async () => {
  let emailCalls = 0
  const handler = createContactHandler({
    env: { RESEND_API_KEY: "test-key", CONTACT_FROM_EMAIL: "website@example.com", CONTACT_TO_EMAIL: "projects@missionsingularity.com", UPSTASH_REDIS_REST_URL: "https://redis.example", UPSTASH_REDIS_REST_TOKEN: "test-token" },
    fetchImpl: async url => {
      if (url.includes("redis.example")) return Response.json({ result: [0, 0] })
      emailCalls++
      return Response.json({ id: "should_not_send" })
    },
  })
  const result = await invoke(handler, { body: validSubmission, headers: { "idempotency-key": idempotency } })
  assert.equal(result.status, 429)
  assert.equal(emailCalls, 0)
})

test("oversized request and unsupported method are rejected", async () => {
  const handler = createContactHandler()
  const tooLarge = await invoke(handler, { body: validSubmission, headers: { "content-length": "25000", "idempotency-key": idempotency } })
  assert.equal(tooLarge.status, 413)
  const wrongMethod = await invoke(handler, { method: "GET" })
  assert.equal(wrongMethod.status, 405)
  assert.equal(wrongMethod.headers.Allow, "POST")
})
