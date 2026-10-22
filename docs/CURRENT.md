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
- **Bloque activo:** **02 / Hero + Global Navigation**.
- **Estado actual del Bloque 01:** **APPROVED — DIRECTOR REVIEW COMPLETED** (2026-10-21).
- **Siguiente hito:** ejecutar Bloque 02 únicamente según el nuevo brief, en preview aislada. Bloques 03–06 NO AUTORIZADOS.
- **No afirmar:** que la nueva UI, el ASCII o la navegación ya están probados en navegador o desplegados. El rótulo del Hero sí se verificó eliminado en Figma el 2026-10-21.

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
| **02** | Hero + Global Navigation: preview aislada y fidelidad responsive | **AUTHORIZED — NOT STARTED** |
| 03 | Selected Work: dos proyectos y UI Construction después de spike aprobado | **NO AUTORIZADO AÚN** |
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
- **Navegación:** diseño Figma aprobado, pero scroll por anclas, foco, teclado, hash, sticky y mobile no probados en navegador.
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

**Autorizado el 2026-10-21. Estado: AUTHORIZED — NOT STARTED.** Bloque 01 aprobado. Bloques 03–06 no autorizados.

**Figma:** Hero `10:97`, `10:123`, `10:149`, `10:175`, `10:201`, `10:227`, `10:253`, `10:277`; navegación `111:547` y especificaciones `111:550`; ASCII `11:203`. El rótulo del Hero `PORTFOLIO / 2027` fue verificado **ausente** en esas ocho variantes y en las vistas integrales `102:559` y `102:775`. No reincorporarlo.

**Entregable autorizado:** montar Hero editorial y navegación sticky desktop/mobile con sus estados, anclas y accesibilidad, incluyendo el campo ASCII abstracto ambiental, en una **preview local aislada del sitio 2025**. Usar la base `src/portfolio2027` del Bloque 01. Implementar HTML semántico y diseños responsive aprobados; validar 1920/1536/1366/768/390/320, keyboard, focus, hash, scroll offset, reduced-motion, y consumo del ASCII. Se permiten placeholders de anclas de futuras secciones únicamente dentro de la preview, nunca como implementaciones terminadas.

**Límites:** no editar las secciones 02–05, no agregar dependencias importantes sin aprobación, no sobrescribir el sitio predeterminado 2025, no desplegar ni hacer merge a `main`. Revisar `@source not "./portfolio2027"`, CSS global y `initTheme()` al preparar la preview. No sustituir ASCII por fade-in, Matrix o imagen estática como único resultado sin autorización. Proporcionar fallback accesible. No bloquear texto o controles por animaciones.

**Gate de salida:** capturas y comparación real con Figma, evidencia de lint/build (distinguir 4 errores legacy de nuevas regresiones), validación responsive/accesibilidad, commits y archivos. Actualizar `docs/CURRENT.md` como `DONE — PENDING DIRECTOR REVIEW`, con pruebas efectivamente ejecutadas, y detenerse. Bloque 03 sigue NO AUTORIZADO.
