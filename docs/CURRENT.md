# CURRENT — Portfolio 2027

> **Bitácora operativa / fuente de verdad del estado actual.** Consultar este archivo antes de cualquier tarea. La dirección creativa y las decisiones históricas viven en [PORTFOLIO_2027_DIRECTION.md](PORTFOLIO_2027_DIRECTION.md). Las reglas de agentes están en [../AGENTS.md](../AGENTS.md).
>
> **Actualización inicial:** 2026-10-21. Este documento debe actualizarse al finalizar **cada bloque** y siempre que cambie una aprobación, bloqueo o rama.

## 1. Estado actual

- **Proyecto:** nuevo portfolio personal de Ezequiel Gonzalez.
- **Repositorio:** https://github.com/ezexgonzalez/portfolio-2025
- **Dominio de publicación futuro:** https://ezegonzalez.dev/ (el mismo de la web actual).
- **Rama activa publicada en repositorio:** `main` (merge Portfolio 2027 PR #14). Historial de implementación en `feature/portfolio-2027-foundation`; candidato de activación en `release/portfolio-2027-activation`.
- **`main`:** contiene Portfolio 2027 tras aprobación y merge explícitos del propietario el 2026-10-26 (hora Argentina; commit del merge `3c35010ee6e5a33aa2c23e66f3826f8ce00cfd36`). La versión 2025 permanece en el historial para rollback.
- **Fase:** Portfolio 2027 integrado a `main` con nueva entrada raíz y despliegue Vercel reportado `success`; pendiente smoke final de URL pública y seguimiento de hallazgos de auditoría06.
- **Bloque activo:** **POST-RELEASE / Portfolio 2027 + social Open Graph card verification**.
- **Estado actual del Bloque 01:** **APPROVED — DIRECTOR REVIEW COMPLETED** (2026-10-21).
- **Estado del Bloque 03:** **APPROVED — DIRECTOR REVIEW COMPLETED** (2026-10-22). Selected Work, UI Construction 03A y ajuste de altura 03B cerrados. No reabrir.
- **Estado del Bloque 03A:** **APPROVED — OWNER VISUAL REVIEW** (2026-10-22). Zero-flash, claridad y ritmo de construcción aceptados; entrega en sección 16.
- **Siguiente hito:** comprobar raíz pública `https://ezegonzalez.dev/` desde navegador real, identidad 2027, navegación, motion, fuentes, CV, HTTPS, robots/sitemap, 404 HTTP y modo mobile. Seguir pendientes de dependencias (15 avisos), verificación LinkedIn/mailto, CV vigente, lector de pantalla/Safari/Firefox. No declarar que esos puntos están probados hasta ver evidencia.
- **Estado del Bloque 02A:** **APPROVED — DIRECTOR REVIEW COMPLETED** (2026-10-22). Entrega en sección 11, ver revisión en sección 12.
- **Estado del Bloque 02:** **APPROVED — DIRECTOR REVIEW COMPLETED** (2026-10-22), incluidas las correcciones del 02A. Preview local probada en Chromium, no desplegada; riesgos tipográficos/CLS y dispositivos físicos pendientes antes de release.

## 2. Diseño seleccionado (NO reabrir)

Archivo: https://www.figma.com/design/qhsoutNaKIPSqO31AEttRT/Portfolio-2027-%E2%80%94-Hero-Exploration-01

| Orden | Sección | Dirección seleccionada | Figma de producción |
|---|---|---|---|
| 01 | Hero | B — Editorial Inmersiva | `10:97` desktop; contenedor responsive `102:557` |
| 02 | Selected Work | A — Structural Grid | `30:836`; construcción UI `45:5809` |
| 03 | About / Story | B — Story & Timeline | `68:523`, `68:576`, `68:629` |
| 04 | Skills / Capabilities | A — Technical Index | `89:556` |
| 05 | Contact / Closing | A — Editorial Sign-off | `89:557` |
| Global | Navigation | Una navegación editorial sticky | `111:547`; especificaciones `111:550` |

Otras referencias: foundations `11:37`; master interaction/motion `92:556`; auditoría full-site desktop `102:559`, mobile `102:775`; hallazgos `104:1287`.

**Decisión posterior:** eliminar del Hero el microtexto superior `PORTFOLIO / 2027` sin sustituirlo ni recolocar el resto. Pass 12B **verificado en ocho frames responsive de Hero, vistas integrales y contexto de navegación** el 2026-10-21. No confundir este texto con nombres de archivos, encabezados de documentación o copyright.

**Identidad visual:** `#080808` fondo, `#EFEFEF` texto principal, `#ABABAB` secundario, `#7D7D7D` auxiliar, `#2A2A2A` líneas. Tipografías: DM Sans, Instrument Serif, IBM Plex Mono. Sin glass, tarjetas genéricas, gradientes arbitrarios, glows ni imágenes de proyectos.

**Contenido:** solo Eze Web Studio y Task Manager en Selected Work. `Portfolio 2025` no figura como proyecto destacado. Nombre siempre `Ezequiel Gonzalez` sin tildes.

## 3. BLOQUE 01 — TECHNICAL FOUNDATION (COMPLETADO)

**Responsable:** Frontend Integration Engineer.  
**Estado:** `APPROVED — DIRECTOR REVIEW COMPLETED`. Evidencia en secciones 7 y 8.
**Objetivo:** preparar una base técnica mantenible para reproducir Figma en React/Vite/Tailwind v4, **sin implementar todavía ninguna de las cinco secciones, navbar ni animaciones**. Mantener el sitio 2025 funcionando mientras la nueva arquitectura se introduce progresivamente.

### 3A. Antes de tocar código (obligatorio)

1. Verificar acceso a `ezexgonzalez/portfolio-2025`, rama real y HEAD; no asumir que el contexto local está sincronizado. Trabajar exclusivamente sobre `feature/portfolio-2027-foundation` o una rama derivada **expresamente aprobada**; nunca `main`.
2. Leer `AGENTS.md`, este `docs/CURRENT.md`, `docs/PORTFOLIO_2027_DIRECTION.md`, `README.md` y `package.json`.
3. Auditar brevemente `src/App.jsx`, `src/main.jsx`, `src/index.css`, estructura `src/components`, `src/sections`, `public/`, configuración de Tailwind 4, ESLint y Vite. Identificar acoplamientos existentes (`LiquidBackground`, tema light/dark, estilos y scroll antiguos) antes de cambiar nada.
4. Obtener una línea de base reproducible: `npm ci`, `npm run lint`, `npm run build` cuando el entorno lo permita; registrar resultados y fallos **previos** separadamente de los causados por cambios.
5. Proponer y documentar de forma compacta la estructura mínima de foundation antes de implementarla. No usar un plan como autorización para modificar módulos ajenos al alcance.

### 3B. Implementación AUTORIZADA de este bloque

- Preparar una base **aislada / con namespace 2027** para tokens y estilos sin sobrescribir de inmediato el tema 2025 ni afectar la web que hoy funciona. Puede ser un módulo y hoja CSS específicos bajo `src/`, con nombres coherentes, evitando abstracciones prematuras.
- Definir tokens reutilizables basados en Figma: colores, tipografías, escalas iniciales, anchos máximos, ritmo de márgenes (1920/1536/1366/768/390/320), hairlines y tamaños de header (64 px escritorio / 56 px compacto). Documentar cuáles son definitivos y cuáles se ajustarán durante integración.
- Preparar estrategia de carga de **DM Sans, Instrument Serif e IBM Plex Mono** con fallback, `font-display` y atención a coste de red/CLS. No redistribuir archivos de fuentes sin comprobar derechos; no añadir bibliotecas para conseguir un tipo de letra.
- Establecer reset/base visual, utilidades semánticas de contenedores y estilos globales accesibles (focus visible, selección, preferencia de movimiento reducido) **sin cambiar todavía el montaje del sitio 2025 ni afectar globalmente sus estilos**.
- Preparar una arquitectura limpia y liviana para futuros layout/sections/navigation, por ejemplo una carpeta de subsistema 2027 y convenciones claras, sin construir la interfaz definitiva ni generar componentes vacíos innecesarios.
- Registrar las decisiones de arquitectura y cualquier riesgo técnico real. Preferir CSS y Tailwind existentes; **no instalar paquetes nuevos** en Bloque 01.

**Si algo no puede aislarse sin modificar visualmente la UI actual, documentarlo y esperar autorización**. No sustituir `App.jsx` por una pantalla vacía ni ocultar el proyecto 2025 como atajo.

### 3C. Fuera de alcance, expresamente prohibido en Bloque 01

- Implementar Hero, ASCII procedural, Selected Work, About, Skills o Contact.
- Implementar navegación sticky/mobile, anclas o estados de menú.
- Implementar el efecto UI Construction, motion avanzado, librerías de animación o prototipos WebGL/Canvas.
- Rediseñar textos, sustituir branding, actualizar proyectos sin verificación, borrar componentes legacy o hacer una refactorización general.
- Modificar el sitio publicado, tocar `main`, hacer merge, release o deploy.
- Modificar el dominio, sus DNS o configuraciones de hosting.
- Instalar dependencias sin una aprobación posterior y específica.

### 3D. Evidencia y criterios de aceptación

El bloque se considera **propuesto para revisión**, no automáticamente aprobado, cuando:

1. La base 2027 está organizada, tipada por convención (proyecto JSX), con tokens y fuentes listos para reutilizar y una relación clara con Figma.
2. El sitio 2025 sigue montando de la misma manera en la rama de trabajo; no hay cambios visuales accidentales.
3. Las diferencias están acotadas al foundation y documentación necesaria. No hay paquetes nuevos ni UI/animaciones adelantadas.
4. `npm run lint` y `npm run build` se ejecutaron tras cambios cuando hubo entorno disponible; se aporta salida/estado real. Si falla algo previo, se distingue de regresiones.
5. El informe cita archivos afectados, rama, commit/HEAD, decisiones, verificaciones efectivas y pendientes.
6. **Se actualiza este `docs/CURRENT.md`** con resultados, nueva fase y próximo paso **antes de cerrar la tarea**.
7. El agente se detiene a esperar validación del Director General. **No iniciar Bloque 02 automáticamente.**

### 3E. Primera entrega del ingeniero

Informe corto con:
- Rama y HEAD inicial/final.
- Auditoría breve del estado 2025 y riesgos.
- Arquitectura/tokens/tipografía de foundation resultantes.
- Diff / archivos modificados.
- `lint` y `build` con resultados reales.
- Pendientes y propuesta de siguiente bloque, sin ejecutarlo.
- Actualización de `docs/CURRENT.md` y commit asociado.

## 4. Hoja de ruta, con compuertas

| Bloque | Alcance | Estado |
|---|---|---|
| **01** | **Technical Foundation**: estructura, tokens, fuentes, base CSS, verificación | **APPROVED — DIRECTOR REVIEW COMPLETED** |
| **02** | Hero + Global Navigation: preview aislada y fidelidad responsive | **APPROVED — DIRECTOR REVIEW COMPLETED** |
| **02A** | Hero tuning: altura desktop, quitar encuadre, reforzar ASCII | **APPROVED — DIRECTOR REVIEW COMPLETED** |
| **03** | Selected Work: dos proyectos, responsive y UI Construction | **APPROVED — DIRECTOR REVIEW COMPLETED** |
| **04** | About + Skills: narrativa, índice técnico y responsive | **APPROVED — DIRECTOR REVIEW COMPLETED** |
| **05** | Contact + Closing Integration: enlaces, CV, footer, continuidad y preview | **APPROVED — DIRECTOR REVIEW COMPLETED** |
| **06** | Final Visual QA & Optimization: Figma, responsive, a11y, motion, performance, SEO/readiness | **DONE — PENDING DIRECTOR REVIEW** |

Cada bloque necesita un brief específico y aprobación antes de pasar al siguiente. Un backlog NO es autorización para ejecutar trabajo futuro.

## 5. Pendientes / decisiones que no hay que olvidar

- **Figma Pass 12B:** rótulo superior `PORTFOLIO / 2027` eliminado y verificado en Hero responsive y vistas derivadas (2026-10-21).
- **Eze Web Studio:** la URL pública de ese proyecto es independiente de `ezegonzalez.dev`, que corresponde al portfolio. No inventar la URL del proyecto.
- **CV:** archivo `public/cv-ezequiel-gonzalez.pdf` existe en el repo, ruta prevista `/cv-ezequiel-gonzalez.pdf`. Revisar vigencia y descarga en navegador antes de publicación.
- **Task Manager:** validar demo y repo antes de publicar los enlaces.
- **Motion:** referencia `Jakubantalik/transitions.dev` (`skeleton`) investigada pero no instalada; hacer prueba de fidelidad, coste, accesibilidad, una sola ejecución y limpieza en su bloque autorizado.
- **Navegación:** implementada y probada en preview Chromium (sección 10). Pendiente QA de otros navegadores, lector de pantalla y dispositivos físicos antes de publicación.
- **Planilla Figma:** distinguir motion `Approved`, `Proposed` y `Pending`; lo no aprobado no debe implementarse como requisito definitivo.
- **SEO y calidad:** verificar `lang=es`, metadata, CV, fuentes, rendimiento, teclado, zoom, reduced-motion y overflow en QA; no afirmar validación sin ejecutarla.

## 6. Protocolo de continuidad (OBLIGATORIO)

Al **empezar cada bloque**:
1. Leer esta bitácora y los documentos de dirección; verificar HEAD/branch y confirmar el bloque activo.
2. Comprobar si el código coincide con el estado anotado; si no, registrar la diferencia antes de modificar.
3. Ejecutar solamente el alcance autorizado.

Al **terminar cada bloque**:
1. Actualizar fecha, estado, archivos, commit, evidencia real (lint/build/tests/capturas), decisiones y riesgos.
2. Marcar el bloque como `DONE — PENDING DIRECTOR REVIEW`; **no marcarlo `APPROVED` por cuenta propia**.
3. Indicar explícitamente qué tarea sigue bloqueada y qué necesita aprobación.
4. Confirmar que `main`/producción no fue alterada.

Si el agente no puede actualizar este archivo por permisos, debe entregar el diff completo necesario y aclarar que **la bitácora quedó sin persistir**. Nunca afirmar que se guardó si no existe commit.

## 7. Entrega Bloque 01 — 2026-10-21

**Estado:** `DONE — PENDING DIRECTOR REVIEW`. No equivale a aprobación.

### Git y alcance real

- Rama: `feature/portfolio-2027-foundation`.
- HEAD inicial sincronizado por clone y contrastado con GitHub:
  `9816810d83c2fe66ba8a8108dc8cf460c99786bc`.
- Commit de implementación: `c973a458e5e223e729e7361d9c67d49e2c50a8de`
  (`feat: add isolated Portfolio 2027 technical foundation`).
- Cierre documental: commit posterior `docs: record Block 01 results and director review gate`.
  Su SHA se obtiene del historial de esta bitácora; no se incluye un SHA circular
  dentro del mismo commit que lo genera.
- No se modificó `main`, no se hizo merge ni se ejecutó deploy o cambio de hosting.
  No se instalaron dependencias nuevas ni cambió el lockfile.

### Auditoría y decisión de arquitectura

`App.jsx` monta Header y cinco secciones dentro de `LiquidBackground`, con
IntersectionObserver y scroll imperativo. `main.jsx` importa CSS legacy e invoca
`initTheme()`. `index.css` define Tailwind v4, light/dark y scroll a nivel documento.
Vite utiliza plugins React/Tailwind; ESLint cubre JS/JSX. `App.css` sigue sin importar.
`public/` conserva CV e imágenes. No se tocaron contenido, secciones ni assets.

Plan adoptado: subsistema CSS/JS aislado en `src/portfolio2027`, entrada opt-in,
tokens bajo `.portfolio-2027`, fuentes opcionales, sin montaje ni componentes
vacíos. No se duplicó el mapa de tokens en React y Tailwind. Se añade solo una
exclusión `@source not` al CSS legacy: el primer build detectó que el escáner de
Tailwind recogía utilidades de archivos nuevos aun sin importarlos. Tras excluir
la carpeta, todos los artefactos del build estándar coinciden por SHA-256 con
la línea de base. La exclusión deberá revisarse al autorizar el montaje futuro.

### Archivos modificados / creados

- `src/portfolio2027/index.js`: entrada opt-in, export de clase raíz, import CSS.
- `src/portfolio2027/styles/tokens.css`: paleta, fuentes, espacios, anchos,
  gutters fluidos, hairline, focus y dimensiones de header (sin navbar).
- `src/portfolio2027/styles/foundation.css`: reset bajo namespace, contenedor,
  lectura, familias, selección, focus y política defensiva de reduced motion.
- `src/portfolio2027/styles/fonts.css`: carga opcional CSS2 con `display=swap`.
- `src/portfolio2027/README.md`: contrato React/CSS, procedencia, límites y riesgos.
- `src/index.css`: únicamente exclusión del escaneo Tailwind de la carpeta 2027.
- `docs/CURRENT.md`, `README.md`, `AGENTS.md`: estado y continuidad del bloque.

### Tokens y tipografía

Se consultaron en modo lectura Figma `11:37` y `111:550`: paleta confirmada,
DM Sans 400/500 con `opsz` 14, Instrument Serif regular/italic 400 e IBM Plex Mono
400; marco 1600, contenido 900, lectura 640 y cierre 770px; márgenes de referencia
160/96/72/48/24/20px, hairline 1px y header 64/56px.

Gutters interpolados y escala inicial de lectura son propuestas de ingeniería,
ajustables durante integración; no constituyen fidelidad visual de las secciones.
A 390px el gutter inicial es 24.375px. Se usan rem y límites de lectura fluidos;
no hay tamaños de nombre del Hero, layouts finales, ASCII o animaciones.

La URL preparada de Google Fonts respondió correctamente con las tres familias,
pesos y estilos esperados y `font-display: swap`. Fallbacks de sistema/Georgia/mono.
No se importa `fonts.css` todavía ni se añadieron preloads/preconnects. No se
redistribuyen fuentes. Figma cita OFL 1.1 y fuentes oficiales; cualquier futuro
self-host requiere comprobar y conservar los archivos de licencia reales.

### Verificaciones efectivamente ejecutadas

Entorno: React/React DOM 19.1.1, Vite 7.1.3, Tailwind y plugin Vite 4.1.12,
ESLint 9.34.0 (versiones resueltas por el lockfile).

| Comprobación | Línea de base | Resultado posterior |
|---|---|---|
| `npm ci --no-audit --no-fund` | OK, 181 paquetes del lockfile | Sin cambios de dependencias/lockfile |
| `npm run lint` | FAIL, 4 errores legacy | Mismos 4 errores, sin errores nuevos |
| `npx --no-install eslint src/portfolio2027/index.js` | No existía | PASS |
| `npm run build` | PASS | PASS, mismos nombres/hashes y tamaños |
| Vite JS API, library mode ES, entrada 2027 | No existía | PASS, JS y CSS aislados compilados |
| SHA-256 de todos los archivos `dist/` | Manifest guardado temporalmente | 9/9 archivos idénticos |
| `git diff --check` | Sin cambios | PASS |
| Solicitud real Google Fonts CSS2 | No requerida en legacy | HTTP OK; cinco faces con `swap` |

Errores previos de lint: `PrimaryButton.jsx:2` y `SecondaryButton.jsx:2`
(`Component`); `Contact.jsx:6` y `Skills.jsx:12` (`Icon`), todos `no-unused-vars`.
No se corrigieron porque son código legacy fuera de alcance. npm también advierte
por la configuración ambiental `http-proxy`, sin impedir instalación/build.

Build legacy: CSS 69.56 kB / gzip 10.66 kB; JS 237.77 kB / gzip 71.37 kB;
1717 módulos. Foundation aislado: CSS 3.23 kB / gzip 1.19 kB y JS 0.07 kB.
La compilación aislada se produjo en `/tmp`, no en archivos de producción.

### Límites y revisión pendiente

- Sin capturas ni pruebas de navegador: foundation no está montado. La evidencia
  de no regresión es identidad binaria de los artefactos, no una auditoría visual.
- CLS, transferencia real de WOFF2, zoom, focus y reduced-motion con UI real quedan
  pendientes de integración. `swap` por sí solo no evita cambios de métricas.
- Hay reglas globales legacy de scroll/tema que deberán desacoplarse al autorizar
  el montaje 2027. Este bloque no las neutraliza ni cambia `App`/`main`.
- El espécimen histórico de foundations sigue mostrando `PORTFOLIO / 2027`;
  Pass 12B en los Hero finales **no se verificó** y sigue pendiente antes de Hero.
- **Bloque 02 NO AUTORIZADO.** Dirección debe revisar el foundation y emitir el
  próximo brief. No se implementó ninguna sección, navegación o motion.

**Último evento registrado:** Bloque 01 implementado y validado dentro de sus
límites; entrega pendiente de revisión del Director General.


## 8. Revisión del Director General — 2026-10-21

**Decisión: BLOQUE 01 APROBADO.** Se autoriza continuar con la **preparación del brief** del Bloque 02, NO con su implementación automática.

### Evidencia de revisión independiente del informe del ingeniero

- Inspección directa de GitHub: historial de la rama con dos commits posteriores a la base `9816810d83c2fe66ba8a8108dc8cf460c99786bc`, implementación `c973a458e5e223e729e7361d9c67d49e2c50a8de` y actualización documental `8ce2f09303c266d3f3460e8d7b3c3c3bc51e4abb`.
- Diff contrastado: nuevos `src/portfolio2027/index.js`, `styles/tokens.css`, `styles/foundation.css`, `styles/fonts.css`, `src/portfolio2027/README.md`; `src/index.css` agrega temporalmente una exclusión de escaneo `@source not "./portfolio2027"`. Resto del diff son documentos.
- Inspección de código: sin importación de foundation desde `App.jsx` o `main.jsx`, sin secciones ni navegación implementadas, sin dependencias nuevas. `package.json` y lockfile sin cambios.
- Comparación con `main`: la rama está ahead por 22 y behind por 0; ningún código de UI 2025 fue sustituido. **Esto no equivale a una prueba de navegador.**
- El ingeniero registró `npm ci` OK; build estándar y build aislado OK; artefactos de build estándar 9/9 idénticos por SHA-256; `npm run lint` conserva los cuatro errores legacy `no-unused-vars` sin nuevos errores. **Los comandos y hashes son resultados reportados por el ingeniero y revisados documentalmente; el Director no pudo reejecutarlos en este entorno sin acceso de red al repositorio.**
- La nueva implementación es correctamente opt-in, con estilos bajo `.portfolio-2027` y fuente de tokens CSS única. Figma no fue revalidado visualmente durante este bloque, porque la UI 2027 todavía no está montada.

### Condiciones técnicas para el siguiente bloque

1. **Muy importante:** `@source not "./portfolio2027"` evita que Tailwind detecte utilidades escritas en la futura carpeta. Al comenzar el montaje de React, revisar/eliminar esta exclusión o registrar fuentes explícitas de forma compatible con el build. Una foundation no montada puede compilar correctamente sin garantizar que las utilidades futuras lo hagan.
2. La fuente `fonts.css` es opt-in y aún no se carga. Validar tipografía real, peso, carga, line wrapping y CLS en navegador al montar el Hero.
3. La hoja legacy conserva `html` scroll y `initTheme()`; no montar la nueva UI dentro de `LiquidBackground` ni conservar comportamientos globales contradictorios sin revisión. Mantener `main` estable.
4. El reset y motion reducido en `.portfolio-2027` son bases, no evidencia de comportamiento accesible del menú o motion real. Validar en el bloque correspondiente.
5. `npm run lint` tiene cuatro errores **preexistentes**: registrar baseline y evitar regresiones; un resultado de lint global verde requiere una tarea de corrección legacy autorizada o una migración que retire esos archivos.
6. Confirmar la eliminación del eyebrow visible `PORTFOLIO / 2027` en Figma antes de implementar la copia final del Hero; no usar el espécimen histórico.

### Gate vigente

- **Bloque 01:** aprobado.
- **Bloque 02:** todavía NO autorizado; depende de un nuevo brief con alcance, criterios de aceptación y verificación técnica.
- **Producción:** `main` sin modificar; no merge ni deploy.

## 9. Bloque 02 — Hero + Global Navigation

**Autorizado el 2026-10-21. Estado de entrega: DONE — PENDING DIRECTOR REVIEW.** Bloque 01 aprobado. Bloques 03–06 no autorizados.

**Figma:** Hero `10:97`, `10:123`, `10:149`, `10:175`, `10:201`, `10:227`, `10:253`, `10:277`; navegación `111:547` y especificaciones `111:550`; ASCII `11:203`. El rótulo del Hero `PORTFOLIO / 2027` fue verificado **ausente** en esas ocho variantes y en las vistas integrales `102:559` y `102:775`. No reincorporarlo.

**Entregable autorizado:** montar Hero editorial y navegación sticky desktop/mobile con sus estados, anclas y accesibilidad, incluyendo el campo ASCII abstracto ambiental, en una **preview local aislada del sitio 2025**. Usar la base `src/portfolio2027` del Bloque 01. Implementar HTML semántico y diseños responsive aprobados; validar 1920/1536/1366/768/390/320, keyboard, focus, hash, scroll offset, reduced-motion, y consumo del ASCII. Se permiten placeholders de anclas de futuras secciones únicamente dentro de la preview, nunca como implementaciones terminadas.

**Límites:** no editar las secciones 02–05, no agregar dependencias importantes sin aprobación, no sobrescribir el sitio predeterminado 2025, no desplegar ni hacer merge a `main`. Revisar `@source not "./portfolio2027"`, CSS global y `initTheme()` al preparar la preview. No sustituir ASCII por fade-in, Matrix o imagen estática como único resultado sin autorización. Proporcionar fallback accesible. No bloquear texto o controles por animaciones.

**Gate de salida:** capturas y comparación real con Figma, evidencia de lint/build (distinguir 4 errores legacy de nuevas regresiones), validación responsive/accesibilidad, commits y archivos. Actualizar `docs/CURRENT.md` como `DONE — PENDING DIRECTOR REVIEW`, con pruebas efectivamente ejecutadas, y detenerse. Bloque 03 sigue NO AUTORIZADO.

## 10. Entrega Bloque 02 — 2026-10-21

**Estado: DONE — PENDING DIRECTOR REVIEW.** Entrega de ingeniería terminada con
observaciones tipográficas y de CLS explícitas. No equivale a aprobación visual
ni a autorización de publicación. **Bloque 03 sigue NO AUTORIZADO.**

### Rama, commits y preview

- Rama autorizada: `feature/portfolio-2027-foundation`.
- HEAD inicial sincronizado y contrastado con GitHub:
  `b156ffd4bcbd0dfc071131066472363b479eaf10`.
- HEAD de implementación/evidencia:
  `41d470034e78ddcf06580e948c5a13946270686b`
  (`feat: implement isolated Portfolio 2027 Hero and navigation with browser QA`).
- HEAD final documental: commit posterior titulado
  `docs: record Block 02 delivery and remaining review observations`.
  Su SHA exacto se obtiene de `git log -1`/historial de este archivo; no se inventa
  una referencia circular al SHA del propio commit que contiene la bitácora.
- `main`, dominio, hosting y aplicación predeterminada 2025 conservados.
  No hubo merge, deploy, nuevas dependencias de aplicación ni cambios de lockfile.

Abrir con `npm run dev -- --host 127.0.0.1` y visitar
`http://127.0.0.1:5173/src/portfolio2027/preview.html` (puerto que indique Vite).
`/` sigue mostrando 2025. No se agregó router ni input al build predeterminado:
la preview es un HTML de desarrollo aislado, no una ruta pública de producción.

### Arquitectura y archivos

- `src/portfolio2027/components/Hero.jsx`: composición semántica, copy aprobado,
  dos acciones y cierre editorial, sin eyebrow antiguo.
- `components/Navigation.jsx`: header, medición de enlaces/identidad y disclosure.
- `components/AmbientAscii.jsx`: motor y lifecycle Canvas 2D independiente.
- `hooks/useAnchorNavigation.js`: hash, foco, historial, offsets y sección activa.
- `navigation.js`: destinos oficiales centralizados.
- `styles/experience.css`: Hero responsive, navegación y estados bajo namespace.
- `preview.html`, `preview/main.jsx`, `preview/PortfolioPreview.jsx`,
  `preview/preview.css`: documento y montaje separados; targets temporales de
  navegación identificados como placeholders, sin diseñar otras secciones.
- `src/portfolio2027/README.md`: contrato de integración y uso local actualizado.
- `src/index.css`: exclusión adicional `@source not "../docs/qa"`.
  Se conserva la exclusión de la carpeta 2027: el nuevo montaje usa CSS semántico
  importado, no clases Tailwind que dependan del escaneo legacy. El scanner podía
  generar utilidades por palabras de pruebas; la exclusión evita cambiar su bundle.
- `docs/qa/block02/`: harness externo de pruebas, resultados JSON, capturas de las
  ocho resoluciones, menú abierto, texto al 200% y fallback; informe de comparación.
- `docs/CURRENT.md`, `README.md`, `AGENTS.md`: cierre y continuidad del proyecto.

No se tocaron `App.jsx`, `main.jsx`, secciones legacy ni assets/CV. La preview no
importa LiquidBackground, initTheme ni CSS legacy; reutiliza los tokens aprobados.
La carga opt-in de fuentes se enlaza en el HTML separado. Sin fuentes binarias
copiadas, bibliotecas de motion, Canvas de terceros ni paquetes nuevos del proyecto.

### Hero, Figma y observaciones visuales

Se leyeron contextos y renders Figma de Hero desktop/notebook/tablet/mobile,
navegación y contexto integrado `111:725`, foundations y planilla motion.
Se contrastaron capturas reales 1920×1080/960/900, 1536×864, 1366×768,
768×1024, 390×844 y 320×844. Sin overflow horizontal en esas ocho medidas.

Se mantiene el flujo aprobado: header de 64/56px antes del Hero; tamaños de
nombre, márgenes, líneas, CTAs y cierre según referencias. La altura del contenido
puede crecer; las capturas de poca altura continúan con scroll natural.
Se corrigió un desfase de 1px causado por contar dos veces el hairline superior.

**Diferencias pendientes de revisión:** la métrica web de DM Sans da un ancho
aproximado de 308px en «Ezequiel» a 88px frente a la caja Figma de 278px (mobile
198 frente a 179px). Se conservaron fuente, peso, tamaño y opsz 14, sin deformar
letras. Instrument Serif queda aproximadamente 446 frente a 449px en desktop.
No se declara pixel-perfect. El ASCII procedural reproduce carácter, intensidad
contenida, periferia y vacío central, pero no los mismos glifos del frame estático.
Ver `docs/qa/block02/README.md` antes de aprobar visualmente.

### ASCII implementado y coste real

Canvas 2D nativo: grid fijo y armónicos angulares con variación lenta; no Matrix,
ruido aleatorio, imágenes o formas figurativas. Primera pasada refinada con banda
más fina, menor intensidad y curvatura asimétrica. Centro de lectura protegido.

- Cadencia máxima 12fps desktop / 8fps compacto; 232 columnas, hasta 128/96 filas.
- DPR máximo 1.5/1.25, backing store limitado a 2560×1600.
- ResizeObserver, IntersectionObserver y visibilitychange controlan el motor.
- Fuera de pantalla/pestaña oculta: cancelar timer y RAF; al volver se retoma
  sin avanzar el tiempo de la animación durante la pausa.
- Reduced motion: estado cero estático. Fallo de contexto: texto/acciones siguen.
- Limpieza de observers/listeners/timer/RAF en desmontaje; no cadence duplicada
  observada con StrictMode. Sin elementos decorativos en el orden de foco.
- `get_motion_context(11:203)` devolvió inventario vacío. Evolución nominal de 36s
  tomada como interpretación técnica del storyboard; no se afirma importar tracks.
  La entrada editorial adicional se dejó estática porque figura Proposed.

Muestreo de callbacks JS del último suite: desktop 26 frames, media 3.33ms,
p95 3.70ms, máximo 4.80ms; mobile 14 frames, media 1.78ms, p95/máximo 2.10ms.
No son benchmarks de batería/GPU/dispositivo físico. No hubo draws durante los
intervalos probados fuera de pantalla, reduced motion y ocultación simulada.
La ocultación y DPR 3 se simularon; no se declara prueba de pestaña móvil real.

### Navegación y correcciones funcionales

Header sticky opaco, línea tras scroll, estados hover/activo/focus. Cambio compacto
según espacio disponible con fuentes reales, umbral inferior cercano a 832px.
Prueba adicional: compacto a 820/832px y horizontal a 840/900/1100px; ancho
requerido medido 734px, sin overflow (`docs/qa/block02/navigation-fit.json`).
Disclosure no modal, sin backdrop ni bloqueo de body; panel con scroll propio en
poca altura. Botón nativo, aria-expanded/controls, panel cerrado inert/aria-hidden.
Escape restaura toggle; Tab fuera cierra sin robar foco; pointer exterior cierra;
selección cierra y enfoca heading de destino. Indicador pasivo no modifica hash.

Offsets normales 80/72px; se mide la altura real si el texto ampliado aumenta el
header. Se validó hash directo y Back/Forward. Se detectó deriva intermitente de
32px al entrar con hash durante el bootstrap tipográfico: se solicita explícitamente
la carga de los cuatro faces usados, se espera layout final, se usa restauración
manual de historial y se evita scroll anchoring nativo en el documento de preview.
La política previa de historial se restaura al limpiar el hook. La entrada #about
se comprobó diez veces más: heading a 72.1875px en las diez, sin deriva.

También se corrigieron recortes con fuentes ausentes, wrapping de menú/targets
al 200% de texto y un overflow causado por el Canvas decorativo. Su viewport de
recorte es separado del contenido y no intercepta interacción.

### Pruebas y evidencia

| Verificación | Resultado real |
|---|---|
| `npm run lint` | FAIL con los mismos 4 errores legacy documentados, sin nuevos |
| `npx --no-install eslint src/portfolio2027` | PASS |
| `npm run build` | PASS; 1717 módulos, CSS 69.56kB / gzip 10.66; JS 237.77kB / gzip 71.37 |
| SHA-256 de artefactos 2025 | 9/9 idénticos a la línea de base de este bloque |
| Build de preview con input HTML explícito, salida `/tmp` | PASS; 38 módulos, CSS 13.90kB / gzip 3.42; JS 196.75kB / gzip 62.40 |
| Suite `docs/qa/block02/verify.mjs` | PASS: 17 comprobaciones funcionales/visuales/lifecycle, Chromium 153 |
| Ocho viewports de referencia | PASS: fuentes cargadas, sin overflow; capturas guardadas |
| Texto al 200%, 320px / panel 320×360 | PASS: reflow y enlace Contacto alcanzable |
| Fallback de fuentes/contexto Canvas y sin JavaScript | PASS: contenido y acciones disponibles |
| Consola/pageerror/requests en contexto QA normal | Sin errores ni requests fallidos |
| `git diff --check` | PASS |

Los cuatro errores preexistentes siguen en PrimaryButton, SecondaryButton,
Contact y Skills (`no-unused-vars`). No se corrigieron ni ocultaron con cambios
de ESLint fuera de alcance. El tooling de navegador se preparó temporalmente
fuera del repositorio; package.json/lockfile de la aplicación no cambiaron.

### Limitaciones y próximo gate

- La CA del navegador de pruebas no valida el proxy de fuentes de este entorno.
  Se cargaron respuestas oficiales CSS/TTF mediante curl con TLS validado y
  fulfillment exclusivo de QA (CORS conservado); no se desactivó validación de
  certificados ni web security en el suite final. La entrega directa de Google
  Fonts y el coste de WOFF2 reales quedan pendientes en un navegador normal.
- Layout shifts medidos del bootstrap/font swap: sumas aproximadas 0.013–0.126,
  más altas en mobile. **No se afirma cumplir CLS de producción.** Reducirlos y
  volver a medir antes de release; swap no resuelve por sí solo esas métricas.
- Pendientes: revisión tipográfica de Dirección; dispositivos físicos, Safari,
  Firefox, lector de pantalla, zoom real, CPU/GPU/batería y memoria prolongada.
  200% aquí significa tamaño raíz de texto; no una sesión de zoom del navegador.
- La evidencia está versionada en `docs/qa/block02/`; no se declara aprobada la UI.
- **No iniciar Bloque 03 / Selected Work ni UI Construction.** Esperar revisión
  del Director General y brief explícito. Sin merge, deploy ni cambio de dominio.

**Último evento registrado:** Bloque 02 entregado para revisión, con preview local,
pruebas/capturas y salvedades de tipografía, font delivery y CLS registradas.


## 11. Entrega Bloque 02A — 2026-10-22

**Estado: DONE — PENDING DIRECTOR REVIEW.** Brief del propietario autoriza
exclusivamente tres correcciones del Hero existente. No equivale a aprobación.

### Rama, archivos y decisiones

- Rama sincronizada: `feature/portfolio-2027-foundation`. HEAD inicial:
  `2f4be5e82302a6cb4bcd5027adbe7ffc3896faca`.
- `src/portfolio2027/styles/experience.css`: desde 1100px el Hero utiliza la altura
  disponible después del header medido. Flex distribuye el espacio vertical con
  padding acotado; mantiene tamaños de nombre, texto y CTAs, y permite crecimiento
  intrínseco bajo zoom/alturas menores. Se quitan borde superior y laterales; la
  única divisoria del cierre pasa a pseudo-elemento de ancho viewport.
- `src/portfolio2027/components/AmbientAscii.jsx`: multiplicador de alfa .12→.30
  desktop y .16→.28 compacto. Se conserva color monocromático, máscara central,
  densidad, cadencia, reduced motion y lifecycle. Canvas desktop acompaña altura.
- `src/portfolio2027/README.md`: contrato desktop actualizado por el brief 02A,
  que sustituye la decisión anterior de sumar 100svh al header.
- `docs/qa/block02a/`: dos pares antes/después (Full HD y notebook), ocho capturas
  posteriores, menú mobile, geometría JSON e informe de verificaciones.
- `docs/CURRENT.md`: estado, alcance, evidencia y siguiente compuerta.

Sin cambios de copy, navegación/menú, anchors, tipografías, estructura JSX, preview
aislada, otras secciones, dependencias o lockfile. No main, merge ni deploy.

### Validación real y problemas

- Chromium 153: 1920×1080/960/900, 1536×864, 1366×768, 768×1024, 390×844 y
  320×844, con fuentes oficiales cargadas y fase ASCII cero para comparar.
- Sin overflow horizontal en ocho vistas; marco superior/lateral eliminado;
  divisoria full width. Revisión visual de Full HD, notebook y mobile: contenido
  legible y ASCII periférico más perceptible, sin alterar el vacío central.
- Cierre completo desktop antes/después: 1144→1080, 1012.72→960, 948→900,
  912→864 y 832→768px, respectivamente. Mobile conserva scroll natural.
- CTA desktop: hash/foco correctos; menú mobile abre y Escape lo cierra; ASCII
  corre y cambia a estático en reduced motion; sin page errors.
- `npm run lint`: FAIL, los mismos cuatro errores legacy no-unused-vars de
  PrimaryButton, SecondaryButton, Contact y Skills. Sin errores nuevos.
- `npx --no-install eslint src/portfolio2027`: PASS.
- `npm run build`: PASS (1717 módulos), nueve artefactos 2025 idénticos por SHA-256
  a baseline. Build explícito de preview: PASS (38 módulos).
- `git diff --check`: PASS. Sin problemas nuevos de producto observados. El primer
  assertion de QA esperaba un ID inexistente; corregido al ID real `projects`, PASS.

Evidencia y límites: [qa/block02a/README.md](qa/block02a/README.md),
[results.json](qa/block02a/results.json). Fuentes oficiales servidas por fulfillment
exclusivo de QA debido a CA del proxy, sin desactivar validación TLS. No se afirman
pruebas en dispositivos físicos ni Safari/Firefox. Salvedades tipográficas/CLS del
Bloque 02 siguen pendientes antes de release.

### Commits y próximo gate

- Implementación: `3432ae1d340c00829d359f1d749fa7b570c78d8c`
  (`fix: rebalance Hero viewport and strengthen ambient ASCII`).
- Cierre documental y evidencia: commit posterior
  `docs: record Block 02A corrections and visual verification`.
  SHA disponible en el historial; no se registra un hash circular en sí mismo.

**Bloque 03 y UI Construction: NO AUTORIZADOS.** Detener aquí hasta revisión del
Director y nuevo brief explícito. Producción permanece intacta.

## 12. Director Review — Block 02/02A Approved; Block 03 Authorized (2026-10-22)

**Director decision:** Block 02 and correction pass 02A **APPROVED** on the basis of committed code, eight viewport QA records and visual inspection of actual captured `after-1920x1080.png`, `after-1366x768.png`, `after-390x844.png`. The owner-approved refinements are reflected: desktop Hero closing now fits the initial viewport, framing edges removed, only a full-viewport separator before the quote, and stronger restrained peripheral ASCII. No re-opening of Hero/navigation design. The director reviewed code and documented browser QA but did not independently repeat browser testing. Four pre-existing lint errors are still outside this work's scope. Release remains gated on real font delivery/CLS/device/browser QA; **this is NOT production approval**.

**Block 03 authorization: Selected Work (selected Structural Grid A).** Work in `feature/portfolio-2027-foundation`, isolated preview only, preserving legacy production and the already-approved Hero/navigation. Current Figma sources: Selected Work production `30:836` (desktop `30:898`, 390px `30:1576`, 320px `30:1689`, full-content variants `33:176` through `33:452`); specifications `35:818`; continuous Hero→Selected Work `35:628`/`35:724`; motion master `45:5809`, PLAY desktop `45:7422`, mobile `45:10156`, reduced motion `45:11220`. Master interactions `92:556`.

**Authorized tasks:**
1. Implement **exactly two** text-only editorial project modules: **Eze Web Studio** (owner's independent studio, not a commissioned client) and **Task Manager** (MERN), with Figma-approved headings, descriptions, metadata, stacks, project/repository actions and structural grid; no cards, screenshot images, invented outcomes or third project.
2. Desktop two columns with rule, tablet/mobile vertical reading flow. Content heights should grow naturally. Fit 1920/1536/1366/768/390/320; link focus, hover, keyboard and touch. Continuity from existing Hero must not damage prior approved viewports.
3. Treat UI Construction as the **approved visual direction**, not a generic fade: point field → geometric trace → UI skeleton → vertical materialization → final functional DOM. Use A–E reference and exact content geometry/reflow; animate once per page visit. Timings `2400 ms desktop` / `1400 ms mobile` remain **proposed parameters** until visual verification.
4. First assess feasibility and licence/performance implications of any third-party source (e.g. Jakubantalik/transitions.dev); **no significant new dependency/install without Director approval**. Native DOM/CSS/SVG/canvas implementation allowed if faithful. If not technically feasible without material architectural choice, stop motion subtask, report options and evidence. Do not replace with opacity-only reveal or claim incomplete approximation as finished.
5. Motion must be wholly decorative (no pointer/focus interception); final content semantic and accessible from the start. Direct hash/keyboard focus, quick scroll and reduced motion resolve immediately to final state; clean observers, timers, event listeners and overlays; no loops. Prevent jank on mobile.
6. Existing isolated preview remains the only preview route. Use temporary placeholders for About/Skills/Contact only, not implementations. Verify no regression in Hero and Navigation; no changes to `main`, legacy default route, deployments, package lock without approval.

**Project links:** Eze Web Studio repository `https://github.com/ezexgonzalez/eze-web-studio-V2`; Task Manager repo `https://github.com/ezexgonzalez/mern-task-manager` and demo `https://mern-task-manager-iota-teal.vercel.app/`. The Eze Web Studio project *public* destination is separate from portfolio `https://ezegonzalez.dev/` and must be verified, never guessed or pointed to the portfolio. If unresolved, disable/mark the project-public action in isolated preview rather than invent a link.

**Exit gate:** lint/build and scoped checks (differentiate four pre-existing legacy lint errors); desktop+mobile visual evidence, construction frames/states or video if reliably available, responsive/keyboard/anchor/reduced-motion/cleanup checks, any performance measurements honestly scoped; update `docs/CURRENT.md` to `DONE — PENDING DIRECTOR REVIEW` with changed files, commits, limitations and accurate status. **STOP. Block 04 NOT AUTHORIZED**. No production merge/deploy.


## 13. Entrega Bloque 03 — Selected Work + UI Construction — 2026-10-22

**DONE — PENDING DIRECTOR REVIEW.** Alcance implementado en preview aislada; no
equivale a aprobación ni habilita Bloque 04 o publicación.

### Rama, alcance y archivos

- Rama sincronizada: `feature/portfolio-2027-foundation`; HEAD inicial verificado
  `e6bf62ea669b6212f5bf905c7eb4a5811f8d7490`.
- `src/portfolio2027/components/SelectedWork.jsx`: exactamente Eze Web Studio y
  Task Manager, copy aprobado, h2/h3/articles, metadatos, capacidades, stacks y
  cuatro enlaces nativos con nombres accesibles específicos.
- `styles/selected-work.css`: Structural Grid A, dos columnas desde 1024px,
  subgrid alinea filas equivalentes; tablet/mobile apilados, enlaces en columna
  bajo 360px, reglas finas, límites/márgenes y tipografía documentados en Figma.
- `motion/uiConstruction.js`: motor Canvas 2D original y acotado; puntos, trazos
  progresivos, contornos de texto real, regiones/guías y barrido vertical.
- `hooks/useUiConstruction.js`: font readiness, trigger 85% viewport, una ejecución,
  interrupciones y limpieza. Sin tocar el hook de navegación existente.
- `preview/PortfolioPreview.jsx`: reemplaza únicamente Projects por sección real;
  conserva placeholders About/Skills/Contact. `preview.html`: fallback sin JS con
  ambos proyectos y enlaces. Mismo documento/ruta de desarrollo.
- `src/portfolio2027/README.md`, `README.md`, `AGENTS.md`: contrato y estado.
- `docs/qa/block03/`: evaluación técnica previa, harness externo acotado, JSON de
  resultados, seis capturas estáticas, continuidad y diez capturas de fases.
- `docs/CURRENT.md`: presente entrega y compuerta.

No se modificaron Hero, Navigation, AmbientAscii, experience.css, fuentes/tokens,
useAnchorNavigation, App/main/index.css legacy, package.json o lockfile. No nuevas
dependencias de aplicación, runtime de terceros, imágenes o assets de proyectos.
Sin cambios a main, merge, deploy, dominio o hosting.

### Decisiones y fidelidad

Se leyeron contextos/renders de producción 30:898/1237/1350/1463/1576/1689,
especificaciones 35:818, PLAY 45:7422/10156 y reduced 45:11220; se contrastaron
B/C/D 45:6096/6470/6906 y pistas nativas. Se conserva la familia/escala/tracking,
orden, separadores y retícula. Alturas naturales medidas 1072/924/868/1252/1178/
1348px a 1920/1536/1366/768/390/320, coincidentes con las referencias; no se
fijaron alturas para lograrlo. Full HD: marco 1600, columnas 720 y vacío 160px.

Revisión real de capturas desktop/notebook/tablet/mobile: continuidad editorial,
crecimiento y lectura conservados. Hero Full HD pixel-idéntico a captura 02A
aprobada (comparación ImageChops sin diferencias). Persisten las diferencias de
métrica web DM Sans ya documentadas; no se deformaron fuentes. Gutter existente
a 390 = 24.375px frente a 24px redondeados en Figma; no se modificó el foundation.

Referencia transitions.dev estudiada sin instalar/copiar runtime: getBoundingClientRect
y Range para medir, SVG para geometría, clipping para el barrido, cancel/cleanup.
Licencia de transiciones permite uso/modificación en sitios personales/comerciales
y prohíbe redistribuir la colección como producto competidor; tooling aparte MIT.
Decisión nativa y límites en [evaluación](qa/block03/TECHNICAL_ASSESSMENT.md).

Una capa Canvas decorativa, aria-hidden/pointer-transparent, mide palabras y límites
cuando las fuentes están listas. Grid de 500/160 puntos, geometría responsive real,
contornos tipográficos y frontera vertical que descubre DOM auténtico, sin fade
único ni esconder contenido de accesibilidad. Las figuras estáticas del estudio
se regeneran desde DOM; no se copian SVGs de coordenadas fijas.

2400ms desktop / 1400ms bajo 1024, sin bucle. Mobile PLAY contiene 2s con hold: se
normalizan fases a 1.4s propuestos por el brief. Los cinco estados se capturaron en
el runtime real a 1920 y 390, con reloj controlado exclusivo de capturas. Barrido
limitado al marco/rails medidos; no se afirma reproducción pixel-perfect de glifos
vectoriales Figma. Dirección debe evaluar ritmo/fidelidad de esta implementación.

Contenido disponible desde el principio; ninguna máscara/opacity/inert afecta al
DOM. Ancla directa, foco/pointer, ancla interna, entrada/scroll rápidos, salida de
pantalla, documento oculto, reduced motion o cambio de tamaño/reflow/carga tardía de fuentes
resuelven final. Sin scroll lock, demora de navegación ni reconstrucción por scroll.
Final/cancelación elimina Canvas y libera RAF/observers/listeners; fallo Canvas
conserva contenido. Backing store acotado 2560×2048 y DPR 1.5/1.25 como máximos.

### Enlaces verificados

Curl con TLS validado y redirects: HTTP 200 y títulos correspondientes en los cuatro
destinos, el 2026-10-22. Eze Web Studio `https://ezewebstudio.com.ar/`, canonical y
título identifican al estudio; repo `https://github.com/ezexgonzalez/eze-web-studio-V2`.
Task Manager `https://mern-task-manager-iota-teal.vercel.app/`, repo
`https://github.com/ezexgonzalez/mern-task-manager`. No se auditó el CRUD/auth de
aplicaciones externas ni se usó el dominio del portfolio como destino del estudio.

### Pruebas, coste y problemas

- Chromium 153: **21 grupos PASS**, seis anchuras, orden/layout, cuatro enlaces ≥52px,
  overflow, foco/hover, #projects con h2 enfocado y offset 80px, menú mobile intacto,
  cinco fases desktop/mobile, no repetición, interrupciones, desmontaje React
  activo, Canvas nulo y fallback sin JS. JSON y capturas en qa/block03.
- Sin page errors en el contexto normal monitorizado. Texto raíz 200% a 320px PASS.
  Se detectó/corrigió un overflow nuevo del título ampliado con wrapping intrínseco.
- Medición JS con contexto fresco/reloj real, DPR 1 y sin CPU throttling: setup
  desktop 4.00ms/mobile 2.20ms; 144/73 callbacks, medias 0.24/0.18ms, p95 0.40/0.30ms,
  máximos 1.30/0.40ms. No son tiempos GPU/raster, batería o dispositivos físicos.
- 16/15 lecturas de elementos en setup; ninguna adicional tras la muestra de
  medición en la ejecución sin scroll. Range se usa únicamente al crear geometría.
  Sin overlays/draws posteriores en 200ms tras final y desmontaje probados.
- Captura full-page disparaba cambio de tamaño y cancelación correcta; se pasó a capturas
  de viewport con reloj aislado. Se corrigieron errores del harness de selector,
  interop de módulos Vite y reloj; no se desactivaron interrupciones de producto.
- `npm run lint`: FAIL, mismos 4 errores legacy no-unused-vars en PrimaryButton,
  SecondaryButton, Contact y Skills. `npx --no-install eslint src/portfolio2027`: PASS.
- `npm run build`: PASS; 1717 módulos, CSS 69.58kB/gzip 10.67, JS 237.77kB/gzip 71.37.
  Los 9 artefactos coinciden por SHA-256 con build separado del HEAD inicial de 03
  (sus hashes difieren del bloque anterior por cambios documentales previos de
  Dirección, no por esta implementación). Build preview explícito PASS, 42 módulos; CSS 21.59kB/gzip 4.58, JS 206.54kB/gzip 65.65.
  Se detectó una utilidad accidental por redacción de esta bitácora; se corrigió
  esa redacción para conservar el bundle, sin cambiar el CSS/scanner legacy.
- `git diff --check`, sintaxis del harness: PASS.

Evidencia completa y reproducción: [qa/block03/README.md](qa/block03/README.md).
Fuentes oficiales CSS/TTF obtenidas por curl con TLS válido y fulfillment de QA
por CA del proxy; sin bypass de certificados/web security ni fuentes redistribuidas.
Pendiente antes de release: entrega real de fuentes/WOFF2, CLS, Safari/Firefox,
dispositivos reales, zoom real/lectores de pantalla y GPU/memoria prolongada.
No se detectaron regresiones de producto fuera del overflow corregido.

### Commits y siguiente gate

- Implementación: `c15bee0b147f4a172f6b9757a81eb6ed47aa7ebc`
  (`feat: add Selected Work and native UI Construction sequence`).
- Cierre documental/evidencia: commit posterior
  `docs: record Block 03 validation and director review gate`. Su SHA se consulta
  en el historial; no se introduce un hash circular en el mismo commit.

**Bloques 04–06: NO AUTORIZADOS. No iniciar Bloque 04.** Esperar revisión de
Dirección y brief explícito. Producción permanece intacta.

## 14. Director review — Block 03 motion NOT approved; Correction 03A authorized (2026-10-22)

**Diagnosis from actual branch code and saved phase screenshots:** `useUiConstruction.js` calls `finish('anchor')` on any internal link click, `finish('hash')` on hash changes and `finish('focus')` on focus inside Selected Work. A normal pointer click on Hero's **Explorar proyectos** or the header **Proyectos** consequently skips the effect and permanently marks it final. That is consistent with the previous technical *accessibility shortcut*, but conflicts with the owner's requirement that the transition is actually discoverable in the normal user journey. The transition also plays only once and completes in 2400ms desktop / 1400ms compact. Saved screenshots `docs/qa/block03/motion-1920-1-points.png` through `-3-skeleton.png` show a very dark point/line/skeleton construction: visibility is inadequate for the motion's main expressive purpose.

**Decision:** approve the static Structural Grid A and two real project links provisionally; **do NOT approve UI Construction as a user-visible experience**. Correction 03A is authorized *only* for entry-trigger orchestration and visual visibility/clarity. Preserve the static final layout, Hero, navigation, responsive and ASCII unchanged.

**Correction acceptance rules:**
1. First entry via **pointer/touch** on Hero CTA `#projects` or header `#projects` must allow the five-phase construction to be seen **once**, without delaying scroll, changing URL/hash semantics, trapping focus or blocking links. Passive scroll should also trigger it when appropriate. Prior `#projects` direct URL/load, keyboard-operated links, screen reader use or programmatic focus and reduced motion must remain immediate and accessible, with final DOM available. Carefully disambiguate pointer-initiated navigation from keyboard/direct hash and avoid cancelling the effect through the subsequent hash/focus events; document exact policy.
2. Increase contrast of **points, connecting geometry, text outlines, and materialization frontier** to achieve clear readability on `#080808` while retaining monochrome, restraint, real geometry and intact final state. Do not use generic fade/reveal, neon, color accents or static image swaps; use side-by-side or runtime visual evidence of phase A/B/C/D.
3. Inspect whether fast-scroll thresholds cancel during normal mouse wheel/touch scroll, and relax only overly eager cancellation while keeping reduced-motion, keyboard accessibility, early exit and cleanup reliable.
4. Add a clearly **development-only** replay mechanism or documented reproducible reset for reviewers in the isolated preview, not production and not a new shipped feature. QA should explicitly check click Hero CTA, click navbar, passive scroll, replay/refresh, keyboard operation, direct hash, reduced motion, normal completion, and non-replay on revisit.
5. Provide actual phase images and, if possible, a brief real-browser screen recording. Report trigger/final reasons using existing `data-construction` / `data-construction-reason`, capture timestamps and show why prior behavior was skipped. No library installation, no changes to `main`, no deploy, no Block 04.
6. Update CURRENT.md and evidence with code commits and real verification. Mark `DONE — PENDING DIRECTOR REVIEW` after correction and STOP.

**Note:** visual QA screenshots of the motion did exist before this review; their existence is not proof that users can see it through the normal CTA/navigation interaction. This is a user-visible defect requiring correction, not a request for a brand-new animation system.

## 15. Owner follow-up — Block 03A: no flash of finished section + slower build (2026-10-22)

**This extends the still-open Block 03A correction gate; it is not approval of Block 03 or 03A.** Owner verified that motion can be seen by scrolling, but rejected two specific defects:

1. **Wrong lifecycle / flash of finished UI:** Selected Work currently appears fully rendered, then disappears when the construction Canvas is appended, and only then builds back in. **Required:** for motion-eligible first visits, the finished UI must never be visually exposed before phase A. The first visible state should be an empty/dark construction surface, followed by A→B→C→D→E; one coherent transition with no final→blank→construction jump. Diagnose current React paint/useEffect/IntersectionObserver timing and the Canvas mount/opaque paint path. Establish a reliable pre-armed visual state from initial eligible render, before first paint where possible; keep underlying semantic DOM in the accessibility tree and its layout stable, without display:none, aria-hidden or inert on real content. Separate visual cover/mask from interactive semantics. Prioritize no-JS, Canvas failure, direct hash, assistive/keyboard access and prefers-reduced-motion: all should fail open to visible final content without a permanent blank panel. Ensure no premature content appears when fonts load/resize.
2. **Duration and physicality:** current `2400ms desktop / 1400ms compact` is too fast and mechanical. Start tuning around **4.0–4.5s desktop** and **2.7–3.2s mobile/tablet**, then review pacing visually; phase timing should allow points to establish, geometry to connect, real DOM-shaped skeleton to form, and a deliberately readable continuous frontier sweep to materialize the UI. No artificial idle delay, simplistic opacity fade or UI appearing all at once. Duration is a tuning hypothesis, not a new permanent lock.

**Carry forward previous 03A entry corrections:** first normal pointer/touch CTA or navbar entry and passive scroll should allow one visible sequence; direct-hash load, keyboard/screen-reader interaction and reduced motion must show final immediately; animation must not block input or repeat; fast scrolling should not cancel normal use prematurely. Keep Hero, global navigation and static Selected Work layout untouched.

**Required validation:** video or sequential real-browser screenshots from the instant before the section first enters view through A/B/C/D/E on desktop (e.g. 1920×1080) and mobile (390×844), plus first-entry pointer navigation and slow scroll; prove no unmasked final DOM at t<0 and no black/hidden section remaining after fail-open triggers. Verify no-JS, reduced motion, hash direct, focus, late fonts, fail canvas, slow scroll, normal scroll/anchor entry, resize, no-replay, teardown, CSS/React fallback, scoped lint/build and no legacy regression. Record exact durations, trigger reason, visual gating and current-state updates. No new libraries, `main`, release or Block 04 work.

**Status:** `03A — REVISION REQUIRED / OWNER FEEDBACK RECORDED`; latest code remains unapproved until engineer correction and Director's visual review.


## 16. Entrega 03A — Zero-flash, contraste y ritmo — 2026-10-22

**DONE — PENDING DIRECTOR REVIEW.** No se declara aprobado el motion. Rama
`feature/portfolio-2027-foundation`; HEAD inicial sincronizado/verificado
`f6eae623b5ed923428e3528b7fc452c260c1bc7a`.

### Causas y solución

El JSX anterior exponía la sección final mientras useEffect esperaba fuentes;
el observer montaba el Canvas opaco recién al 85% del viewport. De allí el salto
final→vacío→construcción. Además, clic interno y foco programático del navegador
resolvían final sin distinguir entrada normal por puntero de acceso por teclado.

El primer render React lleva marcador armado y una cobertura visual opaca CSS
#080808. useLayoutEffect prepara recuperación antes de pintar. Se conserva
cobertura durante fuentes/espera y se retira en la misma tarea solo tras existir
un Canvas opaco de fase cero. DOM auténtico, semántica, tamaño y enlaces quedan
montados: sin display:none/inert/aria-hidden o máscaras sobre el contenido.
Reduced motion elimina cobertura desde CSS; hash inicial/foco resuelven antes
del primer pintado React. El fallback HTML sin JS no cambió.

Capacidades ausentes o errores de configuración/preparación/Canvas/dibujo resuelven
final. Preparación tipográfica: máximo 6s; la espera deja de tener timeout cuando
las fuentes están listas. Recuperación de animación: duración+1500ms. Final y
desmontaje retiran Canvas, cancelan RAF, observers/listeners y temporizadores de
recuperación, foco y navegación. API ausente probada en montaje React aislado
de SelectedWork; no es una auditoría de APIs de Hero/navegación legacy.

### Activación, ritmo y claridad

Entrada por puntero/tap en CTA o navbar permite una ejecución, conservando hash,
scroll y foco del sistema existente. Se concede únicamente el foco de heading
sincrónico de ese clic y el permiso vence en la siguiente tarea; una microtarea
podía vencer antes del callback React. Exención del salto de desplazamiento
programático: máximo 1800ms o hasta wheel/touch/tecla. No se manipula navegación.
Teclado (detail 0), foco de acceso, hash inicial y reduced motion muestran final.

Scroll normal ya no cancela por superar el margen superior de 25%: solo salida
real de sección o salto grande/rápido (>máximo 400px/90vh en 150ms) resuelve final.
Sin bloqueo de scroll o espera obligatoria; sin repetición al regresar. Para
revisión de desarrollo se documenta recargar la misma preview sin hash, sin
añadir controles ni funciones de producción.

Duración final **4200ms desktop / 3000ms bajo 1024px**. Fases solapadas y curvas
suaves: puntos desde 0, geometría desde ~600ms, esqueletos desde ~1400ms, barrido
~2800–4100ms y liberación a 4200ms en desktop; escala proporcional en compacto.
Mayor contraste neutral en puntos, recorridos, contornos y frontera, sin neón
ni cambio del estado final. Geometría y Canvas nativos existentes conservados.

### Archivos

- `components/SelectedWork.jsx`: solo marcador inicial armado. Copy/URLs intactos.
- `hooks/useUiConstruction.js`: preparación antes de pintar, permisos de entrada,
  recuperación, interrupciones y limpieza; nada de cambios al hook de navegación.
- `motion/uiConstruction.js`: curvas, ventanas de fases, contraste/grosor y barrido.
- `styles/selected-work.css`: cobertura transitoria, excepción reduced y recorte
  del desborde horizontal decorativo.
- `src/portfolio2027/README.md`: contrato y reset de revisión local documentado.
- `docs/qa/block03a/`: harness acotado, resultados/timestamps, fases en 4 anchuras,
  preparación con fuentes lentas, comparaciones estáticas y 2 grabaciones MP4 reales.
- `docs/CURRENT.md`, `AGENTS.md`, `README.md`: estado y cierre.

Sin cambios en Hero, navegación, ASCII, fuentes/tokens, preview HTML/montaje, otras
secciones o dependencias/lockfile. Sin main, merge, deploy, dominio o hosting.

### Evidencia y verificación real

- Chromium 153: **26 grupos PASS**, cero page errors monitorizados. Viewports
  1920×1080,1366×768,390×844 y 320×844. Sin overflow horizontal.
- Muestreo de 309/307/232/232 RAF desde antes de la entrada: ningún estado final
  anterior al primer build; ninguna muestra de construcción expuesta sin cobertura.
  Capturas reales de armado y A/B/C/D/E en las cuatro medidas.
- Grabaciones CDP con reloj real y timestamps, MP4 a 30fps conservando intervalos:
  desktop ~5.47s/mobile ~3.63s. Orden espera→puntos→geometría→esqueleto→barrido→final.
  Primera fase a final observados ~4224.5/~3024.1ms con cadencia RAF. Capturas de
  fases usan contexto aparte con reloj controlado, no un render de demostración.
- Puntero CTA/navbar y menú mobile completan con hash/foco correctos; taps mobile
  emulados también. Wheel normal no cancela. Acceso por teclado/hash/foco, cambio
  reduced, cambio de tamaño, salida/salto rápido, fuentes tardías, Canvas nulo,
  fallo de dibujo, preparación colgada, API ausente, sin JS, regreso y desmontaje
  activo comprobados. No se afirma test en hardware touch/lector de pantalla.
- Canvas retirado, sin dibujos nuevos en 200ms tras final/desmontaje; limpieza
  explícita de temporizadores/observers/listeners. Sin cambios de altura por motion.
- Comparación ImageChops: Hero Full HD y las cuatro secciones estáticas son
  **pixel-idénticos** a evidencia 03; alturas 1072/868/1178/1348px conservadas.
- `npm run lint`: FAIL, mismos 4 errores legacy no-unused-vars en PrimaryButton,
  SecondaryButton, Contact y Skills; sin nuevos. ESLint de 2027 y sintaxis QA PASS.
- `npm run build`: PASS, 1717 módulos. Build explícito de preview PASS, 42 módulos,
  CSS 21.92kB/gzip 4.63 y JS 207.74kB/gzip 65.99. Comparación con build del HEAD
  inicial: 9 artefactos normales idénticos por SHA-256. `git diff --check`: PASS.

Problemas de QA corregidos: un sampler inicial leía el h2 del fallback HTML como
si fuera la sección React; ahora distingue el nodo auténtico. Se ajustó la prueba
de fuentes lentas a la restauración superior existente al terminar las fuentes.
No se cambiaron Hero/navegación para adaptar esas pruebas. El muestreo verifica
React en Chromium; no garantiza condiciones de carga pre-React en todo navegador.
Fuentes oficiales CSS/TTF servidas solo a QA por limitación CA del proxy, con curl
TLS validado/CORS y sin bypass de certificados. No se redistribuyen fuentes.

Evidencia/reproducción: [qa/block03a/README.md](qa/block03a/README.md). Persisten
pendientes de release: font delivery/CLS, Safari/Firefox, dispositivos físicos,
lectores de pantalla, GPU/batería y memoria prolongada. Se detectó y corrigió un desborde decorativo de 4px a 320px en espera/animación;
la comparación estática sigue idéntica. Ningún rediseño o regresión estática restante. Ritmo y claridad quedan sujetos a revisión de Dirección.

### Commits y gate

- Implementación: `bacb9bf9108aa1599a049287c359b98c7076b0af`
  (`fix: prearm UI Construction and refine entry visibility and pacing`).
- Cierre/evidencia: commit posterior
  `docs: record Block 03A zero-flash validation and review gate`; SHA consultable
  en historial, sin hash circular dentro del propio commit.

**Bloque 04 y posteriores NO AUTORIZADOS.** Detener aquí. Sin aprobación ni
publicación implícita.

## 17. Owner visual approval 03A and final desktop height correction 03B (2026-10-22)

**Owner decision:** The revised UI Construction now looks excellent. Owner **approves** the zero-flash lifecycle, increased phase visibility and deliberately slower construction movement implemented in 03A. Preserve all of these as a frozen behavioral baseline. Selected Work's two-project composition, content, links, responsive structure and visual tone remain approved. The **only remaining request** is that **Selected Work feels too tall on desktop** and should, where feasible, fit the available browser viewport as a coherent section.

**03B authorized, NOT STARTED — targeted desktop-only spacing/height refinement:**
- Begin with baseline natural Selected Work heights from Block 03: 1920px wide → 1072px, 1536 → 924px, 1366 → 868px. Header consumes ~64px of the viewport; assess practical available area `100svh - measured sticky header` (e.g. 1920×1080 ~1016px, 1536×864 ~800px, 1366×768 ~704px). These are **targets to assess, not fixed-height caps**.
- Reduce primarily *excess vertical whitespace* in `src/portfolio2027/styles/selected-work.css`: heading top/bottom padding, spacing between project name/description/classification/capabilities/stack/links, and overall bottom padding. Keep clear hierarchy, two-column grid, typography, minimum 52px targets and structural dividers. Avoid reducing font size or line-height simply to force fit, and never distort the design.
- Aim for coherent full-section reading in the initial desktop/notebook viewport **when practical**. If 1366×768 or 1920×900 cannot fit without sacrificing legibility, allow natural scrolling and report the exact tradeoff; do not clip, use `overflow:hidden`, force fixed `height:100vh`, scale the whole section or hide items.
- Tablet and mobile retain their approved natural one-column flow; prevent compact desktop adjustments from overflowing into 768/390/320 responsive layouts.
- The approved UI Construction draws geometry from measured DOM. Revalidate that reducing vertical spacing does not cause ghost traces, displaced outlines, early-reflow cancellation, gaps in the zero-flash coverage or broken sweep. **No timing/contrast/motor/trigger changes** unless strictly necessary to remap measured layout, and never replace the approved motion.
- Verify first-time pointer CTA, navbar, passive scroll, keyboard/direct-hash reduced motion, no-JS/Canvas fallback, and back-navigation remain functional. Check Hero and nav unchanged.
- Compare current and corrected *final-state* screenshots at 1920×1080, 1536×864, 1366×768, 1920×900 and mobile 390/320; report actual computed section top/bottom relative to viewport and header. Show at least one complete construction run after CSS changes. Test build and scoped lint, distinguishing the four known legacy lint errors.
- Update `docs/CURRENT.md` with actual heights, before/after, test evidence, commit SHA, any limitations. Set 03B to `DONE — PENDING DIRECTOR REVIEW` when delivered. **Stop. Block 04 not authorized; no main/merge/deploy.**

**This new feedback does not revoke approval of 03A.** The next review evaluates **only compactness of Selected Work and lack of regressions**.


## 18. Entrega 03B — Altura de Selected Work — 2026-10-22

**DONE — PENDING DIRECTOR REVIEW.** No constituye aprobación de 03B.
Rama `feature/portfolio-2027-foundation`; HEAD inicial sincronizado
`e8546661b87da38a71ce28f5e3531834ac85cd17`.

### Cambio y archivos

- `src/portfolio2027/styles/selected-work.css`: única modificación de producto.
  Desde 1024px, ritmo vertical común `clamp(0.75rem, 4.166667svh - 1.25rem, 1.5rem)`
  y múltiplos jerárquicos para paddings y separaciones. Contenido con altura
  intrínseca, sin recorte ni altura fija. Tipografía, columnas, márgenes laterales,
  reglas, copy y enlaces ≥52px intactos. Tablet/mobile conservan sus valores.
- `docs/qa/block03b/`: script reproducible, JSON antes/después y capturas de los
  siete viewports, Hero y construcción notebook. `README.md` explica evidencia.
- `docs/CURRENT.md`, `AGENTS.md`, `README.md`: estado y gate actualizados.
  No se tocaron motor/hook de motion, navegación, Hero, ASCII, fuentes, dependencias
  ni preview. Sin cambios en main, merge, deploy, dominio o hosting.

### Alturas reales y viewport

| Viewport | Antes | Después | Disponible bajo header | Final sección / enlaces (coordenada Y) |
|---|---:|---:|---:|---:|
| 1920×1080 | 1072px | 1002px | 1016px | 1082 / 937px |
| 1920×900 | 1072px | 826.5px | 836px | 906.5 / 800.5px |
| 1536×864 | 924px | 796px | 800px | 876 / 779px |
| 1366×768 | 868px | 680px | 704px | 760 / 687px |

El ancla existente deja la sección en Y=80px (header64 + separación16).
Por ello, el padding final queda 2/6.5/12px fuera de los primeros tres viewports;
los cuatro enlaces y la línea inferior del grid quedan completos en todos.
No se cambió la navegación para forzar el padding dentro de pantalla.
768×1024, 390×844 y 320×844 conservan 1252/1178/1348px y el flujo apilado.
Capturas estáticas de tablet/mobile y Hero comparadas con ImageChops: idénticas.

### Verificación y problemas

- Chromium153: siete viewports sin overflow horizontal, enlaces ≥52px, scroll
  natural en desktop de 500px de alto; texto raíz 200% a 320px sin desborde.
  Inspección real de desktop/notebook/mobile: jerarquía y espacio negativo conservados.
- Construcción completa en notebook por CTA: A–E, 4200ms, Canvas coincide con
  altura real del marco, altura estable, cobertura en todos los RAF visibles
  previos al final, barrido termina con `complete`, sin guard ni Canvas restante.
  Navbar, scroll pasivo y menú mobile completan; mobile conserva 3000ms.
  No repetición, hash/foco, teclado, reduced motion, Back, Canvas nulo y no-JS PASS.
  Código de motor/hook idéntico al HEAD aprobado; sin adaptación geométrica necesaria.
- `npm run lint`: FAIL por los mismos cuatro no-unused-vars legacy: PrimaryButton:2,
  SecondaryButton:2, Contact:6 y Skills:12. ESLint de `src/portfolio2027` PASS;
  sintaxis del harness y `git diff --check` PASS.
- `npm run build`: PASS (1717 módulos); los nueve artefactos normales coinciden por
  SHA-256 con un build separado del HEAD inicial. Build explícito de preview PASS (42 módulos;
  CSS 22.61kB/gzip 4.75, JS 207.74kB/gzip 65.99).
- Se corrigió una primera escala demasiado amplia durante el ajuste; no quedó
  ninguna regresión detectada. El harness usa páginas nuevas por viewport para
  evitar medir un offset de header anterior al reflow al reutilizar la página.
  Fuentes oficiales servidas solo a QA por la CA del proxy, sin bypass TLS.
  No se instalaron dependencias. Safari/Firefox, dispositivos físicos y entrega
  real de fuentes/CLS siguen pendientes de release, fuera de este ajuste.

### Commits y gate

- Implementación: `49a97ad596ed72bf87558e413441329ce9263b40`
  (`fix: compact Selected Work desktop vertical rhythm`).
- Cierre/evidencia: commit posterior `docs: record Block 03B viewport validation`;
  SHA consultable en historial, sin autorreferencia circular.

**Bloque 04 y posteriores NO AUTORIZADOS. Detener y esperar revisión de Dirección.**

## 19. Director approval of 03B and Block 04 authorization — 2026-10-22

**Decision:** Block 03/03A/03B **APPROVED** after reviewing actual before/after screenshots and CSS. At 1920×1080 Selected Work is 1002px against 1016px available; 1536×864 796px against 800px; 1366×768 680px against 704px. All project actions and lower structural grid rule visible when entering by anchor; a few pixels of final section padding may require natural scroll because the anchor offsets by 80px. Accepted; do not compress further. Approved UI Construction remains 4200ms desktop / 3000ms compact, its pre-armed zero-flash lifecycle intact. This is not release approval; font delivery, CLS, Safari/Firefox and physical device QA remain.

### Active engineering Block 04: ABOUT/STORY + SKILLS/CAPABILITIES

**State: AUTHORIZED — NOT STARTED.** Work only on `feature/portfolio-2027-foundation`, in the isolated `src/portfolio2027` local preview. Preserve default legacy 2025 UI/`main`, no merge/deploy/dependencies.

**Figma About B Story & Timeline:** production `61:508`; desktop `68:523` (1920×1818), tablet `68:576` (768×1910), mobile `68:629` (390×2231), notes `68:682`. **Copy exactly** from these final frames; three narrative chapters with 2021 / 2025 / 2026 markers aligned to their chapter-specific paragraphs, *not a timeline moved to the end*. Intro title “El camino hasta acá.” and transition “Pero mi recorrido no fue una línea recta.” Desktop narrative left + dates right; single-column story/mobile chronology in natural reading order below ~1024. About is intentionally tall: **do not force it to 100vh**, unlike the special Selected Work height refinement.

**Figma Skills A Technical Index:** production `89:556`; desktop `90:556` (1920×1038), tablet `90:634` (768×1039), mobile `90:712` (390×1231). Title “Tecnologías y capacidades.” and exactly three editorial rows: `01 INTERFACES WEB`, `02 BACKEND & DATA`, `03 TOOLS & WORKFLOW`, each with exact description and technologies from Figma. Desktop left editorial title, right structured rows; tablet/mobile vertical; no cards, chips, fake hover/click interactivity or new technology claims.

**Implementation:** Add About and Skills after existing Selected Work, replace only development `#about` and `#skills` placeholders with real semantic sections. Keep `#contact` technical placeholder. Maintain `Hero → Selected Work → About → Skills → Contact placeholder`. Existing nav/hash/focus, scroll offsets, selected work construction and typography must still work. Read foundation tokens and master interaction sheet `92:556`; motion beyond explicitly approved minimal editorial cues should stay static or be labeled proposed, no new dependencies and no UI Construction applied to About/Skills.

**Validation:** exact-copy verification, screenshots versus Figma at 1920, 1536, 1366, 768, 390 and 320; natural height, no horizontal overflow; text reflow/zoom, semantic headings, chronology alignment and anchor focus; first-entry Selected Work motion still performs A–E with no flash and approved timing. Run npm lint/build and scoped lint; isolate the existing four legacy ESLint errors. Record files, browser evidence, commits, limitations and real checks in CURRENT.md, mark `DONE — PENDING DIRECTOR REVIEW` and STOP. **Block 05 and 06 remain NOT AUTHORIZED**.


## 20. Entrega Bloque 04 — About / Story + Skills / Capabilities — 2026-10-22

**DONE — PENDING DIRECTOR REVIEW.** No implica aprobación ni habilita Bloque 05.
Rama `feature/portfolio-2027-foundation`, HEAD inicial sincronizado y verificado
`3246d7af4a8ec566dfce6638322128707d47f515`.

### Implementación y archivos

- `components/AboutStory.jsx`, `styles/about-story.css` bajo `src/portfolio2027`:
  Story & Timeline B, copy completo, tres capítulos, énfasis serif y cronología
  2021/2025/2026. Lectura izquierda de 680/640/600px y fechas derecha de
  360/320/280px. CSS Grid enlaza 2025 a la fila real del párrafo del regreso;
  no hay coordenadas absolutas ni un desplazamiento vertical fijo. Bajo 1024px,
  la misma secuencia DOM intercala cada hito en su momento narrativo, como Figma.
- `components/SkillsCapabilities.jsx`, `styles/skills-capabilities.css`:
  Technical Index A, título izquierdo e índice derecho; flujo vertical en tablet
  y mobile, tres entradas informativas con h3 y lista ordenada. Copy/tecnologías
  íntegros; espacios inseparables de Tailwind CSS y REST APIs conservados.
  Sin controles, enlaces nuevos, iconos, tarjetas ni cursor de acción.
- `preview/PortfolioPreview.jsx`: integra las secciones tras Selected Work y
  sustituye exclusivamente los dos placeholders. Contact conserva su placeholder.
- `preview.html`: fallback sin JS con historia y capacidades completas; conserva
  Hero, proyectos, enlaces y placeholder Contact existentes.
- `src/portfolio2027/README.md`: contrato y límites; `AGENTS.md`, `README.md` y
  esta bitácora: estado. `docs/qa/block04/`: referencias de copy/motion obtenidas
  de Figma, scripts, resultados, capturas completas y evidencia de regresión.

No se modificaron Hero, navegación/hook/anclas, Selected Work, motor/hook de
construcción, ASCII, tokens/fuentes, legacy 2025 ni dependencias/lockfile.
No main, merge, deploy, dominio o hosting. Se reutilizó tooling externo de QA en
/tmp, separado de los paquetes del proyecto.

### Fidelidad y decisiones

Se leyeron completos los contextos y renders de About 68:523/576/629 y notas
68:682 dentro de 61:508, y Skills 90:556/634/712 dentro de 89:556. Retícula,
separaciones, escalas, colores, orden y énfasis contrastados con capturas reales.
No se utilizaron propuestas descartadas ni imágenes del diseño como interfaz.

| Ancho | Altura About | Altura Skills | Referencia / adaptación |
|---|---:|---:|---|
| 1920px | 1818px | 1038px | Coincide con ambos frames finales |
| 1536px | 1682px | 985px | Tipografía/lectura intermedia, altura natural |
| 1366px | 1640px | 979px | Tipografía/lectura notebook, altura natural |
| 768px | 1910px | 1039px | Coincide con ambos frames tablet |
| 390px | 2231px | 1231px | Coincide con ambos frames mobile |
| 320px | 2381px | 1305px | Reflow completo; About aplica notas de compresión |

No se fijaron estas alturas. About conserva lectura progresiva y scroll; no se
extendió el ajuste de compactación de Selected Work a otras secciones. El gutter
existente a 390px es 24.375px, frente a 24px redondeados en Figma; se conserva.
Persisten diferencias menores de métricas/rasterización web, sin deformar fuentes.

**Motion:** la matriz 92:556 era una respuesta estructural; se consultaron sus
filas completas 104:781/807/833/859/885/911/937. Entradas About, énfasis fecha/línea,
entrada Skills, trazado de separadores y hover del número están **Proposed**.
Por instrucción del brief, About/Skills permanecen estáticas, con texto siempre
visible y seleccionable. Efectos pendientes de aprobación explícita. No se
instalaron bibliotecas ni se reutilizó UI Construction para estas secciones.

### Pruebas efectivas

- Chromium153, 1920×1080, 1536×864, 1366×768, 768×1024, 390×844 y 320×844:
  copy contra extracción de Figma, tres capítulos/entradas, h1/h2/h3 y lista,
  lectura/fechas, fuentes cargadas, anchors, foco y ausencia de overflow PASS.
  Capturas de sección completa para About y Skills en los seis anchos; inspección
  visual de jerarquía, columnas, párrafos, fechas, líneas y flujo mobile.
- Mi historia, todos los destinos desktop y menú mobile, cierre de menú,
  teclado, hash, Back y offset sticky 80/72px PASS sin cambiar navegación.
- Texto raíz 200% a 320px sin overflow y última capacidad alcanzable. Fallo de
  fuentes mantiene historia completa y reflow. Fallback sin JS con historia y
  tres capacidades PASS. No equivale a probar zoom de interfaz de cada navegador.
- Contraste textual calculado contra #080808: primario 17.42:1, secundario8.72:1,
  auxiliar4.87:1. Sin errores de consola ni page errors en los contextos normales
  monitorizados; fallos de red de la prueba de fuentes se indujeron aparte.
- Hero pixel-idéntico en seis viewports. Selected Work pixel-idéntico dentro de
  sus límites visibles en los seis; a 1366 desaparece solo la antigua línea
  técnica del placeholder siguiente, en Y760, fuera de Selected Work.
- Construcción real completa por CTA/navbar/scroll: A–E, 4200ms notebook y 3000ms
  mobile, geometría de marco correcta, cero RAF visible sin cobertura previa,
  sin saltos y sin Canvas/guard tras finalizar. No repetición, teclado/hash,
  reduced motion, Back, Canvas nulo y no-JS PASS. Interrumpir por movimiento
  reducido/cambio de tamaño elimina capa; no se siguen dibujando frames después.
- `npm run lint`: FAIL por los mismos cuatro no-unused-vars legacy: PrimaryButton:2,
  SecondaryButton:2, Contact:6 y Skills:12. ESLint específico 2027 PASS.
- `npm run build`: PASS (1717 módulos, CSS69.58kB/gzip10.67, JS237.77kB/gzip71.37);
  preview explícita PASS (46 módulos, CSS32.56kB/gzip6.12, JS212.91kB/gzip67.63). Los nueve artefactos
  del build normal coinciden por SHA-256 con build separado del HEAD inicial.
- Sintaxis de ambos scripts y `git diff --check` PASS. Sin dependencias nuevas
  de aplicación, cambios de configuración de build ni montaje de 2027 en 2025.

### Problemas resueltos y límites

Se corrigieron 2/4px de altura mobile al aplicar los interlineados exactos de
los títulos Figma, sin reducir texto. Una corrida de QA de construcción fue
interrumpida por recarga de Vite al editar el fallback; repetida después de
terminar las ediciones: PASS. La primera comparación de viewport incluía la
línea del placeholder retirado; se verificó el límite real de Selected Work.
No se cambiaron bloques aprobados para adaptar las pruebas.

Fuentes CSS/TTF oficiales obtenidas con TLS válido y servidas solo a QA por la CA
del proxy; sin bypass de certificados ni redistribución de fuentes. Pendientes
antes de release: entrega real de fuentes/CLS, Safari/Firefox, dispositivos
físicos, lectores de pantalla y zoom de navegador. Sin otras regresiones detectadas.

### Commits y gate

- Implementación: `315d9c5a765851f3326ba9d5b8c0379934da37be`
  (`feat: integrate editorial About story and Skills capabilities`).
- Cierre/evidencia: commit posterior `docs: record Block 04 implementation and QA`;
  SHA consultable en historial, sin hash circular dentro del mismo commit.

**Bloques 05–06 NO AUTORIZADOS. Detener y esperar revisión de Dirección.**

## 21. Director review of Block 04 and Block 05 authorization — 2026-10-26

**DIRECTOR DECISION:** Block 04 **APPROVED** after reviewing actual captured browser desktop/mobile About and Skills views, source JSX/CSS, Figma final production references and QA log `docs/qa/block04`. About's 2021/2025/2026 chronology stays aligned to relevant story paragraphs (including within mobile reading sequence); Skills has precisely the approved three static capabilities with consistent editorial hierarchy. Exact copy and responsive behavior reviewed. Chromium responsive/nav/reduced-motion/previous-block regression checks reported PASS, production 2025 bundle unchanged, scoped lint PASS and global lint still only has four known legacy errors. These records are engineer-executed browser checks reviewed via repo artifacts; Director did not independently run browser in this environment. Blocks 01–04 now closed for visual changes except specifically approved regressions. Pending release QA still includes browser/device/font/CLS and assistive-tech testing.

### Engineering Block 05 — CONTACT / CLOSING + FULL PREVIEW INTEGRATION

**Status: AUTHORIZED — NOT STARTED**. Work exclusively on `feature/portfolio-2027-foundation` and within isolated Portfolio 2027 preview. **No `main` changes, merge or deploy.** Block 06 remains NOT AUTHORIZED.

**Approved Figma Contact A / Editorial Sign-off:** production `89:557`; desktop `90:790` (1920×1077), tablet `90:829` (768×839), mobile `90:868` (390×827); approved original `84:557`. Interaction state study `92:983` and master `92:556` contain **proposals** and do not authorize decorative motion. Preserve black monochrome editorial / huge Instrument Serif italic “Hablemos.”, index `05 / CONTACT`, headline's negative space, primary mailto, supporting copy, editorial secondary links, structural rule and minimal footer.

**Literal content and verified destinations:**
- Email label `EMAIL`, primary address `ezexgonzalez@outlook.com`, `mailto:ezexgonzalez@outlook.com`; supporting copy: `Si tenés una propuesta, una oportunidad o una idea para compartir, me gustaría conocerla.`
- `LinkedIn` → `https://www.linkedin.com/in/ezexgonzalez/`
- `GitHub` → `https://github.com/ezexgonzalez`
- `Descargar CV` → `/cv-ezequiel-gonzalez.pdf` from verified tracked file `public/cv-ezequiel-gonzalez.pdf` (blob SHA `1e6bd92f2a812528cafc5c0d3fdda1d5d3ccc096`). Verify response and PDF signature in preview and check content currency before launch; **do not replace the file with an invented PDF.**
- Figma shows `© 2027 Ezequiel Gonzalez` as design placeholder. Production implementation should derive year dynamically via current local year (e.g. `new Date().getFullYear()`); preserve exact owner name and minimal footer styling. It can read `© 2026` while the site is in 2026; do not hardcode 2027 or invent a business legal identity.

**Integration scope:** Add Contact after existing Skills, remove only `#contact` temporary placeholder, preserving `Hero → Selected Work → About → Skills → Contact + footer`. Existing header/nav hashes, identity, CTA, sticky scroll offsets and menu must continue to work. Confirm external URLs, mailto and CV target accessible with keyboard/touch and no unintended download target error. Keep `src/portfolio2027/preview.html` marked `noindex,nofollow` as a development preview. Do not redirect default `/` from 2025, and do not alter global production SEO/head until the explicit release/integration authorization in later gate.

**Responsive/interaction:** Respect Contact desktop/tablet/mobile widths including 1920/1536/1366/768/390/320. Large headline no clipping. Long email wraps/scales deliberately at 320 without broken characters or overflow; message and email stack below 1024; secondary links in accessible rows below ~640. Real links must have focus-visible, hover on pointer devices, pressed/touch feedback, sufficient targets; no fabricated CTA button/cards, new content or social icons. Hover/focus states are functional affordances; speculative motion or large reveals must not be added by default. Reduced motion no transition dependencies.

**QA and evidence:** Actual browser viewport/full-length captures desktop/tablet/mobile; compare Contact against Figma and complete end-to-end continuous scroll from Hero to closing footer. Audit navigation click/tap/focus/hash/back, mailto, CV PDF response/bytes and download behavior, all external links, 320px text reflow and 200% root text, no horizontal overflow, keyboard/focus order, reduced motion, no-JS fallback, dynamic year and no console errors. Regression check earlier blocks, especially Selected Work A–E zero-flash 4200/3000 motion. Run `npm run lint`, `npx --no-install eslint src/portfolio2027`, `npm run build` and isolated preview build; separate four known legacy lint errors. No new significant dependencies; no changes to `main`, production domain/DNS/hosting or Vercel/Cloudflare.

**Delivery:** file and commit list, real QA results, Contact and full-page comparison screenshots, link/PDF verification, validation of approved earlier work; update `docs/CURRENT.md` at end as `DONE — PENDING DIRECTOR REVIEW`, not approved. **STOP. Block 06 NOT AUTHORIZED until Director review.**


## 22. Entrega Bloque 05 — Contact / Closing + experiencia completa — 2026-10-26

**DONE — PENDING DIRECTOR REVIEW.** No implica aprobación ni publicación.
Rama `feature/portfolio-2027-foundation`; HEAD inicial sincronizado/verificado:
`657e3153da0e7cd296fccb12d2095b1ac0fb174b`.

### Implementación y archivos

- `src/portfolio2027/components/ContactClosing.jsx` y `styles/contact-closing.css`:
  Contact A Editorial Sign-off, copy completo, Hablemos. en Instrument Serif,
  email nativo subrayado, mensaje, LinkedIn/GitHub ↗ y descarga CV ↓. Cada texto
  e indicador forman un solo enlace, con objetivos ≥44px; filas completas en mobile.
  Foco existente de 2px/separación4px, hover preciso y feedback al presionar sin
  transformaciones ni animaciones. Un footer mínimo obtiene el año local con
  `new Date().getFullYear()`; muestra 2026 y pasó prueba con calendario2031.
- `preview/PortfolioPreview.jsx`: reemplaza el último placeholder por Contact,
  conservando cinco secciones, un main y navegación existente. `preview/preview.css`:
  elimina solo reglas del placeholder retirado. No se tocó el reset del documento.
- `preview.html`: fallback legible con Contact y sus cuatro enlaces nativos;
  sin JavaScript, firma sin año fijo. Conserva noindex/nofollow y el contenido previo.
- `src/portfolio2027/README.md`, `AGENTS.md`, `README.md`, esta bitácora y
  `docs/qa/block05/`: contrato, estado, scripts, JSON, referencias Figma y capturas.

No se modificaron componentes/estilos/hooks de Hero, Navigation, Selected Work,
UI Construction, About o Skills, fuentes/tokens, package.json/lockfile, PDF,
entrada legacy 2025, main, SEO de producción, dominio, DNS o hosting. Sin merge
ni deploy. Tooling de navegador externo al proyecto en /tmp, sin nuevos paquetes
para la aplicación. No se inició Bloque 06.

### Fidelidad y continuidad

Se leyeron contextos completos y renders 90:790/829/868 dentro de producción89:557,
estados92:983 y las once filas Contact de la matriz92:556 (104:963 a104:1223).
Las entradas y movimientos decorativos son Proposed; se conservó presentación
estática, con las convenciones funcionales autorizadas para enlaces reales.
No hay formulario, tarjetas, imágenes, nuevo ASCII o construcción adicional.

| Ancho | Altura Contact | Headline / email | Referencia |
|---|---:|---:|---|
| 1920px | 1077px | 240 / 44px | Frame final1920×1077 |
| 1536px | 888.20px | 192 / 35.2px | Adaptación fluida desktop |
| 1366px | 869px | 176 / 32px | Adaptación notebook |
| 768px | 839px | 136 / 32px | Frame final768×839 |
| 390px | 827px | 88 / 24px | Frame final390×827 |
| 320px | 813px | 76 / 22px | Correo completo en una línea; reflow al ampliar |

Alturas naturales, sin recorte ni obligación de100vh. Se conserva gutter390px
24.375px del foundation. A768×1024 el final del documento limita el scroll y deja
Contact en Y185px; no se añade un espaciador para forzar el offset72px. Los demás
anclajes siguen offset80/72px y foco correcto. No es un defecto de navegación.
Capturas integrales reales: desktop1920×6015 y mobile390×6367; se comprobaron las
cuatro uniones, fondo, márgenes, separadores y ritmo sin alterar secciones previas.

### Enlaces y CV

- mailto exacto, activación por mouse/teclado/touch sin preventDefault. El entorno
  headless no dispone de cliente de correo: no se afirma apertura de una app real
  ni envío de mensajes. Texto seleccionable comprobado con selección DOM real.
- LinkedIn y GitHub abren destinos aprobados en pestaña separada con protección
  noopener/noreferrer. El despacho de URL se probó interceptando la navegación;
  las respuestas HTTP reales se midieron aparte con curl y TLS válido.
- GitHub de perfil y cuatro destinos de proyectos: HTTP200. **LinkedIn: HTTP999**
  en la sonda automatizada; no se declara disponible ni roto por esa respuesta.
  Requiere comprobación manual del perfil antes de publicar. No se cambió su URL.
- `/cv-ezequiel-gonzalez.pdf`: HTTP200, application/pdf, firma%PDF-, versión1.4,
  1página, 47841bytes; SHA-256
  `322c600b3c5300231a24e7c6299d6be3ee346fb72e0a9300ce2c8a3a169d12c6`.
  Descargas reales con mouse, Enter y touch emulado: nombre y bytes idénticos al
  original. Blob Git conservado1e6bd92f2a812528cafc5c0d3fdda1d5d3ccc096.
  La vigencia del contenido queda pendiente de revisión del dueño antes de release.

### Validaciones efectivas

- Chromium153: 1920×1080, 1536×864, 1366×768, 768×1024, 390×844, 320×844;
  Contact, correo completo, jerarquía, objetivos táctiles y ausencia de overflow.
  Scroll continuo desktop/mobile: todos los estados activos, header sticky estable,
  sin solapamientos nuevos. Click, menú/cierre, foco, hash directo, Back/Forward,
  teclado y orden email→LinkedIn→GitHub→CV PASS. Foco, hover y pressed verificados.
- Texto raíz200% a320px: correo y acciones completos, sin overflow, scroll natural.
  Fallo de fuentes mantiene Contact y enlaces legibles. Sin JS permanecen los
  cinco destinos y contenido de las cinco áreas (Hero sigue como h1 del fallback).
- Comparación de24 pares de capturas: Hero y secciones completas Projects/About/
  Skills pixel-idénticos frente a HEAD inicial en los seis anchos. JSON de
  regresión retenido; pares idénticos se omiten del commit para no duplicar assets.
- Construcción completa A–E, zero-flash,4200/3000ms, geometría real, CTA/navbar/
  scroll y mobile, ejecución única, hash/teclado, reduced motion, Canvas nulo y
  cleanup PASS. Interrupciones por preferencia/cambio de tamaño retiran overlays
  y detienen dibujo. ASCII activo en Hero se pausa al llegar a Contact, sin dibujos
  adicionales fuera de pantalla. No errores de consola/page errors en contextos
  normales monitorizados; los fallos de protocolo/fuentes se probaron aparte.
- `npm run lint`: FAIL solo por cuatro no-unused-vars legacy: PrimaryButton:2,
  SecondaryButton:2, Contact:6 y Skills:12. ESLint específico2027 y sintaxis de
  tres scripts PASS. `git diff --check` PASS.
- `npm run build`: PASS,1717módulos; CSS69.58kB/gzip10.67, JS237.77kB/gzip71.37.
  Los nueve artefactos estándar son idénticos por SHA-256 al build del HEAD inicial.
  Preview explícita PASS,48módulos; CSS36.83kB/gzip6.71, JS214.35kB/gzip67.91.

### Problemas y límites

Se corrigió una expectativa del harness: el fallback tiene Hero como h1, no como
section; no se cambió Hero para ajustar esa prueba. Una captura parcial de Contact
recortaba el dibujo del copyright en390px; las capturas de Contact se extraen ahora
por sus límites DOM de capturas integrales del navegador, con footer completo y
sin editar el producto para adaptar la captura.

Fuentes oficiales CSS/TTF obtenidas con TLS válido y servidas solo a QA por la CA
del proxy; sin bypass de certificados ni redistribución. Pendientes: LinkedIn
manual, vigencia CV, cliente mailto real, entrega de fuentes/CLS, Safari/Firefox,
dispositivos físicos, lectores de pantalla y zoom de interfaz de navegador.
La prueba200% corresponde a texto raíz, no a afirmar zoom real de todos los browsers.
No otras regresiones detectadas ni cambios fuera del alcance de integración.

### Commits y siguiente gate

- Implementación: `e8507b93882027911c6602de1cbf5543979836de`
  (`feat: add editorial Contact closing and complete isolated preview`).
- Cierre/evidencia: commit posterior `docs: record Block 05 integration and QA`;
  SHA consultable en historial, sin hash circular en el mismo commit.

**Bloque 06 NO AUTORIZADO. Esperar revisión de Dirección. Sin publicación implícita.**

## 23. User feedback — Engineering Block 05A authorized (2026-10-26)

**Scope:** Three precise interaction refinements before Block 06. Block 05 was delivered but still pending final Director acceptance after Block 05A. No other design redirection or release authority.

**A / UI Construction pointer-click fix.** `src/portfolio2027/hooks/useUiConstruction.js` unconditionally calls `finish('pointer-access')` in a `pointerdown` handler on Selected Work, and its `focusin` handler can also end animation when a pointer click focuses a project link. Fix this: any normal mouse/touch press or click within the still-visible Selected Work section must **not abruptly finish, cancel, accelerate, replay or restart** the approved A–E UI Construction. Project links must remain operable; don't intercept/block clicks with overlays. Clicking to navigate offscreen or away permits normal cleanup. Preserve keyboard/assistive access fail-open, reduced-motion, errors/Canvas failure, tab hidden, offscreen and unmount cleanup, zero-flash, one-shot, geometry, and exactly 4200/3000 ms natural timing. Distinguish focus caused by pointer from keyboard focus. Verify click on blank area and live links during phase B/C/D; ensure `data-construction-reason=complete` if it normally finishes on screen.

**B / Refresh should reset animations after internal navbar navigation.** `src/portfolio2027/hooks/useAnchorNavigation.js` currently pushes visible persistent `#id` via `history.pushState(null,'','#'+id)`. Its initial restore from hash and construction's initial `location.hash` fail-open cause skipped motion after reload. For **internal UI links**, use a **clean URL** (no persistent `#section`), but preserve semantic native anchor href, keyboard, touch, accessible focus, smooth/reduced scroll, actual browser history Back/Forward (multiple distinct destinations), sticky offset and no-JS fallback. Prefer same-document `history.pushState` with destination stored under a namespaced `history.state` key, clean pathname + query, and popstate navigation; preserve unrelated state. Internal navigation then reload should **start at Hero and re-arm first-entry one-shot animations** (including browser scroll restoration behavior), even after refresh at former `#about` or `#projects`. External/explicit deep links entered with a real `#id` must keep working and may intentionally display motion's final accessible state. Do not globally strip external hashes, break scroll and history, or add extra navigation.

**C / Add intentional Skills motion and hover.** Owner now explicitly authorizes visual enrichment **only in Skills**: approved Figma layout `89:556` / responsive `90:556`, `90:634`, `90:712`, motion master proposal rows `104:833`, `104:859`, `104:885`, `104:911`, `104:937`. Retain the three static informational categories, typography, text, structural grid. Implement restrained but perceptible one-time editorial title movement 6→0px (~220–350ms), 3 separator left-to-right strokes (~450–650ms per stroke; light stagger desktop, simultaneous/simpler mobile) triggered by scrolling into Skills, all text visible from initial render and no faded paragraphs. Add subtle hover on category number `#ABABAB`→`#EFEFEF` (~150–220ms) **only for devices with precise hover**, with optional modest rule contrast. Nothing should seem clickable: no cursor pointer, role/button/tabstops or new links. No loops, no new packages, no Skills UI Construction. Reduced motion, direct hash, keyboard and no-JS show full static state; one-shot, fail open, no extra height or reflow. Verify the motion is actually visible in normal scrolling.

**Deliverables and gate:** Actual Chromium browser evidence for pointer click during build; reload from internal About/Projects visit (reset top and replay); clean URL after nav, history Back/Forward, explicit hash deep links, no-JS, focus, reduced motion; Skills entry/hover/mobile results. Cover 1920×1080, 1366×768, 390×844, 320px; verify no changes/regressions to Hero, Navigation visual, Selected Work layout/final motion, About, Contact, PDF or links. Run npm lint/build and scoped 2027 lint; distinguish existing four legacy errors. Update this CURRENT.md at completion with source files, commits, measurements and evidence, `DONE — PENDING DIRECTOR REVIEW`; STOP. **Block 06 NOT AUTHORIZED. No main/merge/deploy.**


## 24. Entrega Bloque05A — Puntero, historial y Skills motion — 2026-10-26

**DONE — PENDING DIRECTOR REVIEW.** No se declara aprobación ni se inicia06.
Rama `feature/portfolio-2027-foundation`; HEAD inicial sincronizado/verificado
`1fa67057111fd952125dec8999a1baecda0ec330`.

### Causa, solución y archivos

- `hooks/useUiConstruction.js`: se eliminó la finalización incondicional de
  pointerdown. El foco nativo asociado al puntero se permite solo para el elemento
  enfocable exacto presionado, consumiendo una autorización por gesto. Se limpia
  al hacer clic, cancelar puntero, usar teclado y al finalizar/desmontar; límite
  post-pointerup500ms para gestos sin clic. Se conserva el permiso específico del
  foco de navegación a Projects. No se bloquean enlaces ni se cambia Canvas,
  fases, geometría, contraste, velocidad4200/3000ms o ejecución única.
  Foco programático/teclado, reduced motion, error, salida real y cleanup siguen
  resolviendo a final. Los temporizadores nuevos se liberan junto a los existentes.
- `hooks/useAnchorNavigation.js`: destinos bajo
  `history.state.portfolio2027.destination`, conservando otras claves y query.
  Navegación interna escribe URL limpia y evita duplicar entradas al repetir el
  mismo destino. Back/Forward restaura cada destino/foco/offset. Los href nativos
  siguen siendo#id. Un documento nuevo sin hash reinicia la entrada actual en Hero;
  un hash explícito conserva su deep link. Restauración manual desde layout effect
  y alineación tras fuentes; una navegación anterior invalida la alineación inicial.
  La carga inicial en Hero no añade foco/contorno sobre el nombre.
- `hooks/useSkillsMotion.js` (nuevo), `components/SkillsCapabilities.jsx` y
  `styles/skills-capabilities.css`: referencia a sección y lifecycle de una sola
  entrada, animaciones CSS de título/líneas, hover de índice. Un observer mira
  título/primera entrada al15%, deja de observar cada objetivo al disparar; no hay
  medición de layout ni bucle RAF en el código de Skills. Eventos animationend
  restauran los bordes originales; watchdog2s evita una línea incompleta si falla
  el evento. Foco/ancla/deep link, movimiento reducido, página oculta, reflow
  activo, falta de observer y errores de setup muestran final; cleanup aborta
  listeners, observer y timers. Texto siempre visible; no roles/enlaces nuevos.
- `src/portfolio2027/README.md`: contrato vigente. `AGENTS.md`, `README.md`, esta
  bitácora y `docs/qa/block05a/`: estado, pruebas, JSON, capturas y dos videos reales.

No se tocaron Hero/ASCII, motor uiConstruction.js, Selected Work JSX/CSS/altura,
About, Contact, navegación visual, preview HTML, fuentes/tokens, PDF, enlaces,
footer, legacy2025, dependencias/lockfile, main, hosting, dominio ni SEO.
Sin instalaciones, merge o deploy. No exploraciones/ediciones de Figma.

### Motion Skills y origen

Releídos frames90:556/634/712, filas104:833/859/885/911/937 del master92:556.
La API get_motion_context para90:556 devolvió nodes vacío: no se afirma importar
keyframes nativos. El brief05A autoriza desarrollar las propuestas y sustituye
sus tiempos anteriores por esta implementación medida:

| Efecto | Desktop | Compacto (<1024px) |
|---|---|---|
| Título | 6→0px,300ms | 4→0px,220ms |
| Tres trazados | 550ms, delays0/110/220ms | 450ms simultáneos |
| Hover de índice | #ABABAB↔#EFEFEF,180ms | Solo si existe hover preciso |

Curvas: título cubic-bezier(.22,1,.36,1), líneas cubic-bezier(.2,.8,.2,1),
hover ease-out. Solo transformaciones del título y pseudolíneas; sin opacity,
reflow, cambios de párrafos o tecnologías, flechas, tarjetas, puntero de botón,
segundo UI Construction o loops. Reglas de cierre/índice permanecen estáticas.
About conserva sus efectos propuestos sin implementar; no se amplió autorización.

### Pruebas ejecutadas

- Chromium153: seis anchuras1920/1536/1366/768/390/320, sin overflow; finales y
  reduced motion capturados. Heights/layout finales permanecen iguales a HEAD
  inicial. Skills conserva1038/985/979/1039/1231/1305px respectivamente.
- **Puntero:** clic/tap sobre vacío, nombre y enlace de proyecto en B, C y D;
  tres activaciones de enlace por contexto sin preventDefault del producto.
  Para medir final en pantalla se impidió salir solo en listener de QA, no en
  código de aplicación. Ambos recorridos incluyen A–E, cero RAF visible previo
  al final sin cover, y terminan complete. Otra prueba deja navegar realmente
  al destino externo durante el build (respuesta interceptada tras despacho).
  No bloqueo de enlaces. Teclado/foco programático, reduced motion, cambio de
  tamaño y Canvas nulo siguen finalizando/limpiando correctamente.
- **Historial:** About→Skills→Contact añade exactamente3 entradas, repetir Contact
  no duplica; query y estado ajeno preservados; Back/Forward recorre los3 destinos
  y Hero. URL limpia y foco correcto. Recargar desde About y Projects lleva a
  scrollY0, construction waiting y Skills waiting; volver a Projects reproduce
  una construcción completa nueva. Deep links explícitos Projects/Skills en
  documento nuevo son finales accesibles y conservan hash. Menú touch cierra,
  actualiza foco y deja URL limpia. Sin JS se conserva navegación nativa#about.
- **Skills:** videos CDP con reloj real1920/390, estados/transforms por RAF de QA,
  progreso distinto entre líneas desktop y simultáneo compacto, título6/4→0,
  texto siempre visible, altura estable, final completo y sin repetición. Hover
  verificado de171 a239 y vuelta, con valor intermedio y cursor normal. Movimiento
  reducido durante entrada deja cero animaciones CSS activas/bordes completos.
  Texto raíz200% a320 sin overflow. Skills aislado sin observer falla abierto;
  desmontaje activo sin errores. No se probaron lectores de pantalla reales.
- **Regresiones visuales:** 30 pares. Hero, Projects, About, Skills finales y
  Contact compacto:27 pares pixel-idénticos. Contact desktop presenta solo
  diferencias de1/255 en203/120/24 píxeles a1920/1536/1366, en bordes de glifos
  Hablemos.; sin cambio de fuente/geometría/copy o código Contact. Pares retenidos
  para revisión; no se declara identidad absoluta de esos3. Reproducción en QA.
- `npm run lint`: FAIL por los4 no-unused-vars legacy conocidos en PrimaryButton:2,
  SecondaryButton:2, Contact:6 y Skills:12. ESLint2027, sintaxis QA y diff whitespace
  PASS. `npm run build`: PASS,1717módulos,9 artefactos idénticos por SHA-256 a
  baseline. Preview PASS,49módulos, CSS39.14kB/gzip7.05 y JS217.54kB/gzip68.73.

### Problemas y límites

Durante la comparación se detectó/corrigió el foco no solicitado de Hero al cargar.
Un test trataba cambio de fragmento en el mismo documento como carga externa;
se fuerza documento nuevo para esa comprobación. Una corrida se interrumpió por
HMR al editar el hook; repetida con código estable, PASS. No se cambiaron otros
bloques para adaptar capturas. Textos/URLs/PDF anteriores permanecen intactos;
no se repitió sonda HTTP de servicios externos, cuya limitación LinkedIn999 sigue
registrada en05. Fuentes oficiales servidas solo a QA por CA del proxy, sin bypass
TLS ni redistribución. Pendientes release previos (navegadores/dispositivos reales,
lectores de pantalla, entrega de fuentes/CLS, cliente mailto y vigencia CV) siguen
vigentes. No se declara aprobada la presencia visual de Skills sin Director review.

### Commits y gate

- Implementación: `7bfdb07ae39a2fe6fd9ac406c20f7e52b59ddbbf`
  (`fix: preserve pointer construction, clean navigation and animate Skills`).
- Cierre/evidencia: commit posterior `docs: record Block 05A interaction validation`;
  SHA consultable en historial, sin autorreferencia circular.

**Bloque06 y publicación NO AUTORIZADOS. Finalizar y esperar revisión de Dirección.**

## 25. Director approval of Block 05/05A and Block 06 authorization — 2026-10-26

**DIRECTOR DECISION:** Block 05 Contact/Closing and Block 05A interaction refinements **APPROVED FOR FINAL QA**, not approved for production release. Verified in repository: `hooks/useUiConstruction.js` now distinguishes pointer-initiated focus from keyboard/assistive focus; click no longer finishes A–E on the same visible section, retains 4200/3000ms and accessible interruption; `hooks/useAnchorNavigation.js` maintains internal clean URLs with namespaced `history.state.portfolio2027.destination`, preserves Back/Forward and explicit hashes, resets new-document clean-URL refresh to Hero; `hooks/useSkillsMotion.js` and Skills CSS add restrained title movement, per-row structural line drawing and precise-hover index contrast without hiding text or altering geometry. Owner requested progression to Block 06.

**Evidence reviewed, not independently reproduced by Director:** `docs/qa/block05a` browser screenshots (Skills early/middle/final and hover), reports, videos listed in repo, source and initial/final regression results. Engineer-reported Chromium153 tests cover 1920/1536/1366/768/390/320; pointer click construction, normal project navigation, clean URLs, multi-entry Back/Forward, reload reset, explicit deep links, no-JS, reduced motion, static fallback, hover and failed APIs. Build and scoped lint PASS; `npm run lint` still fails only four recorded unused-vars issues in legacy 2025 code. Contact 05 has validated PDF response, email/link semantics, dynamic footer, no regression. Browser-device and release checks remain outstanding. Slight 1/255 antialiasing difference in a handful of Contact glyph pixels does not justify altering Figma typography.

### ACTIVE ENGINEERING BLOCK 06 — FINAL VISUAL QA & OPTIMIZATION

**Status: AUTHORIZED — NOT STARTED.** Authorized only on `feature/portfolio-2027-foundation`, *isolated production-built 2027 preview plus local dev preview for diagnosis*. Existing 2025 default entry on `main` is **protected**, no merge, deployment, domain/DNS/hosting changes. No automatic transition to publication.

**Audit scope / priorities:**
1. Establish reproducible baseline from current HEAD and approved Figma sources; validate continuous page and all five sections, Full HD and reduced-height notebooks, tablet and 390/320px mobile. Compare output to actual Figma production frames. Capture usable screenshot evidence and classify real visual defects.
2. Production-like **preview build** should be used for primary QA; dev server is not equivalent. Check fonts in a normal supported delivery path (loading, swaps, layout shifts, errors); do not rely solely on proxy fixtures. Verify no unintended exposure of preview to search indexing (it is `noindex,nofollow`) or rewire default production app.
3. Behavior: full navigation incl. clean internal URLs, native deep links, Back/Forward, refresh starts Hero, keyboard/focus/menu/touch/hash, hover, native PDF/link actions, and dynamic copyright. UI Construction A–E zero-flash/first visit 4200/3000ms, pointer click safe, reduced motion/keyboard/assistive fail-open, Canvas fallback, no hanging RAF/timers; Hero ASCII lifecycle/pause/cleanup. Skills editorial effect one-time with texts continuously available; no unexpected motion on return.
4. Accessibility: semantic h1–h3, landmarks, link names, focus visible and logical keyboard/tab order, target sizes, contrast, 200–400% zoom/reflow, screen reader when supported, reduced-motion/forced-colors/high contrast where practical, JS-disabled fallback, no content permanently masked. Record untested physical/AT configurations instead of claiming success.
5. Performance: measure lab LCP, CLS, INP proxy/lab interactivity with explicit browser/throttling details (do NOT label lab figures field CWV), Lighthouse mobile/desktop if available, JS/CSS/fonts transferred, Total Blocking Time, Canvas FPS/CPU, memory/RAF and cleanup, layout/shifts. Compare before/after objectively and avoid arbitrary dependence on a Lighthouse score. Prefer targeted CSS, asset/font and lifecycle fixes; no new large dependencies.
6. Technical/SEO readiness: validate `lang=es`, heading/metadata/head plan for future production root, canonical `https://ezegonzalez.dev/` only on production entry, title/description/OpenGraph/favicon/robots/sitemap/404 as **audit/release checklist**. The preview remains noindex; **do not modify live 2025 root or publish yet**. Verify Eze Web Studio `https://ezewebstudio.com.ar/` and Task Manager links, repositories, LinkedIn (previous automated HTTP999 requires manual browser check), GitHub profile, mailto and `public/cv-ezequiel-gonzalez.pdf`; CV content currency needs owner signoff.
7. Security/build hygiene: inspect accidental secrets, unsafe target behavior, outdated/unused deps by supported evidence, no new package unless separately authorized; maintain 2025 build output unchanged, `main` untouched. Distinguish global legacy ESLint errors from newly introduced issues; do not refactor old site merely to make a metric green.

**Remediation authority:** Agent may fix **confirmed P0/P1 defects** within isolated 2027 preview if changes are narrow, justified and regression-tested; P2 polish and visual redesign, copy changes, motion tuning, third-party packages, SEO production entry changes or hosting configuration require explicit Director decision. Prior approved design and motion are **frozen** except correction of a demonstrated defect. No browser test suite explosion; focus on targeted evidence of real risks. If a critical issue requires broad architecture change, stop that subtask and recommend a separate approval.

**Findings rubric:** `P0` blocking functionality/accessibility/production safety, `P1` important issue before release, `P2` small improvement, `Verified` and `Not tested` explicitly distinguished. Report absolute reproducible steps, viewport/browser/device, current and expected result, severity, evidence and fix if made. All `P0`/`P1` must be resolved or explicitly accepted by owner for release readiness; unresolved external manual checks remain `PENDING`, not `PASS`.

**Deliverables:** baseline SHA, changed files and commit(s), a short prioritized QA report and real screenshots of full desktop/mobile (plus targeted before/after), test matrix, web performance audit with real numbers and environment, accessibility/links/SEO readiness matrix, unchanged legacy 2025 build proof, and **a release checklist / exact safe migration plan for later authorization**, not an actual merge, deploy or DNS action. Record results in `docs/qa/block06/` and update this `docs/CURRENT.md` to `DONE — PENDING DIRECTOR REVIEW` if complete. **STOP and await explicit approval for any publication phase.**

**Hard prohibition:** No `main` modifications, merge/rebase into production, deployment, Vercel/Cloudflare project/settings edits, DNS/domain changes, noindex removal from isolated preview, or declaration that Portfolio 2027 is live.

## 26. Entrega Bloque06 — auditoría integral — 2026-10-26

**DONE — PENDING DIRECTOR REVIEW.** Rama `feature/portfolio-2027-foundation`.
HEAD inicial sincronizado: `982396eb6de28caf75ff710056fb7c3267da0fc4`.
Corrección: `c4e93604418f60150ff5947df9d32a4e7a95600b`
(`fix: preserve navigation and content reflow with enlarged text`).
Cierre documental: commit `docs: record Block 06 audit and unexecuted release plan`;
HEAD final consultable en el historial de esta entrada, sin hash circular.

- Auditoría nueva sobre **preview compilada**, no solo dev: siete viewports
  requeridos más cuatro vecinos de breakpoint; Figma integral102:559/102:775 y
  navegación111:591. Capturas completas desktop1920×6015 y mobile390×6367.
  Diferencias de altura respecto de Figma explicadas por03B y header integrado.
- P1 confirmado/corregido: texto400% a320px producía documento432px, desborde del
  menú y recorte en Hero. Tres CSS (`experience`, `selected-work`,
  `skills-capabilities`) permiten reflow intrínseco en acciones, skip, menú,
  párrafo e índices. Texto200/400% pasa a320px; menú ampliado legible.
  No cambia tamaños/copy, grillas normales ni navegación/motion aprobados.
  Captura mobile idéntica; desktop solo38 píxeles de borde de Hablemos. difieren
  1/255, con igual geometría y sin cambio de Contact.
- URL limpia, Back/Forward, cinco deep links, reload Hero y nueva construcción,
  teclado/foco/offset/skip, touch/menú/Escape, PDF y enlaces verificados.
  A–E4200/3000ms, clic ordinario, zero-flash, ejecución única, Canvas final retirado,
  Skills por scroll, reduced motion, fallos de Canvas y desmontaje pasan.
  ASCII original conserva cadencia y pausa fuera de pantalla; visibilidad oculta
  simulada y desmontaje no dejan dibujos/RAF. Sin errores normales registrados.
- Se midieron entrega Google Fonts real por proxy+CA válida (sin fixtures ni bypass
  TLS), carga retrasada y fallo; pesos/cursiva/swap correctos. Se midieron LCP/CLS,
  EventTiming, TaskDuration y heap; valores/configuración en `metrics.json`.
  Lighthouse mobile/desktop y limitaciones en informe; no son CWV de campo.
  CLS por swap requiere validación final antes de release.
- Se probó caché geométrica ASCII: comandos/píxeles iguales en48 muestras,
  microbenchmark desktop mejor pero media compacto peor y beneficio total
  inconsistente. **No incorporada**: componente ASCII permanece idéntico al inicial.
  Candidato y datos quedan solo en QA para reproducir la decisión.
- Axe sin infracciones en cuatro anchos; contraste sobre Canvas requiere revisión
  manual (incomplete). Texto raíz200/400% NO equivale a zoom real de navegador.
  Zoom real, lectores de pantalla, otros navegadores y dispositivos físicos
  siguen sin probar. LinkedIn muestra authwall; CV vigente y mailto real pendientes.
- `npm audit` identifica15 paquetes preexistentes en la cadena de herramientas
  (1critical/11high/2moderate/1low); no implica explotación del sitio estático.
  P1 pendiente de revisión/actualización dirigida autorizada. Sin cambios de paquetes.
- ESLint2027 PASS; lint global conserva solo cuatro errores legacy conocidos.
  Build normal1717 y preview49 módulos PASS. Comparación SHA256 de nueve artefactos
  normales contra checkout inicial; evidencia en `build-comparison.json`.
- Archivos adicionales: README2027, AGENTS/README raíz, esta bitácora y
  `docs/qa/block06/` (informe A–G, scripts, JSON, capturas y `MIGRATION.md`).
  Plan de activación/metadata/404/rollback preparado **sin ejecutar**.

**No se declara listo para producción.** Resolver/aceptar P1 y controles esenciales
antes de un gate de release. Main/entrada2025, fuentes, PDF, paquetes, SEO publicado,
producción, dominio y hosting intactos. Sin merge/deploy ni inicio de otra fase.

## 27. Release candidate staged for authorized merge request — 2026-10-26

**Request:** owner inspected the preview manually and requested merge to `main` provided Director finds no release concern. Director's review found that simply merging `feature/portfolio-2027-foundation` would **not** activate the new site: `index.html` and `src/main.jsx` remained tied to 2025. The Block 06 audit itself explicitly warned production candidate activation and security/CLS checks had not yet been performed.

**Safe progress:** created `release/portfolio-2027-activation` branched from the audited `feature/portfolio-2027-foundation`, with public root activation of the existing Portfolio 2027 composition and accessible no-JS fallback, public metadata/canonical, robots/sitemap and a minimal 404 fallback. Added PR build/smoke checks for `main`. Kept the isolated noindex preview unchanged and all approved motion/layout source unchanged. The release candidate branch remains **not merged/not deployed**, awaiting actual CI verification, security applicability review and any necessary smoke inspection. The public 404 HTTP status depends on hosting configuration and must be tested live.
- Root entry: `src/main.jsx` imports `PortfolioPreview` instead of legacy App; legacy code retained for rollback. No `initTheme()` or `src/index.css` import in root 2027 entry.
- `index.html` sets `lang=es`, title/description/canonical/OG/Twitter textual tags, stylesheet and existing favicon. Long semantic fallback moved under `noscript` to avoid a pre-hydration flash; accessible when JavaScript is disabled.
- `public/robots.txt`, `public/sitemap.xml`, `public/404.html` added. No invented social image or visual redesign. OG image remains a publishing polish item (do not point to a 2025 screenshot).
- GitHub Actions check `.github/workflows/portfolio-2027-release-checks.yml` added to verify `npm ci`, scoped lint, production build, entry/SEO/asset signatures; `npm audit` advisory report is non-blocking pending applicability decision.
- **Gate:** PR checks and production-root browser QA must succeed, plus owner confirmation of CV and live link behavior; `npm audit` pre-existing 15 advisories (1 critical) to be risk-classified. No proxy-fixture fonts-only claims as real deployment checks. No `main` change or deploy before gate.

## 28. Portfolio 2027 merge to main — 2026-10-26 (Argentina local time)

**Explicit owner instruction:** “hace el merge”. **EXECUTED.**
- Source: `release/portfolio-2027-activation`, approved release candidate PR [#14](https://github.com/ezexgonzalez/portfolio-2025/pull/14), head `ff82c92ae24909ae133a117460254edf61145c20`.
- Target `main` merge method: merge commit `3c35010ee6e5a33aa2c23e66f3826f8ce00cfd36`. GitHub reports `merged:true`. Previously deployed 2025 base commit `014843d198abc18a5f818b4c750e484f8fd0b47d` preserved for rollback.
- Pre-merge GitHub Actions `build-and-smoke` PASS: exact npm lockfile install, scoped ESLint2027, `npm run build`, root HTML/metadata/source check and static CV/robots/sitemap/404 checks.
- After merge, verified that `main:src/main.jsx` imports `PortfolioPreview` and `main:index.html` has public 2027 title `Ezequiel Gonzalez | Full Stack Developer`, canonical `https://ezegonzalez.dev/`, no `noindex`; preview remains separate.
- GitHub commit status Vercel reported **success / deployment completed** for merge SHA, with deployment details https://vercel.com/ezexgonzalezs-projects/portfolio-2026/2FFk5X89jeNpAoEZuH6pxKH9U5ie. This confirms provider deployment, **not independent end-user page visual/browser smoke**.
- No DNS/hosting edits performed. No claim that 404 HTTP status, third-party links or CLS/physical browser checks have been verified on live site.
- Remaining known risks: Block 06 npm audit 15 advisories in current build tool lockfile, including 1 critical transitive package; exposure and targeted updates remain unreviewed/accepted explicitly. CV currency, LinkedIn authwall, real mailto, real-browser zoom/AT, Safari/Firefox, font swap CLS and actual live smoke remain open.

**Current working truth:** Portfolio 2027 has been **merged to main**, and Vercel reports successful deployment. Prior prohibition records in historical sections 1–27 are obsolete gates for earlier stages; do not interpret them as reversing this actual merge. Future edits to production require separate, explicit authorization; rollback path described in `docs/qa/block06/MIGRATION.md`.

## 29. Social sharing card / Open Graph (2026-10-27)

**Owner approval:** replace the missing large link-preview image with the approved yearless monochrome editorial card featuring **Ezequiel Gonzalez**, **Full Stack Developer**, **Observar, cuestionar, entender.** and abstract ASCII texture. The old visual `2027` label was intentionally omitted so the artwork stays timeless.

- Asset prepared from the approved image at `public/portfolio-og.png`, resized to 1200×630 (Open Graph social preview), optimized PNG without a year.
- Root `index.html` metadata: `og:image`, `og:image:secure_url`, `og:image:type`, `og:image:width`, `og:image:height`, `og:image:alt`, plus `twitter:card=summary_large_image`, `twitter:image` and alt text. Absolute target: `https://ezegonzalez.dev/portfolio-og.png`.
- Work isolated in `feature/portfolio-og-social-card` prior to merging into `main`; no design/component/motion changes.
- Publication gate: CI compile, GitHub merge, provider deployment status; then confirm HTTP image response and metadata from public root if accessible. Social platforms may cache previous unfurled previews, so use their refresh/debug tools if an old preview remains.


## 30. Open Graph social artwork LIVE — 2026-10-27

**Owner-approved new yearless social card is integrated.**
- PR [#15](https://github.com/ezexgonzalez/portfolio-2025/pull/15), merge commit `5d95a0f0c72643f3c183e8c16eecdf0aaee2ca7a`; merged to `main`.
- Exact Git blob SHA `87fd046d9d2795808c72cfd90b97634e5355717e` verified for `public/portfolio-og.png` on `main`. Image is an optimized 1200×630 PNG derived from the owner-approved static card, **no year**.
- `index.html` includes public `og:image`, secure_url, PNG type, dimensions, alt and `twitter:card=summary_large_image`/twitter:image, pointing to `https://ezegonzalez.dev/portfolio-og.png`.
- GitHub Actions candidate `build-and-smoke` succeeded, and Vercel reported **Deployment has completed** for merge SHA.
- Remaining post-release spot check: social previews in actual LinkedIn/WhatsApp/X when they recrawl the URL. A previously cached preview may need a refresh; do not assume cache invalidates immediately. No component/layout/motion changes were made.
