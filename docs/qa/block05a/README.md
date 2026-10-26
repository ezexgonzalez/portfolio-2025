# Block05A — pointer construction, clean history, Skills motion

Starting HEAD `1fa67057111fd952125dec8999a1baecda0ec330`, authorized feature branch.
No deployment. Native Canvas engine, approved final layouts and other sections
remain unchanged. Source and detailed findings are recorded in CURRENT section24.

## Evidence

- `results.json`: main Chromium153 checks, six final widths1920/1536/1366/768/390/320,
  three-destination Back/Forward/state/query preservation, no duplicate history,
  clean URLs, reload from About/Projects to Hero and new complete construction,
  explicit deep hashes, mouse/touch on blank/text/project links during B/C/D,
  keyboard/programmatic focus/reduced motion, native project navigation, real CSS
  Skills samples/video/hover/no replay, mobile menu and no-JS fallback.
- `access.json`: keyboard clean navigation, Skills anchor skip, active construction
  reflow cleanup, active Skills reduced motion, root text200%/320px, isolated
  missing-observer fallback and active unmount, Canvas-null fail-open.
- `skills-1920.mp4`, `skills-390.mp4`: actual CDP screencasts with real timestamps,
  encoded with ffmpeg. No virtual clock or synthetic animation renderer. Early,
  middle and final viewport PNGs show the corresponding runtime; `skills-hover.png`
  records precise-hover contrast. No text opacity or fake controls are introduced.
- `construction-click-mouse/touch.png`: actual materialization after repeated
  interactions. QA keeps the page visible by preventing external navigation only
  in its own window listener, after recording that the product did not prevent
  activation. A separate test allows actual document navigation to an intercepted
  destination, proving the link is not blocked. Default native touch feedback can
  appear in the screenshot; no new project styling was added.
- `after-skills-*.png`: six final responsive views. `regression.json`:30 pairs
  compared against a separate initial-HEAD source directory.27 are pixel-identical.
  Three desktop Contact captures differ in only203/120/24 glyph-edge pixels at
 1920/1536/1366, maximum channel delta1/255. Those before/after pairs are retained;
  no Contact source, geometry or text changed. Identical pairs are omitted rather
  than committed twice; the harness regenerates them. Existing approved reference
  captures remain in block04/05 evidence.
- `build-comparison.json`: all nine standard2025 artifacts identical by SHA-256.
- `figma-reference.json`: master row cells and new brief timings. Figma's recursive
  native motion query for90:556 returned nodes[], so implementation follows the
  newly authorized05A brief/matrix, not nonexistent exported keyframes.

## Implemented behavior

Construction press/focus permission is tied to the exact native pointer target,
consumed once and cleared by click/task boundary, keyboard, pointercancel and
cleanup; a bounded500ms pointerup fallback handles gestures without click. Normal
presses do not finish/restart/accelerate the4200/3000ms A–E build. Accessible focus,
keyboard, errors, offscreen/reflow and reduced motion retain fail-open behavior.

Internal anchor hrefs remain native `#id`; handled navigation merges destination
under `history.state.portfolio2027.destination`, preserving other state/query,
with clean URL. Back/Forward uses stored destinations. A fresh document ignores
prior destination state for startup: no explicit hash means Hero/rearm, while an
explicit valid URL hash is honored. Browser restoration is manual before paint;
initial font alignment is invalidated if navigation already occurred. Initial Hero
is not focused merely by loading the page. No-JS still uses native hash fallback.

Skills title6→0px/300ms desktop,4→0px/220ms compact; rules550ms with0/110/220ms
stagger desktop,450ms simultaneous compact. Number hover180ms ease-out, precise
hover only. One observer, CSS transforms, no per-frame production measurements or
RAF loop. Animationend restores original borders;2s watchdogs fail open. Text is
fully visible throughout, no layout/height changes and no replay on scroll back.
Anchors/focus, deep hash, reduced motion and setup errors show static final state.

The first test helper treated same-document hash navigation as a new external
load; it now opens a fresh document when testing load semantics. An in-progress
run was interrupted by HMR while editing the hook; the completed source was tested
again. The initial Hero focus outline discovered during regression was removed.
These were corrected without modifying the approved Hero/Contact designs.

## Reproduction

Run from repository root, with existing external tools and official font fixtures:

```bash
export P27_PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs
export P27_CHROMIUM_MODULE=/absolute/path/to/@sparticuz/chromium/build/index.js
export P27_CHROMIUM_EXECUTABLE=/absolute/path/to/chromium
export P27_FONT_CSS=/absolute/path/to/official-google-fonts.css
export P27_FONT_CACHE=/absolute/path/to/font-cache
P27_BASELINE_ROOT=/absolute/path/to/source-of-1fa6705 node docs/qa/block05a/verify.mjs
node docs/qa/block05a/verify.mjs
node docs/qa/block05a/verify-access.mjs
npm run lint
npx --no-install eslint src/portfolio2027
npm run build
node --input-type=module -e 'import{build}from"vite";await build({build:{rollupOptions:{input:"src/portfolio2027/preview.html"},outDir:"/tmp/p27-05a-preview-build",emptyOutDir:true}})'
```

Vite/browser run in one process for localhost reachability. Capture sampling is QA
instrumentation only. Videos require external ffmpeg. Baseline uses existing linked
node_modules, without installing project packages. Font CSS/TTFs were obtained from
official Google/IBM sources with valid TLS and fulfilled in QA because of browser
proxy CA limitations; no security/certificate bypass or font redistribution.

Normal contexts report no page/console errors. Root text enlargement is not a
claim of real browser toolbar zoom or screen reader testing. Safari/Firefox,
physical devices, actual font delivery/CLS and previous release checks remain
pending. Four legacy lint errors remain separate; scoped lint and both builds pass.
No libraries were installed. Block06 and publication remain unauthorized.
