import React, { useState, useEffect } from 'react';
import PolaroidCard from './PolaroidCard';
import { CameraIcon, FilmIcon, WhatsAppIcon, SparkleIcon, HeartIcon } from './Icons';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const homeSlides = [
    {
      image: "/assets/home-slide-1.jpg",
      alt: "Naanum Rowdy Dhaan Scene",
      caption: "Are you ok? baby <3",
      subcaption: "Naanum Rowdy Dhaan • Fan Favourite",
      rotation: 2.8,
      tapeColor: "peach",
      badge: "Featured Scene 01"
    },
    {
      image: "/assets/home-slide-2.jpg",
      alt: "VIP Scene",
      caption: "Un Pola Amma Yar Amma!",
      subcaption: "Velaiyilla Pattadhari • Iconic Moment",
      rotation: -2.2,
      tapeColor: "yellow",
      badge: "Featured Scene 02"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % homeSlides.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [homeSlides.length]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const activeSlide = homeSlides[currentSlide];

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Typography & CTAs */}
        <div className="hero-left-content">
          <div className="hero-badge">
            <span className="badge-sparkle">✦</span>
            <span>KOLLYWOOD POLAROIDS • MADE WITH LOVE</span>
          </div>

          <h1 className="hero-main-title">
            Idhu Enna <span className="title-highlight">Padam?</span>
          </h1>

          <p className="hero-tagline font-handwritten">
            "Screen la paatha scene, ippo un kaila!!"
          </p>

          <p className="hero-description">
            Un favourite cinema moments-ah Polaroid-a maathunga. From iconic scenes to your favourite memories, carry a little cinema magic wherever you go.
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <button
              onClick={() => scrollTo('formats')}
              className="btn btn-primary hero-btn"
            >
              <FilmIcon size={18} color="#FFF9EC" />
              <span>Explore Our Collection</span>
            </button>

            <button
              onClick={() => scrollTo('story')}
              className="btn btn-secondary hero-btn"
            >
              <span>Our Story</span>
            </button>

            <button
              onClick={() => openWhatsApp(WHATSAPP_MESSAGES.general)}
              className="btn btn-whatsapp hero-btn"
            >
              <WhatsAppIcon size={18} color="#FFFFFF" />
              <span>Order on WhatsApp</span>
            </button>
          </div>

          {/* Quick Trust / Origin Highlights */}
          <div className="hero-mini-highlights">
            <div className="highlight-pill">
              <span className="pill-dot">📍</span>
              <span>Born at Loyola College, Chennai</span>
            </div>
            <div className="highlight-pill">
              <span className="pill-dot">♡</span>
              <span>By Ramya &amp; Adellinde</span>
            </div>
            <div className="highlight-pill">
              <span className="pill-dot">🎞️</span>
              <span>Classic &amp; Mini Prints</span>
            </div>
          </div>
        </div>

        {/* Right Column: Asymmetric Polaroid Scrapbook Collage & Home Slide */}
        <div className="hero-right-collage">
          {/* Decorative Camera Stamp */}
          <div className="hero-camera-doodle" aria-hidden="true">
            <CameraIcon size={32} color="#D99A43" />
            <span className="font-handwritten doodle-text">Snap &amp; Hold!</span>
          </div>

          {/* Collage Item 1: Real Stall Photo */}
          <div className="collage-polaroid polaroid-stall float-slow">
            <PolaroidCard
              image="assets\format-mini.jpg"
              alt="Loyola College Stall"
              caption="Loyola stall memories ♡"
              subcaption="Loyola College, Chennai"
              rotation={-3.5}
              tapePosition="left"
              tapeColor="yellow"
              aspect="landscape"
            />
          </div>

          {/* Collage Item 2: Dynamic Home Slide */}
          <div className="collage-polaroid polaroid-collection float-slow-alt home-slide-wrapper">
            <div className="home-slide-badge font-handwritten">
              {activeSlide.badge}
            </div>
            <PolaroidCard
              key={currentSlide}
              image={activeSlide.image}
              alt={activeSlide.alt}
              caption={activeSlide.caption}
              subcaption={activeSlide.subcaption}
              rotation={activeSlide.rotation}
              tapePosition="right"
              tapeColor={activeSlide.tapeColor}
              aspect="square"
            />
            {/* Interactive slide controls */}
            <div className="home-slide-controls">
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? homeSlides.length - 1 : prev - 1))}
                className="slide-arrow-btn"
                aria-label="Previous home slide"
              >
                ‹
              </button>
              <div className="slide-dots">
                {homeSlides.map((_, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`slide-dot ${currentSlide === i ? 'active' : ''}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % homeSlides.length)}
                className="slide-arrow-btn"
                aria-label="Next home slide"
              >
                ›
              </button>
            </div>
          </div>

          {/* Collage Item 3: Real Polaroid Collection Table Preview */}
          <div className="collage-polaroid polaroid-mini">
            <PolaroidCard
              image="public\assets\scene-rajini-headphones.jpg"
              alt="Kollywood Polaroid Table"
              caption="Cinema on paper ✨"
              rotation={-1.5}
              tapePosition="center"
              tapeColor="mustard"
              aspect="portrait"
            />
          </div>

          {/* Decorative Floating Scrapbook Elements */}
          <div className="scrapbook-star star-1" aria-hidden="true">✦</div>
          <div className="scrapbook-star star-2" aria-hidden="true">★</div>
          <div className="scrapbook-heart" aria-hidden="true">♡</div>
        </div>
      </div>

      {/* Animated Horizontal Marquee Ticker */}
      <div className="marquee-container" aria-hidden="true">
        <div className="marquee-content">
          <span>YOUR FAVOURITE SCENE ✦ YOUR LITTLE MEMORY ✦ MADE WITH LOVE ✦ IDHU ENNA PADAM?</span>
          <span>✦ YOUR FAVOURITE SCENE ✦ YOUR LITTLE MEMORY ✦ MADE WITH LOVE ✦ IDHU ENNA PADAM?</span>
          <span>✦ YOUR FAVOURITE SCENE ✦ YOUR LITTLE MEMORY ✦ MADE WITH LOVE ✦ IDHU ENNA PADAM?</span>
          <span>✦ YOUR FAVOURITE SCENE ✦ YOUR LITTLE MEMORY ✦ MADE WITH LOVE ✦ IDHU ENNA PADAM?</span>
        </div>
        <div className="marquee-content" aria-hidden="true">
          <span>YOUR FAVOURITE SCENE ✦ YOUR LITTLE MEMORY ✦ MADE WITH LOVE ✦ IDHU ENNA PADAM?</span>
          <span>✦ YOUR FAVOURITE SCENE ✦ YOUR LITTLE MEMORY ✦ MADE WITH LOVE ✦ IDHU ENNA PADAM?</span>
          <span>✦ YOUR FAVOURITE SCENE ✦ YOUR LITTLE MEMORY ✦ MADE WITH LOVE ✦ IDHU ENNA PADAM?</span>
          <span>✦ YOUR FAVOURITE SCENE ✦ YOUR LITTLE MEMORY ✦ MADE WITH LOVE ✦ IDHU ENNA PADAM?</span>
        </div>
      </div>

      {/* Collection Teaser Banner */}
      <div className="hero-teaser-banner">
        <div className="container teaser-content">
          <div className="teaser-item">
            <span className="teaser-num">01</span>
            <div>
              <strong>Classic &amp; Mini Polaroids</strong>
              <p>Authentic vintage instant paper prints from ₹25</p>
            </div>
          </div>
          <div className="teaser-divider" />
          <div className="teaser-item">
            <span className="teaser-num">02</span>
            <div>
              <strong>Iconic Kollywood Moods</strong>
              <p>Rain scenes, classic entries, romance &amp; comedy</p>
            </div>
          </div>
          <div className="teaser-divider" />
          <div className="teaser-item">
            <span className="teaser-num">03</span>
            <div>
              <strong>Direct WhatsApp Orders</strong>
              <p>Personal chat with founders Ramya &amp; Adellinde</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 3.5rem;
          padding-bottom: 0;
          position: relative;
          background: linear-gradient(180deg, #FFF9EC 0%, #FFF5E1 100%);
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3.5rem;
          align-items: center;
          padding-bottom: 4rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: var(--color-butter-yellow);
          border: 1px solid rgba(104, 67, 45, 0.3);
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-chocolate-brown);
          margin-bottom: 1.25rem;
        }

        .badge-sparkle {
          color: var(--color-vintage-mustard);
          font-size: 0.9rem;
        }

        .hero-main-title {
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--color-deep-coffee);
          margin-bottom: 0.8rem;
        }

        .title-highlight {
          color: var(--color-chocolate-brown);
          font-style: italic;
          position: relative;
        }

        .title-highlight::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0;
          width: 100%;
          height: 8px;
          background-color: rgba(244, 227, 178, 0.6);
          z-index: -1;
          transform: rotate(-1deg);
        }

        .hero-tagline {
          font-size: clamp(1.4rem, 2.4vw, 1.85rem);
          color: var(--color-vintage-mustard);
          margin-bottom: 1.2rem;
          line-height: 1.3;
        }

        .hero-description {
          font-size: 1.08rem;
          line-height: 1.65;
          color: #5D3D2A;
          margin-bottom: 2rem;
          max-width: 520px;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-bottom: 2.2rem;
        }

        .hero-mini-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .highlight-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: #7A5741;
          background: rgba(255, 255, 255, 0.7);
          border: 1px dashed rgba(104, 67, 45, 0.25);
          padding: 0.3rem 0.75rem;
          border-radius: 4px;
        }

        /* Right Collage */
        .hero-right-collage {
          position: relative;
          min-height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .collage-polaroid {
          position: absolute;
          transition: transform 0.3s ease, z-index 0.2s;
        }

        .polaroid-stall {
          top: 15px;
          left: 20px;
          width: 250px;
          z-index: 2;
        }

        .polaroid-collection {
          top: 40px;
          right: 15px;
          width: 235px;
          z-index: 3;
        }

        .polaroid-mini {
          bottom: -15px;
          left: 120px;
          width: 175px;
          z-index: 4;
        }

        .collage-polaroid:hover {
          z-index: 10;
        }

        .hero-camera-doodle {
          position: absolute;
          top: -25px;
          right: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 1;
          transform: rotate(8deg);
          opacity: 0.85;
        }

        .doodle-text {
          font-size: 0.95rem;
          color: var(--color-chocolate-brown);
        }

        .scrapbook-star {
          position: absolute;
          color: var(--color-vintage-mustard);
          font-size: 1.5rem;
          user-select: none;
        }

        .star-1 {
          top: 0;
          left: 10px;
        }

        .star-2 {
          bottom: 20px;
          right: 20px;
          font-size: 1.2rem;
        }

        .scrapbook-heart {
          position: absolute;
          bottom: 60px;
          left: 20px;
          font-size: 1.6rem;
          color: #D98263;
        }

        /* Home slide custom styling */
        .home-slide-wrapper {
          position: relative;
        }

        .home-slide-badge {
          position: absolute;
          top: -12px;
          right: 12px;
          background: var(--color-butter-yellow);
          border: 1px dashed var(--color-chocolate-brown);
          color: var(--color-deep-coffee);
          font-size: 0.85rem;
          padding: 2px 8px;
          border-radius: 12px;
          z-index: 12;
          box-shadow: 0 2px 6px rgba(56, 37, 27, 0.12);
        }

        .home-slide-controls {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 12;
          background: rgba(255, 249, 236, 0.92);
          backdrop-filter: blur(2px);
          padding: 2px 8px;
          border-radius: 12px;
          border: 1px solid rgba(104, 67, 45, 0.2);
        }

        .slide-arrow-btn {
          background: none;
          border: none;
          font-size: 1.1rem;
          line-height: 1;
          color: var(--color-chocolate-brown);
          cursor: pointer;
          padding: 0 4px;
        }

        .slide-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .slide-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          border: none;
          background: rgba(104, 67, 45, 0.3);
          cursor: pointer;
          padding: 0;
          transition: all 0.2s ease;
        }

        .slide-dot.active {
          background: var(--color-vintage-mustard);
          transform: scale(1.3);
        }

        /* Teaser banner */
        .hero-teaser-banner {
          background-color: #FFF2D6;
          border-bottom: 1.5px solid rgba(104, 67, 45, 0.2);
          padding: 1.6rem 0;
        }

        .teaser-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .teaser-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex: 1;
        }

        .teaser-num {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--color-chocolate-brown);
          opacity: 0.6;
        }

        .teaser-item strong {
          display: block;
          font-size: 0.95rem;
          color: var(--color-deep-coffee);
          margin-bottom: 2px;
        }

        .teaser-item p {
          font-size: 0.82rem;
          color: #7A5741;
          line-height: 1.3;
        }

        .teaser-divider {
          width: 1px;
          height: 38px;
          background: rgba(104, 67, 45, 0.2);
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
            padding-bottom: 2.5rem;
          }

          .hero-right-collage {
            min-height: 380px;
            max-width: 420px;
            margin: 0 auto;
            width: 100%;
          }

          .polaroid-stall {
            left: 0;
            width: 210px;
          }

          .polaroid-collection {
            right: 0;
            width: 200px;
          }

          .polaroid-mini {
            left: 80px;
            bottom: 0;
            width: 155px;
          }

          .teaser-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.2rem;
          }

          .teaser-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
