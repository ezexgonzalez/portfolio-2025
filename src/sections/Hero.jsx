// src/sections/Hero.jsx
import GlassCard from "../components/GlassCard";

const Hero = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 pb-24 pt-10 space-y-8">
      <GlassCard className="px-8 sm:px-10 py-10 sm:py-12">
        {/* fila superior dentro de la card */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted">
            Portfolio 2025
          </p>

          <div
            className="
              inline-flex items-center gap-2
              rounded-full px-3 py-1
              bg-white/5
              border border-white/10
              text-[11px] text-muted
              backdrop-blur-xl
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.35)]" />
            Disponible para nuevas oportunidades
          </div>
        </div>

        {/* título + descripción */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-[3.2rem] font-semibold leading-tight">
            EZEQUIEL <span className="block">GONZALEZ</span>
          </h1>

          <p className="text-base sm:text-lg text-muted">
            Full Stack Web Developer
          </p>

          <p className="text-sm sm:text-[15px] text-muted max-w-xl">
            Construyo experiencias web modernas, escalables y cuidadas al
            detalle, desde el backend hasta la interfaz final. Me enfoco en
            escribir código limpio y productos que realmente se sientan
            profesionales.
          </p>
        </div>

        {/* CTA + info rápida */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            className="
              inline-flex items-center justify-center
              rounded-full px-6 py-2.5
              text-sm font-medium
              bg-accent text-white
              shadow-[0_18px_40px_var(--color-accent-soft)]
              hover:translate-y-[1px]
              hover:shadow-[0_12px_30px_var(--color-accent-soft)]
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-offset-2
              focus-visible:ring-accent focus-visible:ring-offset-transparent
              transition-transform
            "
          >
            Ver proyectos
          </button>

          <button
            className="
              inline-flex items-center justify-center
              rounded-full px-5 py-2.5
              text-sm font-medium
              border border-white/15
              bg-white/5
              text-muted
              hover:bg-white/10 hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-offset-2
              focus-visible:ring-white/40 focus-visible:ring-offset-transparent
              transition-colors
            "
          >
            Contactar
          </button>

          <span className="text-[11px] text-muted">
            Basado en Buenos Aires · Disponible remoto
          </span>
        </div>

        {/* stack / tecnologías */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["React", "Node.js", "TypeScript", "MongoDB", "Tailwind CSS"].map(
            (tech) => (
              <span
                key={tech}
                className="
                  rounded-full px-3 py-1
                  text-[11px] uppercase tracking-[0.12em]
                  bg-white/3
                  border border-white/8
                  text-muted
                  backdrop-blur-xl
                "
              >
                {tech}
              </span>
            )
          )}
        </div>
      </GlassCard>

      {/* Hint de scroll abajo del hero */}
      <div className="flex items-center justify-between text-[11px] text-muted">
        <div className="flex items-center gap-3">
          <div
            className="
              h-7 w-7 rounded-full
              border border-white/15
              flex items-center justify-center
              bg-white/5 backdrop-blur-xl
            "
          >
            <span className="animate-bounce text-xs">↓</span>
          </div>
          <span>Scroll para ver proyectos</span>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <span className="h-[1px] w-16 bg-white/10" />
          <span>Task Manager · E-commerce · Portfolio 2025</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
