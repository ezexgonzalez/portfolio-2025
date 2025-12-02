import { useEffect, useState } from "react";
import { isDarkTheme, toggleTheme } from "../utils/theme.js";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

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
        inline-flex items-center justify-center
        h-9 w-9
        rounded-pill
        bg-glass-soft
        border border-border-subtle
        backdrop-blur-2xl
        shadow-glass
        text-xs text-muted
        hover:scale-105 hover:shadow-glass-strong
        transition-shadow
      "
      aria-label="Cambiar tema"
    >
      {isDark ? "☾" : "☀︎"}
    </button>
  );
};

export default ThemeToggle;
