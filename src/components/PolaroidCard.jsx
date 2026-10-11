import React, { useState, useEffect } from 'react';
import { CameraIcon } from './Icons';

export default function PolaroidCard({
  image,
  alt = "Kollywood Polaroid Print",
  caption,
  subcaption,
  rotation = 0,
  tapePosition = "center",
  tapeColor = "yellow",
  aspect = "square",
  className = "",
  style = {},
  onClick,
  interactive = false
}) {
  const [hasError, setHasError] = useState(!image);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setHasError(!image);
    setIsLoaded(false);
  }, [image]);

  // Washi tape class
  const getTapeClass = () => {
    if (tapePosition === 'none') return '';
    const posClass = tapePosition === 'left' ? 'tape-top-left' : tapePosition === 'right' ? 'tape-top-right' : 'tape-top-center';
    const colClass = tapeColor === 'peach' ? 'tape-peach' : tapeColor === 'mustard' ? 'tape-mustard' : tapeColor === 'cream' ? 'tape-cream' : '';
    return `tape ${posClass} ${colClass}`;
  };

  const getAspectClass = () => {
    if (aspect === 'portrait') return 'aspect-portrait';
    if (aspect === 'landscape') return 'aspect-landscape';
    return '';
  };

  return (
    <div
      className={`polaroid-frame ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        cursor: interactive || onClick ? 'pointer' : 'default',
        ...style
      }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
    >
      {tapePosition !== 'none' && <div className={getTapeClass()} aria-hidden="true" />}

      <div className={`polaroid-photo-area ${getAspectClass()}`}>
        {!hasError && image ? (
          <img
            src={image}
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
          />
        ) : null}

        {(hasError || !image) && (
          <div className="polaroid-placeholder" aria-label="Photo placeholder">
            <div className="polaroid-placeholder-icon">
              <CameraIcon size={38} color="#68432D" />
            </div>
            <div className="polaroid-placeholder-title">{alt || "Your Photo Here"}</div>
            <div className="polaroid-placeholder-note">Add to public/assets/</div>
          </div>
        )}
      </div>

      {caption && <div className="polaroid-caption">{caption}</div>}
      {subcaption && <div className="polaroid-subcaption">{subcaption}</div>}
    </div>
  );
}
