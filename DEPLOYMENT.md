# Vercel deployment

## Build settings

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

Vite uses `site/` as its source root and copies `site/public/` to `dist/`. The build contains the existing homepage, `/contact`, local Framer assets, `robots.txt`, and `sitemap.xml`. The root `api/contact.js` deploys as a Vercel serverless function at `POST /api/contact`. `vercel.json` maps only `/contact` and `/contact/` to the contact page entry; it does not add a broad SPA fallback and leaves unknown paths as 404s.

## Existing project and domain

The existing Vercel project serves `https://missionsingularity.vercel.app/`; the canonical production URL is `https://missionsingularity.com/`. Keep using the existing project and DNS configuration. No DNS changes are part of this deployment.

## Contact email configuration

Add these server-side variables to the existing Vercel project and redeploy:

- `RESEND_API_KEY`: Resend API key.
- `CONTACT_FROM_EMAIL`: sender address on a domain verified with Resend.
- `CONTACT_TO_EMAIL`: exactly `projects@missionsingularity.com`.
- `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`: Upstash Redis REST credentials for the distributed sliding-window rate limit.

`.env.example` lists placeholders only. Never commit live credentials or expose them through `VITE_` variables. The endpoint fails closed if email delivery or distributed rate-limit configuration is missing. It sends only to the fixed Singularity inbox, uses the submitter's address as Reply-To, and passes an idempotency key to Resend.

The form shows success only after Resend accepts the message. Provider acceptance does not confirm final inbox delivery; verify Resend events and check the company inbox separately. The application does not send a real test message as part of build or automated tests.

## Checks

Run `npm test` for mocked endpoint tests and `npm run build` before deployment. No DNS or email provider changes are made from this workspace.
