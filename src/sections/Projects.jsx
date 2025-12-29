// src/sections/Projects.jsx
import GlassCard from "../components/GlassCard";
import SectionHeader from "../components/SectionHeader";
import { projects } from "../config/projects";

const Projects = () => {
  return (
    <div className="w-full py-8">
      <SectionHeader
        label="Work"
        title="Proyectos destacados"
        description="Una selección de proyectos que representan cómo trabajo desde el backend hasta la experiencia final del usuario."
      />

      <div className="grid gap-8 lg:grid-cols-2 mt-12">
        {projects.map((project) => (
          <GlassCard
            key={project.id}
            className="
              group p-0 overflow-hidden
              flex flex-col justify-between
              min-h-[360px]
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_30px_80px_-35px_rgba(15,23,42,0.30)]
              dark:hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]
            "
          >
            {/* PREVIEW GRANDE */}
            {project.image && (
              <div className="relative h-[170px] sm:h-[190px]">
                <img
                  src={project.image}
                  alt={`Preview de ${project.title}`}
                  loading="lazy"
                  className="
                    absolute inset-0 w-full h-full object-cover
                    opacity-95 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                />

                {/* Overlay para integrar con UI (LIGHT suave, DARK igual) */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-b
                    from-white/20 via-white/10 to-black/10
                    dark:from-black/10 dark:via-black/40 dark:to-black/70
                  "
                />
                <div className="absolute inset-0 backdrop-blur-[2px]" />

                {/* Chips flotantes (year / role) */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
                  <span
                    className="
                      text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded
                      bg-white/60 border border-slate-200/70 text-slate-700
                      dark:bg-white/10 dark:border-white/10 dark:text-white
                    "
                  >
                    {project.year}
                  </span>

                  <span
                    className="
                      text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded
                      bg-white/60 border border-slate-200/70 text-slate-600
                      dark:bg-white/10 dark:border-white/10 dark:text-white/80
                    "
                  >
                    {project.role}
                  </span>
                </div>

                {/* ❌ Eliminado: CTA “Ver demo →” en la imagen */}
              </div>
            )}

            {/* CONTENIDO */}
            <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
              <div className="space-y-5">
                <div className="space-y-1">
                  {/* FIX LIGHT: antes era text-white */}
                  <h3
                    className="
                      text-xl sm:text-2xl font-bold
                      text-slate-900 dark:text-white
                      group-hover:text-indigo-700 dark:group-hover:text-indigo-300
                      transition-colors
                    "
                  >
                    {project.title}
                  </h3>

                  {/* FIX LIGHT */}
                  <p
                    className="
                      text-[11px] uppercase tracking-[0.2em] font-medium
                      text-indigo-700/70 dark:text-indigo-400/80
                    "
                  >
                    {project.stack_type || "Full Stack"}
                  </p>
                </div>

                {/* FIX LIGHT */}
                <p
                  className="
                    text-sm sm:text-base leading-relaxed line-clamp-3 transition-colors
                    text-slate-600 dark:text-slate-400
                    group-hover:text-slate-700 dark:group-hover:text-slate-300
                  "
                >
                  {project.description}
                </p>

                {/* TAGS: FIX LIGHT */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        text-[10px] sm:text-[11px] font-medium
                        px-3 py-1 rounded-full
                        bg-white/60 border border-slate-200/70 text-slate-600
                        dark:bg-white/[0.03] dark:border-white/10 dark:text-slate-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* LINKS: FIX LIGHT */}
              <div
                className="
                  flex items-center gap-6 mt-8 pt-6
                  border-t border-slate-200/70 dark:border-white/5
                "
              >
                <a
                  href={project.link.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-sm font-semibold flex items-center gap-2 transition-colors
                    text-slate-800 hover:text-indigo-700
                    dark:text-white dark:hover:text-indigo-400
                  "
                >
                  Ver demo <span className="text-xs">→</span>
                </a>

                <a
                  href={project.link.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-sm font-medium transition-colors
                    text-slate-500 hover:text-slate-700
                    dark:text-slate-500 dark:hover:text-white
                  "
                >
                  Código fuente
                </a>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;

