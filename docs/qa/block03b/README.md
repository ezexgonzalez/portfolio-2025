# Block 03B evidence

Desktop spacing only, starting at 1024px. Motion source and settings unchanged.
`before.json` measures e854666; `after.json` measures the final CSS. PNGs are
actual viewport captures: before/after at four desktop sizes and 768/390/320.
`construction-notebook` captures points; `construction-skeleton-notebook` captures
the evolving measured geometry. Complete runtime sequence and cover samples are
recorded in after.json, without synthetic phase rendering or a virtual clock.

All lower links and the grid's bottom rule fit the four desktop viewports. The
existing anchor starts at Y80; final padding extends 2/6.5/12px beyond the first
three viewports, documented honestly in CURRENT.md. No forced clipping.

Run from repo root, using existing external QA tooling (no project installs):

```bash
export P27_PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs
export P27_CHROMIUM_MODULE=/absolute/path/to/@sparticuz/chromium/build/index.js
export P27_CHROMIUM_EXECUTABLE=/absolute/path/to/chromium
export P27_FONT_CSS=/absolute/path/to/official-google-fonts.css
export P27_FONT_CACHE=/absolute/path/to/font-cache
node docs/qa/block03b/verify.mjs after
# Baseline: detached source directory of e854666 with existing node_modules linked
P27_BASELINE_ROOT=/absolute/path/to/baseline node docs/qa/block03b/verify.mjs before
```

Font CSS: Google Fonts CSS2, DM Sans opsz14 weights400/500, IBM Plex Mono400,
Instrument Serif regular/italic400, display=swap. Matching official TTFs obtained
with curl and valid TLS are fulfilled with CORS in the browser only, due to proxy
CA limitations. Fonts are not redistributed. Chromium153 headless, DPR1; these
checks do not establish Safari/Firefox, physical-device or real font-delivery/CLS
results. Hero, 768/390/320 captures were pixel-identical before/after.
