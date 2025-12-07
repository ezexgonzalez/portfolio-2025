
const GlassCard = ({ className = "", children }) => {
  return (
    <div
      className={`
        bg-glass
        border border-border-subtle
        rounded-card
        backdrop-blur-3xl
        shadow-glass-strong
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
