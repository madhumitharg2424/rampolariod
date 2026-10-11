import React from 'react';
import PolaroidCard from './PolaroidCard';
import { InstagramIcon } from './Icons';

export default function InstagramSection() {
  const instagramUrl = "https://www.instagram.com/idhu_enna_padam?dlrf=MXRiZ293a29nZ21mdA==";

  return (
    <section className="insta-section section-padding">
      <div className="container">
        <div className="insta-card paper-card">
          <div className="insta-content-row">
            {/* Left side text */}
            <div className="insta-text-side">
              <div className="insta-badge font-handwritten">
                @idhu_enna_padam
              </div>

              <h2 className="insta-heading font-serif">
                More scenes, more memories.
              </h2>

              <p className="insta-desc">
                Follow our little corner of Kollywood nostalgia.
              </p>

              <div className="insta-btn-wrap">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary insta-btn"
                >
                  <InstagramIcon size={20} color="#68432D" />
                  <span>Visit Our Instagram</span>
                </a>
              </div>

              <div className="insta-caption font-handwritten">
                "Tag us when you receive your prints!" ♡
              </div>
            </div>

            {/* Right side visual preview collage */}
            <div className="insta-visual-collage">
              <div className="insta-polaroid-1">
                <PolaroidCard
                  image="/assets/polaroid-collection.jpg"
                  alt="Kollywood Polaroid collection preview"
                  caption="Feed memories ✨"
                  rotation={-3}
                  tapePosition="center"
                  tapeColor="peach"
                  aspect="square"
                />
              </div>

              <div className="insta-polaroid-2">
                <PolaroidCard
                  image="assets\format-fancard.jpg"
                  alt="Stall preview"
                  caption="@idhu_enna_padam 📸"
                  rotation={3}
                  tapePosition="right"
                  tapeColor="yellow"
                  aspect="landscape"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .insta-section {
          background-color: var(--color-warm-cream);
          position: relative;
        }

        .insta-card {
          background: linear-gradient(135deg, #FFFDF7 0%, #FFF5E5 100%);
          border: 1.5px solid var(--color-chocolate-brown);
          padding: 3rem;
          border-radius: 6px;
        }

        .insta-content-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .insta-badge {
          font-size: 1.35rem;
          color: var(--color-vintage-mustard);
          margin-bottom: 0.5rem;
        }

        .insta-heading {
          font-size: clamp(2rem, 3.4vw, 2.8rem);
          color: var(--color-deep-coffee);
          margin-bottom: 0.8rem;
          line-height: 1.2;
        }

        .insta-desc {
          font-size: 1.05rem;
          color: #6C4931;
          margin-bottom: 1.8rem;
          line-height: 1.5;
        }

        .insta-btn-wrap {
          margin-bottom: 1.4rem;
        }

        .insta-btn {
          padding: 0.8rem 1.6rem;
        }

        .insta-caption {
          font-size: 1.2rem;
          color: var(--color-chocolate-brown);
          transform: rotate(-1deg);
        }

        /* Right side collage */
        .insta-visual-collage {
          position: relative;
          min-height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .insta-polaroid-1 {
          position: absolute;
          left: 10px;
          top: 10px;
          width: 220px;
          z-index: 2;
        }

        .insta-polaroid-2 {
          position: absolute;
          right: 10px;
          bottom: 10px;
          width: 230px;
          z-index: 3;
        }

        @media (max-width: 992px) {
          .insta-card {
            padding: 2rem;
          }
          .insta-content-row {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
          }
          .insta-visual-collage {
            max-width: 380px;
            margin: 0 auto;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
