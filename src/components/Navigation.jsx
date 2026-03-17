import React, { useState } from 'react';

const Navigation = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="nav-logo">Abdullah Dilshad<span>.</span></div>

      {/* Hamburger button – visible only on mobile via CSS */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#case-studies" onClick={handleLinkClick}>Case Studies</a></li>
        <li>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </li>
        <li><a href="#contact" className="nav-cta" onClick={handleLinkClick}>Hire Me</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
