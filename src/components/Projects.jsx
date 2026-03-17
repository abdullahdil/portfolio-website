import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    isFeatured: true,
    categories: ['ai', 'lead'],
    categoryLabel: 'AI Lead Generation',
    status: 'Live',
    title: 'AI Lead Generation & Outreach Engine',
    description: 'Replaced a manual prospecting process with a fully automated pipeline: scraping → enrichment → AI-personalized outreach.',
    client: 'B2B SaaS ($2M ARR)',
    pain: '3-person team, 4hrs/day manual work, 2% conversion',
    result: '100+ leads/day, 4hrs → 12min, 5× volume',
    technicalDocs: 'View Technical Architecture',
    tags: [
      { label: '#LeadGen', colorClass: 'tag-purple' },
      { label: '#OpenAI', colorClass: 'tag-cyan' },
      { label: '#n8n', colorClass: 'tag-amber' }
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
    client: 'E-commerce SaaS (10K users)',
    pain: '200 tickets/day, 6hr response time, $8K/month labor',
    result: '4-sec response, 90% auto-resolved, 60% cost cut',
    technicalDocs: 'View Knowledge Base Setup',
    tags: [
      { label: '#CustomerSupport', colorClass: 'tag-purple' },
      { label: '#RAG', colorClass: 'tag-cyan' },
      { label: '#Slack', colorClass: 'tag-green' }
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
    client: 'Marketing Agency (7-person team)',
    pain: '2+ hrs/day email triage, missed client emails',
    result: '2hrs → 15min daily, zero missed emails, 0% false positives',
    technicalDocs: 'View Classification Logic',
    tags: [
      { label: '#EmailAutomation', colorClass: 'tag-green' },
      { label: '#GPT4', colorClass: 'tag-cyan' },
      { label: '#n8n', colorClass: 'tag-purple' }
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
    client: 'Real Estate Brokerage',
    pain: 'Frequent data entry errors mapping open house leads',
    result: '100% data accuracy, instant CRM sync',
    tags: [
      { label: '#Webhooks', colorClass: 'tag-amber' },
      { label: '#CRM', colorClass: 'tag-purple' },
      { label: '#n8n', colorClass: 'tag-cyan' }
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
    client: 'B2B Analytics Startup',
    pain: '0.5% outbound response rate',
    result: '4.2% positive reply rate unlocked',
    tags: [
      { label: '#GPT4', colorClass: 'tag-pink' },
      { label: '#n8n', colorClass: 'tag-purple' },
      { label: '#REST API', colorClass: 'tag-cyan' }
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
    client: 'DevOps Agency',
    pain: 'Delayed response to critical infrastructure failures',
    result: 'Zero-minute notification latency',
    tags: [
      { label: '#Slack', colorClass: 'tag-amber' },
      { label: '#n8n', colorClass: 'tag-purple' },
      { label: '#Monitoring', colorClass: 'tag-cyan' }
    ]
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const [openDocsId, setOpenDocsId] = useState(null);

  const toggleDocs = (id) => {
    setOpenDocsId(openDocsId === id ? null : id);
  };

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
        <p className="section-sub">Every workflow below was shipped to production. Click to view architecture details.</p>

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
                
                {/* TEMPORARILY HIDDEN: User will add videos later. To re-enable, change false to project.videoSrc */}
                {false ? (
                  <div className="video-wrapper">
                    <iframe 
                      src={project.videoSrc}
                      frameBorder="0"
                      allowFullScreen
                      title={`${project.title} Video Walkthrough`}
                    ></iframe>
                  </div>
                ) : (
                  <div className="placeholder-nodes">
                    <div className="placeholder-label">[ Screenshot / Architecture ]</div>
                  </div>
                )}
                
                {!project.videoSrc && (
                  <div className="screenshot-overlay">
                    <button className="overlay-btn">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                      &nbsp;View Workflow
                    </button>
                  </div>
                )}
              </div>
              
              <div className="card-body">
                <div className="card-meta">
                  <span className="card-category">{project.categoryLabel}</span>
                  <span className="card-status"><span className="status-dot"></span>{project.status}</span>
                </div>
                <div className="card-title">{project.title}</div>
                <div className="card-desc">{project.description}</div>
                
                <div className="card-metadata">
                  <div className="cmd-row"><span className="cmd-label">Client:</span> <span className="cmd-val">{project.client}</span></div>
                  <div className="cmd-row"><span className="cmd-label">Pain:</span> <span className="cmd-val pain">{project.pain}</span></div>
                  <div className="cmd-row"><span className="cmd-label">Result:</span> <span className="cmd-val highlight">{project.result}</span></div>
                </div>

                <div className="card-tags" style={{ marginTop: '16px' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`tag ${tag.colorClass}`}>{tag.label}</span>
                  ))}
                </div>
                
                {project.technicalDocs && (
                  <div className="card-tech-docs">
                    <button 
                      className={`tech-toggle-btn ${openDocsId === project.id ? 'open' : ''}`}
                      onClick={() => toggleDocs(project.id)}
                    >
                      {project.technicalDocs}
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </button>
                    {openDocsId === project.id && (
                      <div className="tech-docs-content">
                        [ Technical details and workflow node structure will be displayed here for the client to review the exact logic implementation. ]
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="projects-cta" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://github.com/abdullahmil" target="_blank" rel="noreferrer" className="btn-secondary">
            View GitHub Repos
          </a>
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
