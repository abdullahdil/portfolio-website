import React from 'react';

const reasons = [
  { 
    num: '01', 
    title: 'Business-First Approach', 
    desc: 'I diagnose your pain before writing a single line of code. You\'ll never get a technically correct answer to the wrong problem.',
    testimonial: { quote: "Saved us 15 hours/week immediately", author: "James M., Head of Sales" }
  },
  { 
    num: '02', 
    title: 'Proven ROI', 
    desc: 'Automation for automation\'s sake is useless. Every project is measured strictly against time saved or new revenue gained.',
    testimonial: { quote: "Achieved 10x ROI in the first 90 days", author: "Sarah K., Agency Founder" }
  },
  { 
    num: '03', 
    title: 'Rapid Deployment', 
    desc: '<strong>Production-ready workflows in 48 hours, not 2 weeks.</strong> I build with velocity because your business operates in real-time.',
    testimonial: { quote: "Delivered our entire lead engine over a weekend", author: "Michael T., SaaS CEO" }
  },
  { 
    num: '04', 
    title: 'No-Code Handoff', 
    desc: '<strong>You own the system.</strong> Full documentation, architecture mapping, and team training included. No agency lock-in, ever.',
    testimonial: { quote: "The handoff documentation was flawless", author: "Elena R., Operations Dir." }
  }
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
                style={{ animationDelay: `${0.05 + index * 0.07}s`, flexDirection: 'column', alignItems: 'flex-start' }}
              >
                <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
                  <div className="why-num">{reason.num}</div>
                  <div className="why-content">
                    <div className="why-title">{reason.title}</div>
                    <div className="why-desc" dangerouslySetInnerHTML={{ __html: reason.desc }}></div>
                  </div>
                </div>
                {reason.testimonial && (
                  <div className="micro-testimonial">
                    <div className="mt-quote">"{reason.testimonial.quote}"</div>
                    <div className="mt-author">— {reason.testimonial.author}</div>
                  </div>
                )}
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
