# Performance optimization report

Date: 27 November 2026

Project: Singularity corporate website  
Build under review: local Vite production build, served by `vite preview`
Browser: headless Chrome 158.0.8127.88 with Playwright

## Summary

The primary issue found in the homepage was a set of about 1,500 infinite decorative animations. At the top of the page, 1,493 of these were outside the viewport but continued consuming browser work. The page now pauses offscreen infinite animations and resumes them as their visual group approaches the viewport. Entrance and finite animations are left alone. The controller honors `prefers-reduced-motion` by leaving Framer's existing behavior in control.

The implementation is in the homepage HTML so it runs before the Framer bundle initializes. It groups animation targets by a nearby named Framer component (or section), observes those groups with a 250px viewport margin, and pauses/resumes infinite Web Animations API animations. This preserves the existing visual motion when a section is in or near view. The contact CTA helper now processes only added/edited links instead of rescanning the full page after every DOM mutation. Videos keep `preload="none"`; if a visitor starts playback and scrolls away, playback pauses and resumes when the video returns near the viewport. Local font URLs now start at `/assets/`, and the production build emits no unresolved asset warnings.

## Lab measurements

Measurements below came from the production build preview on the same machine and Chrome version. The “before” capture was made before the change; “after” uses the built source with the controller. Network byte counts are transferred encoded bytes, and naturally vary with remote font/image cache and delivery. Frame samples came from a synthetic scripted scroll sweep and are a comparison aid, not a physical display refresh-rate result.

| Measure | Before | After | Notes |
| --- | ---: | ---: | --- |
| Infinite animations paused at page top | 0 | 1,493 of about 1,502 | Both 1440px desktop and 390px mobile emulation |
| Desktop scripted-scroll average frame interval (median of repeated runs) | 88–102 ms | 57–61 ms | Improvement in this synthetic trace; individual frames remain variable |
| Desktop scripted-scroll p95 frame interval (median of repeated runs) | 174–257 ms | about 132 ms | Not a field INP or a display FPS guarantee |
| Desktop long-task duration during scroll sweep | about 2.3–3.6 s | about 2.1 s | Synthetic lab run |
| Mobile emulation long-task duration during scroll sweep (median) | about 1.78 s | about 1.34 s | 390×844, CPU ×4, Slow 4G profile |
| Initial desktop lab LCP | 952 ms | no material change | Local preview, not production RUM |
| Initial mobile lab LCP | 1,464 ms | no material change | 390×844, CPU ×4, Slow 4G profile |
| CLS after scrolling | about 0.001 | about 0.001 | Lab observation |
| Initial desktop image transfer | 2.03 MB / 64 image requests | Same asset strategy | Responsive and lazy-loaded imagery already existed |
| Initial desktop script transfer | 359 KB / 12 script requests | Same application bundles | Controller adds only a small inline script |

The 154 files under `site/public/assets` total about 10.1 MB on disk. Only a subset is fetched near initial load; more are fetched as content is scrolled into view. The homepage video remains `preload="none"` and is not downloaded merely for initial page load. The contact page is a separate entry point (about 3.8 KB JavaScript and 11 KB CSS in the build) and is not loaded as part of the homepage bundle.

On 27 November, a repeat local production-preview trace recorded desktop initial LCP 780 ms (CLS 0.001), and a mobile 390×844 CPU ×4 / Slow 4G trace recorded initial LCP 1,408 ms. The scripted scroll samples were 66.8 ms average / 173.6 ms p95 on desktop, and 60.3 ms average / 118.1 ms p95 on mobile. These samples are variable and remain synthetic lab data; one throttled scroll sweep produced a 0.157 CLS total, while a repeated attribution sweep measured 0.00055. Treat the scrolling CLS measurement as variable and collect field data before drawing a production Core Web Vitals conclusion.

## Responsive and interaction checks

The production preview was opened at widths 2560, 1920, 1440, 1280, 1024, 820, 768, 600, 430, 414, 390, 375, and 360 CSS pixels. Every width had no horizontal document overflow and no uncaught page errors. The mobile menu still exposes Implementation and Contact Us; Pricing is absent. At 390px emulation, offscreen infinite effects were paused at the top, resumed in the industry section, and paused again after returning to the top. No failed resource requests were observed in the final 390px load.

The same 13-width overflow and page-error sweep passed for both the homepage and `/contact/`. Desktop and mobile Playwright smoke checks confirmed the official logo, hero media, loaded web fonts, CTA package query values, mobile navigation, and form validation. Video playback started when brought into view, paused offscreen, and resumed when brought back. The local Vercel-function middleware returned 405 for GET and 422 for an invalid POST; neither check sent a message. The Vercel project environment listing contained no configured variables at this audit, so valid contact submissions remain unavailable until the documented Resend and Upstash variables are configured. No email delivery is claimed.

Before and after viewport captures are in [`verification/performance`](verification/performance/):

- [Before desktop 1440×900](verification/performance/before-desktop-1440x900.png)
- [After desktop 1440×900](verification/performance/after-desktop-1440x900.png)
- [Before mobile 390×844](verification/performance/before-mobile-390x844.png)
- [After mobile 390×844](verification/performance/after-mobile-390x844.png)

The captures confirm the page's structure and styling remain intact. Animation phases differ naturally between captures; animated hero content is not expected to be pixel-identical at arbitrary capture times.

## Build and test

- `npm run build` — passed (`tsc -b` and Vite production build).
- `npm test` — passed, 7/7 API tests.
- 13-width Playwright overflow and page-error sweep — passed.
- 13-width homepage and Contact Us preview sweep — passed, 26 route/viewport combinations.
- Desktop and mobile emulated animation pause/resume checks — passed.
- Final mobile preview load — no failed requests.
- Vite build — zero unresolved asset warnings after converting local font URLs to root-relative paths.

Vite prints unresolved local font asset warnings for several Framer/Geist `.woff2` URLs. Those references are preserved for runtime resolution and the build succeeds. The page provides local/Arial placeholder fonts; no font requests failed in the final emulated mobile load.

## Scope and limitations

These are local lab observations, not field measurements from visitors. No production RUM data, Lighthouse score, Lighthouse TBT, or field INP was available; Lighthouse CLI was not installed in the workspace. No physical Android device was available, so mobile results use browser emulation and CPU/network throttling. The synthetic mobile scroll trace still contains slow frame intervals, so this change reduces offscreen animation work but does not establish that every scroll is smooth on every handset. The implementation does not convert image formats or rewrite the generated Framer bundles, which would carry greater visual/regression risk than the animation issue demonstrated here.
