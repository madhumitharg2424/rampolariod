import React from 'react';
import { cinemaMoods } from '../data/products';
import PolaroidCard from './PolaroidCard';
import { WhatsAppIcon } from './Icons';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function CinemaMoods() {
  return (
    <section id="scenes" className="moods-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-eyebrow">
            <span>✦</span>
            <span>CURATED THEMES &amp; MOMENTS</span>
            <span>✦</span>
          </div>
          <h2 className="section-title">
            Pick Your Cinema Mood.
          </h2>
          <p className="section-subtitle">
            From legendary punch dialogues to umbrella rain moments, explore our themed Kollywood collections.
          </p>
        </div>

        {/* 6 Mood Cards Grid */}
        <div className="moods-grid">
          {cinemaMoods.map((mood) => {
            const prefilledMessage = WHATSAPP_MESSAGES.themeEnquiry(mood.title);

            return (
              <div
                key={mood.id}
                className="mood-card paper-card"
                style={{ transform: `rotate(${mood.rotation}deg)` }}
              >
                {/* Washi Tape */}
                <div className="tape tape-top-center tape-mustard" aria-hidden="true" />

                {/* Mood Polaroid preview */}
                <div className="mood-polaroid-wrap">
                  <PolaroidCard
                    image={mood.image}
                    alt={`${mood.title} Scene`}
                    caption={mood.title}
                    subcaption={mood.badge}
                    tapePosition="none"
                    rotation={0}
                    aspect={mood.aspect || 'portrait'}
                  />
                </div>

                <div className="mood-card-body">
                  <div className="mood-title-row">
                    <span className="mood-icon">{mood.icon}</span>
                    <h3 className="mood-card-title font-serif">{mood.title}</h3>
                  </div>

                  <p className="mood-card-desc font-handwritten">
                    "{mood.description}"
                  </p>

                  <button
                    onClick={() => openWhatsApp(prefilledMessage)}
                    className="btn btn-whatsapp mood-enquire-btn"
                    aria-label={`Enquire about ${mood.title} on WhatsApp`}
                  >
                    <WhatsAppIcon size={16} color="#FFFFFF" />
                    <span>Enquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Request Prompt */}
        <div className="custom-scene-box">
          <p className="custom-scene-text">
            Have a personal scene in mind not listed here?
          </p>
          <button
            onClick={() => openWhatsApp(WHATSAPP_MESSAGES.customScene)}
            className="btn btn-secondary custom-scene-btn"
          >
            <span>Request a Custom Scene via WhatsApp ➔</span>
          </button>
        </div>
      </div>

      <style>{`
        .moods-section {
          background-color: var(--color-warm-cream);
          position: relative;
        }

        .moods-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.2rem;
          margin-bottom: 3rem;
        }

        .mood-card {
          padding: 1.4rem;
          background-color: #FFFCF7;
          border: 1.5px solid rgba(104, 67, 45, 0.25);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .mood-card:hover {
          transform: translateY(-8px) scale(1.02) !important;
          z-index: 10;
        }

        .mood-polaroid-wrap {
          margin-bottom: 1rem;
        }

        .mood-card-body {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .mood-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.4rem;
        }

        .mood-icon {
          font-size: 1.25rem;
        }

        .mood-card-title {
          font-size: 1.25rem;
          color: var(--color-deep-coffee);
        }

        .mood-card-desc {
          font-size: 1.15rem;
          line-height: 1.35;
          color: var(--color-chocolate-brown);
          margin-bottom: 1.2rem;
          flex: 1;
        }

        .mood-enquire-btn {
          width: 100%;
          font-size: 0.88rem;
          padding: 0.65rem 1rem;
        }

        .custom-scene-box {
          text-align: center;
          background: rgba(244, 227, 178, 0.35);
          border: 1px dashed var(--color-chocolate-brown);
          padding: 1.5rem;
          border-radius: 6px;
          max-width: 650px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .custom-scene-text {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-deep-coffee);
        }

        .custom-scene-btn {
          font-size: 0.88rem;
          padding: 0.6rem 1.1rem;
          white-space: nowrap;
        }

        @media (max-width: 992px) {
          .moods-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.8rem;
          }
          .custom-scene-box {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 640px) {
          .moods-grid {
            grid-template-columns: 1fr;
            max-width: 380px;
            margin: 0 auto 2.5rem auto;
          }
          .mood-card {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
