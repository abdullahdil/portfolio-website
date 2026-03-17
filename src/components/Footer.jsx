import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-logo">Abdullah<span>.</span></div>
          <div className="footer-tagline">n8n Developer · AI Automation Engineer</div>
          <p className="footer-site-promo" style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(var(--text-main-rgb), 0.5)' }}>
            <a href="https://example.com/blog/portfolio-automation" target="_blank" rel="noreferrer" style={{ color: '#a78bfa', textDecoration: 'none' }}>
              Want to see how this site works? 
              <br/>View the automation behind it →
            </a>
          </p>
        </div>

        <div className="footer-link-group">
          <div className="footer-link-title" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(var(--text-main-rgb), 0.4)', marginBottom: '12px', fontFamily: '"JetBrains Mono", monospace' }}>Quick Links</div>
          <ul className="footer-links" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-link-group">
          <div className="footer-link-title" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(var(--text-main-rgb), 0.4)', marginBottom: '12px', fontFamily: '"JetBrains Mono", monospace' }}>Connect</div>
          <ul className="footer-links" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
            <li><a href="https://linkedin.com/in/abdullah-dilshad" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/abdullahdil" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://community.n8n.io/u/abdullahmil/summary" target="_blank" rel="noreferrer">n8n Community</a></li>
            <li><a href="https://x.com/AbdullahDilsha7" target="_blank" rel="noreferrer">Twitter/X</a></li>
          </ul>
        </div>

        <div className="footer-cert">
          <span style={{ fontSize: '14px' }}>🏅</span>
          <div className="footer-cert-text">n8n LEVEL 2 CERTIFIED<br />VERIFIED CREATOR</div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          © 2024 Abdullah Dilshad <span>·</span> Built with n8n, Next.js, and coffee.
        </div>
        <div className="footer-stack">
          <span className="stack-badge">n8n</span>
          <span className="stack-badge">OpenAI</span>
          <span className="stack-badge">REST APIs</span>
          <span className="stack-badge">RAG</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
