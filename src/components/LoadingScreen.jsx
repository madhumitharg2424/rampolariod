import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: enter, 1: flash, 2: eject, 3: text, 4: exit
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setStage(1), 500);  // Camera flash
    const t2 = setTimeout(() => setStage(2), 950);  // Polaroid slides out
    const t3 = setTimeout(() => setStage(3), 1400); // Text reveals
    const t4 = setTimeout(() => setExiting(true), 2500); // Begin soft paper fade out
    const t5 = setTimeout(() => onComplete(), 2900); // Finish

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setExiting(true);
    setTimeout(() => onComplete(), 200);
  };

  return (
    <div
      className={`loading-screen ${exiting ? 'loading-screen-exit' : ''}`}
      role="status"
      aria-label="Loading vintage camera intro"
    >
      {/* Skip button for accessibility */}
      <button
        onClick={handleSkip}
        className="loading-skip-btn"
        aria-label="Skip loading animation"
      >
        Skip ➔
      </button>

      <div className="loading-content">
        {/* Flash Burst Glow Effect */}
        <div className={`camera-flash-glow ${stage >= 1 ? 'flash-active' : ''}`} />

        {/* Vintage Instant Camera Illustration */}
        <div className={`camera-wrapper ${stage >= 1 ? 'camera-bounce' : ''}`}>
          <svg
            className="vintage-camera-svg"
            viewBox="0 0 240 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Camera leatherette shadow */}
              <linearGradient id="camBody" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7E5338" />
                <stop offset="100%" stopColor="#4A2E1E" />
              </linearGradient>
              <linearGradient id="lensGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#251811" />
                <stop offset="50%" stopColor="#4A3022" />
                <stop offset="100%" stopColor="#150D09" />
              </linearGradient>
            </defs>

            {/* Shutter Button on Top */}
            <rect x="36" y="14" width="28" height="12" rx="3" fill="#D99A43" stroke="#68432D" strokeWidth="2" />
            <rect x="42" y="8" width="16" height="6" rx="2" fill="#F4E3B2" />

            {/* Film ejection slot on top */}
            <rect x="74" y="20" width="112" height="6" rx="2" fill="#20130C" />

            {/* Main Camera Body */}
            <rect x="18" y="26" width="204" height="150" rx="18" fill="url(#camBody)" stroke="#D99A43" strokeWidth="3" />

            {/* Retro Color Stripes */}
            <rect x="18" y="44" width="204" height="7" fill="#F4E3B2" />
            <rect x="18" y="51" width="204" height="6" fill="#F1D1B8" />
            <rect x="18" y="57" width="204" height="6" fill="#D99A43" />

            {/* Viewfinder Window */}
            <rect x="34" y="74" width="30" height="22" rx="4" fill="#20130C" stroke="#F4E3B2" strokeWidth="1.5" />
            <rect x="38" y="78" width="22" height="14" rx="2" fill="#68432D" opacity="0.6" />

            {/* Camera Flash Window */}
            <rect x="174" y="70" width="34" height="28" rx="5" fill="#FFF9EC" stroke="#D99A43" strokeWidth="2" />
            <circle cx="191" cy="84" r="7" fill="#FFE5A3" />
            {stage === 1 && (
              <circle cx="191" cy="84" r="16" fill="#FFFFFF" opacity="0.9" className="flash-flare" />
            )}

            {/* Central Lens Housing */}
            <circle cx="120" cy="112" r="48" fill="#20130C" stroke="#D99A43" strokeWidth="3" />
            <circle cx="120" cy="112" r="38" fill="url(#lensGrad)" stroke="#68432D" strokeWidth="2" />
            <circle cx="120" cy="112" r="24" fill="#150D09" />
            <circle cx="120" cy="112" r="14" fill="#2E1C12" />
            {/* Lens Reflection Highlight */}
            <ellipse cx="112" cy="104" rx="8" ry="5" transform="rotate(-30 112 104)" fill="#FFF9EC" opacity="0.5" />
          </svg>

          {/* Ejected Blank Cream Polaroid Frame */}
          <div className={`ejected-polaroid ${stage >= 2 ? 'polaroid-ejected' : ''}`}>
            <div className="ejected-photo-placeholder">
              {/* Absolutely blank cream square inside frame */}
            </div>
            <div className="ejected-label">
              <span>✦</span>
            </div>
          </div>
        </div>

        {/* Text Reveal Section */}
        <div className={`loading-text-container ${stage >= 3 ? 'text-revealed' : ''}`}>
          <h1 className="loading-brand-title">
            {"Idhu Enna Padam?".split("").map((char, index) => (
              <span
                key={index}
                className="loading-letter"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p className="loading-tagline">
            "Screen la paatha scene, ippo un kaila!!"
          </p>

          <p className="loading-handwritten-note font-handwritten">
            "Oru scene-ah pudichu vachikalaama?"
          </p>

          {/* Film dots loading indicator */}
          <div className="film-dots-indicator" aria-hidden="true">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>
      </div>

      <style>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #38251B;
          background-image: radial-gradient(rgba(217, 154, 67, 0.08) 1px, transparent 1px);
          background-size: 20px 20px;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.45s ease, transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .loading-screen-exit {
          opacity: 0;
          transform: scale(1.02);
          pointer-events: none;
        }

        .loading-skip-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          background: rgba(244, 227, 178, 0.15);
          color: #F4E3B2;
          border: 1px solid rgba(244, 227, 178, 0.4);
          padding: 6px 14px;
          border-radius: 20px;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(4px);
        }

        .loading-skip-btn:hover {
          background: #F4E3B2;
          color: #38251B;
        }

        .loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          max-width: 90vw;
          text-align: center;
        }

        /* Flash Glow */
        .camera-flash-glow {
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 249, 236, 0.95) 0%, rgba(244, 227, 178, 0.4) 40%, transparent 70%);
          opacity: 0;
          transform: scale(0.2);
          pointer-events: none;
          z-index: 10;
          transition: opacity 0.15s ease, transform 0.25s ease;
        }

        .camera-flash-glow.flash-active {
          opacity: 1;
          transform: scale(2.2);
          transition: opacity 0.4s ease-out, transform 0.4s cubic-bezier(0.1, 0.9, 0.2, 1);
        }

        /* Camera bouncing */
        .camera-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: cameraGentleFloat 2s ease-in-out infinite;
        }

        @keyframes cameraGentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .camera-bounce {
          animation: cameraShutterBounce 0.4s cubic-bezier(0.3, 1.4, 0.5, 1);
        }

        @keyframes cameraShutterBounce {
          0% { transform: scale(1); }
          30% { transform: scale(0.94) translateY(4px); }
          60% { transform: scale(1.04) translateY(-8px); }
          100% { transform: scale(1); }
        }

        .vintage-camera-svg {
          width: 190px;
          height: 150px;
          filter: drop-shadow(0 14px 24px rgba(0,0,0,0.4));
          z-index: 5;
        }

        /* Ejected Blank Polaroid */
        .ejected-polaroid {
          position: absolute;
          top: 10px;
          width: 120px;
          height: 144px;
          background-color: #FFF9EC;
          border: 1px solid rgba(104, 67, 45, 0.3);
          border-radius: 3px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.35);
          padding: 8px 8px 22px 8px;
          z-index: 2;
          transform: translateY(0) scale(0.8);
          opacity: 0;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
        }

        .polaroid-ejected {
          opacity: 1;
          transform: translateY(-92px) rotate(-3deg) scale(1);
        }

        .ejected-photo-placeholder {
          width: 100%;
          height: 100px;
          background-color: #F4EAD7;
          border: 1px solid rgba(104, 67, 45, 0.15);
        }

        .ejected-label {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 5px;
          font-size: 10px;
          color: #68432D;
          opacity: 0.6;
        }

        /* Text reveal */
        .loading-text-container {
          margin-top: 2rem;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .loading-text-container.text-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .loading-brand-title {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          color: #FFF9EC;
          letter-spacing: 0.02em;
          margin-bottom: 0.5rem;
        }

        .loading-letter {
          display: inline-block;
          animation: letterDrop 0.4s ease forwards;
        }

        @keyframes letterDrop {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .loading-tagline {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          color: #F4E3B2;
          font-weight: 500;
          margin-bottom: 0.6rem;
        }

        .loading-handwritten-note {
          font-family: var(--font-handwriting);
          font-size: 1.25rem;
          color: #F1D1B8;
          transform: rotate(-1deg);
          margin-bottom: 1.2rem;
        }

        /* Film dots indicator */
        .film-dots-indicator {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 0.5rem;
        }

        .film-dots-indicator .dot {
          width: 8px;
          height: 8px;
          background-color: #D99A43;
          border-radius: 50%;
          animation: dotPulse 1.2s infinite ease-in-out;
        }

        .film-dots-indicator .dot:nth-child(1) { animation-delay: 0s; }
        .film-dots-indicator .dot:nth-child(2) { animation-delay: 0.2s; }
        .film-dots-indicator .dot:nth-child(3) { animation-delay: 0.4s; }
        .film-dots-indicator .dot:nth-child(4) { animation-delay: 0.6s; }

        @keyframes dotPulse {
          0%, 100% { opacity: 0.25; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}
