import React from 'react';
import { howItWorksSteps } from '../data/products';
import { FilmIcon, WhatsAppIcon, HeartIcon } from './Icons';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function HowItWorks() {
  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'film':
        return <FilmIcon size={28} color="#68432D" />;
      case 'chat':
        return <WhatsAppIcon size={28} color="#68432D" />;
      case 'heart':
      default:
        return <HeartIcon size={28} color="#68432D" fill="#F1D1B8" />;
    }
  };

  return (
    <section id="how-it-works" className="how-it-works-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-eyebrow">
            <span>✦</span>
            <span>SIMPLE &amp; PERSONAL</span>
            <span>✦</span>
          </div>
          <h2 className="section-title">
            How It Works
          </h2>
          <p className="section-subtitle">
            No complicated carts or forms — ordering cinema memories is as friendly as chatting with a friend.
          </p>
        </div>

        {/* 3 Step Scrapbook Cards */}
        <div className="steps-grid">
          {howItWorksSteps.map((item, index) => {
            const rotations = [-1.5, 1.8, -1.2];
            const rotation = rotations[index % 3];

            return (
              <div
                key={item.step}
                className="step-card paper-card"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                {/* Washi Tape */}
                <div
                  className={`tape tape-top-center ${
                    index === 0 ? 'tape-peach' : index === 1 ? '' : 'tape-mustard'
                  }`}
                  aria-hidden="true"
                />

                {/* Step Number Tag */}
                <div className="step-tag-row">
                  <span className="step-number font-serif">STEP {item.step}</span>
                  <span className="step-badge font-handwritten">{item.tag}</span>
                </div>

                {/* Icon Container */}
                <div className="step-icon-circle">
                  {getStepIcon(item.icon)}
                </div>

                <h3 className="step-title font-serif">{item.title}</h3>
                <p className="step-desc">{item.description}</p>

                {/* Step Footer Stamp */}
                <div className="step-card-footer font-handwritten">
                  {index === 0 && "Classic • Mini • Fan Cards"}
                  {index === 1 && "Direct WhatsApp with Ramya & Adellinde"}
                  {index === 2 && "Carefully packed & shipped to you ♡"}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action bar */}
        <div className="how-it-works-cta-box">
          <p className="cta-box-text">
            Ready to hold your favourite Kollywood scene in your hands?
          </p>
          <button
            onClick={() => openWhatsApp(WHATSAPP_MESSAGES.general)}
            className="btn btn-whatsapp"
          >
            <WhatsAppIcon size={18} color="#FFFFFF" />
            <span>Chat with Ramya on WhatsApp</span>
          </button>
        </div>
      </div>

      <style>{`
        .how-it-works-section {
          background-color: var(--color-warm-cream);
          position: relative;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.4rem;
          margin-bottom: 3.5rem;
        }

        .step-card {
          background-color: #FFFCF7;
          border: 1.5px solid rgba(104, 67, 45, 0.25);
          padding: 2.2rem 1.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-8px) scale(1.02) !important;
          z-index: 5;
        }

        .step-tag-row {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 0.8rem;
          border-bottom: 1px dashed rgba(104, 67, 45, 0.2);
        }

        .step-number {
          font-size: 1.15rem;
          color: var(--color-chocolate-brown);
          letter-spacing: 0.05em;
        }

        .step-badge {
          font-size: 0.95rem;
          color: var(--color-vintage-mustard);
          background: rgba(244, 227, 178, 0.4);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .step-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--color-butter-yellow);
          border: 1.5px solid var(--color-chocolate-brown);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.4rem;
          box-shadow: 0 4px 10px rgba(56, 37, 27, 0.1);
        }

        .step-title {
          font-size: 1.25rem;
          color: var(--color-deep-coffee);
          margin-bottom: 0.8rem;
          letter-spacing: 0.02em;
        }

        .step-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #5E3E29;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .step-card-footer {
          width: 100%;
          font-size: 1rem;
          color: var(--color-chocolate-brown);
          padding-top: 0.8rem;
          border-top: 1px dashed rgba(104, 67, 45, 0.2);
        }

        .how-it-works-cta-box {
          text-align: center;
          background: #FFF5E1;
          border: 1.5px dashed var(--color-chocolate-brown);
          padding: 1.8rem;
          border-radius: 6px;
          max-width: 640px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .cta-box-text {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-deep-coffee);
          text-align: left;
        }

        @media (max-width: 992px) {
          .steps-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
            margin: 0 auto 3rem auto;
          }
          .step-card {
            transform: none !important;
          }
          .how-it-works-cta-box {
            flex-direction: column;
            text-align: center;
          }
          .cta-box-text {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
