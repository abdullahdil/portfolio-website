import React from 'react';

const tools = [
  { name: 'n8n', icon: '⬡', desc: 'Used in 20+ projects for orchestrating complex business logic and API connections.' },
  { name: 'OpenAI API', icon: '✦', desc: 'Deployed across 15+ workflows for lead enrichment, email drafting & classification.' },
  { name: 'Make.com', icon: 'Ⓜ', desc: 'Used for specialized app integrations when native nodes are required.' },
  { name: 'Zapier', icon: '⚡', desc: 'Maintained and migrated complex legacy Zaps into robust n8n environments.' },
  { name: 'HubSpot', icon: 'H', desc: 'Deep CRM integration experience ensuring zero-latency data syncs.' },
  { name: 'Slack', icon: '#', desc: 'Built 10+ operational alert and approval systems via Slack Blocks API.' },
  { name: 'Gmail API', icon: 'M', desc: 'Engineered auto-triage systems handling thousands of inbound emails daily.' },
  { name: 'Vector DBs', icon: '⬟', desc: 'Pinecone / Qdrant integrations powering high-accuracy RAG support bots.' }
];

const TechProficiency = () => {
  return (
    <>
      <div className="section-divider"></div>

      <section className="section-tech" id="skills">
        <div className="section-label">Technical Proficiency</div>
        <h2 className="section-title">Tools I Deploy <span>Daily.</span></h2>
        <p className="section-sub" style={{ marginTop: '16px' }}>
          I don't just "know" these tools. I build production-grade, revenue-critical systems with them every single day.
        </p>

        <div className="tech-container">
          <div className="tech-cert-row">
            <div className="cert-badge" style={{ marginTop: 0 }}>
              <div className="cert-icon">🏅</div>
              <div className="cert-info">
                <div className="cert-title">n8n Level 2 Certified Developer</div>
              </div>
            </div>
            <a href="https://n8n.io/creators/abdullahmil" target="_blank" rel="noreferrer" className="cert-badge cert-link" style={{ marginTop: 0, textDecoration: 'none' }}>
              <div className="cert-icon">✨</div>
              <div className="cert-info">
                <div className="cert-title" style={{ color: '#06b6d4' }}>View My Official n8n Templates &rarr;</div>
              </div>
            </a>
          </div>

          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="tool-card"
                style={{ animationDelay: `${0.05 + index * 0.05}s` }}
              >
                <div className="tool-icon">{tool.icon}</div>
                <div className="tool-name">{tool.name}</div>
                <div className="tool-hover-desc">{tool.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default TechProficiency;
