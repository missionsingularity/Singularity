# Migration report

## Active implementation

The active site is `site/index.html` plus the locally supplied Framer runtime, styles, fonts, images, video, and `f2c-sw.js` mapping under `site/public/assets/`. Vite remains the build tool and emits the independent static site to `dist/`. The previous `src/` React/TypeScript reconstruction is retained but is no longer the page entry. No new framework was introduced.

The export contains the complete single-page layout and runtime behavior. The build preserves original asset URLs in the public tree because the export?s local service worker maps Framer asset requests to those local copies. The local site was tested with off-site requests blocked; page rendering and interactions continued to work.

## Singularity-specific changes

- Replaced the export?s generic title/description/canonical/social metadata and search-index metadata with Singularity and the configured production domain.
- Used the supplied official black and white Singularity SVG symbols in corporate logo placements.
- Changed the mobile navigation item from Pricing to Implementation in the Framer navigation runtime. The pricing section and its plan content remain intact.
- Tuned the mobile header arrangement and hero subtitle width to match the recording. Restored same-page section navigation for Features, Capabilities, Implementation, and Security; the mobile menu closes after choosing a destination.
- Localized seven testimonial portraits. Removed template badge hiding rules that also hid legitimate buttons, while continuing to suppress the promotional badge.
- Updated the relevant home page calls to action to route to the Contact Us inquiry page; the contact API is served by the existing Vercel function.
- Kept the supplied recordings, original assets, and exact export outside the production source and excluded them from Git.

## Runtime and dependency inventory

- Build/runtime platform: Node.js, Vite 6, React 19/React runtime modules embedded by the export.
- The shipped page bundles its Framer runtime and animation modules locally. It needs no paid Framer hosting or server-side API to render.
- Images, fonts, and the short video are served from the local static asset tree. Browser checks with non-local requests blocked found no render-breaking request failures.
- NPM dependencies remain in `package.json`/lockfile for the Vite project; no new runtime package was added for this migration.

## Open items

Asset rights for the provided runtime, fonts, and media were not verified. The supplied corporate logo was used as provided. The reference set establishes a single landing page; no blog/CMS data, or login backend was supplied. The Contact Us form is implemented separately and uses the Vercel API function.
