import React, { useState, useEffect } from 'react';
import CanvasBackground from './components/CanvasBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TechProficiency from './components/TechProficiency';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import WhyHireMe from './components/WhyHireMe';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Global Scroll animations (Intersection Observer) + Back to Top logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for .reveal elements
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: observer.unobserve(entry.target) if we only want it to animate once
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .section-title, .service-card, .proof-card, .tool-card, .contact-grid');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <CanvasBackground />
      <Navigation toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <TechProficiency />
      <About />
      <Services />
      <Projects />
      <CaseStudies />
      <PainPoints />
      <WhyHireMe />
      <Contact />
      <Footer />
      
      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </button>

      {/* Sticky Mobile CTA */}
      <div className="sticky-mobile-cta">
        <a href="#contact" className="btn-cta">
          Book Free Audit
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </a>
      </div>
    </>
  );
}

export default App;
