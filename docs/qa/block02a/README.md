# Block 02A — targeted Hero corrections / 2026-10-22

Status: **DONE — PENDING DIRECTOR REVIEW**. No approval or deployment.

Baseline: synchronized `2f4be5e82302a6cb4bcd5027adbe7ffc3896faca`.
Before/after screenshots use the same Chromium 153, viewport, official fonts and
reduced-motion phase zero. Full HD and notebook pairs are saved here; eight after
captures cover 1920×1080/960/900, 1536×864, 1366×768, 768×1024, 390×844, 320×844.

| Viewport | Closing bottom before | Closing bottom after |
|---|---:|---:|
| 1920×1080 | 1144px | 1080px |
| 1920×960 | 1012.72px | 960px |
| 1920×900 | 948px | 900px |
| 1536×864 | 912px | 864px |
| 1366×768 | 832px | 768px |

The entire closing, including bottom padding, fits the desktop viewport. Flexible
space absorbs height differences; name sizes, copy, actions and navigation stay
unchanged. At widths ≥1100px the frame's minimum height is viewport minus actual
header height. Intrinsic growth is allowed rather than clipping on smaller heights
or enlarged text. Tablet/mobile retain natural scrolling.

The outer top/side rules are removed. A centered 100vw pseudo-element creates the
single closing separator; Hero horizontal clipping contains scrollbar-width excess
without clipping vertical content. Screenshot review confirms edge-to-edge line.

ASCII alpha multiplier increases from .12 to .30 desktop and .16 to .28 compact.
Glyph density, central mask, monochrome color, 36s evolution, frame/DPR caps and
resource lifecycle stay unchanged. The desktop Canvas follows the available Hero
height. Visual review: peripheral ribbon is clearer, identity/copy remain legible.

`results.json` records eight viewport geometries and assertions: no horizontal
overflow, frame border 0px, separator width equals viewport, complete desktop
closing fits. Additional checks passed for desktop CTA hash/focus, mobile menu
open/Escape close, ASCII running/reduced-motion static and no page errors.
`mobile-menu.png` records the unchanged disclosure. One initial QA assertion used
an incorrect expected heading ID (`projects-title`); inspection confirmed the
existing ID is `projects`. The corrected assertion passed; no product fix needed.

- `npm run lint`: FAIL, same four legacy no-unused-vars errors in PrimaryButton,
  SecondaryButton, Contact and Skills; no new errors.
- `npx --no-install eslint src/portfolio2027`: PASS.
- `npm run build`: PASS, 1717 modules; all nine legacy build files SHA-256 identical
  to prior baseline (CSS 69.56kB, JS 237.77kB).
- Explicit isolated preview build: PASS, 38 modules; CSS 13.86kB / gzip 3.44,
  JS 196.75kB / gzip 62.40. Normal production inputs unchanged.
- `git diff --check`: PASS.

Tooling is external to the project, with no dependency/lockfile changes. Test font
requests use cached official CSS/TTF responses obtained through TLS-validated curl
because the browser CA does not trust this environment's proxy. Direct browser
Google Fonts delivery was not revalidated. No physical-device, Safari/Firefox,
screen-reader or production performance claims. Existing font metrics/CLS caveats
from Block 02 remain. Block 03 is **NOT AUTHORIZED**.
