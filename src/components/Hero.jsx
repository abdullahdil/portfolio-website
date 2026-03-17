import React from 'react';
import myPhoto from '../assets/abdullah.png';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for freelance projects
          </div>

          <h1 className="hero-name" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
            I eliminate 70% of manual work for <br />
            <span className="hero-name-last">B2B SaaS companies</span>
          </h1>

          <div className="hero-title" style={{ marginTop: '16px' }}>
            n8n Developer &nbsp;<span>//</span>&nbsp; <span>AI Automation Engineer</span>
          </div>

          <p className="hero-tagline">
            <strong style={{ color: '#06b6d4', fontSize: '1.1em' }}>20+ workflows deployed </strong><br /><br />
            I build <strong>intelligent automation systems</strong> that eliminate manual work,
            integrate AI into your workflows, and let your business
            <strong> scale without adding headcount.</strong>
          </p>

          <div className="hero-actions">
            <a href="#video-demo" className="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              &nbsp;Watch Demo
            </a>
            <a href="#contact" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.22 2.84 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.17 6.17l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              &nbsp;Book Free Audit
            </a>
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

      {/* TEMPORARILY HIDDEN: User will add video later. To re-enable, change false to true */}
      {false && (
        <section id="video-demo" className="hero-video-section">
          <div className="video-container">
            <div className="video-wrapper">
              <iframe
                src="https://www.loom.com/embed/placeholder"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                title="Workflow Build Demonstration"
              ></iframe>
            </div>
          </div>
        </section>
      )}

      {/* Trusted By Logos */}
      <section className="trusted-by-section">
        <div className="trusted-label">TRUSTED BY INNOVATIVE TEAMS AT</div>
        <div className="trusted-logos">
          <div className="t-logo">SaaS Co</div>
          <div className="t-logo">Agency</div>
          <div className="t-logo">Enterprise</div>
          <div className="t-logo">Startup Inc</div>
        </div>
      </section>
    </>
  );
};

export default Hero;
