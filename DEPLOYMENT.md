# Cloudflare Pages deployment

## Build settings

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: use a currently supported LTS version compatible with the lockfile.

The `public/_redirects` file is copied into `dist/` by Vite and provides an SPA fallback. `public/robots.txt` and `public/sitemap.xml` are also published as static files.

## Domain

Add the Cloudflare Pages custom domain `missionsingularity.com` in the Pages project, then follow Cloudflare's DNS instructions. Enable the apex and `www` hostnames only if the DNS and canonical redirect strategy is confirmed. Cloudflare provisions HTTPS for an active custom domain.

## Before production

1. Confirm the full route list and ensure every intended direct URL resolves after refresh.
2. Localize permitted media/fonts and remove or document remaining third-party requests.
3. Replace template links with confirmed Singularity destinations.
4. Run visual and functional comparisons, including with Framer domains blocked.
5. Verify sitemap entries and canonical metadata against the final route inventory.
6. Connect a Git repository or upload the built `dist/` directory through Cloudflare Pages.

No Cloudflare account, DNS change, or deployment was performed as part of this workspace change.
