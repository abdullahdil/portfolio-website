import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    isFeatured: true,
    categories: ['ai', 'lead'],
    categoryLabel: 'AI Lead Generation',
    status: 'Live',
    title: 'AI Lead Generation & Outreach Engine',
    description: 'Replaced a 3-person manual prospecting process with a fully automated pipeline: scraping → enrichment → AI-personalized outreach. Outputs 100+ qualified leads/day on autopilot.',
    tags: [
      { label: 'n8n', colorClass: 'tag-purple' },
      { label: 'OpenAI API', colorClass: 'tag-cyan' },
      { label: 'Lead Enrichment', colorClass: 'tag-green' },
      { label: 'Google Sheets', colorClass: 'tag-amber' },
      { label: 'Scheduling', colorClass: 'tag-pink' }
    ],
    stat: { value: '5×', text: ' outbound volume · ', value2: '0', text2: ' researcher hrs' },
    placeholderNodes: [
      { class: '' }, { type: 'line' },
      { class: 'cyan' }, { type: 'line' },
      { class: 'green' }, { type: 'line' },
      { class: '' }
    ]
  },
  {
    id: 2,
    isFeatured: false,
    categories: ['ai', 'support'],
    categoryLabel: 'AI Support',
    status: 'Live',
    title: 'RAG-Powered Customer Support Agent',
    description: 'End-to-end AI support automation with vector knowledge base, LLM response generation, and auto-escalation via Slack.',
    tags: [
      { label: 'RAG', colorClass: 'tag-purple' },
      { label: 'OpenAI', colorClass: 'tag-cyan' },
      { label: 'Slack', colorClass: 'tag-green' },
      { label: 'n8n', colorClass: 'tag-amber' }
    ],
    stat: { text: '<', value: '5s', text2: ' response time' },
    placeholderNodes: [
      { class: 'cyan' }, { type: 'line' },
      { class: '' }, { type: 'line' },
      { class: 'green' }
    ]
  },
  {
    id: 3,
    isFeatured: false,
    categories: ['inbox'],
    categoryLabel: 'Inbox Automation',
    status: 'Live',
    title: 'Gmail AI Inbox Management',
    description: 'LLM-powered email triage using Gmail API — classifies, prioritizes and routes 100% of inbound email automatically.',
    tags: [
      { label: 'Gmail API', colorClass: 'tag-green' },
      { label: 'OpenAI', colorClass: 'tag-cyan' },
      { label: 'n8n', colorClass: 'tag-purple' }
    ],
    stat: { text: 'Saves ', value: '2+ hrs', text2: '/day' },
    placeholderNodes: [
      { class: 'green' }, { type: 'line' },
      { class: '' }, { type: 'line' },
      { class: 'cyan' }
    ]
  },
  {
    id: 4,
    isFeatured: false,
    categories: ['crm'],
    categoryLabel: 'CRM Automation',
    status: 'Live',
    title: 'Modular Business Process Pipeline',
    description: 'Event-driven stack integrating form submissions, APIs, CRM, and notifications — end-to-end with zero human touchpoints.',
    tags: [
      { label: 'Webhooks', colorClass: 'tag-amber' },
      { label: 'CRM', colorClass: 'tag-purple' },
      { label: 'n8n', colorClass: 'tag-cyan' }
    ],
    stat: { text: 'CRM update in ', value: '<30s' },
    placeholderNodes: [
      { class: '' }, { type: 'line' },
      { class: 'green' }, { type: 'line' },
      { class: 'cyan' }
    ]
  },
  {
    id: 5,
    isFeatured: false,
    categories: ['ai', 'lead'],
    categoryLabel: 'AI Personalization',
    status: 'Live',
    title: 'AI Content Personalization Engine',
    description: 'Pulls prospect data from enrichment APIs, feeds into GPT-4 prompt chain, outputs hyper-personalized email copy at scale.',
    tags: [
      { label: 'GPT-4', colorClass: 'tag-pink' },
      { label: 'n8n', colorClass: 'tag-purple' },
      { label: 'REST API', colorClass: 'tag-cyan' }
    ],
    stat: { value: '100+', text2: ' leads/day' },
    placeholderNodes: [
      { class: 'cyan' }, { type: 'line' },
      { class: 'green' }, { type: 'line' },
      { class: '' }
    ]
  },
  {
    id: 6,
    isFeatured: false,
    categories: ['support', 'inbox'],
    categoryLabel: 'Operational Alerting',
    status: 'Live',
    title: 'Real-Time Ops Alerting & Reporting',
    description: 'Monitors business KPIs across multiple data sources, triggers instant Slack/email alerts with AI-generated summaries on anomalies.',
    tags: [
      { label: 'Slack', colorClass: 'tag-amber' },
      { label: 'n8n', colorClass: 'tag-purple' },
      { label: 'Webhooks', colorClass: 'tag-cyan' },
      { label: 'OpenAI', colorClass: 'tag-green' }
    ],
    stat: { text: 'Near-', value: 'zero', text2: ' failed runs' },
    placeholderNodes: [
      { class: '' }, { type: 'line' },
      { class: 'cyan' }, { type: 'line' },
      { class: 'green' }
    ]
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'all') return true;
    return project.categories.includes(activeFilter);
  });

  return (
    <>
      <div className="section-divider"></div>

      <section className="section-projects" id="projects">
        <div className="section-label">Projects</div>
        <h2 className="section-title">Automation Systems<br />I've <span>Built</span></h2>
        <p className="section-sub">Every workflow below was shipped to production. Drop your actual n8n screenshots into the placeholders.</p>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {[
            { id: 'all', label: 'All' },
            { id: 'ai', label: 'AI / LLM' },
            { id: 'lead', label: 'Lead Gen' },
            { id: 'inbox', label: 'Inbox' },
            { id: 'crm', label: 'CRM' },
            { id: 'support', label: 'Support' }
          ].map(tab => (
            <button
              key={tab.id}
              className={`filter-tab ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid" id="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.isFeatured ? 'featured' : ''}`}
              style={{ animationDelay: `${0.05 + index * 0.07}s` }}
            >
              <div className="card-screenshot">
                {project.isFeatured && <span className="featured-badge">⭐ Featured</span>}
                <div className="placeholder-nodes">
                  {project.placeholderNodes.map((node, i) => (
                    node.type === 'line' ? (
                      <div key={i} className="ph-line"></div>
                    ) : (
                      <div key={i} className={`ph-node ${node.class}`}></div>
                    )
                  ))}
                </div>
                <div className="placeholder-label">[ Workflow Screenshot ]<br />Replace with your n8n canvas image</div>
                <div className="screenshot-overlay">
                  <button className="overlay-btn">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                    &nbsp;View Workflow
                  </button>
                </div>
              </div>
              
              <div className="card-body">
                <div className="card-meta">
                  <span className="card-category">{project.categoryLabel}</span>
                  <span className="card-status"><span className="status-dot"></span>{project.status}</span>
                </div>
                <div className="card-title">{project.title}</div>
                <div className="card-desc">{project.description}</div>
                <div className="card-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`tag ${tag.colorClass}`}>{tag.label}</span>
                  ))}
                </div>
                <div className="card-footer">
                  <span className="card-stat">
                    {project.stat.text}<strong>{project.stat.value}</strong>{project.stat.text2}
                    {project.stat.value2 && <strong>{project.stat.value2}</strong>}
                    {project.stat.text3}
                  </span>
                  <div className="card-arrow">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="projects-cta">
          <a href="https://n8n.io/creators/abdullahmil" target="_blank" rel="noreferrer" className="btn-outline">
            View All Projects on n8n
            &nbsp;
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;
