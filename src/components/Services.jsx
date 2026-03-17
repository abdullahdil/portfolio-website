import React from 'react';

const services = [
  {
    icon: '🎯',
    iconBg: 'rgba(139,92,246,0.12)',
    iconBorder: 'rgba(139,92,246,0.2)',
    title: 'AI Lead Generation Engine',
    desc: 'I replace your manual prospecting process with a fully automated pipeline.',
    pain: 'SDRs spend 60% of their day copying/pasting and researching leads instead of selling.',
    fix: 'A fully automated pipeline that scrapes, enriches, and personalizes outreach 24/7.',
    result: '100+ qualified leads generated daily, automatically pushed to your CRM.',
    roi: '10× return in 90 days typical',
    tag: 'n8n · OpenAI · REST APIs',
    link: '#case-studies'
  },
  {
    icon: '🤖',
    iconBg: 'rgba(6,182,212,0.12)',
    iconBorder: 'rgba(6,182,212,0.2)',
    title: 'AI Customer Support Agents',
    desc: 'An AI that handles customer queries in seconds — automatically escalating only what truly needs a human.',
    pain: 'Customers wait 6+ hours for basic support answers, frustrating them and burning out your team.',
    fix: 'An AI Agent connected to your internal docs that instantly resolves 80% of L1/L2 tickets.',
    result: '6-hour response time slashed to 4 seconds.',
    roi: '10× return in 90 days typical',
    tag: 'RAG · OpenAI · n8n · Slack',
    link: '#case-studies'
  },
  {
    icon: '⚙️',
    iconBg: 'rgba(245,158,11,0.12)',
    iconBorder: 'rgba(245,158,11,0.2)',
    title: 'System Integration & API Orchestration',
    desc: 'Connecting your scattered tools so data flows synchronously across your entire tech stack.',
    pain: 'Your team manually moves data between your CRM, billing system, and project management tools.',
    fix: 'Webhook-triggered pipelines that instantly sync data and trigger cross-platform actions.',
    result: 'Zero data-entry errors and 20+ hours saved per week.',
    roi: '10× return in 90 days typical',
    tag: 'Webhooks · CRM · n8n · APIs',
    link: '#case-studies'
  }
];

const Services = () => {
  return (
    <>
      <div className="divider"></div>

      <section className="section-services">
        <div className="section-label">What I Do</div>
        <h2 className="section-title">I Build Systems That<br /><span>Work While You Sleep.</span></h2>
        <p className="section-sub" style={{ marginTop: '16px' }}>
          Not just automations — complete, AI-powered operating systems for your business. Here's exactly what I deliver.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <a 
              href={service.link}
              key={index} 
              className="service-card"
              style={{ animationDelay: `${0.05 + index * 0.07}s`, textDecoration: 'none', display: 'block' }}
            >
              <div 
                className="service-icon-wrap" 
                style={{ background: service.iconBg, border: `1px solid ${service.iconBorder}` }}
              >
                {service.icon}
              </div>
              <div className="service-title">{service.title}</div>
              
              <div className="service-details">
                <div className="s-detail">
                  <span className="s-label problem">The Pain:</span> <span className="s-text">{service.pain}</span>
                </div>
                <div className="s-detail">
                  <span className="s-label fix">The Fix:</span> <span className="s-text">{service.fix}</span>
                </div>
                <div className="s-detail">
                  <span className="s-label result">Typical Result:</span> <span className="s-text highlight">{service.result}</span>
                </div>
                <div className="s-detail" style={{ marginTop: '12px' }}>
                  <span className="s-label roi">ROI:</span> <span className="s-text special">{service.roi}</span>
                </div>
              </div>

              <div className="service-bot-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
                <span className="service-tag">{service.tag}</span>
                <span className="service-learn-more">Learn More &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
