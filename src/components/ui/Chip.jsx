// Chip básico para tags, skills, etc.
const baseClasses = `
  inline-flex items-center justify-center
  rounded-full px-3 py-1
  text-[11px] font-medium
  border border-white/10
  bg-white/5 dark:bg-white/5
  text-muted
  whitespace-nowrap
`;

const Chip = ({ children, className = "", ...props }) => {
  return (
    <span className={`${baseClasses} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Chip;
