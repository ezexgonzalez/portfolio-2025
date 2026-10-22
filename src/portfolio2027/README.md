# Portfolio 2027 — isolated development experience

Block 01 foundations approved. Block 02 adds Hero + Global Navigation only.
The 2025 `App.jsx`, `main.jsx`, theme initialization and default HTML entry remain
unchanged. No Selected Work/About/Skills/Contact implementation is included.

## Open locally

```bash
npm ci
npm run dev -- --host 127.0.0.1
```

Open `http://127.0.0.1:5173/src/portfolio2027/preview.html` (use the port Vite prints).
The default `/` remains 2025. This development HTML is not an input of the normal
production build; no public route/router or hosting configuration was added.
Its four future-section anchor targets are explicitly marked temporary.

## Architecture

- `index.js` imports the approved foundation and exports the root class.
- `styles/tokens.css` remains the single token source; no duplicate JS theme.
- `styles/foundation.css` provides scoped reset, reading/container helpers,
  typography families, focus, selection and reduced-motion defaults.
- `components/Hero.jsx` contains the approved Spanish content and semantic h1.
- `components/Navigation.jsx` owns the nonmodal mobile disclosure and actual-width
  navigation measurement. Identity/links are measured again after fonts load.
- `hooks/useAnchorNavigation.js` owns active-section reading, hash/history,
  focus, initial font readiness and scroll offset. It restores document history
  policy and disconnects listeners/observer/RAF on cleanup.
- `components/AmbientAscii.jsx` owns the independent Canvas lifecycle.
- `navigation.js` declares the five approved anchor destinations.
- `styles/experience.css` implements the two approved pieces using native CSS.
- `preview/` owns the React root and development-only document reset/placeholders.
- `preview.html` is an independent HTML document, with Spanish language,
  noindex metadata, optional-font stylesheet and readable HTML fallback.

The preview imports no legacy CSS, `LiquidBackground` or `initTheme()`. Its own
HTML scroll rules do not affect `/`. Native scroll anchoring is disabled only in
this preview document because hash restoration is handled explicitly after fonts.

## Tailwind boundary

The new components use **semantic CSS classes**, not Tailwind utilities. Therefore
`@source not "./portfolio2027"` remains intentional; all actual styles are imported
by the preview entry. `docs/qa` is also excluded from legacy utility discovery to
avoid generating accidental utilities from test text. No Tailwind registration or
new packages are needed. Revisit explicit source registration if future blocks
introduce Tailwind utility strings in this subsystem.

## Figma and responsive contract

Sources: Hero `10:97` through `10:277`, navigation `111:591`/`111:637`, integration
`111:725`, foundations `11:37`, specifications `111:550`, ASCII study `11:203`.
Hero copy omits the retired eyebrow. The navigation integration reference adds a
64/56px header **before** the unchanged Hero flow; it is not subtracted from Hero
height. Whitespace responds to height, text stays intrinsically sized, and shorter
or enlarged-text viewports can scroll. Real source sections do not exist yet.

Colors, families, frame/reading limits, hairlines, rhythm and header tokens reuse
Block 01. The display type scale and width/height adaptations now follow the
approved Hero references. This is not a set of absolutely positioned text layers.

## Typography

`preview.html` links the existing opt-in `styles/fonts.css`. The CSS2 request uses
DM Sans 400/500 at opsz 14, Instrument Serif regular/italic 400 and IBM Plex Mono
400 with `display=swap`. Normal system/Georgia/mono fallbacks remain readable;
large fallback names and enlarged text may reflow instead of clipping.

No font binaries are redistributed. Figma cites OFL 1.1 and official sources:
https://github.com/google/fonts/tree/main/ofl/dmsans,
https://github.com/google/fonts/tree/main/ofl/instrumentserif,
https://github.com/IBM/plex. Future self-hosting needs actual license files and
retained notices. No changes to legacy font requests or preconnects were made.

## ASCII contract

Native Canvas 2D; fixed glyph grid, angular harmonics and a stable central safe
zone. No images, Matrix rain, random particle placement or external runtime.
A nominal 36-second evolution is an engineering interpretation of the static
storyboard, not imported animation tracks (`get_motion_context` returned none).
The extra Hero entrance remains unimplemented because the master marks it Proposed.

Render cadence is capped at 12fps desktop / 8fps compact. Columns cap at 232;
rows cap at 128/96. DPR caps at 1.5/1.25 and backing dimensions at 2560×1600.
ResizeObserver, IntersectionObserver, visibility events and the media preference
control rendering. No timer/RAF loop runs offscreen, hidden or in reduced motion.
Reduced motion draws phase zero; context failure leaves all semantic content
available. StrictMode cleanup cancels scheduling and disconnects resources.

## Verification

See `docs/CURRENT.md`, `docs/qa/block02/README.md`, saved browser screenshots and
`docs/qa/block02/results.json`. The reproducible QA harness uses separately supplied
Playwright/Chromium tooling; it is not a project dependency. Standard production
build and isolated preview build are validated separately. Browser results do not
constitute approval or release authorization. Block 03 remains unauthorized.
