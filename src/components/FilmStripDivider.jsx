import React from 'react';

export default function FilmStripDivider({ label = "KODAK • CHENNAI 2024 • IDHU ENNA PADAM?" }) {
  return (
    <div className="film-strip-divider" aria-hidden="true">
      <div className="film-sprockets">
        {Array.from({ length: 24 }).map((_, i) => (
          <React.Fragment key={i}>
            <div className="sprocket-hole" />
            {i === 6 && <span className="film-label">{label}</span>}
            {i === 18 && <span className="film-label">01A • 35MM RETRO</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
