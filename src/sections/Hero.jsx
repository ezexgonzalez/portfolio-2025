import { ArrowRight, MapPin, Terminal, Cpu, Globe } from "lucide-react";
import GlassCard from "../components/GlassCard";
import PrimaryButton from "../components/ui/PrimaryButton";
import SecondaryButton from "../components/ui/SecondaryButton";
import Chip from "../components/ui/Chip";

const Hero = () => {
  return (
    <div className="w-full relative isolate">
      {/* 1. GLOW ATMOSFÉRICO */}
      {/* Light Mode: mix-blend-multiply para que se vea el color sobre blanco
          Dark Mode: mix-blend-screen (tu configuración original) */}
      <div
        className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"
        aria-hidden="true"
      />

      {/* TARJETA PRINCIPAL */}
      <GlassCard className="relative overflow-hidden p-0">
        {/* 2. TEXTURA DE FONDO (Grid) */}
        {/* Light: Grid negro sutil (rgba(0,0,0,0.03))
            Dark: Grid blanco sutil (rgba(255,255,255,0.03)) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-[1.3fr_0.8fr] min-h-[550px]">
          {/* --- IZQUIERDA: IDENTIDAD & IMPACTO --- */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center gap-8 lg:border-r border-slate-200/60 dark:border-white/5">
            <div className="space-y-6">
              {/* Badge de rol */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-[10px] font-bold uppercase tracking-widest w-fit">
                <Terminal size={12} />
                <span>Software Engineer • 2025</span>
              </div>

              <div className="space-y-2">
                {/* Nombre con gradiente */}
                {/* Light: menos contraste (armonía) | Dark: intacto */}
                <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-black tracking-tight leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-slate-800 via-slate-600 to-slate-500 dark:from-white dark:via-white dark:to-slate-500">
                  EZEQUIEL <br />
                  <span className="text-slate-700 dark:text-transparent dark:text-stroke-glass">
                    GONZALEZ
                  </span>
                </h1>

                {/* Subtítulo: suavizado en light, dark intacto */}
                <p className="text-xl sm:text-2xl text-indigo-700/70 dark:text-indigo-200/80 font-light tracking-wide flex items-center gap-3">
                  Full Stack Developer
                  <span className="h-px w-12 bg-indigo-500/50"></span>
                </p>
              </div>

              {/* Descripción: suavizado en light, dark intacto */}
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                Creo experiencias digitales de alto impacto. Especializado en
                arquitecturas escalables,
                <span className="text-slate-700 dark:text-slate-200 font-medium">
                  {" "}
                  performance obsesiva
                </span>{" "}
                y diseño de interfaces líquidas.
              </p>
            </div>

            {/* Acciones */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <PrimaryButton
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver Proyectos
              </PrimaryButton>

              <SecondaryButton>Contactar</SecondaryButton>

              <div className="hidden sm:flex items-center gap-2 text-[10px] text-slate-500 ml-4 pl-4 border-l border-slate-300 dark:border-white/10">
                <MapPin size={12} />
                <span>Buenos Aires</span>
              </div>
            </div>
          </div>

          {/* --- DERECHA: PANEL DE ESTADO (HUD) --- */}
          {/* Light: Fondo gris muy suave (slate-50) | Dark: Fondo negro transparente (black/20) */}
          <div className="bg-slate-50/60 dark:bg-black/20 p-8 sm:p-12 lg:p-16 flex flex-col justify-center gap-8 backdrop-blur-sm transition-colors duration-300">
            {/* Status Card */}
            {/* Light: Blanca sólida | Dark: Blanca al 5% */}
            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-2xl space-y-5 transition-colors duration-300">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                  Estado actual
                </span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>

              <div className="space-y-3">
                {/* Suavizado en light, dark intacto */}
                <p className="text-sm font-medium text-slate-700 dark:text-white flex items-center gap-2">
                  <span className="text-indigo-500 dark:text-indigo-400">
                    ▹
                  </span>{" "}
                  Disponible para nuevos retos
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Buscando oportunidades para aportar valor en equipos ágiles con
                  stack moderno (MERN).
                </p>
              </div>
            </div>

            {/* Tech Stack Visual */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                <Cpu size={12} />
                <span>Core Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "Tailwind"].map(
                  (tech) => (
                    <Chip
                      key={tech}
                      className="bg-white border-slate-200 text-slate-600 hover:bg-slate-100 dark:bg-white/5 dark:border-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:border-white/20"
                    >
                      {tech}
                    </Chip>
                  )
                )}
              </div>
            </div>

            {/* Stats Rápidos */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-white/5">
              <div>
                {/* Suavizado en light, dark intacto */}
                <span className="block text-2xl font-bold text-slate-700 dark:text-white">
                  +3
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                  Años Exp.
                </span>
              </div>
              <div>
                {/* Suavizado en light, dark intacto */}
                <span className="block text-2xl font-bold text-slate-700 dark:text-white">
                  100%
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                  Compromiso
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* LÍNEA DE ENERGÍA INFERIOR */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
      </GlassCard>

      {/* FOOTER FLOTANTE */}
      <div className="mt-6 flex justify-between items-center px-4 opacity-60 dark:opacity-40 hover:opacity-100 transition-opacity">
        <div className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
          <Globe size={12} />
          <span>Portfolio v2.0 • Liquid Glass UI</span>
        </div>
        <div className="animate-bounce text-slate-500">
          <ArrowRight size={16} className="rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
