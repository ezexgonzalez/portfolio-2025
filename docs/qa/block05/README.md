# Block 05 — Contact / Closing + complete isolated preview

Real Chromium153/DPR1 captures at1920/1536/1366/768/390/320. Contact follows final
Figma A Editorial Sign-off (`89:557`, `90:790/829/868`) and the literal brief.
No decorative entry motion. State study `92:983` and Contact matrix rows
`104:963` through `104:1223` were read in full; proposed movements were omitted.
`figma-reference.json` retains extracted copy and matrix cells. No image/SVG asset
belongs to the text-only design.

| Width | Contact height | Headline / email |
|---|---:|---:|
| 1920 | 1077 | 240 /44 |
| 1536 | 888.20 | 192 /35.2 |
| 1366 | 869 | 176 /32 |
| 768 | 839 | 136 /32 |
| 390 | 827 | 88 /24 |
| 320 | 813 | 76 /22 |

`contact-*.png`: complete section extracted at its measured DOM bounds from an
actual full-page browser screenshot; this avoids a partial-viewport capture
clipping the footer paint at390px. No design mockup or altered page styling.
`full-1920.png` (1920×6015) and `full-390.png` (390×6367) show the complete
experience, with all section heights checked stable before/after capture.
`junction-*.png` inspect all four transitions at both widths. `focus-contact.png`
and `text-200-320.png` demonstrate keyboard focus and root-text reflow.

The1920/768/390 section heights match Figma without fixed heights. Current year
2026 intentionally differs from Figma's2027 placeholder; the2031 clock test proves
it is dynamic. No-JS HTML omits the year to avoid a stale hardcoded calendar value.
The existing390 gutter24.375px and web font rasterization can differ slightly
from Figma. At768×1024 Contact's839px height makes document-bottom clamping leave
its top at185px; no artificial spacer was introduced to force the72px anchor offset.

## Results and limits

- `results.json`: six viewports, exact copy/URIs,44px targets, complete email,
  five actual React sections/one main, no placeholders, noindex/nofollow,
  normal console/page errors[], navigation/click/mobile disclosure, active state,
  heading focus, direct hash, Back/Forward, keyboard order/focus, native downloads,
  social URL dispatch, hover/pressed, root text200%, full-page geometry, continuous
  scroll, touch download, dynamic year, no-JS and mouse/keyboard/touch mailto.
- `runtime.json`: ASCII draws while Hero is visible, then pauses at Contact with
  zero additional offscreen draws; actual email text selection;320px font failure.
- `construction/after.json`: reused approved03B/04 checks: A–E,4200/3000ms,
  pre-final coverage, measured Canvas/frame size, natural completion, no replay,
  navbar/passive scroll/mobile menu, direct hash/keyboard, reduced-motion/layout
  interruption, cleanup/stopped draws, Canvas failure and no-JS. Two actual phase
  PNGs retained; redundant static construction captures omitted.
- `regression.json`:24 before/after pairs (Hero/Projects/About/Skills at six
  widths) compared pixel-identical to HEAD657e315. Scripts reproduce those PNGs;
  identical pairs are not committed again. Approved prior captures remain in
  block04 evidence. No prior section source was changed.
- `build-comparison.json`: SHA-256 identity of all nine normal2025 artifacts
  versus a separate build of initial HEAD657e315. Preview builds separately.
- `links.json`: real curl/TLS HTTP results. GitHub profile and all four project
  destinations200. LinkedIn999 from automated probe; actual profile availability
  requires manual check. It is not declared live or broken on this evidence.
- CV: HTTP200, application/pdf, %PDF-,47841bytes; real click/Enter/touch downloads
  match original bytes and filename. File is unchanged; content currency pending.
- Social browser activations are intercepted after native URL dispatch, so their
  mock response is not a real-service availability test; use links.json separately.
- mailto dispatch is correct and not prevented; headless has no external email
  application. No claim of launching a real mail client or sending email.

Global lint: four known legacy no-unused-vars errors (PrimaryButton, SecondaryButton,
Contact and Skills). Scoped2027 lint, three script syntax checks, both builds and
diff whitespace pass. No application dependencies or legacy UI changes.

The no-JS check originally expected five section elements; existing fallback Hero
is an h1 plus content, followed by four section elements. The corrected assertion
checks all five destinations, without rewriting the approved Hero.

Font CSS/TTFs are official Google/IBM families fetched with valid curl TLS and
fulfilled only in QA (browser proxy CA limitation), with CORS and no certificate
or web-security bypass. Fonts are not redistributed. Safari/Firefox, physical
devices, screen readers, actual font delivery/CLS, browser toolbar zoom, CV currency,
LinkedIn manual access and real external mail client remain release checks.

## Reproduction

Run from repository root with external tools/fonts, no project package installation:

```bash
export P27_PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs
export P27_CHROMIUM_MODULE=/absolute/path/to/@sparticuz/chromium/build/index.js
export P27_CHROMIUM_EXECUTABLE=/absolute/path/to/chromium
export P27_FONT_CSS=/absolute/path/to/official-google-fonts.css
export P27_FONT_CACHE=/absolute/path/to/font-cache
# Baseline: source of657e315, existing node_modules linked
P27_BASELINE_ROOT=/absolute/path/to/baseline node docs/qa/block05/verify.mjs
node docs/qa/block05/verify.mjs
node docs/qa/block05/verify-construction.mjs after
node docs/qa/block05/verify-runtime.mjs
npm run lint
npx --no-install eslint src/portfolio2027
npm run build
node --input-type=module -e 'import{build}from"vite";await build({build:{rollupOptions:{input:"src/portfolio2027/preview.html"},outDir:"/tmp/p27-05-preview-build",emptyOutDir:true}})'
```

The main harness requires Pillow for cropping only. It starts Vite and browser in
one process so localhost is reachable. Official fonts: DM Sans opsz14 weights400/500,
IBM Plex Mono400, Instrument Serif regular/italic400, CSS2 display=swap. Baseline
and after PNGs regenerate on rerun; compare with Pillow ImageChops before omitting
duplicate captures. No production path, metadata, domain, hosting or deployment
is changed. Block06 remains unauthorized.
