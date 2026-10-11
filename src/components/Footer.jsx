import React from 'react';
import FilmStripDivider from './FilmStripDivider';
import { CameraIcon, WhatsAppIcon, InstagramIcon, HeartIcon } from './Icons';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const instagramUrl = "https://www.instagram.com/idhu_enna_padam?dlrf=MXRiZ293a29nZ21mdA==";

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      {/* Film strip border dividing main body and footer */}
      <FilmStripDivider label="IDHU ENNA PADAM? • RETRO KOLLYWOOD POLAROIDS • CHENNAI" />

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Brand Info & Tagline */}
            <div className="footer-brand-col">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <CameraIcon size={24} color="#FFF9EC" />
                </div>
                <span className="footer-brand-name font-serif">Idhu Enna Padam?</span>
              </div>

              <p className="footer-tagline font-handwritten">
                "Screen la paatha scene, ippo un kaila!!"
              </p>

              <p className="footer-bio">
                Kollywood-inspired Polaroids, fan cards, cinema memories, and custom printed photographs born at Loyola College, Chennai.
              </p>

              <div className="footer-founders-badge">
                <span>Founders:</span>
                <strong>Ramya &amp; Adellinde</strong>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-links-col">
              <h4 className="footer-col-title font-serif">Quick Links</h4>
              <ul className="footer-nav-links">
                <li><a href="#hero" onClick={(e) => scrollTo(e, 'hero')}>Home</a></li>
                <li><a href="#story" onClick={(e) => scrollTo(e, 'story')}>Our Story</a></li>
                <li><a href="#formats" onClick={(e) => scrollTo(e, 'formats')}>Formats &amp; Sizes</a></li>
                <li><a href="#scenes" onClick={(e) => scrollTo(e, 'scenes')}>Cinema Moods</a></li>
                <li><a href="#how-it-works" onClick={(e) => scrollTo(e, 'how-it-works')}>How It Works</a></li>
                <li><a href="#faq" onClick={(e) => scrollTo(e, 'faq')}>FAQ</a></li>
              </ul>
            </div>

            {/* Column 3: Contact & WhatsApp */}
            <div className="footer-contact-col">
              <h4 className="footer-col-title font-serif">Order &amp; Connect</h4>
              <p className="footer-contact-text">
                Every print is handled directly by Ramya &amp; Adellinde. Send us a message on WhatsApp to reserve your prints!
              </p>

              <div className="footer-action-buttons">
                <button
                  onClick={() => openWhatsApp(WHATSAPP_MESSAGES.general)}
                  className="btn btn-whatsapp w-full"
                >
                  <WhatsAppIcon size={18} color="#FFFFFF" />
                  <span>WhatsApp: +91 86103 50038</span>
                </button>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full"
                >
                  <InstagramIcon size={18} color="#38251B" />
                  <span>Follow @idhu_enna_padam</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom-bar">
            <div className="footer-closing-note font-handwritten">
              "Made with love, printed with nostalgia." ♡
            </div>

            <div className="footer-copyright">
              © {currentYear} Idhu Enna Padam? • Crafted for Kollywood lovers everywhere.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-wrap {
          background-color: var(--color-deep-coffee);
          color: #FFF9EC;
          position: relative;
        }

        .footer-main {
          padding: 4.5rem 0 2.5rem 0;
          background-image: radial-gradient(rgba(244, 227, 178, 0.04) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.8fr 1.1fr;
          gap: 3.5rem;
          margin-bottom: 3.5rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.8rem;
        }

        .footer-logo-icon {
          width: 38px;
          height: 38px;
          background-color: var(--color-chocolate-brown);
          border: 1.5px solid var(--color-vintage-mustard);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-brand-name {
          font-size: 1.6rem;
          color: #FFF9EC;
          letter-spacing: -0.01em;
        }

        .footer-tagline {
          font-size: 1.35rem;
          color: var(--color-butter-yellow);
          margin-bottom: 1rem;
        }

        .footer-bio {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #D3BFB1;
          margin-bottom: 1.5rem;
          max-width: 380px;
        }

        .footer-founders-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(244, 227, 178, 0.12);
          border: 1px solid rgba(244, 227, 178, 0.3);
          padding: 0.35rem 0.85rem;
          border-radius: 4px;
          font-size: 0.82rem;
          color: var(--color-butter-yellow);
        }

        .footer-founders-badge strong {
          color: #FFF9EC;
        }

        .footer-col-title {
          font-size: 1.35rem;
          color: #FFF9EC;
          margin-bottom: 1.25rem;
          letter-spacing: 0.02em;
        }

        .footer-nav-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-nav-links a {
          text-decoration: none;
          color: #D3BFB1;
          font-size: 0.92rem;
          transition: color 0.2s, padding-left 0.2s;
          display: inline-block;
        }

        .footer-nav-links a:hover {
          color: var(--color-butter-yellow);
          padding-left: 6px;
        }

        .footer-contact-text {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #D3BFB1;
          margin-bottom: 1.4rem;
        }

        .footer-action-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .w-full {
          width: 100%;
        }

        .footer-bottom-bar {
          padding-top: 2rem;
          border-top: 1px solid rgba(244, 227, 178, 0.15);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-closing-note {
          font-size: 1.35rem;
          color: var(--color-butter-yellow);
        }

        .footer-copyright {
          font-size: 0.82rem;
          color: #A98C7B;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-bottom-bar {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
