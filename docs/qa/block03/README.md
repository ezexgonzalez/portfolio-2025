# Block 03 — Selected Work + UI Construction

2026-10-22 · **DONE — PENDING DIRECTOR REVIEW**. No production approval.
Baseline: `e6bf62ea669b6212f5bf905c7eb4a5811f8d7490`.

## Static comparison with Figma

Sources inspected: production 30:898/1237/1350/1463/1576/1689; specifications
35:818; PLAY 45:7422/10156, reduced 45:11220; motion B/C/D 45:6096/6470/6906.
No images, mockups or exported design screenshots are used as product assets.

| Width | Figma natural height | Browser natural height | Frame / columns |
|---|---:|---:|---|
| 1920 | 1072 | 1072 | 1600 / 720 + 160 + 720 |
| 1536 | 924 | 924 | 1344 / ~624 + 96 + ~624 |
| 1366 | 868 | 868 | 1222 / ~563 + 96 + ~563 |
| 768 | 1252 | 1252 | 672 / one column |
| 390 | 1178 | 1178 | 341.25 / one column |
| 320 | 1348 | 1348 | 280 / one column |

These matching heights are measured outcomes, not CSS constraints. Desktop rows
use subgrid and intrinsic content growth. Typography sizes/line heights/tracking,
order, fine rules, metadata and links follow retrieved specifications. The existing
approved gutter token yields 24.375px at 390 (Figma 24px). The earlier DM Sans web
metric differences remain visible in title widths; fonts were not distorted or
changed. This is not a pixel-perfect declaration.

Six `selected-work-*.png` files show the full natural section; heading focus was
blurred solely for static reference captures. Keyboard focus is separately tested.
`hero-continuity-1920.png` is pixel-identical to Block 02A's approved Full HD after
capture (ImageChops difference has no bounding box). `continuity-1920.png` shows
Hero closing and section entrance. Hero, navigation, ASCII and their styles/hooks
are unchanged in source. About/Skills/Contact remain technical placeholders.

## Five-phase evidence

`motion-1920-1-points.png` through `motion-1920-5-final.png`, with equivalent five
390px captures, are screenshots of the actual runtime. Controlled time is used
only to capture exact phases; it does not render a separate demonstration. Small
scroll increments bring the section into view; no scroll lock is applied. Full-page
capture was unsuitable because it emits resize events, correctly cancelling the
effect. Viewport captures preserve real geometry and show the visible portion.

A: bounded measured point field. B: progressively traced rails, dividers and module
bounds. C: contours of actual loaded typography/wrapped lines and action bounds.
D: one vertical frontier replaces construction with the real functional DOM.
E: overlay removed, exact unmasked static section. Native Canvas contours/dashes
are a responsive interpretation, not Figma vector glyphs or a copied vendor layer.
The sweep stays within the measured frame/rails. No opacity-only entrance.

Desktop 2400ms; tablet/mobile below 1024px 1400ms; reduced motion immediate final.
The mobile PLAY tracks retrieved span 2s including hold, so they were normalized
to the brief's proposed 1.4s active sequence. No prototype looping is reproduced.

## Executed checks

`results.json`: Chromium 153.0.8010.0, **21 passed check groups**, zero page errors
in the monitored normal context. Includes six responsive widths, native 52px link
targets, no overflow, 200% root text at 320, hash entry/focus/80px header offset,
focus outline/hover, all five phases, no repeat on return, focus/internal-anchor/
preference/resize/fast-scroll/section-exit cancellations, mobile navigation and
closure, simulated hidden document, normal completion, active React unmount,
Canvas failure and no-JavaScript fallback. No overlays or further construction
draws during the 200ms post-completion/unmount observations.

A 320px enlarged-text heading overflow was found and fixed with intrinsic wrapping.
Early QA selectors/module-import interop were corrected to actual DOM/Vite exports;
these were harness errors. Phase capture clocks are isolated from performance
sampling, which uses a fresh browser context and real time.

| JS measurement (DPR 1, no CPU throttling) | 1920px | 390px |
|---|---:|---:|
| Measure + create layer + initial draw | 4.00ms | 2.20ms |
| Active construction callbacks | 144 | 73 |
| Mean callback | 0.24ms | 0.18ms |
| p95 callback | 0.40ms | 0.30ms |
| Maximum callback | 1.30ms | 0.40ms |
| Element geometry reads in setup | 16 | 15 |
| Additional element reads after setup sample | 0 | 0 |
| Final overlays / later draws | 0 / 0 | 0 / 0 |

Sampling isolates callbacks that draw the construction Canvas, excluding Hero RAF.
Setup uses one layout snapshot plus Range reads for actual words. Scroll cancellation
may read section bounds; no geometry is rebuilt per scroll/animation frame. These
are JS submission times, **not GPU raster/compositing, frame-drop, battery or real
mobile-device benchmarks**. Canvas DPR/backing caps are code limits, not a physical
DPR test here. No prolonged-memory or screen-reader audit is claimed.

## Destinations

TLS-validated curl followed each destination and received HTTP 200 on 2026-10-22:

- https://ezewebstudio.com.ar/ — title `Diseño y desarrollo de landing pages | Eze Web Studio`, canonical matches this domain.
- https://mern-task-manager-iota-teal.vercel.app/ — title `Task Manager · Liquid Glass`.
- https://github.com/ezexgonzalez/eze-web-studio-V2 — matching GitHub repository title.
- https://github.com/ezexgonzalez/mern-task-manager — matching GitHub repository title.

This verifies public HTTP destinations and identity, not authentication/CRUD flows
inside external apps. No invented studio URL or portfolio-domain substitution.

## Build and scope

- `npm run lint`: same four pre-existing no-unused-vars errors (PrimaryButton,
  SecondaryButton, Contact, Skills); no new errors.
- `npx --no-install eslint src/portfolio2027`: PASS.
- `npm run build`: PASS. All nine files match a separate build from the synchronized
  initial HEAD by SHA-256; original production entry unchanged.
- Explicit preview build: PASS, 42 modules (build sizes recorded in CURRENT.md).
- `git diff --check` and harness syntax: PASS.

No application dependencies or lockfile changes. The browser executable/tooling and
font binaries remain outside the repository. Reference feasibility/licence decision
is recorded in [TECHNICAL_ASSESSMENT.md](TECHNICAL_ASSESSMENT.md).

## Reproduce scoped browser checks

Run from repository root with external Playwright/Chromium paths, compatible launch
arguments, official provider CSS and its downloaded font files (do not redistribute):

```bash
P27_PLAYWRIGHT_MODULE=/absolute/path/playwright/index.mjs \
P27_CHROMIUM_EXECUTABLE=/absolute/path/chromium \
P27_CHROMIUM_ARGS='["--no-sandbox"]' \
P27_FONT_CSS=/absolute/path/provider.css \
P27_FONT_CACHE=/absolute/path/font-cache \
node docs/qa/block03/verify.mjs
```

This environment's browser CA cannot validate the outbound font proxy; official
CSS/TTF responses fetched by curl with normal TLS validation were supplied only to
QA requests, preserving CORS. No certificate/web-security bypass. Direct Google
Fonts delivery/WOFF2, Safari/Firefox, real touch devices, assistive tech and production
CLS remain release checks. Blocks 04–06 are **NOT AUTHORIZED**; no merge/deploy.
