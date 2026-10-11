import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgressBar from './components/ScrollProgressBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import ProductFormats from './components/ProductFormats';
import CinemaMoods from './components/CinemaMoods';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';
import FilmStripDivider from './components/FilmStripDivider';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Check if initial visit was already made in this session
    const hasVisited = sessionStorage.getItem('visited_idhu_enna_padam');
    if (hasVisited) {
      setLoadingComplete(true);
    }
  }, []);

  const handleLoadingFinished = () => {
    sessionStorage.setItem('visited_idhu_enna_padam', 'true');
    setLoadingComplete(true);
  };

  return (
    <div className="app-root">
      {/* Film Grain Subtle Overlay */}
      <div className="film-grain-overlay" aria-hidden="true" />

      {/* Full-screen Vintage Instant Camera Loading Animation */}
      {!loadingComplete && (
        <LoadingScreen onComplete={handleLoadingFinished} />
      )}

      {/* Main Website Content */}
      <div className={`app-content ${loadingComplete ? 'app-content-visible' : 'app-content-hidden'}`}>
        <ScrollProgressBar />
        <Navbar />
        <main>
          <Hero />
          <FilmStripDivider label="ORIGIN: LOYOLA COLLEGE, CHENNAI • RAMYA &amp; ADELLINDE" />
          <OurStory />
          <FilmStripDivider label="KOLLYWOOD PRINTS • GLOSSY &amp; MATTE FINISHES" />
          <ProductFormats />
          <CinemaMoods />
          <FilmStripDivider label="CINEMA MEMORIES • SCREEN LA PAATHA SCENE, IPPO UN KAILA!!" />
          <HowItWorks />
          <FAQ />
          <InstagramSection />
        </main>
        <Footer />
      </div>

      <style>{`
        .app-root {
          position: relative;
          min-height: 100vh;
        }

        .app-content {
          transition: opacity 0.5s ease-in-out;
        }

        .app-content-hidden {
          opacity: 0;
          pointer-events: none;
        }

        .app-content-visible {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
