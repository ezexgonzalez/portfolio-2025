# CURRENT — Portfolio 2027

> **Bitácora operativa / fuente de verdad del estado actual.** Consultar este archivo antes de cualquier tarea. La dirección creativa y las decisiones históricas viven en [PORTFOLIO_2027_DIRECTION.md](PORTFOLIO_2027_DIRECTION.md). Las reglas de agentes están en [../AGENTS.md](../AGENTS.md).
>
> **Actualización inicial:** 2026-10-21. Este documento debe actualizarse al finalizar **cada bloque** y siempre que cambie una aprobación, bloqueo o rama.

## 1. Estado actual

- **Proyecto:** nuevo portfolio personal de Ezequiel Gonzalez.
- **Repositorio:** https://github.com/ezexgonzalez/portfolio-2025
- **Dominio de publicación futuro:** https://ezegonzalez.dev/ (el mismo de la web actual).
- **Rama de trabajo/documentación activa:** `feature/portfolio-2027-foundation`.
- **`main`:** producción actual, NO modificar, fusionar ni desplegar sin autorización.
- **Fase:** diseño de las cinco secciones y navegación global aprobados en concepto; empieza la implementación **por bloques delimitados**.
- **Bloque activo:** **03B / Selected Work — Desktop Viewport Height Refinement**.
- **Estado actual del Bloque 01:** **APPROVED — DIRECTOR REVIEW COMPLETED** (2026-10-21).
- **Estado del Bloque 03:** **UI CONSTRUCTION APPROVED BY OWNER; FINAL SECTION HEIGHT REFINEMENT PENDING** (2026-10-22). Solo falta la corrección 03B; no reabrir motion ni diseño.
- **Estado del Bloque 03A:** **APPROVED — OWNER VISUAL REVIEW** (2026-10-22). Zero-flash, claridad y ritmo de construcción aceptados; entrega en sección 16.
- **Siguiente hito:** Integration Engineer ejecuta exclusivamente 03B, ajuste de altura/espaciado de Selected Work en desktop, comprueba que el motion aprobado siga intacto, actualiza esta bitácora y se detiene. Bloques 04–06 NO AUTORIZADOS.
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
| **03** | Selected Work: dos proyectos, responsive y UI Construction | **03A APPROVED; 03B HEIGHT REFINEMENT AUTHORIZED** |
| 04 | About + Skills: narrativa, índice técnico y responsive | **NO AUTORIZADO AÚN** |
| 05 | Contact + Integration: enlaces, CV, cierre, meta/SEO, integración | **NO AUTORIZADO AÚN** |
| 06 | Visual QA & Optimization: comparación Figma, performance, accesibilidad | **NO AUTORIZADO AÚN** |

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
