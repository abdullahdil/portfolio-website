import React from 'react';

const reasons = [
  { num: '01', title: 'I ship in 48 hours, not 48 days', desc: 'Every workflow I\'ve ever built went from scoping call to <strong>live in production within 48 hours</strong>. No months-long projects. No endless revisions. You see results fast.' },
  { num: '02', title: 'I build for production, not demos', desc: 'Every system includes <strong>error handling, retry logic, structured logging,</strong> and monitoring. Workflows that run flawlessly at scale — not just in a sandbox.' },
  { num: '03', title: 'I speak business, not just tech', desc: 'I don\'t just build what you ask for — I ask <strong>what outcome you need</strong> and engineer the right solution. You\'ll never get a technically correct answer to the wrong problem.' },
  { num: '04', title: 'Certified & verified by n8n itself', desc: 'I\'m one of a <strong>select group of n8n Verified Creators</strong> whose work is accepted into the official template library — a standard most developers never reach.' },
  { num: '05', title: 'You own everything. No lock-in.', desc: 'Every workflow is fully documented, modular, and <strong>100% yours</strong>. You\'re never dependent on me to keep the lights on. That\'s the point.' }
];

const WhyHireMe = () => {
  return (
    <>
      <div className="divider"></div>

      <section className="section-why">
        <div className="section-label">Why Hire Me</div>
        <h2 className="section-title">Not Just Another<br /><span>Freelancer.</span></h2>
        <p className="section-sub" style={{ marginTop: '16px' }}>
          Here's why clients keep coming back — and why your next automation project belongs with me.
        </p>

        <div className="why-grid">
          
          {/* Left: reasons */}
          <div className="why-list">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="why-item"
                style={{ animationDelay: `${0.05 + index * 0.07}s` }}
              >
                <div className="why-num">{reason.num}</div>
                <div className="why-content">
                  <div className="why-title">{reason.title}</div>
                  <div className="why-desc" dangerouslySetInnerHTML={{ __html: reason.desc }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: social proof + CTA */}
          <div className="why-right">
            
            <div className="proof-card">
              <div className="proof-stars">★★★★★</div>
              <div className="proof-quote">"Abdullah replaced our entire 3-person prospecting team with a single n8n workflow. We went from 20 leads a day to over 100 — and nobody had to lift a finger. Delivered in under 48 hours."</div>
              <div className="proof-author">
                <div className="proof-avatar">JM</div>
                <div>
                  <div className="proof-name">James M.</div>
                  <div className="proof-role">Head of Sales · B2B SaaS Company</div>
                </div>
              </div>
            </div>

            <div className="proof-card">
              <div className="proof-stars">★★★★★</div>
              <div className="proof-quote">"The AI inbox system he built is genuinely life-changing. I reclaimed 2 hours every morning. Zero false positives. I didn't know automation could be this clean."</div>
              <div className="proof-author">
                <div className="proof-avatar" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.4), rgba(6,182,212,0.3))'}}>SK</div>
                <div>
                  <div className="proof-name">Sarah K.</div>
                  <div className="proof-role">Founder · Digital Marketing Agency</div>
                </div>
              </div>
            </div>

            <div className="stats-block">
              <div className="stats-block-title">By the numbers</div>
              <div className="stats-mini-grid">
                <div className="stats-mini-item">
                  <div className="stats-mini-num">20+</div>
                  <div className="stats-mini-label">Workflows Shipped</div>
                </div>
                <div className="stats-mini-item">
                  <div className="stats-mini-num">48h</div>
                  <div className="stats-mini-label">Avg. Delivery</div>
                </div>
                <div className="stats-mini-item">
                  <div className="stats-mini-num">70%</div>
                  <div className="stats-mini-label">Manual Work Saved</div>
                </div>
                <div className="stats-mini-item">
                  <div className="stats-mini-num">~0</div>
                  <div className="stats-mini-label">Failed Executions</div>
                </div>
              </div>
            </div>

            <div className="cta-block">
              <div className="cta-title">Ready to eliminate manual work?</div>
              <div className="cta-sub">Book a free 20-minute scoping call. We'll map out exactly what can be automated and what the ROI looks like.</div>
              {/* Added smooth scroll for contact link */}
              <a href="#contact" className="btn-cta" onClick={(e) => { e.preventDefault(); document.querySelector('.section-contact').scrollIntoView({ behavior: 'smooth' }); }}>
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book Free Scoping Call
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WhyHireMe;
