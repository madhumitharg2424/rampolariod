import React from 'react';
import PolaroidCard from './PolaroidCard';
import FilmStripDivider from './FilmStripDivider';
import { HeartIcon, SparkleIcon, FilmIcon } from './Icons';

export default function OurStory() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const timelineStages = [
    {
      number: "01",
      title: "The Idea",
      note: "What if our favourite cinema moments could become something we could actually hold?",
      highlight: "Kollywood in your hands"
    },
    {
      number: "02",
      title: "Loyola College Stall",
      note: "Bringing together film lovers, friends, couples and strangers around scenes they never wanted to forget.",
      highlight: "Chennai roots & cinema energy"
    },
    {
      number: "03",
      title: "Sharing Little Memories",
      note: "Bringing that nostalgic feeling online — printed with love, care, and cinema magic.",
      highlight: "Now delivered to your doorstep"
    }
  ];

  return (
    <section id="story" className="story-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="story-header text-center">
          <div className="story-eyebrow">
            <span className="story-eyebrow-star">✦</span>
            <span>OUR JOURNEY &amp; ORIGIN</span>
            <span className="story-eyebrow-star">✦</span>
          </div>

          <h2 className="story-heading">
            From a little college stall to your favourite memories.
          </h2>

          <div className="story-stamp font-handwritten" aria-hidden="true">
            Loyola College, Chennai 📍
          </div>
        </div>

        {/* Editorial Story Layout */}
        <div className="story-grid">
          {/* Left Column: Photos & Founders Scrapbook */}
          <div className="story-visuals">
            <div className="story-polaroid-main">
              <PolaroidCard
                image="assets\polaroid-collection.jpg"
                alt="Loyola College Stall with Ramya & Adellinde"
                caption="Where it all began — Loyola College Stall ♡"
                subcaption="Chennai, Tamil Nadu"
                rotation={-2}
                tapePosition="center"
                tapeColor="peach"
                aspect="landscape"
              />
            </div>

            <div className="story-polaroid-secondary">
              <PolaroidCard
                image="/assets/founder-stall.jpg"
                alt="Kollywood Polaroid prints"
                caption="Frames printed with love ✨"
                rotation={2.5}
                tapePosition="right"
                tapeColor="yellow"
                aspect="square"
              />
            </div>

            {/* Handwritten sticker note */}
            <div className="story-note-card font-handwritten" aria-hidden="true">
              <span className="note-pin">📌</span>
              <p>"Oru cinema frame, aayiram memories!"</p>
            </div>
          </div>

          {/* Right Column: Narrative & Timeline */}
          <div className="story-content">
            <div className="story-narrative-card paper-card">
              <div className="narrative-paragraph">
                Some scenes never leave us. The rain scene we replay, the love song we secretly dedicate to someone, the dialogue we know by heart.
              </div>

              <div className="narrative-paragraph">
                <strong>Idhu Enna Padam?</strong> started with a simple idea: what if our favourite cinema moments could become something we could actually hold?
              </div>

              <div className="narrative-paragraph">
                At our Loyola College stall, we brought together film lovers, friends, couples and strangers who all had one thing in common — a scene they never wanted to forget.
              </div>

              <div className="narrative-paragraph highlight-quote">
                Now, we're bringing that same feeling online. A little nostalgia, a little cinema magic, and lots of memories printed with love.
              </div>

              {/* Timeline with three stages */}
              <div className="story-timeline">
                <h4 className="timeline-heading font-serif">The Three Stages</h4>
                <div className="timeline-stages">
                  {timelineStages.map((stage, idx) => (
                    <div key={stage.number} className="timeline-stage-item">
                      <div className="stage-marker">
                        <span className="stage-num">{stage.number}</span>
                        {idx < timelineStages.length - 1 && <span className="stage-line" />}
                      </div>
                      <div className="stage-details">
                        <div className="stage-title-wrap">
                          <h5 className="stage-title">{stage.title}</h5>
                          <span className="stage-badge">{stage.highlight}</span>
                        </div>
                        <p className="stage-note">{stage.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="story-cta-wrap">
                <button
                  onClick={() => scrollTo('formats')}
                  className="btn btn-primary"
                >
                  <FilmIcon size={18} color="#FFF9EC" />
                  <span>Explore Our Collection</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Founders Spotlight Section */}
        <div className="founders-section">
          <div className="founders-card paper-card">
            <div className="founders-header">
              <span className="founders-label">BEHIND THE PRINTS</span>
              <h3 className="founders-title font-serif">Meet the people behind the prints.</h3>
              <p className="founders-tagline font-handwritten">
                "Curating your favourite cinema moments, one frame at a time."
              </p>
            </div>

            <div className="founders-display">
              <div className="founders-polaroid-frame">
                <PolaroidCard
                  image="/assets/founder-stall.jpg"
                  alt="Ramya & Adellinde"
                  caption="Ramya & Adellinde ♡"
                  subcaption="Founders • Idhu Enna Padam?"
                  rotation={0}
                  tapePosition="center"
                  tapeColor="mustard"
                  aspect="landscape"
                />
              </div>

              <div className="founders-info-box">
                <div className="founders-name-badge">
                  <span className="founder-sparkle">✦</span>
                  <h4 className="founders-names">Ramya &amp; Adellinde</h4>
                </div>
                <p className="founders-role">Founders &amp; Cinema Enthusiasts</p>
                <p className="founders-origin">Loyola College, Chennai</p>

                <div className="founders-bullets">
                  <div className="founder-point">
                    <span className="bullet-heart">♡</span>
                    <span>Started as a beloved Polaroid stall at Loyola College, Chennai.</span>
                  </div>
                  <div className="founder-point">
                    <span className="bullet-heart">♡</span>
                    <span>Personally curating, printing, and sharing Kollywood nostalgia.</span>
                  </div>
                  <div className="founder-point">
                    <span className="bullet-heart">♡</span>
                    <span>Always accessible directly on WhatsApp to help pick your dream scene.</span>
                  </div>
                </div>

                <div className="founders-signature font-handwritten">
                  — Ramya &amp; Adellinde
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .story-section {
          background-color: var(--color-warm-cream);
          position: relative;
        }

        .story-header {
          max-width: 780px;
          margin: 0 auto 3.5rem auto;
          position: relative;
        }

        .text-center {
          text-align: center;
        }

        .story-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-chocolate-brown);
          margin-bottom: 0.75rem;
        }

        .story-eyebrow-star {
          color: var(--color-vintage-mustard);
        }

        .story-heading {
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          line-height: 1.15;
          color: var(--color-deep-coffee);
          margin-bottom: 0.8rem;
        }

        .story-stamp {
          display: inline-block;
          font-size: 1.25rem;
          color: var(--color-vintage-mustard);
          background: rgba(244, 227, 178, 0.4);
          border: 1px dashed var(--color-vintage-mustard);
          padding: 0.25rem 0.85rem;
          border-radius: 4px;
          transform: rotate(-1.5deg);
        }

        .story-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 3.5rem;
          align-items: start;
          margin-bottom: 4.5rem;
        }

        /* Left Visuals */
        .story-visuals {
          position: relative;
          min-height: 480px;
        }

        .story-polaroid-main {
          position: relative;
          z-index: 2;
          width: 90%;
        }

        .story-polaroid-secondary {
          position: absolute;
          bottom: -20px;
          right: -10px;
          width: 68%;
          z-index: 3;
        }

        .story-note-card {
          position: absolute;
          top: -20px;
          right: 15px;
          background: #FFF9D2;
          border: 1px solid rgba(104, 67, 45, 0.2);
          box-shadow: 0 4px 12px rgba(56, 37, 27, 0.1);
          padding: 0.75rem 1rem;
          transform: rotate(4deg);
          z-index: 4;
          font-size: 1.05rem;
          color: var(--color-deep-coffee);
        }

        .note-pin {
          display: inline-block;
          font-size: 0.9rem;
          margin-right: 4px;
        }

        /* Right Narrative */
        .story-narrative-card {
          padding: 2.2rem 2.4rem;
          background: #FFFCF7;
          border: 1.5px solid rgba(104, 67, 45, 0.2);
        }

        .narrative-paragraph {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #4E3322;
          margin-bottom: 1.2rem;
        }

        .narrative-paragraph.highlight-quote {
          background-color: rgba(244, 227, 178, 0.35);
          border-left: 3px solid var(--color-vintage-mustard);
          padding: 0.85rem 1.1rem;
          border-radius: 0 4px 4px 0;
          font-style: italic;
          color: var(--color-deep-coffee);
        }

        /* Timeline */
        .story-timeline {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1.5px dashed rgba(104, 67, 45, 0.2);
        }

        .timeline-heading {
          font-size: 1.35rem;
          color: var(--color-deep-coffee);
          margin-bottom: 1.2rem;
        }

        .timeline-stages {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .timeline-stage-item {
          display: flex;
          gap: 1rem;
        }

        .stage-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stage-num {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: var(--color-butter-yellow);
          border: 1.5px solid var(--color-chocolate-brown);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-deep-coffee);
        }

        .stage-line {
          width: 2px;
          flex: 1;
          background-color: rgba(104, 67, 45, 0.25);
          margin: 6px 0;
        }

        .stage-details {
          flex: 1;
          padding-bottom: 0.5rem;
        }

        .stage-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 0.25rem;
        }

        .stage-title {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          color: var(--color-deep-coffee);
        }

        .stage-badge {
          font-size: 0.72rem;
          font-weight: 600;
          background: rgba(217, 154, 67, 0.15);
          color: var(--color-chocolate-brown);
          padding: 2px 7px;
          border-radius: 3px;
        }

        .stage-note {
          font-size: 0.9rem;
          line-height: 1.5;
          color: #6C4B35;
        }

        .story-cta-wrap {
          margin-top: 1.8rem;
        }

        /* Founders Section */
        .founders-section {
          margin-top: 2rem;
        }

        .founders-card {
          padding: 2.5rem;
          background: #FFFDF9;
          border: 1.5px solid var(--color-chocolate-brown);
          border-radius: 6px;
        }

        .founders-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .founders-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-vintage-mustard);
          display: block;
          margin-bottom: 0.35rem;
        }

        .founders-title {
          font-size: 2rem;
          color: var(--color-deep-coffee);
          margin-bottom: 0.35rem;
        }

        .founders-tagline {
          font-size: 1.25rem;
          color: var(--color-chocolate-brown);
        }

        .founders-display {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2.5rem;
          align-items: center;
        }

        .founders-polaroid-frame {
          max-width: 380px;
          margin: 0 auto;
        }

        .founders-info-box {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .founders-name-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .founder-sparkle {
          color: var(--color-vintage-mustard);
          font-size: 1.2rem;
        }

        .founders-names {
          font-family: var(--font-serif);
          font-size: 1.9rem;
          color: var(--color-deep-coffee);
        }

        .founders-role {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-chocolate-brown);
        }

        .founders-origin {
          font-size: 0.88rem;
          color: #7A5741;
          margin-bottom: 0.8rem;
        }

        .founders-bullets {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          margin-bottom: 1.2rem;
        }

        .founder-point {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.92rem;
          line-height: 1.5;
          color: #4E3322;
        }

        .bullet-heart {
          color: #D98263;
          font-size: 0.95rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .founders-signature {
          font-size: 1.6rem;
          color: var(--color-chocolate-brown);
          transform: rotate(-2deg);
          margin-top: 0.5rem;
        }

        @media (max-width: 992px) {
          .story-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .story-visuals {
            min-height: auto;
            max-width: 480px;
            margin: 0 auto;
            padding-bottom: 2rem;
          }

          .story-polaroid-secondary {
            position: relative;
            bottom: auto;
            right: auto;
            width: 80%;
            margin-top: -30px;
            margin-left: auto;
          }

          .founders-display {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .founders-name-badge {
            justify-content: center;
          }

          .founder-point {
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}
