import './App.css'
import ThemeToggle from "./components/ThemeToggle";
import GlassCard from "./components/GlassCard";

function App() {
  return (
    <div className="min-h-screen bg-bg text-main">
      {/* NAV + TOGGLE */}
      <header className="relative z-20 max-w-5xl mx-auto flex items-center justify-between px-6 py-5">
        <nav className="flex gap-8 text-sm text-muted">
          <button className="hover:text-main transition-colors">Projects</button>
          <button className="hover:text-main transition-colors">About</button>
          <button className="hover:text-main transition-colors">Skills</button>
        </nav>
        <ThemeToggle />
      </header>

      {/* HERO CON LIQUID GLASS */}
      <main
        className="
          relative max-w-5xl mx-auto px-6 pb-24 pt-10
          overflow-hidden
        "
      >
        {/* blobs de fondo */}
        <div
          className="
            pointer-events-none
            absolute -right-40 -top-32
            h-[420px] w-[260px]
            rounded-[60%_40%_65%_35%]
            bg-glass-soft
            blur-3xl
            shadow-glass-strong
            opacity-80
          "
        />
        <div
          className="
            pointer-events-none
            absolute -left-32 top-1/3
            h-[260px] w-[260px]
            rounded-full
            bg-glass-soft
            blur-3xl
            shadow-glass
            opacity-80
          "
        />
        <div
          className="
            pointer-events-none
            absolute left-1/3 top-10
            h-[160px] w-[160px]
            rounded-[45%_55%_60%_40%]
            bg-glass-soft
            blur-2xl
            shadow-glass
            opacity-75
          "
        />

        {/* card principal */}
        <GlassCard className="relative z-20 px-10 py-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted mb-5">
            Portfolio 2025
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            EZEQUIEL <span className="block">GONZALEZ</span>
          </h1>

          <p className="mt-4 text-lg text-muted">
            Full Stack Web Developer
          </p>

          <p className="mt-4 text-sm text-muted max-w-xl">
            Construyo experiencias web modernas, escalables y cuidadas al
            detalle, desde el backend hasta la interfaz final.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              className="
                inline-flex items-center justify-center
                rounded-pill px-6 py-2.5
                text-sm font-medium
                bg-accent text-white
                shadow-[0_18px_40px_var(--color-accent-soft)]
                hover:translate-y-[1px]
                transition-transform
              "
            >
              Ver proyectos
            </button>

            <span className="text-xs text-muted">
              Disponible para oportunidades IT
            </span>
          </div>
        </GlassCard>
      </main>
    </div>
  );
}

export default App;
