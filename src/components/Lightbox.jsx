import React, { useEffect } from 'react';
import { CloseIcon, ArrowLeftIcon, ArrowRightIcon, WhatsAppIcon, CameraIcon } from './Icons';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!item) return null;

  const enquiryMessage = `Hi Ramya! I saw "${item.title}" in the website gallery. Could you let me know if this Polaroid print is available?`;

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${item.title}`}
      onClick={onClose}
    >
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="lightbox-close-btn"
          aria-label="Close photo preview (Esc)"
        >
          <CloseIcon size={24} color="#38251B" />
        </button>

        {/* Previous Button */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="lightbox-nav-btn prev-btn"
            aria-label="Previous photo (Left arrow)"
          >
            <ArrowLeftIcon size={26} color="#38251B" />
          </button>
        )}

        {/* Next Button */}
        {hasNext && (
          <button
            onClick={onNext}
            className="lightbox-nav-btn next-btn"
            aria-label="Next photo (Right arrow)"
          >
            <ArrowRightIcon size={26} color="#38251B" />
          </button>
        )}

        {/* Polaroid Scrapbook Frame in Lightbox */}
        <div className="lightbox-polaroid paper-card">
          {/* Top Washi Tape */}
          <div className="tape tape-top-center tape-peach" aria-hidden="true" />

          <div className="lightbox-photo-area">
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement.querySelector('.lightbox-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
            ) : null}

            <div
              className="lightbox-fallback polaroid-placeholder"
              style={{ display: item.image ? 'none' : 'flex' }}
            >
              <CameraIcon size={48} color="#68432D" />
              <div className="polaroid-placeholder-title">{item.title}</div>
              <div className="polaroid-placeholder-note">Add {item.image} to public/assets/</div>
            </div>
          </div>

          <div className="lightbox-info">
            <div className="lightbox-meta">
              <span className="lightbox-category font-handwritten">{item.category}</span>
              <h3 className="lightbox-title font-serif">{item.title}</h3>
              <p className="lightbox-caption">{item.caption}</p>
              {item.note && (
                <p className="lightbox-handwritten-note font-handwritten">
                  "{item.note}"
                </p>
              )}
            </div>

            <button
              onClick={() => openWhatsApp(enquiryMessage)}
              className="btn btn-whatsapp lightbox-whatsapp-btn"
            >
              <WhatsAppIcon size={18} color="#FFFFFF" />
              <span>Enquire About This Print</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(56, 37, 27, 0.85);
          backdrop-filter: blur(6px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: lightboxFadeIn 0.25s ease;
        }

        @keyframes lightboxFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox-container {
          position: relative;
          max-width: 640px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-close-btn {
          position: absolute;
          top: -46px;
          right: 0;
          background: #FFF9EC;
          border: 1.5px solid #68432D;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          z-index: 10;
        }

        .lightbox-close-btn:hover {
          transform: scale(1.1);
        }

        .lightbox-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #FFF9EC;
          border: 1.5px solid #68432D;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s, background 0.2s;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          z-index: 10;
        }

        .lightbox-nav-btn:hover {
          transform: translateY(-50%) scale(1.08);
          background: #F4E3B2;
        }

        .prev-btn {
          left: -22px;
        }

        .next-btn {
          right: -22px;
        }

        .lightbox-polaroid {
          background-color: #FFFCF7;
          border: 2px solid var(--color-chocolate-brown);
          padding: 1.25rem 1.25rem 1.5rem 1.25rem;
          width: 100%;
          box-shadow: 0 24px 48px rgba(0,0,0,0.45);
          position: relative;
          animation: polaroidZoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes polaroidZoomIn {
          from {
            transform: scale(0.92) translateY(10px);
            opacity: 0;
          }
          to {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }

        .lightbox-photo-area {
          width: 100%;
          max-height: 55vh;
          min-height: 280px;
          background: #EFE4D3;
          border: 1px solid rgba(104, 67, 45, 0.2);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-photo-area img {
          max-width: 100%;
          max-height: 55vh;
          object-fit: contain;
          display: block;
        }

        .lightbox-info {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1.5rem;
          margin-top: 1.25rem;
          padding-top: 0.8rem;
          border-top: 1px dashed rgba(104, 67, 45, 0.2);
        }

        .lightbox-meta {
          flex: 1;
        }

        .lightbox-category {
          font-size: 1.1rem;
          color: var(--color-vintage-mustard);
          display: block;
        }

        .lightbox-title {
          font-size: 1.45rem;
          color: var(--color-deep-coffee);
          margin-bottom: 0.2rem;
        }

        .lightbox-caption {
          font-size: 0.88rem;
          color: #6C4931;
        }

        .lightbox-handwritten-note {
          font-size: 1.15rem;
          color: var(--color-chocolate-brown);
          margin-top: 0.35rem;
        }

        .lightbox-whatsapp-btn {
          flex-shrink: 0;
          font-size: 0.88rem;
          padding: 0.65rem 1.1rem;
        }

        @media (max-width: 640px) {
          .lightbox-container {
            max-width: 95vw;
          }
          .prev-btn { left: -10px; }
          .next-btn { right: -10px; }
          .lightbox-info {
            flex-direction: column;
            align-items: stretch;
          }
          .lightbox-whatsapp-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
