const AnimatedBorder = ({ children, className = '', borderWidth = 2, gradientColors = ['#6366f1', '#ec4899', '#8b5cf6'] }) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0 rounded-3xl opacity-75"
        style={{
          background: `linear-gradient(90deg, ${gradientColors.join(', ')})`,
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 3s ease infinite',
          padding: `${borderWidth}px`
        }}
      >
        <div className="w-full h-full bg-transparent rounded-3xl" />
      </div>
      <div className="relative z-10">
        {children}
      </div>
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBorder;
