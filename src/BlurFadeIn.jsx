import { useEffect, useRef, useState } from 'react';

const useBlurFadeIn = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

const BlurFadeIn = ({ children, delay = 0, duration = 0.6, className = '' }) => {
  const { ref, isVisible } = useBlurFadeIn();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(10px)',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${duration}s ease-out ${delay}s, filter ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`
      }}
    >
      {children}
    </div>
  );
};

export default BlurFadeIn;
export { useBlurFadeIn };
