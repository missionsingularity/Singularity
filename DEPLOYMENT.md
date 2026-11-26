# Cloudflare Pages deployment

## Build settings

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: use a supported LTS version compatible with the lockfile.

The Vite configuration uses `site/` as its source root and copies `site/public/` to `dist/`. The output includes the local Framer runtime/assets, service worker mapping, `robots.txt`, `sitemap.xml`, and Cloudflare Pages `_redirects` fallback. No Framer subscription is needed to serve the built site.

## Domain

The canonical URL and sitemap use `https://missionsingularity.com/`. Connect the Cloudflare Pages project to the repository, then configure the custom domain and DNS in Cloudflare. Add `www` only after confirming the preferred redirect/canonical strategy.

## Before production launch

1. Confirm actual login, onboarding, and sales destinations; those template buttons are currently disabled.
2. Confirm usage rights for the provided Framer runtime, fonts, and other supplied media.
3. Connect the Pages project to the `main` branch and run the build from a clean checkout.
4. Confirm Pages serves the service worker and `/assets/` tree correctly, then test the deployed domain with third-party requests blocked.
5. Recheck canonical domain, sitemap, HTTPS, and redirect behavior.

No Cloudflare project, DNS, or production deployment was changed from this workspace.
