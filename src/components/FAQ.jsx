import React, { useState } from 'react';
import { faqList } from '../data/products';
import { ChevronDownIcon, WhatsAppIcon } from './Icons';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-eyebrow">
            <span>✦</span>
            <span>GOT QUESTIONS?</span>
            <span>✦</span>
          </div>
          <h2 className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our Kollywood prints, custom requests, and how to reach us.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="faq-accordion-container">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`faq-item paper-card ${isOpen ? 'faq-item-open' : ''}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-q-number">0{index + 1}</span>
                  <span className="faq-q-text font-serif">{item.question}</span>
                  <span className={`faq-chevron ${isOpen ? 'chevron-rotated' : ''}`}>
                    <ChevronDownIcon size={20} color="#68432D" />
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer-collapse"
                  style={{
                    maxHeight: isOpen ? '240px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Help Footer */}
        <div className="faq-contact-card">
          <div className="faq-contact-text">
            <span className="faq-handwritten-note font-handwritten">Still have a question?</span>
            <p>Ramya &amp; Adellinde are always happy to help with scene ideas and custom queries.</p>
          </div>
          <button
            onClick={() => openWhatsApp(WHATSAPP_MESSAGES.general)}
            className="btn btn-whatsapp"
          >
            <WhatsAppIcon size={18} color="#FFFFFF" />
            <span>Ask on WhatsApp</span>
          </button>
        </div>
      </div>

      <style>{`
        .faq-section {
          background-color: #FFFDF9;
          position: relative;
        }

        .faq-accordion-container {
          max-width: 820px;
          margin: 0 auto 3rem auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background-color: #FFFCF7;
          border: 1.5px solid rgba(104, 67, 45, 0.2);
          overflow: hidden;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .faq-item-open {
          border-color: var(--color-chocolate-brown);
          box-shadow: 0 6px 18px rgba(56, 37, 27, 0.1);
        }

        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 1.2rem;
          padding: 1.25rem 1.5rem;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
        }

        .faq-q-number {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: var(--color-vintage-mustard);
          font-weight: 700;
          flex-shrink: 0;
        }

        .faq-q-text {
          font-size: 1.15rem;
          color: var(--color-deep-coffee);
          flex: 1;
          letter-spacing: -0.01em;
        }

        .faq-chevron {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
          flex-shrink: 0;
        }

        .chevron-rotated {
          transform: rotate(180deg);
        }

        .faq-answer-collapse {
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease;
        }

        .faq-answer-inner {
          padding: 0 1.5rem 1.4rem 3.8rem;
          font-size: 0.95rem;
          line-height: 1.65;
          color: #5D3E2B;
        }

        .faq-contact-card {
          max-width: 820px;
          margin: 0 auto;
          background-color: #FFF5E1;
          border: 1.5px dashed var(--color-chocolate-brown);
          border-radius: 6px;
          padding: 1.6rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .faq-handwritten-note {
          font-size: 1.25rem;
          color: var(--color-vintage-mustard);
          display: block;
          margin-bottom: 0.2rem;
        }

        .faq-contact-text p {
          font-size: 0.92rem;
          color: #6C4931;
        }

        @media (max-width: 768px) {
          .faq-question-btn {
            padding: 1.1rem 1.2rem;
            gap: 0.8rem;
          }
          .faq-q-text {
            font-size: 1.05rem;
          }
          .faq-answer-inner {
            padding: 0 1.2rem 1.2rem 1.2rem;
          }
          .faq-contact-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
