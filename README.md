# Singularity corporate website

The active site is based on the supplied customized Framer export in `site/`. Vite builds the local HTML, Framer runtime modules, fonts, images, video, service worker, and SEO files into `dist/` for Cloudflare Pages. The legacy React/TypeScript reconstruction remains in `src/` for history but is not the active page entry.

## Local development

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

The Cloudflare Pages build command is `npm run build`; output directory is `dist/`. See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment setup and open items.

## Project notes

- Supplied design recordings, exact export, and original assets remain outside the deployable source tree and are ignored by Git.
- The mobile nav label is Implementation. The official supplied Singularity symbol is used in the site header and footer.
- Template login and sales CTAs are visibly preserved but disabled until confirmed Singularity destinations are provided.
- See [PROGRESS.md](PROGRESS.md), [MIGRATION_REPORT.md](MIGRATION_REPORT.md), and [VISUAL_COMPARISON_REPORT.md](VISUAL_COMPARISON_REPORT.md) for status and verification evidence.
