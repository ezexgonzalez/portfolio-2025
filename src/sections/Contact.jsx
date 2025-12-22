import { Mail, Linkedin, Github, ArrowUpRight, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import GlassCard from "../components/GlassCard";

// Tile
const ContactTile = ({ icon: Icon, label, value, href, featured = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`
      group flex items-center justify-between p-4 rounded-2xl border transition-all duration-300
      ${
        featured
          ? `
          /* LIGHT */
          bg-indigo-500/10 border-indigo-500/25 hover:bg-indigo-500/15 hover:border-indigo-500/35
          /* DARK (tu diseño) */
          dark:bg-indigo-600/10 dark:border-indigo-500/30 dark:hover:bg-indigo-600/20 dark:hover:border-indigo-500/50
        `
          : `
          /* LIGHT */
          bg-white/60 border-slate-200/70 hover:bg-white/75 hover:border-slate-300/70
          /* DARK (tu diseño) */
          dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-white/20
        `
      }
    `}
  >
    <div className="flex items-center gap-4">
      <div
        className={`
          p-2.5 rounded-xl flex items-center justify-center
          ${
            featured
              ? `
              /* LIGHT */
              bg-indigo-500 text-white shadow-lg shadow-indigo-500/15
              /* DARK */
              dark:bg-indigo-500 dark:text-white dark:shadow-indigo-500/20
            `
              : `
              /* LIGHT */
              bg-slate-900/5 text-slate-700 group-hover:text-slate-800
              /* DARK */
              dark:bg-white/10 dark:text-slate-300 dark:group-hover:text-white
            `
          }
        `}
      >
        <Icon size={20} />
      </div>

      <div className="text-left">
        <p
          className={`
            text-xs font-bold tracking-wide uppercase
            ${featured ? "text-indigo-700 dark:text-indigo-300" : "text-slate-500 dark:text-slate-500"}
          `}
        >
          {label}
        </p>

        <p
          className="
            text-sm sm:text-base font-medium
            text-slate-800 dark:text-white
            group-hover:text-indigo-700 dark:group-hover:text-indigo-200
            transition-colors
          "
        >
          {value}
        </p>
      </div>
    </div>

    <ArrowUpRight
      size={18}
      className="
        text-slate-500 group-hover:text-slate-800
        dark:text-slate-500 dark:group-hover:text-white
        group-hover:-translate-y-1 group-hover:translate-x-1
        transition-transform
      "
    />
  </a>
);

const Contact = () => {
  return (
    <div className="w-full flex flex-col justify-center py-12 lg:py-0 min-h-[50vh] lg:min-h-[80vh]">
      <div className="mb-12">
        <SectionHeader
          label="Contact"
          title="Hablemos"
          description="Estoy disponible para sumarme a nuevos desafíos. ¿Creamos algo juntos?"
        />
      </div>

      <div className="w-full max-w-5xl mx-auto">
        <GlassCard className="p-0 overflow-hidden">
          <div className="flex flex-col lg:grid lg:grid-cols-2">
            {/* IZQUIERDA */}
            <div
              className="
                p-8 sm:p-10 lg:p-12
                flex flex-col justify-between gap-10
                border-b lg:border-b-0 lg:border-r
                border-slate-200/70 dark:border-white/10
                relative
              "
            >
              {/* Decoración fondo */}
              <div className="absolute top-0 left-0 w-full h-full bg-indigo-500/5 dark:bg-indigo-500/[0.02] pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div
                  className="
                    inline-flex items-center gap-2 px-3 py-1 rounded-full
                    bg-emerald-500/10 border border-emerald-500/20
                    text-emerald-700 dark:text-emerald-400
                    text-xs font-bold uppercase tracking-wider w-fit
                  "
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Disponible para entrevistas
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
                  ¿Hablamos de tu próximo producto?
                </h3>

                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                  Busco mi primera oportunidad en IT como{" "}
                  <strong className="text-slate-800 dark:text-white">
                    Full Stack Developer (Junior/Trainee)
                  </strong>
                  . Construyo aplicaciones end-to-end con MERN, cuidando{" "}
                  <strong className="text-slate-800 dark:text-white">
                    arquitectura, performance y experiencia de usuario
                  </strong>
                  .
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                  Abierto a roles Junior/Trainee y proyectos freelance.
                </p>
              </div>

              {/* Info */}
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <MapPin size={18} className="text-indigo-600 dark:text-indigo-400" />
                  <span>Buenos Aires, Argentina (GMT-3)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle2 size={18} className="text-indigo-600 dark:text-indigo-400" />
                  <span>Remoto / Híbrido · Full time</span>
                </div>
              </div>
            </div>

            {/* DERECHA */}
            <div
              className="
                p-6 sm:p-10 lg:p-12
                flex flex-col justify-center gap-4

                /* Light */
                bg-slate-900/5
                /* Dark (tu diseño) */
                dark:bg-black/20
              "
            >
              <ContactTile
                icon={Mail}
                label="Email"
                value="ezexgonzalez@outlook.com"
                href="mailto:ezexgonzalez@outlook.com"
                featured={true}
              />

              <ContactTile
                icon={Linkedin}
                label="LinkedIn"
                value="linkedin.com/in/ezexgonzalez"
                href="https://www.linkedin.com/in/ezexgonzalez/"
              />

              <ContactTile
                icon={Github}
                label="GitHub"
                value="github.com/ezexgonzalez"
                href="https://github.com/ezexgonzalez"
              />
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Contact;


