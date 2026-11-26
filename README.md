# Singularity Corporate Website Migration

## Status

This workspace contains a Vite + React 19 export of the customized Fantom template. It is not a complete static Framer export: no Framer dump, original export manifest, local media directory, blog collection, or route data is present. The untouched working source snapshot is in `original-export-backup/` (dependency installation omitted).

The app currently mounts `src/Home.tsx` on every URL. `src/_PAGES.md` reports only `Home.tsx` and `404.tsx`; the latter is not currently wired as a route. There are no industry or CMS article pages in the supplied source.

## Local development

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

Build output is `dist/`, suitable for Cloudflare Pages static hosting. Cloudflare Pages configuration and deployment notes are in `DEPLOYMENT.md`.

## Migration artifacts

- `PROGRESS.md` tracks completed discovery and remaining work.
- `MIGRATION_REPORT.md` inventories the supplied code and external dependencies.
- `VISUAL_COMPARISON_REPORT.md` records comparison status and limits.
- `DEPLOYMENT.md` documents static hosting setup.

## Important limitations

The existing CSS references Framer-hosted fonts, and React components reference Framer-hosted images and video. Several template links use `framer.link`; profile images use `i.pravatar.cc`. These dependencies must be localized/replaced after reviewing the live site and confirming asset rights. No live comparison or production deployment has been performed. Do not treat the current output as a completed independent migration.
