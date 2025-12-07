const SectionHeader = ({ label, title, description }) => (
  <header className="mb-8 space-y-2">
    {label && (
      <p className="text-[11px] uppercase tracking-[0.3em] text-muted">
        {label}
      </p>
    )}
    <h2 className="text-2xl sm:text-3xl font-semibold text-white dark:text-white">
      {title}
    </h2>
    {description && (
      <p className="text-sm text-muted max-w-xl">{description}</p>
    )}
  </header>
);

export default SectionHeader;
