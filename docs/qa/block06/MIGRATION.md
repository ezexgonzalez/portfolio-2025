# Activación futura de Portfolio 2027 — plan sin ejecutar

Gate: autorización explícita de Dirección después de resolver/aceptar los pendientes
P1 del informe. Este documento no autoriza merge, deploy, cambios de DNS o hosting.

1. **Punto de retorno.** Registrar el commit y el artefacto/despliegue 2025 que siga
   activo en ese momento; comprobar su URL, CV y acceso al proveedor. `main` remoto
   durante esta auditoría: `014843d198abc18a5f818b4c750e484f8fd0b47d`.
   No asumir que este SHA seguirá siendo el último cuando se autorice publicar.
2. **Entrada y archivos.** Preparar en una rama de release una modificación de
   `src/main.jsx` para montar `PortfolioPreview` (o renombrar ese componente de
   composición a `Portfolio2027` conservando sus cinco secciones). Retirar de esa
   entrada los imports de CSS 2025 y `initTheme()`; conservarlos en el historial,
   sin eliminación masiva de código. Mantener el reset de documento 2027 y cargar
   las mismas fuentes desde el HTML principal. Revisar `src/index.css`/exclusiones
   Tailwind únicamente si esa hoja sigue siendo necesaria. No hay router nuevo.
3. **HTML principal.** `index.html`: `lang="es"`, title y descripción aprobados,
   canonical único `https://ezegonzalez.dev/`, OG/Twitter (tipo website, URL,
   título, descripción e imagen social absoluta previamente aprobada). Conservar
   viewport y elegir/revisar favicons existentes; preparar fallback HTML completo
   a partir de `src/portfolio2027/preview.html`, manteniendo nombres/anchors/copy.
   No trasladar el noindex de desarrollo al documento público.
4. **Preview.** Decidir retirarla de los inputs públicos (estado actual del build
   estándar) o conservarla como ruta de revisión con `noindex, nofollow`. No duplicar
   una página indexable. Mantener fuentes/estilos aislados, sin doble montaje.
5. **Recursos SEO.** Preparar `public/robots.txt` con sitemap y
   `public/sitemap.xml` con la raíz canónica; no inventar rutas para anchors.
   Definir una respuesta 404 real para rutas inexistentes; no usar un rewrite
   global que devuelva el portfolio con HTTP200 para cualquier URL.
   Diseñar/aprobar el asset social antes de referenciarlo. No se creó en este bloque.
6. **Build de candidato.** Desde checkout limpio y lockfile revisado: instalación
   reproducible, lint, ESLint2027, build estándar; comprobar que su `dist/index.html`
   ahora referencia el bundle2027, recursos200, CV idéntico y sin dependencias de
   `/src/`. Repetir siete viewports, teclado, menú, hash/Back/Forward/reload,
   A–E, reduced motion, fuentes reales/CLS y Lighthouse contra ese artefacto raíz.
   Resolver avisos de la cadena de build en un cambio autorizado y validado aparte.
7. **Dominio y publicación.** Mantener `ezegonzalez.dev` y configuración existentes;
   revisar redirects HTTP→HTTPS y www/canonical sin cambiar DNS por iniciativa.
   Solo con gate nuevo, publicar el artefacto candidato en el proyecto actual.
   Registrar ID del despliegue nuevo y anterior y un responsable de rollback.
8. **Smoke inmediato.** HTTPS/certificado; raíz200 y HTML2027 correcto; canonical,
   robots y sitemap; recursos/fonts/CV200; 404 real; anchors limpios/deep links;
   descargas/mailto/contactos; menú touch y teclado; animación una sola vez;
   reduced motion; consola/red; pruebas en dispositivos y navegadores reales.
   Confirmar OG mediante inspectores de redes sociales y el propietario confirma CV.
9. **Rollback.** Ante contenido/recursos inaccesibles, errores JS, pérdida de
   navegación o regresión visual significativa: restaurar el despliegue 2025
   previamente registrado (sin tocar dominio/DNS). Si hace falta un nuevo build,
   revertir el commit de activación mediante el flujo autorizado, no reset forzado
   de `main`. Repetir smoke de raíz, CV, HTTPS y enlaces y registrar el incidente.

No se ejecutó ninguno de estos cambios de activación. La preview sigue excluida
como entrada del build normal y conserva `noindex, nofollow`.
