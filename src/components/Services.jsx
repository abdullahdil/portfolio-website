import React from 'react';

const services = [
  {
    icon: '🎯',
    iconBg: 'rgba(139,92,246,0.12)',
    iconBorder: 'rgba(139,92,246,0.2)',
    title: 'AI Lead Generation Engines',
    desc: 'I replace your manual prospecting process with a fully automated pipeline that runs 24/7 — finding, enriching, and personalizing outreach at scale.',
    bullets: [
      'Automated lead scraping from multiple sources',
      'API-based data enrichment (email, LinkedIn, company info)',
      'GPT-4 powered personalized outreach copy',
      'Daily delivery to Google Sheets, CRM, or email tool'
    ],
    tag: 'n8n · OpenAI · REST APIs'
  },
  {
    icon: '🤖',
    iconBg: 'rgba(6,182,212,0.12)',
    iconBorder: 'rgba(6,182,212,0.2)',
    title: 'RAG-Powered AI Support Agents',
    desc: 'An AI that knows your entire knowledge base and handles customer queries in seconds — automatically escalating only what truly needs a human.',
    bullets: [
      'Vector knowledge base ingestion from your docs',
      'Context-aware LLM response generation',
      'Auto-routing to human agents via Slack or email',
      'Works on email, chat, and helpdesk channels'
    ],
    tag: 'RAG · OpenAI · n8n · Slack'
  },
  {
    icon: '📬',
    iconBg: 'rgba(34,197,94,0.12)',
    iconBorder: 'rgba(34,197,94,0.2)',
    title: 'Inbox & Email Automation',
    desc: 'Your inbox, fully tamed. Every email classified, prioritized, routed, and actioned automatically — so you open your inbox to clarity, not chaos.',
    bullets: [
      'Real-time email classification by intent and urgency',
      'Auto-labeling, routing, and draft reply generation',
      'Critical alerts pushed to Slack instantly',
      'Works with Gmail, Outlook, and more'
    ],
    tag: 'Gmail API · GPT-4 · n8n'
  },
  {
    icon: '⚙️',
    iconBg: 'rgba(245,158,11,0.12)',
    iconBorder: 'rgba(245,158,11,0.2)',
    title: 'Business Process Automation',
    desc: 'Any repetitive, multi-step process in your business — form submissions, CRM updates, approvals, reports, notifications — automated end-to-end.',
    bullets: [
      'Webhook-triggered real-time data pipelines',
      'CRM sync, data validation, and error handling',
      'Multi-platform integrations (15+ APIs connected)',
      'Modular design — easy to extend and maintain'
    ],
    tag: 'Webhooks · CRM · n8n · APIs'
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
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${0.05 + index * 0.07}s` }}
            >
              <div 
                className="service-icon-wrap" 
                style={{ background: service.iconBg, border: `1px solid ${service.iconBorder}` }}
              >
                {service.icon}
              </div>
              <div className="service-title">{service.title}</div>
              <div className="service-desc">{service.desc}</div>
              <ul className="service-list">
                {service.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <span className="service-tag">{service.tag}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
