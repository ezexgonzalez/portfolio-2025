import { useEffect, useState } from "react";
import Header from "./components/Header";
import LiquidBackground from "./components/LiquidBackground";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

const SECTION_IDS = ["hero", "projects", "about", "skills", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    el.scrollIntoView({
      behavior: "smooth",
      // Desktop: start (más consistente con secciones flexibles)
      // Mobile: start (respeta el scroll-padding-top)
      block: isDesktop ? "start" : "start",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && SECTION_IDS.includes(entry.target.id)) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.3 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-bg text-main selection:bg-indigo-500/30 overflow-x-clip">
      <LiquidBackground>
        <Header activeSection={activeSection} onNavClick={handleNavClick} />

        <main className="w-full">
          {/* HERO
              Mobile: pt-32 para bajarlo visualmente al cargar.
              Desktop: h-screen, snap-start, centrado.
          */}
          <section
            id="hero"
            className="
              w-full px-4 sm:px-6
              pt-32 pb-20
              lg:pt-0 lg:pb-0
              lg:h-screen lg:snap-start lg:flex lg:items-center lg:justify-center
            "
          >
            <div className="w-full max-w-5xl mx-auto">
              <Hero />
            </div>
          </section>

          {/* PROJECTS
              Desktop: min-h-screen + padding (no más overflow sobre otras secciones)
          */}
          <section
            id="projects"
            className="
              w-full px-4 sm:px-6
              pt-0 pb-24
              lg:py-24
              lg:min-h-screen lg:snap-start
            "
          >
            <div className="w-full max-w-5xl mx-auto">
              <Projects />
            </div>
          </section>

          {/* ABOUT */}
          <section
            id="about"
            className="
              w-full px-4 sm:px-6
              pt-0 pb-24
              lg:py-24
              lg:min-h-screen lg:snap-start
            "
          >
            <div className="w-full max-w-5xl mx-auto">
              <About />
            </div>
          </section>

          {/* SKILLS */}
          <section
            id="skills"
            className="
              w-full px-4 sm:px-6
              pt-0 pb-24
              lg:py-24
              lg:min-h-screen lg:snap-start
            "
          >
            <div className="w-full max-w-5xl mx-auto">
              <Skills />
            </div>
          </section>

          {/* CONTACT */}
          <section
            id="contact"
            className="
              w-full px-4 sm:px-6
              pt-0 pb-32
              lg:py-24
              lg:min-h-screen lg:snap-start
            "
          >
            <div className="w-full max-w-5xl mx-auto">
              <Contact />

              {/* Footer Desktop */}
              <div className="hidden lg:flex mt-12 w-full justify-between text-[11px] text-muted opacity-60 border-t border-white/5 pt-4">
                <span>© 2025 Ezequiel Gonzalez</span>
                <span>Liquid Glass UI</span>
              </div>
            </div>
          </section>
        </main>

        {/* Footer Mobile */}
        <footer className="lg:hidden max-w-5xl mx-auto px-6 pb-12 text-center text-[11px] text-muted opacity-60">
          © 2025 Ezequiel Gonzalez
        </footer>
      </LiquidBackground>
    </div>
  );
}

export default App;
