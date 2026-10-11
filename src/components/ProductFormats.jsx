import React from 'react';
import { productFormats } from '../data/products';
import PolaroidCard from './PolaroidCard';
import { WhatsAppIcon, SparkleIcon } from './Icons';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function ProductFormats() {
  return (
    <section id="formats" className="formats-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-eyebrow">
            <span>✦</span>
            <span>POLAROID FORMATS &amp; SIZES</span>
            <span>✦</span>
          </div>
          <h2 className="section-title">
            Pick Your Print Style
          </h2>
          <p className="section-subtitle">
            Every frame is printed with care, ready to gift, pin up, or slip into your phone case.
          </p>
        </div>

        {/* 3 Product Cards Grid */}
        <div className="formats-grid">
          {productFormats.map((product) => {
            const isFanCard = product.id === 'fanCard';

            return (
              <div
                key={product.id}
                className={`product-card paper-card ${isFanCard ? 'fan-card-style' : ''}`}
                style={{ transform: `rotate(${product.rotation}deg)` }}
              >
                {/* Washi Tape */}
                <div
                  className={`tape tape-top-center ${
                    product.tapeColor === 'peach' ? 'tape-peach' :
                    product.tapeColor === 'yellow' ? '' : 'tape-cream'
                  }`}
                  aria-hidden="true"
                />

                {/* Badge */}
                <div className="product-badge font-handwritten">
                  {product.badge}
                </div>

                {/* Photo Preview inside Polaroid frame */}
                <div className="product-image-container">
                  <PolaroidCard
                    image={product.image}
                    alt={product.name}
                    aspect={product.id === 'classic' ? 'square' : 'portrait'}
                    tapePosition="none"
                    rotation={0}
                  />
                </div>

                {/* Product Info */}
                <div className="product-details">
                  <div className="product-title-row">
                    <h3 className="product-name font-serif">{product.name}</h3>
                    <div className="product-price">
                      <span className="price-val">{product.price}</span>
                      <span className="price-unit">/{product.priceUnit}</span>
                    </div>
                  </div>

                  <p className="product-desc">{product.description}</p>

                  {/* Specifications Table */}
                  <div className="product-specs">
                    <div className="spec-row">
                      <span className="spec-label">Frame Dimensions:</span>
                      <span className="spec-value">{product.frameSize}</span>
                    </div>
                    {product.photoArea && (
                      <div className="spec-row">
                        <span className="spec-label">Photo Area:</span>
                        <span className="spec-value">{product.photoArea}</span>
                      </div>
                    )}
                    {product.feature && (
                      <div className="spec-row">
                        <span className="spec-label">Feature:</span>
                        <span className="spec-value highlight-feature">{product.feature}</span>
                      </div>
                    )}
                    <div className="spec-row">
                      <span className="spec-label">Finish:</span>
                      <span className="spec-value finish-badge">{product.finish}</span>
                    </div>
                  </div>

                  {/* Order on WhatsApp Button */}
                  <button
                    onClick={() => openWhatsApp(product.whatsappMessage)}
                    className="btn btn-whatsapp product-order-btn"
                    aria-label={`Order ${product.name} on WhatsApp`}
                  >
                    <WhatsAppIcon size={18} color="#FFFFFF" />
                    <span>Order on WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bulk Order Banner */}
        <div className="bulk-order-banner paper-card">
          <div className="bulk-order-content">
            <div className="bulk-text-wrap">
              <span className="bulk-badge font-handwritten">College Fests • Parties • Gatherings</span>
              <h4 className="bulk-title font-serif">Planning a bulk order? Message us for details.</h4>
              <p className="bulk-desc">
                Need multiple prints for gifts, college clubs, or wedding giveaways? We'd love to help you plan!
              </p>
            </div>
            <button
              onClick={() => openWhatsApp(WHATSAPP_MESSAGES.bulk)}
              className="btn btn-primary bulk-cta-btn"
            >
              <WhatsAppIcon size={18} color="#FFF9EC" />
              <span>Enquire for Bulk Orders</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .formats-section {
          background-color: #FFFDF9;
          position: relative;
        }

        .section-header-centered {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 3.5rem auto;
        }

        .section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-chocolate-brown);
          margin-bottom: 0.5rem;
        }

        .section-title {
          font-size: clamp(2.2rem, 3.8vw, 3rem);
          color: var(--color-deep-coffee);
          margin-bottom: 0.6rem;
        }

        .section-subtitle {
          font-size: 1.05rem;
          color: #7A5741;
          line-height: 1.5;
        }

        .formats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.2rem;
          margin-bottom: 3.5rem;
        }

        .product-card {
          background-color: #FFFCF7;
          border: 1.5px solid rgba(104, 67, 45, 0.25);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-6px) scale(1.01) !important;
          z-index: 5;
        }

        .product-card.fan-card-style {
          border-radius: 12px;
        }

        .product-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          background-color: var(--color-butter-yellow);
          color: var(--color-deep-coffee);
          border: 1px dashed var(--color-chocolate-brown);
          padding: 2px 10px;
          border-radius: 12px;
          font-size: 0.95rem;
          z-index: 4;
        }

        .product-image-container {
          margin-bottom: 1.2rem;
        }

        .product-details {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .product-title-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.6rem;
        }

        .product-name {
          font-size: 1.45rem;
          color: var(--color-deep-coffee);
        }

        .product-price {
          display: flex;
          align-items: baseline;
        }

        .price-val {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-chocolate-brown);
        }

        .price-unit {
          font-size: 0.8rem;
          color: #7A5741;
          margin-left: 2px;
        }

        .product-desc {
          font-size: 0.88rem;
          line-height: 1.5;
          color: #5D3E2B;
          margin-bottom: 1.2rem;
          flex: 1;
        }

        .product-specs {
          background-color: rgba(244, 227, 178, 0.25);
          border: 1px dashed rgba(104, 67, 45, 0.25);
          border-radius: 4px;
          padding: 0.75rem 0.9rem;
          margin-bottom: 1.3rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
        }

        .spec-label {
          color: #7A5741;
        }

        .spec-value {
          font-weight: 600;
          color: var(--color-deep-coffee);
        }

        .highlight-feature {
          color: var(--color-vintage-mustard);
        }

        .finish-badge {
          background: rgba(104, 67, 45, 0.1);
          padding: 1px 6px;
          border-radius: 3px;
        }

        .product-order-btn {
          width: 100%;
        }

        /* Bulk Banner */
        .bulk-order-banner {
          background: linear-gradient(135deg, #FFF6E5 0%, #FEEFCE 100%);
          border: 1.5px dashed var(--color-chocolate-brown);
          padding: 2rem 2.5rem;
        }

        .bulk-order-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .bulk-badge {
          font-size: 1.1rem;
          color: var(--color-vintage-mustard);
          margin-bottom: 0.25rem;
          display: inline-block;
        }

        .bulk-title {
          font-size: 1.45rem;
          color: var(--color-deep-coffee);
          margin-bottom: 0.35rem;
        }

        .bulk-desc {
          font-size: 0.92rem;
          color: #6C4931;
        }

        .bulk-cta-btn {
          flex-shrink: 0;
        }

        @media (max-width: 992px) {
          .formats-grid {
            grid-template-columns: 1fr;
            max-width: 440px;
            margin: 0 auto 3rem auto;
          }

          .product-card {
            transform: none !important;
          }

          .bulk-order-content {
            flex-direction: column;
            text-align: center;
          }

          .bulk-cta-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
