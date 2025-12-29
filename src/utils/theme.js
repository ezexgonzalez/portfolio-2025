const THEME_KEY = "theme";

export function initTheme() {
  if (typeof window === "undefined") return;

  const stored = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initial = stored ?? (prefersDark ? "dark" : "light");
  const isDark = initial === "dark";

  document.documentElement.classList.toggle("dark", isDark);
}

export function toggleTheme() {
  if (typeof window === "undefined") return;

  const html = document.documentElement;
  const isDark = html.classList.toggle("dark");
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
  return isDark;
}

export function isDarkTheme() {
  if (typeof window === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}
