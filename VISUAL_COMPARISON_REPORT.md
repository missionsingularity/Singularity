# Visual comparison report

## Result

The production Vite preview was compared visually with the supplied recordings at their recorded page sizes: 1200?811 desktop and 396?824 mobile. The exported desktop hero matches the supplied frame closely in its nav pill, wordmark/logo, heading, supporting copy, buttons, spacing, and animated media frame. Mobile tuning restores the recording?s centered wordmark/right-side menu arrangement, three-line supporting copy, and matching hero vertical rhythm. The mobile menu now reads Implementation.

No numeric pixel-difference score is claimed: the screen recordings contain scrolling, UI chrome, and animated media, so a static pixel score would be misleading. The screenshots below are direct captures of the production preview; source recordings and extracted comparison frames remain in the separate ignored reference directory.

## Capture evidence

- [Desktop production preview, 1200?811](verification/screenshots/desktop-1200x811.png)
- [Mobile production preview, 396?824](verification/screenshots/mobile-396x824.png)
- [Mobile menu open, 396?824](verification/screenshots/mobile-menu-open-396x824.png)

## Behavior and responsive checks

- Desktop and mobile `scrollWidth` matched the viewport width: 1200 and 396 pixels respectively.
- Desktop section navigation updates the hash and scrolls to its section. The mobile menu opened and closed; selecting Implementation scrolls to the implementation section and closes the menu. Pricing is absent from the visible menu.
- The Standard/Express plan toggle changed its selected state. FAQ expansion and both testimonial navigation controls changed their states/content.
- All 37 desktop images and 39 mobile images loaded after scrolling and forcing lazy images eager. The four-second local video reached ready state and played when brought into view.
- Non-local requests were blocked during preview checks. There were no page errors or console errors in those runs.

Capture environment: Chrome, Vite production preview, local `dist/`. The checked source references are in the sibling `design-reference/` and `framer-exact-export/` directories; those references were left unchanged and are not deployed.
