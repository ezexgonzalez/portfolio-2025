import Header from "./components/Header";
import LiquidBackground from "./components/LiquidBackground";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="bg-bg text-main">
      <LiquidBackground>
        <Header />

        <main className="max-w-5xl mx-auto px-6 pt-16 pb-4">
          <section id="hero" className="scroll-mt-24 pb-20">
            <Hero />
          </section>

          <section id="projects" className="scroll-mt-24 pb-24">
            <Projects />
          </section>

          <section id="about" className="scroll-mt-24 pb-16">
            <About />
          </section>

          <section id="skills" className="scroll-mt-24 pb-8">
            <Skills />
          </section>
        </main>

        {/* Footer minimal para cerrar el diseño */}
        <footer
          className="
            max-w-5xl mx-auto px-6 pb-10
            flex flex-col sm:flex-row items-start sm:items-center justify-between
            gap-3
            text-[11px] text-muted
            border-t border-white/5
            pt-4
          "
        >
          <span>© {new Date().getFullYear()} Ezequiel Gonzalez</span>
          <span className="text-xs">
            Construido con React, Vite y Tailwind · Liquid glass UI
          </span>
        </footer>
      </LiquidBackground>
    </div>
  );
}

export default App;


