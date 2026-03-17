import React, { useState, useEffect } from 'react';
import CanvasBackground from './components/CanvasBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TechStrip from './components/TechStrip';
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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <CanvasBackground />
      <Navigation toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <TechStrip />
      <About />
      <Services />
      <Projects />
      <CaseStudies />
      <PainPoints />
      <WhyHireMe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
