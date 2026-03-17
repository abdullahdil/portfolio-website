import React, { useEffect, useRef } from 'react';

const About = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-fill').forEach(fill => {
            fill.style.width = fill.getAttribute('data-width') + '%';
          });
        }
      });
    }, { threshold: 0.2 });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section className="section-about" id="about">
      <div className="section-label">About Me</div>
      <h2 className="section-title">Automating the <span>future</span>,<br />one workflow at a time.</h2>

      <div className="about-grid">
        <div className="about-text">
          <p className="pain-statement"><strong>Your team is drowning in repetitive tasks...</strong></p>
          <p>I'm an <strong>AI Automation Engineer</strong> specializing in building production-grade systems using <strong>n8n</strong>. My systems don't just automate tasks — they eliminate entire manual processes at scale.</p>
          
          <div className="about-metrics">
            <div className="metric-item">
              <span className="metric-arrow">→</span>
              <span><strong>100+ qualified leads/day</strong> generated automatically</span>
            </div>
            <div className="metric-item">
              <span className="metric-arrow">→</span>
              <span><strong>6-hour</strong> support response slashed to <strong>4 seconds</strong></span>
            </div>
            <div className="metric-item">
              <span className="metric-arrow">→</span>
              <span><strong>20+ hours/week</strong> manual work eliminated per client</span>
            </div>
          </div>

          <div className="about-badges">
            <div className="cert-badge">
              <div className="cert-icon">🏅</div>
              <div className="cert-info">
                <div className="cert-title">n8n Level 2 Certified</div>
              </div>
            </div>
            <div className="cert-badge">
              <div className="cert-icon">✨</div>
              <div className="cert-info">
                <div className="cert-title">Verified Template Creator</div>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <a href="#case-studies" className="btn-primary">
              See how I do it &rarr;
            </a>
          </div>
        </div>

        <div className="about-logos">
          <div className="logo-row-title">SYSTEMS BUILT FOR</div>
          <div className="blurred-logos-grid">
            <div className="b-logo">Real Estate Agency</div>
            <div className="b-logo">B2B SaaS</div>
            <div className="b-logo">Marketing Firm</div>
            <div className="b-logo">E-commerce</div>
            <div className="b-logo">Law Practice</div>
            <div className="b-logo">Digital Agency</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
