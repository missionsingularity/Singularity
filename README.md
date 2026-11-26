# Singularity corporate website

The active site is based on the supplied customized Framer export in `site/`. Vite builds the local HTML, Framer runtime modules, fonts, images, video, service worker, and SEO files into `dist/` for the existing Vercel project. The legacy React/TypeScript reconstruction remains in `src/` for history but is not the active page entry.

## Local development

- `npm ci` (Node.js 22.x)
- `npm run dev`
- `npm run build`
- `npm run preview`

Vercel uses `npm run build` and `dist/` with `main` as the production branch. See [DEPLOYMENT.md](DEPLOYMENT.md) for the existing project and contact API configuration.

## Project notes

- Supplied design recordings, exact export, and original assets remain outside the deployable source tree and are ignored by Git.
- [DEPLOYMENT.md](DEPLOYMENT.md) documents the Vercel-only deployment settings and server-side email/rate-limit configuration.
- The mobile nav label is Implementation. The official supplied Singularity symbol is used in the site header and footer.
- The supplied home page CTAs route to the Contact Us inquiry page; `/api/contact` remains the Vercel contact function.
- See [PROGRESS.md](PROGRESS.md), [MIGRATION_REPORT.md](MIGRATION_REPORT.md), and [VISUAL_COMPARISON_REPORT.md](VISUAL_COMPARISON_REPORT.md) for status and verification evidence.
