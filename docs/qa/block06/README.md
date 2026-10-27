# Bloque06 — auditoría final

**DONE — PENDING DIRECTOR REVIEW.** 2026-10-26. Rama
`feature/portfolio-2027-foundation`; inicio `982396eb6de28caf75ff710056fb7c3267da0fc4`.
Corrección: `c4e93604418f60150ff5947df9d32a4e7a95600b`. Cierre documental: commit
`docs: record Block 06 audit and unexecuted release plan` (historial de este archivo).
**Publicación todavía no habilitada:** quedan riesgos de herramientas y controles
manuales pendientes. No se modificaron main, dominio, hosting ni entrada2025.

## A — Visual

Comparación nueva contra contextos/renders Figma `102:559` y `102:775`, más navbar
`111:591`; referencias de sección y evidencia01–05A revisadas. Los cinco lenguajes,
copy, tipografías, jerarquías, columnas, fechas y divisores se conservan.

- [Desktop real completo](full-1920.png), 1920×6015; [Figma](figma-desktop.png),
  referencia1920×6085 (render reducido). Los70px de diferencia son la compactación
  aprobada03B de Projects1072→1002, no una nueva discrepancia a corregir.
- [Mobile real completo](full-390.png),390×6367; [Figma](figma-mobile.png),390×6311.
  Los56px extra corresponden al header integrado. El encuadre del Hero retirado en
  02A y el año dinámico2026 del footer sustituyen correctamente sus antecedentes.
- Captura mobile antes/después pixel-idéntica; desktop solo38 píxeles cambian1/255
  en bordes de Hablemos., sin cambio de geometría/fuentes/Contact. Estadísticas y
  hashes en `regression.json`; no justifican tocar tipografía.
- Defecto real: con texto400% en320px, controles/textos excedían su contenedor;
  documento432px y elementos del Hero recortados. [Antes](text-400-before-header.png)
  y [después](text-400-after-header.png), recortes reales del navegador.
  `reflow-before.json` / `reflow-after.json` registran mediciones.

## B — Funcional y responsive

Build explícito49 módulos, servido como archivos compilados, sin HMR. Chromium153;
1920×1080/900,1536×864,1366×768,768×1024,390×844,320×844, más831/832/1023/1024px.
Sin overflow normal; alturas intrínsecas conservadas (tabla en `results.json`).

PASS: About→Projects→Contact con URL limpia, Back/Forward, reload a Hero y nueva
construcción; cinco hashes explícitos conservados; foco/offset80/72px (Contact
puede limitarse por el final del documento). #hero inicial vuelve arriba sin
foco no solicitado. Touch, menú, Escape, destinos, teclado y skip link funcionan.

A–E completa con4200/3000ms, CTA/navbar/scroll gradual/mobile/reload, clic ordinario,
una sola vez, cubierta antes de final, altura estable y Canvas retirado. Teclado,
hash, reduced motion y Canvas nulo muestran final accesible. Scroll instantáneo
que salta hasta el centro termina quick-entry, alternativa aprobada; no se cambió.
Skills entra una vez con scroll real, texto visible y sin cambios de altura.

ASCII mantiene frecuencia cap12/8, safe zone y apariencia aprobados. Cero dibujos
en Contact o reduced motion; evento de visibilidad oculta **simulado** pausa dibujo.
Desmontaje nativo de React durante Hero/construcción/Skills: cero RAF pendiente,
cero dibujos posteriores, sin Canvas ni errores. `lifecycle.mjs` expone la raíz
solo en la respuesta JS del servidor diagnóstico; bundle en disco intacto.

Seis destinos web/repos: HTTP200 con TLS verificado (`links.json`). LinkedIn999;
inspección real de navegador muestra authwall/verificación (`linkedin-access.png`),
no confirma identidad/disponibilidad del perfil. No se inició sesión.
CV descargado realmente:47841bytes idénticos al original, nombre correcto;
SHA256 `322c600b3c5300231a24e7c6299d6be3ee346fb72e0a9300ce2c8a3a169d12c6`.
Mailto con activación nativa mouse/Enter/touch sin preventDefault del producto;
enlaces externos con noopener/noreferrer conservados. Apertura de
cliente de correo real y vigencia del CV: pendientes, sin afirmar envío.

## C — Accesibilidad

Axe: cero infracciones a1920/768/390/320; no equivale a certificación.
Contraste sobre Canvas figura **incomplete**, no PASS automático: verificación
manual de legibilidad/safe zone y paleta en contraste suficiente para texto
(#7D7D7D sobre#080808 supera4,5:1; las líneas son decoración estructural).
Un h1, un main, jerarquía h2/h3, nombres y enlaces nativos; foco2px/offset4px.
Acciones Projects52px; controles y Contact al menos44px en tamaño normal.

Reflow200/400% de **texto raíz** a320px: PASS tras corrección; menú ampliado también
legible y desplazable, sin comprimir tipografías. Forced-colors: contenido disponible;
no es una evaluación completa de alto contraste. Sin JS: historia, cinco destinos,
proyectos, capacidades y Contact disponibles con anchors nativos.

**No probado:** zoom real de interfaz200/400%, lector de pantalla, Safari/Firefox
ni dispositivos físicos. Intento de extensión chrome.tabs.setZoom no disponible en
este headless_shell (no inició service worker); no se sustituyó por pinch ni se
presentó texto raíz como zoom real. Revisar estos controles antes de publicación.

## D — Performance y fuentes

Método: Lighthouse externo, bundle comprimido gzip servido en loopback y fuentes
Google reales vía proxy del entorno con CA confiada. Sin fixtures de fuentes,
ignoreHTTPSErrors ni flags que desactiven TLS. Desktop preset1350×940,40ms/10Mbps,
CPU1×; mobile412×823,150ms/1,6Mbps simulados y CPU4×. No dispositivo físico/CWV de campo.
Valores finales y configuración completos: `lighthouse-summary.json`,
`lighthouse-{desktop,mobile}.json` y `metrics.json`.

| Laboratorio final | Desktop | Mobile |
|---|---:|---:|
| Performance | N/A | 97 |
| Accessibility / Best Practices | 100 / 100 | 100 / 100 |
| SEO (preview noindex) | 50 | 50 |
| LCP | 535ms | 1572ms |
| CLS | 0,016 | 0,098 |
| TBT | 0ms | 0ms |

Lighthouse13.5.0. Desktop no generó screenshots para Speed Index en intentos con
1920px y preset desktop; no se inventa el score agregado. Las métricas disponibles
se conservan con esa limitación. El último mobile dio97; una corrida anterior96
con CLS0,108 ilustra variación, no un cambio de performance atribuido al CSS.

Sesión nativa390px sin throttling añadido: LCP5136ms/CLS0,075, atravesando la latencia
del proxy; retraso intencional900ms por solicitud:1084ms/0,075, sin fuentes100ms/
0,025. LCP puede marcar el fallback antes del swap; CLS usa la **ventana máxima**,
no la suma de shifts espaciados. No comparar estas corridas como si la red fuese
idéntica. En corridas previas con retraso hubo CLS0,11–0,125.

ASCII final:11fps desktop/8 mobile; TaskDuration en4s0,960/0,249s (incluye dibujo,
trabajo de página e instrumentación). Cero dibujos en Contact. Dos long tasks de
53/55ms en recorrido desktop; ninguno compacto. EventTiming: máximo observado32ms,
6 eventos de interacción por contexto; es un proxy de latencia de laboratorio,
no INP de campo ni estimación completa del percentil de usuarios.
Heap CDP antes/después:25,2→33,3MB desktop y24,2→6,9MB compacto; sin GC forzada,
varía con la recolección y los contextos de QA. No se afirma ausencia universal de
fugas por una sola muestra; el desmontaje se comprobó también funcionalmente.

Preview final: JS217,54kB (gzip68,73), CSS39,46kB (gzip7,10). Lighthouse registra
aproximadamente140KiB totales y tres fuentes; detalle de solicitudes en JSON.


DM Sans400/500, IBM Plex Mono400 e Instrument Serif400 italic cargan con swap;
regular serif no usado no exige descarga. Tres WOFF2 efectivos,62716bytes de cuerpo (61,25KiB); DM comparte recurso entre ambos pesos. No se copiaron
ni redistribuyeron fuentes. Camino predeterminado de este contenedor fallaba por
red; proxy+CA permitió medir entrega real. No se atribuye ese fallo al producto.
La sesión fría incluye latencia variable del proxy; no extrapolarla a producción.

Cargas deliberadamente lentas y sin fuentes mantienen contenido legible. Hay CLS
del swap, incluido surname fallback que ocupa más líneas; requiere validación de
la entrega final y valorar fallback métrico/self-hosting con licencias en un cambio
acotado aprobado, sin cambiar las familias. No se eligió una estrategia nueva.

Optimización ASCII **descartada**: caché geométrica produjo43% menos tiempo medio
por render desktop en microbenchmark, pero media compacto peor y sin mejora
consistente del TaskDuration real. `ascii-comparison.json` y candidato `.txt`
permiten reproducir la decisión.48 fases/tamaños dan comandos y píxeles idénticos
con contexto de lectura estable; se conservó el componente original en producción.
El primer harness cambiaba backend al leer Canvas: se corrigió usando
willReadFrequently solo en QA; no se relajó una discrepancia del producto.

## E — Técnica

ESLint2027 PASS. Lint global FAIL por los mismos4 no-unused-vars legacy:
PrimaryButton:2, SecondaryButton:2, Contact:6, Skills:12 (`lint.txt`). No se ocultaron.
Build estándar PASS1717 módulos; preview PASS49. Nueve artefactos2025 idénticos por
SHA256 al checkout inicial (`build-comparison.json`). Package/lock/PDF intactos;
sin dependencias de aplicación nuevas ni imports rotos. Búsqueda dirigida de
claves privadas/tokens conocidos no encontró coincidencias; no es una auditoría
exhaustiva de secretos. Consola/errores de página normales sin fallos registrados.

Solo3 CSS de aplicación cambiaron: experience, selected-work y skills-capabilities.
Permiten wrap y restricción de ancho del skip/menu/acciones, índice y párrafo;
sin cambios de copy, tamaños normales, motion, anchors o grids aprobados.
README2027 documenta el cierre; raíces documentales y esta carpeta aportan evidencia.

`npm audit` del lockfile existente:15 paquetes señalados (1critical/11high/2moderate/
1low). Tar7.4.3 llega por Tailwind/oxide; Vite7.1.3/PostCSS8.5.6/Rollup4.49.0 son
herramientas de build. No se infiere explotación del bundle estático por su score.
El advisory Vite requiere exposición del dev server; tar afecta extracción de
archivos no confiables. Fuentes primarias revisadas: [Vite](https://github.com/vitejs/vite/security/advisories/GHSA-p9ff-h696-f583),
[tar](https://github.com/isaacs/node-tar/security/advisories/GHSA-23hp-3jrh-7fpw).
Sin actualizaciones automáticas: resolver/aceptar aplicabilidad en un cambio de
mantenimiento autorizado, con pruebas del build y el sitio2025. Evidencia completa
`npm-audit.json` / `dependency-paths.txt`.

## F — SEO y activación futura

Preview española, noindex/nofollow conservado; falta metadata pública intencional.
SEO50 no autoriza quitar noindex. Entrada2025 actual conserva lang=en/title genérico;
no se modificó. Canonical/description/OG/Twitter/favicons aprobados, robots/sitemap,
404 real y preview social son tareas del candidato de release. Ninguna verificación
local puede confirmar sus respuestas finales en hosting sin ese gate.
[Plan de migración/rollback, sin ejecutar](MIGRATION.md).

## G — Hallazgos y gate

| Prioridad | Hallazgo | Estado / acción |
|---|---|---|
| P0 | No se detectó bloqueo fundamental en los recorridos probados | No implica ausencia universal de defectos |
| P1 | Reflow320px/texto400%: overflow432 y contenido/control recortado | CORREGIDO;320px, wraps intrínsecos y menú legible; normal sin cambio perceptible |
| P1 | Avisos preexistentes en cadena de build | PENDIENTE: evaluar aplicabilidad y actualización dirigida/aceptación antes de release |
| P1 / gate | Entrega tipográfica/CLS final y controles manuales de accesibilidad/navegadores | PENDIENTE antes de afirmar preparación de producción |
| P2 | CLS de swap en laboratorio/variación del fallback | Registrado con datos; sin rediseño ni cambio especulativo de fuentes |
| Pendiente dueño | LinkedIn tras authwall, vigenciaCV, cliente mailto real | No declarar PASS sin comprobación |
| Herramienta | Lighthouse desktop sin Speed Index; zoom/AT no disponibles | Puntuación N/A y pruebas pendientes explícitas |

Conclusión: fidelidad e interacción verificadas en Chromium emulado; corrección
acotada validada. **Todavía no se declara listo para producción.** Dirección debe
resolver/aceptar pendientes y autorizar por separado cualquier fase de publicación.

## Reproducción y límites del harness

Node24.22.1; Playwright/Sparticuz Chromium externos al repo; Lighthouse/axe instalados
solo en `/tmp/p27-06-tools`, sin tocar package/lock. Preparar con Vite un outDir
independiente, input `src/portfolio2027/preview.html`, y configurar:

```bash
export P27_PREVIEW_BUILD=/tmp/p27-06-build
export P27_PLAYWRIGHT_MODULE=/opt/codex/runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs
export P27_CHROMIUM_MODULE=/tmp/portfolio-2027-browser/node_modules/@sparticuz/chromium/build/index.js
export P27_CHROMIUM_EXECUTABLE=/tmp/p27-chromium-runtime/chromium
export P27_TRUST_HOME=/tmp/p27-browser-home
export P27_AXE_SOURCE=/tmp/p27-06-tools/node_modules/axe-core/axe.min.js
export P27_LIGHTHOUSE_MODULE=/tmp/p27-06-tools/node_modules/lighthouse/core/index.js
export P27_LIGHTHOUSE_DESKTOP_CONFIG=/tmp/p27-06-tools/node_modules/lighthouse/core/config/desktop-config.js
```

`HTTPS_PROXY` es provisto por el entorno. `trust-proxy.py` prepara una base NSS
exclusiva del navegador de QA con las CA del entorno, cuando sea necesario;
no instala certificados en el producto. Ejecutar `audit.mjs`, `reflow.mjs`,
`lifecycle.mjs`, `lighthouse.mjs` y `summarize.py` en ese orden y sin otros benchmarks
concurrentes. Cada script inicia servidor y navegador en el mismo proceso/entorno
para que loopback funcione. Tiempos reales, sin reloj simulado. `ascii.mjs` compara
el candidato descartado `.txt`, no el componente entregado.

Ajustes del harness: #hero inicial no debe recibir foco artificial; el salto
instantáneo manual no se confunde con scroll gradual; se comprobó el menú400%
además del scrollWidth global. Reintentos y pruebas fallidas intermedias motivaron
estas correcciones y la de reflow; solo resultados finales están marcados PASS.
Los archivos temporales y rutas absolutas de herramientas se deben reconstruir
si el entorno expira. No se necesita desplegar para repetir esta auditoría.
