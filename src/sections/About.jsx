import { Download } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import GlassCard from "../components/GlassCard";

const About = () => {
  return (
    <div className="w-full flex flex-col justify-center py-12 lg:py-0 min-h-[60vh] lg:min-h-screen">
      <div className="mb-12">
        <SectionHeader
          label="About"
          title="Más que solo código"
          description="Un breve resumen de quién soy, de dónde vengo y hacia dónde quiero llevar mi carrera."
        />
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10">
        {/* --- COLUMNA IZQUIERDA: HISTORIA --- */}
        <div className="space-y-6">
          <GlassCard className="p-8 sm:p-10">
            <h3 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-indigo-500"></span>
              Mi Trayectoria
            </h3>

            {/* Texto: legible en light, igual en dark */}
            <div className="space-y-5 text-sm sm:text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
              <p>
                Soy{" "}
                <span className="text-slate-800 dark:text-white font-medium">
                  Ezequiel Gonzalez
                </span>
                , desarrollador Full Stack{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  MERN
                </span>{" "}
                con un enfoque orientado a construir productos confiables,
                escalables y bien ejecutados. Desde temprano tuve afinidad por
                la tecnología: aprendí de forma autodidacta, desarrollé
                facilidad para resolver problemas técnicos y me acostumbré a
                incorporar herramientas y entornos nuevos con rapidez.
              </p>
              <p>
                Inicié la Licenciatura en Sistemas en la Universidad Nacional de
                Lanús y, posteriormente, opté por una formación más práctica e
                intensiva enfocada en desarrollo web, consolidando fundamentos y
                trabajando con proyectos orientados a producto.
              </p>

              <p>
                Más adelante me incorporé al{" "}
                <span className="text-slate-700 dark:text-slate-200">
                  Centro de Monitoreo de la Policía de la Ciudad
                </span>
                , un entorno operativo de alta exigencia que fortaleció
                habilidades que hoy aplico directamente al desarrollo: trabajo
                bajo presión, comunicación clara, coordinación en equipo y
                adaptación constante. Esta experiencia consolidó una mentalidad
                más estructurada y orientada a resultados.
              </p>

              <p>
                Actualmente estoy enfocado en incorporarme al sector IT con una
                perspectiva más consistente, apoyada en disciplina, experiencia
                real en entornos demandantes y un objetivo profesional claro.
                Busco integrarme a un equipo donde pueda aportar valor
                construyendo soluciones end-to-end, con buenas prácticas, foco
                en calidad y una experiencia final cuidada.
              </p>
            </div>
          </GlassCard>

          {/* Mini Quote */}
          <div className="px-6 border-l-2 border-indigo-500/30 italic text-slate-500 dark:text-slate-500 text-sm lg:text-[15px]">
            "Mi objetivo no es solo escribir código, sino elevar el nivel de
            cada producto en el que participo."
          </div>
        </div>

        {/* --- COLUMNA DERECHA: INFO RÁPIDA --- */}
        <div className="flex flex-col gap-6 h-full">
          {/* Transferable Skills */}
          <GlassCard className="p-6 lg:p-8 bg-indigo-500/5 dark:bg-indigo-500/[0.02]">
            <p className="text-[10px] lg:text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold mb-4">
              Transferable Skills
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              {[
                { label: "Disciplina", desc: "Enfoque metódico" },
                { label: "Presión", desc: "Resolución crítica" },
                { label: "Equipo", desc: "Comunicación clara" },
                { label: "Análisis", desc: "Atención al detalle" },
              ].map((skill) => (
                <div key={skill.label} className="space-y-1">
                  <p className="text-slate-800 dark:text-white text-xs lg:text-sm font-bold">
                    {skill.label}
                  </p>
                  <p className="text-[10px] lg:text-xs text-slate-500 dark:text-slate-500 leading-tight">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Intereses */}
          <GlassCard className="p-6 lg:p-8 flex-1">
            <p className="text-[10px] lg:text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 font-bold mb-4">
              Lo que me mueve
            </p>

            <ul className="space-y-3 text-xs lg:text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                <span>Arquitecturas limpias (Clean Code)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Diseño de Interfaces Líquidas</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>Aprendizaje continuo de TypeScript</span>
              </li>
            </ul>
          </GlassCard>

          {/* CTA */}
          <div
            className="
            p-5 lg:p-6 rounded-[var(--radius-card)]
            border border-dashed border-slate-200/70 dark:border-white/10
            flex items-center justify-between
            group cursor-pointer
            hover:bg-slate-900/5 dark:hover:bg-white/[0.02]
            transition-colors
          "
          >
            <span className="text-[11px] lg:text-xs text-slate-600 dark:text-slate-400">
              ¿Quieres saber más?
            </span>

            <div
              className="
              flex items-center gap-2 text-[11px] lg:text-xs
              text-slate-800 dark:text-white
              font-bold group-hover:translate-x-1 transition-transform
            "
            >
              <span>Descargar CV</span>
              <Download size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
