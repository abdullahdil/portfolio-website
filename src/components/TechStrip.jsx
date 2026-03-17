import React from 'react';

const badges = [
  { name: 'n8n Advanced', icon: '⬡', bg: 'rgba(237,87,43,0.2)', color: '#ED572B' },
  { name: 'OpenAI API', icon: '✦', bg: 'rgba(0,166,126,0.2)', color: '#00A67E' },
  { name: 'Gmail API', icon: 'G', bg: 'rgba(66,133,244,0.2)', color: '#4285F4' },
  { name: 'Webhooks', icon: '⚡', bg: 'rgba(34,197,94,0.2)', color: '#22c55e' },
  { name: 'RAG Systems', icon: '⬟', bg: 'rgba(99,102,241,0.2)', color: '#818cf8' },
  { name: 'REST APIs', icon: '◈', bg: 'rgba(139,92,246,0.2)', color: '#a78bfa' },
  { name: 'CRM Automation', icon: '⬡', bg: 'rgba(6,182,212,0.2)', color: '#06b6d4' },
  { name: 'OAuth 2.0', icon: '◆', bg: 'rgba(245,158,11,0.2)', color: '#f59e0b' },
  { name: 'Slack', icon: '✦', bg: 'rgba(236,72,153,0.2)', color: '#ec4899' },
  { name: 'JavaScript', icon: '⚙', bg: 'rgba(16,185,129,0.2)', color: '#10b981' },
];

const TechStrip = () => {
  return (
    <div className="tech-strip">
      <div className="tech-strip-inner" id="marquee">
        {badges.map((b, i) => (
          <span key={`b1-${i}`} className="tech-badge">
            <span className="tech-badge-icon" style={{ background: b.bg, color: b.color }}>{b.icon}</span>
            {b.name}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {badges.map((b, i) => (
          <span key={`b2-${i}`} className="tech-badge">
            <span className="tech-badge-icon" style={{ background: b.bg, color: b.color }}>{b.icon}</span>
            {b.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStrip;
