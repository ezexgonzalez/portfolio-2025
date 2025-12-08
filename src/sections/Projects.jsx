import GlassCard from "../components/GlassCard";
import SectionHeader from "../components/SectionHeader";
import { projects } from "../config/projects";

const Projects = () => {
  return (
    <div>
      <SectionHeader
        label="Work"
        title="Proyectos destacados"
        description="Una selección de proyectos que representan cómo trabajo desde el backend hasta la experiencia final del usuario."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <GlassCard
            key={project.id}
            className="
              px-5 py-4 text-sm
              bg-[rgba(7,16,28,0.5)]
              dark:bg-[rgba(7,16,28,0.5)]
              transition-shadow
              hover:-translate-y-[2px]
              hover:shadow-[0_26px_80px_rgba(0,0,0,0.85)]
              md:col-span-1
            "
          >
            <div className="flex flex-col h-full justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted mt-1">
                  {project.role} · {project.year}
                </p>
                <p className="mt-3 text-xs text-muted">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full px-2.5 py-1
                      text-[11px]
                      bg-white/5
                      border border-white/10
                      text-muted
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-2 text-xs">
                <a
                  href={project.link.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-accent
                    hover:underline
                  "
                >
                  Ver demo
                </a>
                <a
                  href={project.link.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-muted
                    hover:text-white
                    hover:underline
                  "
                >
                  Ver código
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

