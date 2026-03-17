import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-logo">Abdullah<span>.</span></div>
          <div className="footer-tagline">n8n Developer · AI Automation Engineer</div>
        </div>

        <ul className="footer-links">
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Case Studies</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="https://n8n.io/creators/abdullahmil" target="_blank" rel="noreferrer">n8n Templates</a></li>
        </ul>

        <div className="footer-cert">
          <span style={{ fontSize: '14px' }}>🏅</span>
          <div className="footer-cert-text">n8n LEVEL 2 CERTIFIED<br />VERIFIED CREATOR</div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          © 2025 Abdullah Dilshad <span>·</span> Built with automation in mind
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
