// src/App.jsx
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

  // Scroll suave al hacer click en el nav
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Detectar sección activa mientras scrolleás
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (SECTION_IDS.includes(id)) {
              setActiveSection(id);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // 50% de la sección visible para considerarla activa
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-bg text-main">
      <LiquidBackground>
        <Header
          activeSection={activeSection}
          onNavClick={handleNavClick}
        />

        <main className="max-w-5xl mx-auto px-6 pt-28 pb-4">
          <section id="hero" className="scroll-mt-24 pb-20">
            <Hero />
          </section>

          <section id="projects" className="scroll-mt-24 pb-24">
            <Projects />
          </section>

          <section id="about" className="scroll-mt-24 pb-16">
            <About />
          </section>

          <section id="skills" className="scroll-mt-24 pb-16">
            <Skills />
          </section>

          <section id="contact" className="scroll-mt-24 pb-12">
            <Contact />
          </section>
        </main>

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



