// src/sections/Skills.jsx
import { Terminal, Users, Cpu } from "lucide-react";
import GlassCard from "../components/GlassCard";
import SectionHeader from "../components/SectionHeader";
import { skills } from "../config/skills";
import Chip from "../components/ui/Chip";

const SkillGroup = ({
  title,
  items,
  description,
  icon: Icon,
  variant = "default",
}) => {
  const isFeatured = variant === "featured";

  return (
    <GlassCard
      className={`
        relative overflow-hidden flex flex-col h-full
        transition-all duration-500 group hover:-translate-y-2
        hover:shadow-[0_18px_55px_-30px_rgba(15,23,42,0.30)]
        dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
        p-6 sm:p-8 lg:p-10

        /* BASE IGUAL PARA LAS 3 */
        border border-slate-200/70 bg-white/55
        dark:border-white/10 dark:bg-white/[0.03]

        /* FEATURED: solo acento sutil (sin cambiar legibilidad) */
        ${isFeatured ? "ring-1 ring-indigo-500/10 dark:ring-indigo-500/15" : ""}
      `}
    >
      {/* ÍCONO GIGANTE DE FONDO (suave para no lavar texto) */}
      <div
        className={`
          absolute -right-6 -bottom-6
          opacity-[0.045] transform rotate-12
          transition-transform duration-700
          group-hover:scale-125 group-hover:rotate-6
          lg:scale-150 lg:-right-10 lg:-bottom-10
          ${isFeatured ? "text-indigo-500/70 dark:text-indigo-400" : "text-slate-500/70 dark:text-white"}
        `}
      >
        <Icon size={140} strokeWidth={0.8} />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div
              className={`
                p-2.5 rounded-xl flex items-center justify-center
                bg-slate-900/5 text-slate-700
                dark:bg-white/10 dark:text-slate-200

                ${isFeatured ? "ring-1 ring-indigo-500/15 dark:ring-indigo-500/20" : ""}
              `}
            >
              <Icon size={24} />
            </div>

            <h3 className="text-base lg:text-lg font-bold uppercase tracking-widest text-slate-800 dark:text-white">
              {title}
            </h3>
          </div>

          {description && (
            <p className="text-sm lg:text-[15px] font-medium leading-relaxed max-w-[95%] text-slate-600 dark:text-slate-300">
              {description}
            </p>
          )}
        </div>

        {/* CHIPS (BASE + DARK FIX) */}
        <div className="flex flex-wrap content-start gap-2 lg:gap-3 mt-8">
          {items.map((item) => (
            <Chip
              key={item}
              className={`
                text-xs lg:text-sm py-1.5 px-3 lg:py-2 lg:px-4
                transition-colors duration-300

                /* LIGHT */
                bg-white/70 border border-slate-200/70 text-slate-700
                hover:bg-slate-900/5 hover:text-slate-900

                /* DARK (✅ base visible + hover) */
                dark:bg-white/[0.06] dark:border-white/10 dark:text-slate-200
                dark:hover:bg-white/10 dark:hover:text-white

                /* FEATURED: apenas un tinte, sin cambiar contraste */
                ${isFeatured ? "dark:border-indigo-500/25 dark:bg-indigo-500/[0.10]" : ""}
              `}
            >
              {item}
            </Chip>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

const Skills = () => {
  return (
    <div className="w-full flex flex-col justify-center py-12 lg:py-0 min-h-[60vh] lg:min-h-screen">
      <div className="mb-12 lg:mb-16">
        <SectionHeader
          label="Expertise"
          title="Tecnologías y fortalezas"
          description="Herramientas que domino y definen mi perfil profesional."
        />
      </div>

      <div className="grid gap-5 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:min-h-[420px]">
        <div className="md:col-span-2 lg:col-span-1 h-full">
          <SkillGroup
            title="Stack Core"
            description="Tecnologías principales para arquitecturas escalables."
            items={skills.main}
            icon={Cpu}
            variant="featured"
          />
        </div>

        <div className="h-full">
          <SkillGroup
            title="Herramientas"
            description="Entorno de desarrollo y productividad."
            items={skills.tools}
            icon={Terminal}
          />
        </div>

        <div className="h-full">
          <SkillGroup
            title="Soft Skills"
            description="Habilidades humanas y metodología."
            items={skills.soft}
            icon={Users}
          />
        </div>
      </div>

      <div className="mt-16 lg:mt-24 flex items-center justify-center gap-3 opacity-20">
        <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>
      </div>
    </div>
  );
};

export default Skills;

