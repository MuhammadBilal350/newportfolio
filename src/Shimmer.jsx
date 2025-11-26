const Shimmer = ({ children, className = '', duration = 2 }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <div
        className="absolute inset-0 -translate-x-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
          animation: `shimmer ${duration}s infinite`
        }}
      />
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Shimmer;
