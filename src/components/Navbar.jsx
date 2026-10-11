import React, { useState, useEffect } from 'react';
import { CameraIcon, WhatsAppIcon, MenuIcon, CloseIcon } from './Icons';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Formats', href: '#formats' },
    { name: 'Scenes', href: '#scenes' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Track active section
      const sections = ['hero', 'story', 'formats', 'scenes', 'how-it-works', 'faq'];
      const scrollPos = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="navbar-logo">
          <div className="navbar-logo-icon">
            <CameraIcon size={22} color="#68432D" />
          </div>
          <span className="navbar-logo-text">Idhu Enna Padam?</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav desktop-only" aria-label="Main Navigation">
          <ul className="navbar-links">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="navbar-link-item">
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`navbar-link ${isActive ? 'navbar-link-active' : ''}`}
                  >
                    {link.name}
                    {isActive && <span className="navbar-active-dot" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="navbar-actions">
          <button
            onClick={() => openWhatsApp(WHATSAPP_MESSAGES.general)}
            className="btn btn-whatsapp navbar-whatsapp-btn"
            aria-label="Order on WhatsApp"
          >
            <WhatsAppIcon size={18} color="#FFFFFF" />
            <span className="whatsapp-btn-text">Order on WhatsApp</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <CloseIcon size={26} color="#68432D" /> : <MenuIcon size={26} color="#68432D" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'mobile-drawer-open' : ''}`}>
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <div className="navbar-logo">
              <CameraIcon size={20} color="#68432D" />
              <span className="navbar-logo-text">Idhu Enna Padam?</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="drawer-close-btn"
              aria-label="Close menu"
            >
              <CloseIcon size={22} color="#68432D" />
            </button>
          </div>

          <p className="mobile-drawer-tagline font-handwritten">
            "Screen la paatha scene, ippo un kaila!!"
          </p>

          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="mobile-nav-link"
                >
                  <span>{link.name}</span>
                  <span className="mobile-nav-arrow">➔</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp(WHATSAPP_MESSAGES.general);
              }}
              className="btn btn-whatsapp w-full"
            >
              <WhatsAppIcon size={20} color="#FFFFFF" />
              <span>Order on WhatsApp</span>
            </button>
            <p className="mobile-drawer-founder-note">
              Founders: Ramya &amp; Adellinde • Loyola College
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: var(--color-warm-cream);
          border-bottom: 1.5px solid rgba(104, 67, 45, 0.2);
          transition: background-color 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
          padding: 0.85rem 0;
        }

        .navbar-scrolled {
          background-color: rgba(255, 249, 236, 0.96);
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 16px rgba(56, 37, 27, 0.08);
          padding: 0.6rem 0;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          color: var(--color-deep-coffee);
          user-select: none;
        }

        .navbar-logo-icon {
          width: 34px;
          height: 34px;
          background-color: var(--color-butter-yellow);
          border: 1.5px solid var(--color-chocolate-brown);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(56, 37, 27, 0.1);
          transition: transform 0.2s ease;
        }

        .navbar-logo:hover .navbar-logo-icon {
          transform: rotate(-6deg) scale(1.05);
        }

        .navbar-logo-text {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          letter-spacing: -0.01em;
          color: var(--color-deep-coffee);
        }

        .navbar-nav {
          display: flex;
        }

        .navbar-links {
          display: flex;
          list-style: none;
          gap: 1.3rem;
          align-items: center;
        }

        .navbar-link-item {
          position: relative;
        }

        .navbar-link {
          text-decoration: none;
          color: var(--color-deep-coffee);
          font-size: 0.92rem;
          font-weight: 500;
          padding: 0.35rem 0;
          position: relative;
          transition: color 0.2s ease;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
        }

        .navbar-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-vintage-mustard);
          transition: width 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
          border-radius: 2px;
        }

        .navbar-link:hover {
          color: var(--color-chocolate-brown);
        }

        .navbar-link:hover::after,
        .navbar-link-active::after {
          width: 100%;
        }

        .navbar-link-active {
          color: var(--color-chocolate-brown);
          font-weight: 600;
        }

        .navbar-active-dot {
          position: absolute;
          bottom: -4px;
          width: 4px;
          height: 4px;
          background-color: var(--color-vintage-mustard);
          border-radius: 50%;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .navbar-whatsapp-btn {
          padding: 0.6rem 1.1rem;
          font-size: 0.88rem;
          border-radius: 24px;
        }

        .mobile-only {
          display: none;
        }

        .desktop-only {
          display: flex;
        }

        .mobile-menu-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Mobile Drawer */
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 2000;
          pointer-events: none;
          visibility: hidden;
          transition: visibility 0.3s;
        }

        .mobile-drawer-open {
          pointer-events: auto;
          visibility: visible;
        }

        .mobile-drawer-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(56, 37, 27, 0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(3px);
        }

        .mobile-drawer-open .mobile-drawer-backdrop {
          opacity: 1;
        }

        .mobile-drawer-content {
          position: absolute;
          top: 0;
          right: 0;
          width: 82%;
          max-width: 340px;
          height: 100%;
          background-color: #FFF9EC;
          border-left: 2px solid var(--color-chocolate-brown);
          box-shadow: -8px 0 24px rgba(56, 37, 27, 0.2);
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-drawer-open .mobile-drawer-content {
          transform: translateX(0);
        }

        .mobile-drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1rem;
          border-bottom: 1px dashed rgba(104, 67, 45, 0.2);
        }

        .drawer-close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .mobile-drawer-tagline {
          font-size: 1rem;
          color: var(--color-vintage-mustard);
          margin-top: 0.8rem;
          margin-bottom: 1.2rem;
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
          overflow-y: auto;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 0.5rem;
          text-decoration: none;
          color: var(--color-deep-coffee);
          font-family: var(--font-serif);
          font-size: 1.2rem;
          border-bottom: 1px solid rgba(104, 67, 45, 0.1);
          transition: color 0.2s, padding-left 0.2s;
        }

        .mobile-nav-link:hover {
          color: var(--color-vintage-mustard);
          padding-left: 0.8rem;
        }

        .mobile-nav-arrow {
          font-size: 0.9rem;
          opacity: 0.5;
        }

        .mobile-drawer-footer {
          padding-top: 1.2rem;
          border-top: 1px dashed rgba(104, 67, 45, 0.2);
        }

        .mobile-drawer-founder-note {
          font-size: 0.75rem;
          text-align: center;
          color: #7A5741;
          margin-top: 0.8rem;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 992px) {
          .desktop-only {
            display: none;
          }
          .mobile-only {
            display: flex;
          }
          .navbar-whatsapp-btn .whatsapp-btn-text {
            display: none;
          }
          .navbar-whatsapp-btn {
            padding: 0.5rem;
          }
        }
      `}</style>
    </header>
  );
}
