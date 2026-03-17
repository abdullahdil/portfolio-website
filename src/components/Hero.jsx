import React from 'react';
import myPhoto from '../assets/abdullah.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for freelance projects
        </div>

        <h1 className="hero-name">
          <span className="hero-name-first">Abdullah</span><br />
          <span className="hero-name-last">Dilshad</span>
        </h1>

        <div className="hero-title">
          n8n Developer &nbsp;<span>//</span>&nbsp; <span>AI Automation Engineer</span>
        </div>

        <p className="hero-tagline">
          I build <strong>intelligent automation systems</strong> that eliminate manual work, 
          integrate AI into your workflows, and let your business 
          <strong>scale without adding headcount.</strong>
        </p>

        <div className="hero-actions">
          <a href="#case-studies" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            &nbsp;View Case Studies
          </a>
          <a href="#contact" className="btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.22 2.84 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.17 6.17l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            &nbsp;Let's Talk
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">20+</div>
            <div className="stat-label">Workflows Built</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">15+</div>
            <div className="stat-label">APIs Integrated</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">70%</div>
            <div className="stat-label">Avg Work Saved</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">48h</div>
            <div className="stat-label">Avg Delivery</div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-container">
          <div className="profile-ring-outer"></div>
          <div className="profile-ring-inner"></div>

          <img src={myPhoto} alt="Abdullah Dilshad" className="profile-circle" style={{ objectFit: 'cover' }} />

          <div className="float-node n1"><span className="float-node-dot"></span>n8n Trigger</div>
          <div className="float-node n2"><span className="float-node-dot"></span>OpenAI API</div>
          <div className="float-node n3"><span className="float-node-dot"></span>Gmail</div>
          <div className="float-node n4"><span className="float-node-dot"></span>Webhook</div>
        </div>
      </div>

      <a href="#about" className="scroll-hint" style={{ textDecoration: 'none' }}>
        <div className="scroll-line"></div>
        Scroll
      </a>
    </section>
  );
};

export default Hero;
