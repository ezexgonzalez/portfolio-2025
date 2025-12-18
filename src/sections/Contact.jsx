import { Mail, Linkedin, Github, ArrowUpRight, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import GlassCard from "../components/GlassCard";

// Componente interno para los botones de contacto (Tiles)
const ContactTile = ({ icon: Icon, label, value, href, featured = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`
      group flex items-center justify-between p-4 rounded-2xl border transition-all duration-300
      ${featured 
        ? "bg-indigo-600/10 border-indigo-500/30 hover:bg-indigo-600/20 hover:border-indigo-500/50" 
        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
      }
    `}
  >
    <div className="flex items-center gap-4">
      <div className={`
        p-2.5 rounded-xl flex items-center justify-center
        ${featured ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20" : "bg-white/10 text-slate-300 group-hover:text-white"}
      `}>
        <Icon size={20} />
      </div>
      <div className="text-left">
        <p className={`text-xs font-bold tracking-wide uppercase ${featured ? "text-indigo-300" : "text-slate-500"}`}>
          {label}
        </p>
        <p className="text-sm sm:text-base font-medium text-white group-hover:text-indigo-200 transition-colors">
          {value}
        </p>
      </div>
    </div>
    <ArrowUpRight size={18} className="text-slate-500 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
  </a>
);

const Contact = () => {
  return (
    <div className="w-full flex flex-col justify-center py-12 lg:py-0 min-h-[50vh] lg:min-h-[80vh]">
      
      <div className="mb-12">
        <SectionHeader
          label="Contact"
          title="Hablemos"
          description="Estoy listo para sumarme a nuevos desafíos. ¿Creamos algo juntos?"
        />
      </div>

      <div className="w-full max-w-5xl mx-auto">
        {/* GlassCard Principal dividida en 2 columnas en Desktop */}
        <GlassCard className="p-0 overflow-hidden">
          <div className="flex flex-col lg:grid lg:grid-cols-2">
            
            {/* --- COLUMNA IZQUIERDA: TEXTO Y CONTEXTO --- */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between gap-10 border-b lg:border-b-0 lg:border-r border-white/10 relative">
              
              {/* Decoración de fondo */}
              <div className="absolute top-0 left-0 w-full h-full bg-indigo-500/[0.02] pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Disponible para proyectos
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  ¿Tenés una idea en mente?
                </h3>
                
                <p className="text-base text-slate-400 leading-relaxed max-w-md">
                  Actualmente estoy buscando oportunidades como <strong className="text-white">Full Stack Developer</strong>. 
                  Si valorás el código limpio, la arquitectura escalable y el diseño de interfaces modernas, me encantaría charlar con vos.
                </p>
              </div>

              {/* Info de ubicación */}
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <MapPin size={18} className="text-indigo-400" />
                  <span>Buenos Aires, Argentina (GMT-3)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <CheckCircle2 size={18} className="text-indigo-400" />
                  <span>Disponible Remoto & Full Time</span>
                </div>
              </div>
            </div>

            {/* --- COLUMNA DERECHA: ACCIONES (LINKS) --- */}
            <div className="p-6 sm:p-10 lg:p-12 bg-black/20 flex flex-col justify-center gap-4">
              
              <ContactTile 
                icon={Mail}
                label="Envíame un correo"
                value="ezequiel.gonzalez@email.com" // Poner tu email real
                href="mailto:ezequiel.gonzalez@email.com"
                featured={true} // Destacamos el email
              />

              <ContactTile 
                icon={Linkedin}
                label="Conectemos"
                value="linkedin.com/in/ezequiel" // Poner tu linkedin
                href="https://www.linkedin.com"
              />

              <ContactTile 
                icon={Github}
                label="Revisá mi código"
                value="github.com/ezequiel" // Poner tu github
                href="https://github.com"
              />

            </div>

          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Contact;
