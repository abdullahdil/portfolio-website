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
          <p>I'm an <strong>AI Automation Engineer</strong> based in Pakistan, specializing in building production-grade automation systems using <strong>n8n</strong> — the open-source workflow automation platform.</p>
          <p>With a Computer Science background from <strong>FAST-NUCES</strong> and hands-on experience shipping 20+ live workflows, I bridge the gap between complex AI capabilities and real business operations.</p>
          <p>My systems don't just automate tasks — they <strong>eliminate entire processes</strong>. From AI-powered lead generation engines to RAG-based customer support bots, every workflow I build is engineered to run reliably at scale.</p>

          <div className="cert-badge">
            <div className="cert-icon">🏅</div>
            <div className="cert-info">
              <div className="cert-title">n8n Level 2 Certified Developer</div>
              <div className="cert-sub">Verified Template Creator · Official n8n Template Library</div>
            </div>
          </div>
        </div>

        <div className="about-skills" ref={skillsRef}>
          <div className="skill-bar">
            <div className="skill-bar-header"><span className="skill-name">n8n Workflow Automation</span><span className="skill-pct">95%</span></div>
            <div className="skill-track"><div className="skill-fill" data-width="95"></div></div>
          </div>
          <div className="skill-bar">
            <div className="skill-bar-header"><span className="skill-name">OpenAI / LLM Integration</span><span className="skill-pct">90%</span></div>
            <div className="skill-track"><div className="skill-fill" data-width="90"></div></div>
          </div>
          <div className="skill-bar">
            <div className="skill-bar-header"><span className="skill-name">REST API & Webhooks</span><span className="skill-pct">92%</span></div>
            <div className="skill-track"><div className="skill-fill" data-width="92"></div></div>
          </div>
          <div className="skill-bar">
            <div className="skill-bar-header"><span className="skill-name">RAG & Vector Databases</span><span className="skill-pct">82%</span></div>
            <div className="skill-track"><div className="skill-fill" data-width="82"></div></div>
          </div>
          <div className="skill-bar">
            <div className="skill-bar-header"><span className="skill-name">JavaScript / Node.js</span><span className="skill-pct">80%</span></div>
            <div className="skill-track"><div className="skill-fill" data-width="80"></div></div>
          </div>
          <div className="skill-bar">
            <div className="skill-bar-header"><span className="skill-name">CRM & Email Automation</span><span className="skill-pct">88%</span></div>
            <div className="skill-track"><div className="skill-fill" data-width="88"></div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
