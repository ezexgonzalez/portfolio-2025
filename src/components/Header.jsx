import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="relative z-20 max-w-5xl mx-auto flex items-center justify-between px-6 py-5">
      <nav className="flex gap-8 text-sm text-muted">
        <button className="hover:text-main transition-colors">Projects</button>
        <button className="hover:text-main transition-colors">About</button>
        <button className="hover:text-main transition-colors">Skills</button>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
