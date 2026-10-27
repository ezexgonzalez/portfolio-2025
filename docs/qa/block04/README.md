# Block 04 — About / Story and Skills / Capabilities

Actual Chromium153 browser captures, DPR1. `about-{width}.png` and
`skills-{width}.png` show complete intrinsic sections at 1920/1536/1366/768/390/320.
`results.json` records geometry, paragraphs, chronology, fonts and navigation.

| Width | About | Skills |
|---|---:|---:|
| 1920 | 1818 | 1038 |
| 1536 | 1682 | 985 |
| 1366 | 1640 | 979 |
| 768 | 1910 | 1039 |
| 390 | 2231 | 1231 |
| 320 | 2381 | 1305 |

The 1920/768/390 heights match Figma's final frames without fixed heights.
Narrative copy/order/emphasis and Skills descriptions/stacks were checked against
high-fidelity Figma context, not rewritten. Browser font metrics/rasterization and
390px's existing 24.375px gutter can differ slightly from Figma's 24px gutter.
Intermediate reading/type adaptations follow About's notes; Skills uses the same
existing breakpoint family and preserves the two-column editorial hierarchy.

Figma file: `qhsoutNaKIPSqO31AEttRT`.
About production `61:508`, frames `68:523/576/629`, notes `68:682`.
Skills production `89:556`, frames `90:556/634/712`.
The screenshot returned with each design context was inspected alongside browser
captures. No static image/SVG asset is part of these text-only compositions.
`figma-reference.json` retains extracted text and full motion-matrix cell content.
Master `92:556` was sparse, so child rows `104:781/807/833/859/885/911/937` were
requested in full. Every optional entrance/emphasis/hover row is **Proposed**:
About and Skills intentionally remain static, readable, selectable information.

`before-hero/work-*` use HEAD `3246d7af4a8ec566dfce6638322128707d47f515` in a
separate directory, with the existing node_modules linked. `after-hero/work-*`
use the completed integration. `regression.json` records pixel-identical Hero and
visible Selected Work regions at all six widths. A single line at Y760 in the
1366 viewport belongs to the retired About technical placeholder, outside Selected
Work; its removal is expected. No approved section was modified to hide it.
`build-comparison.json` records SHA-256 identity of all nine normal 2025 artifacts.

`verify-construction.mjs` reuses the Block03B checks with a new evidence directory
and two added interruption/cleanup assertions. `construction/after.json` records
all A–E states, 4200/3000ms timing, cover continuity, actual Canvas/frame height,
completion, no replay, navbar/passive scroll/mobile menu, keyboard, direct hash,
Back, reduced motion and layout interruption, stopped draws, Canvas failure and
no-JS. Two phase screenshots are retained; redundant static captures are omitted.
A first run was interrupted by Vite reloading while the no-JS HTML was edited;
rerunning the completed source passed. Product behavior was not changed for QA.

Other checks: semantic h1/h2/h3/list, all desktop nav destinations and mobile menu,
heading focus, offsets80/72px, 200% root text at 320px, font-failure/no-JS fallback,
no horizontal overflow, static cursor and loaded font faces. Normal tested contexts
have no console errors/page errors. Text contrast versus #080808:17.42/8.72/4.87:1.
This is root-text reflow testing, not a claim about browser toolbar zoom or screen
reader behavior. Safari/Firefox, physical devices, actual font delivery/CLS and
assistive-technology review remain release checks.

## Reproduction

Run at repo root with external Playwright/Chromium tooling and official font files:

```bash
export P27_PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs
export P27_CHROMIUM_MODULE=/absolute/path/to/@sparticuz/chromium/build/index.js
export P27_CHROMIUM_EXECUTABLE=/absolute/path/to/chromium
export P27_FONT_CSS=/absolute/path/to/official-google-fonts.css
export P27_FONT_CACHE=/absolute/path/to/font-cache
P27_BASELINE_ROOT=/absolute/path/to/baseline node docs/qa/block04/verify.mjs
node docs/qa/block04/verify.mjs
node docs/qa/block04/verify-construction.mjs after
npm run lint
npx --no-install eslint src/portfolio2027
npm run build
node --input-type=module -e 'import{build}from"vite";await build({build:{rollupOptions:{input:"src/portfolio2027/preview.html"},outDir:"/tmp/p27-04-preview-build",emptyOutDir:true}})'
```

QA requests Google Fonts CSS2 for DM Sans opsz14 weights400/500, IBM Plex Mono400
and Instrument Serif regular/italic400, display=swap. Matching official TTFs are
obtained by curl with valid TLS and fulfilled in the browser with CORS, because
of the proxy's browser CA limitation. No certificate/security bypass, fonts
redistribution or application package changes. Existing runtime tooling stays
outside the repository. Lint reports the four known legacy no-unused-vars errors;
scoped lint and both builds pass. Standard build remains the 2025 entry.
