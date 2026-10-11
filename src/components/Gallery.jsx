import React, { useState } from 'react';
import { galleryItems } from '../data/gallery';
import PolaroidCard from './PolaroidCard';
import Lightbox from './Lightbox';

export default function Gallery() {
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Stall Memories', 'Collection', 'Rain Scenes', 'Classic'];

  const filteredItems = selectedFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter || item.category.includes(selectedFilter));

  const handlePrev = () => {
    setActiveItemIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setActiveItemIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-eyebrow">
            <span>✦</span>
            <span>SCRAPBOOK WALL</span>
            <span>✦</span>
          </div>
          <h2 className="section-title">
            The Cinema Memories Gallery
          </h2>
          <p className="section-subtitle">
            A pinboard of Kollywood moments, college memories, and fan favourites. Tap any frame to inspect details.
          </p>

          {/* Filter Pills */}
          <div className="gallery-filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`filter-pill ${selectedFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Masonry-style Scrapbook Grid */}
        <div className="gallery-scrapbook-grid">
          {filteredItems.map((item, index) => {
            const tapePos = index % 3 === 0 ? 'left' : index % 3 === 1 ? 'center' : 'right';
            const tapeCol = index % 2 === 0 ? 'yellow' : 'peach';

            return (
              <div
                key={item.id}
                className="gallery-grid-item"
              >
                <PolaroidCard
                  image={item.image}
                  alt={item.title}
                  caption={item.title}
                  subcaption={item.note || item.caption}
                  rotation={item.rotation}
                  tapePosition={tapePos}
                  tapeColor={tapeCol}
                  aspect={item.aspect || 'square'}
                  interactive={true}
                  onClick={() => setActiveItemIndex(index)}
                />
              </div>
            );
          })}
        </div>

        {/* Scrapbook Note footer */}
        <div className="gallery-note-box font-handwritten">
          <span>✨</span>
          <span>"Each frame holds a scene you can keep forever."</span>
          <span>✨</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItemIndex !== null && (
        <Lightbox
          item={filteredItems[activeItemIndex]}
          onClose={() => setActiveItemIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={filteredItems.length > 1}
          hasNext={filteredItems.length > 1}
        />
      )}

      <style>{`
        .gallery-section {
          background-color: #FFFDF9;
          position: relative;
        }

        .gallery-filter-pills {
          display: flex;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }

        .filter-pill {
          background: rgba(244, 227, 178, 0.4);
          border: 1px solid rgba(104, 67, 45, 0.25);
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--color-deep-coffee);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-pill:hover,
        .filter-pill.active {
          background: var(--color-chocolate-brown);
          color: #FFF9EC;
          border-color: var(--color-deep-coffee);
        }

        .gallery-scrapbook-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2.2rem 1.8rem;
          padding: 1rem 0 3rem 0;
        }

        .gallery-grid-item {
          transition: transform 0.3s ease;
        }

        .gallery-grid-item:hover {
          transform: translateY(-6px) scale(1.02);
          z-index: 10;
        }

        .gallery-note-box {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          font-size: 1.35rem;
          color: var(--color-chocolate-brown);
          text-align: center;
          padding: 1.2rem;
          background: rgba(244, 227, 178, 0.3);
          border-radius: 4px;
          border: 1px dashed rgba(104, 67, 45, 0.3);
          max-width: 580px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .gallery-scrapbook-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.8rem;
          }
        }

        @media (max-width: 768px) {
          .gallery-scrapbook-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.4rem;
          }
        }

        @media (max-width: 480px) {
          .gallery-scrapbook-grid {
            grid-template-columns: 1fr;
            max-width: 320px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
