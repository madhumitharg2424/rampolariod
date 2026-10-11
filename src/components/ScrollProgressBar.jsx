import React, { useState, useEffect } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress-container"
      aria-hidden="true"
    >
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
      <style>{`
        .scroll-progress-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 3.5px;
          background: transparent;
          z-index: 10001;
          pointer-events: none;
        }

        .scroll-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #D99A43, #F4E3B2, #68432D);
          transition: width 0.1s ease-out;
        }
      `}</style>
    </div>
  );
}
