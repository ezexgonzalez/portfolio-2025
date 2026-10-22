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
- **Bloque activo:** **01 / Technical Foundation**.
- **Estado del Bloque 01 al crear este archivo:** **AUTORIZADO / AÚN NO IMPLEMENTADO**.
- **Siguiente hito:** el Frontend Integration Engineer ejecuta únicamente Bloque 01, deja resultados y evidencias, actualiza este archivo y se detiene para revisión del Director General.
- **No afirmar:** que ya existe la nueva UI, que se verificaron animaciones en navegador, que el cambio está desplegado o que la corrección final del Hero se aplicó en Figma sin comprobarlo.

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

**Decisión posterior:** eliminar del Hero el microtexto superior `PORTFOLIO / 2027` sin sustituirlo ni recolocar el resto. El Pass 12B fue encargado al especialista Figma: **verificar que está efectivamente aplicado** antes de implementar el Hero. No confundir este texto con nombres de archivos, encabezados de documentación o copyright.

**Identidad visual:** `#080808` fondo, `#EFEFEF` texto principal, `#ABABAB` secundario, `#7D7D7D` auxiliar, `#2A2A2A` líneas. Tipografías: DM Sans, Instrument Serif, IBM Plex Mono. Sin glass, tarjetas genéricas, gradientes arbitrarios, glows ni imágenes de proyectos.

**Contenido:** solo Eze Web Studio y Task Manager en Selected Work. `Portfolio 2025` no figura como proyecto destacado. Nombre siempre `Ezequiel Gonzalez` sin tildes.

## 3. BLOQUE ACTIVO — 01 / TECHNICAL FOUNDATION

**Responsable:** Frontend Integration Engineer.  
**Estado:** `AUTHORIZED — NOT STARTED` hasta evidencia real de ejecución.  
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
| **01** | **Technical Foundation**: estructura, tokens, fuentes, base CSS, verificación | **ACTIVO / pendiente de ejecución** |
| 02 | Hero + Global Navigation: fidelidad responsive, anclas, UI semántica | **NO AUTORIZADO AÚN** |
| 03 | Selected Work: dos proyectos y UI Construction después de spike aprobado | **NO AUTORIZADO AÚN** |
| 04 | About + Skills: narrativa, índice técnico y responsive | **NO AUTORIZADO AÚN** |
| 05 | Contact + Integration: enlaces, CV, cierre, meta/SEO, integración | **NO AUTORIZADO AÚN** |
| 06 | Visual QA & Optimization: comparación Figma, performance, accesibilidad | **NO AUTORIZADO AÚN** |

Cada bloque necesita un brief específico y aprobación antes de pasar al siguiente. Un backlog NO es autorización para ejecutar trabajo futuro.

## 5. Pendientes / decisiones que no hay que olvidar

- **Figma Pass 12B:** verificar que el rótulo superior `PORTFOLIO / 2027` se quitó del Hero final y vistas derivadas.
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

**Último evento registrado:** autorización de Bloque 01 y creación de esta bitácora en la rama de preparación. Ninguna implementación de Block 01 verificada hasta este momento.
