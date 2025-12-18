import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const NAV_LINKS = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Header = ({ activeSection, onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 20);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center p-4 pointer-events-none">
      <div
        className={`
          pointer-events-auto
          flex items-center px-2 py-2 pl-2 sm:pl-3
          rounded-full border transition-all duration-500 ease-out

          ${
            scrolled
              ? `
                /* LIGHT (nuevo): glass claro elegante */
                bg-white/60 border-slate-200/70 backdrop-blur-xl
                shadow-[0_18px_60px_-30px_rgba(15,23,42,0.35)]
                scale-100

                /* DARK (tu look original) */
                dark:bg-black/40 dark:border-white/10 dark:shadow-2xl
              `
              : `
                bg-transparent border-transparent scale-105
              `
          }
        `}
      >
        {/* BOTÓN DEL LOGO */}
        <button
          onClick={scrollToTop}
          aria-label="Volver al inicio"
          className="
            mr-1 sm:mr-2 rounded-full
            focus:outline-none focus:ring-2
            focus:ring-slate-400/30 dark:focus:ring-white/20
          "
        >
          <Logo />
        </button>

        {/* Divisor vertical */}
        <div className="w-px h-4 mx-1 sm:mx-2 bg-slate-300/40 dark:bg-white/10" />

        {/* NAV */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {NAV_LINKS.map(({ id, label }) => {
            const isActive = activeSection === id;

            return (
              <button
                key={id}
                onClick={() => onNavClick(id)}
                className={`
                  relative px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors rounded-full

                  ${
                    isActive
                      ? `
                        /* LIGHT (nuevo) */
                        text-slate-800 font-semibold
                        /* DARK (igual) */
                        dark:text-white
                      `
                      : `
                        /* LIGHT (nuevo) */
                        text-slate-500 hover:text-slate-700
                        /* DARK (igual) */
                        dark:text-slate-400 dark:hover:text-slate-200
                      `
                  }
                `}
              >
                {isActive && (
                  <span
                    className="
                      absolute inset-0 rounded-full -z-10 animate-fade-in
                      bg-slate-900/5 dark:bg-white/10
                      border border-slate-200/60 dark:border-transparent
                    "
                  />
                )}
                {label}
              </button>
            );
          })}
        </nav>

        <div className="w-px h-4 mx-1 sm:mx-2 bg-slate-300/40 dark:bg-white/10" />

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;


