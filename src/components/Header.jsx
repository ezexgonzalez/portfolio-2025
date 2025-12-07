// src/components/Header.jsx
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

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
      if (typeof window === "undefined") return;
      setScrolled(window.scrollY > 10); // a partir de 10px ya activa el glass
    };

    handleScroll(); // por si no arrancamos en el top
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-30
        transition-[backdrop-filter,border-color] duration-200
        ${scrolled
          ? "backdrop-blur-lg bg-white/25 dark:bg-[rgba(3,7,18,0.55)] border-b border-white/5"
          : "backdrop-blur-0 bg-transparent border-b border-transparent"
        }
      `}
    >
      <div
        className="
          max-w-5xl mx-auto
          px-6 py-3
          flex items-center justify-between gap-6
        "
      >
        <nav className="flex gap-6 text-sm">
          {NAV_LINKS.map(({ id, label }) => {
            const isActive = activeSection === id;

            return (
              <button
                key={id}
                onClick={() => onNavClick(id)}
                className={`
                  relative
                  transition-colors
                  ${isActive ? "text-main dark:text-white" : "text-muted"}
                `}
              >
                <span>{label}</span>
                {isActive && scrolled && (
                  <span
                    className="
                      absolute -bottom-1 left-0 right-0
                      h-[2px]
                      rounded-full
                      bg-accent
                    "
                  />
                )}
              </button>
            );
          })}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;



