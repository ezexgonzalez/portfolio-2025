import { useEffect, useState } from "react";
import { isDarkTheme, toggleTheme } from "../utils/theme.js";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Sincronizar estado inicial
  useEffect(() => {
    setIsDark(isDarkTheme());
  }, []);

  const handleClick = () => {
    const next = toggleTheme();
    setIsDark(next);
  };

  return (
    <button
      onClick={handleClick}
      className="
        relative group
        flex items-center justify-center
        w-8 h-8 rounded-full
        transition-colors duration-300
        hover:bg-white/10
        focus:outline-none
      "
      aria-label="Cambiar tema"
    >
      {/* ÍCONO DE SOL (Visible en Light Mode) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          absolute w-4 h-4
          transition-all duration-500 ease-spring
          ${!isDark 
            ? "opacity-100 rotate-0 scale-100 text-amber-400" 
            : "opacity-0 rotate-90 scale-50 text-slate-400"
          }
        `}
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>

      {/* ÍCONO DE LUNA (Visible en Dark Mode) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          absolute w-4 h-4
          transition-all duration-500 ease-spring
          ${isDark 
            ? "opacity-100 rotate-0 scale-100 text-indigo-300" 
            : "opacity-0 -rotate-90 scale-50 text-slate-400"
          }
        `}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
};

export default ThemeToggle;
