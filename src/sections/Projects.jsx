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
              group
              p-8 sm:p-10
              flex flex-col justify-between
              min-h-[320px]
              transition-all duration-500
              hover:-translate-y-2

              /* Light: sombra elegante (no negra pesada) */
              hover:shadow-[0_30px_80px_-35px_rgba(15,23,42,0.30)]
              /* Dark: tu sombra fuerte */
              dark:hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]
            "
          >
            <div className="space-y-5">
              {/* Encabezado del Proyecto */}
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  {/* ✅ Antes: text-white (rompía light) */}
                  <h3 className="
                    text-xl sm:text-2xl font-bold
                    text-slate-800 dark:text-white
                    group-hover:text-indigo-600 dark:group-hover:text-indigo-300
                    transition-colors
                  ">
                    {project.title}
                  </h3>

                  {/* Año */}
                  <span className="
                    text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded

                    /* Light */
                    text-slate-500 bg-slate-900/5 border border-slate-200/70
                    /* Dark */
                    dark:text-slate-500 dark:bg-white/5 dark:border-transparent
                  ">
                    {project.year}
                  </span>
                </div>

                {/* Rol/Tipo */}
                <p className="
                  text-[11px] uppercase tracking-[0.2em] font-medium
                  text-indigo-700/70 dark:text-indigo-400/80
                ">
                  {project.role} • {project.stack_type || "Full Stack"}
                </p>
              </div>

              {/* Descripción */}
              <p className="
                text-sm sm:text-base leading-relaxed line-clamp-3 transition-colors
                text-slate-600 dark:text-slate-400
                group-hover:text-slate-700 dark:group-hover:text-slate-300
              ">
                {project.description}
              </p>

              {/* Tags/Tech */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      text-[10px] sm:text-[11px] font-medium
                      px-3 py-1 rounded-full

                      /* Light */
                      bg-white/60 border border-slate-200/70 text-slate-600
                      /* Dark */
                      dark:bg-white/[0.03] dark:border-white/10 dark:text-slate-400
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Enlaces de Acción */}
            <div className="
              flex items-center gap-6 mt-8 pt-6
              border-t border-slate-200/70 dark:border-white/5
            ">
              {/* ✅ Antes: text-white */}
              <a
                href={project.link.demo}
                target="_blank"
                rel="noreferrer"
                className="
                  text-sm font-semibold
                  text-slate-700 dark:text-white
                  flex items-center gap-2
                  hover:text-indigo-600 dark:hover:text-indigo-400
                  transition-colors
                "
              >
                Ver demo
                <span className="text-xs">→</span>
              </a>

              <a
                href={project.link.repo}
                target="_blank"
                rel="noreferrer"
                className="
                  text-sm font-medium
                  text-slate-500 dark:text-slate-500
                  hover:text-slate-700 dark:hover:text-white
                  transition-colors
                "
              >
                Código fuente
              </a>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
