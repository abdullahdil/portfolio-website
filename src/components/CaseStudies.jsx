import React, { useState } from 'react';

const caseStudiesData = [
  {
    id: 'cs1',
    icon: '🎯',
    iconBg: 'rgba(139,92,246,0.12)',
    iconBorder: 'rgba(139,92,246,0.2)',
    number: 'CASE STUDY 01',
    title: 'Scaling Outbound Sales Without Hiring',
    industry: 'B2B SaaS Company · Sales Team of 3',
    tags: [
      { label: 'Lead Gen', colorClass: 'cs-tag-purple' },
      { label: 'AI Outreach', colorClass: 'cs-tag-cyan' }
    ],
    results: [
      { num: '5×', label: 'Volume' },
      { num: '0', label: 'Manual Hrs' },
      { num: '100+', label: 'Leads/Day' }
    ],
    problem: {
      text: 'A B2B SaaS company had a 3-person sales team spending <strong>6+ hours daily</strong> manually finding leads, researching prospects, and writing individual outreach emails.',
      bullets: [
        'Prospecting was slow and inconsistent',
        'Outreach emails were generic, low reply rate',
        'No way to scale without hiring more SDRs'
      ]
    },
    solution: {
      text: 'Built a fully automated n8n pipeline that runs daily on a schedule:',
      bullets: [
        'Scrapes targeted lead lists from multiple sources',
        'Enriches each lead via REST APIs (LinkedIn, email finder)',
        'Feeds prospect data into OpenAI to write personalized emails',
        'Outputs a campaign-ready Google Sheet automatically'
      ]
    },
    finalResults: {
      text: 'The client went from 20 manual leads/day to <strong>100+ qualified leads/day</strong> with zero manual effort. The sales team now focuses entirely on closing.',
      bullets: [
        'Outbound volume increased 5× overnight',
        'Researcher headcount reduced to zero',
        'Delivered and live within 48 hours'
      ]
    },
    chips: [
      { icon: '📈', text: '<strong>5× outbound volume</strong> without adding headcount' },
      { icon: '⏱', text: 'Researcher hours reduced to <strong>zero</strong>' },
      { icon: '🚀', text: 'Live in production in <strong>under 48 hours</strong>' }
    ]
  },
  {
    id: 'cs2',
    icon: '🤖',
    iconBg: 'rgba(6,182,212,0.12)',
    iconBorder: 'rgba(6,182,212,0.2)',
    number: 'CASE STUDY 02',
    title: 'AI Customer Support That Never Sleeps',
    industry: 'E-commerce Brand · Support Team of 5',
    tags: [
      { label: 'RAG', colorClass: 'cs-tag-cyan' },
      { label: 'AI Support', colorClass: 'cs-tag-green' }
    ],
    results: [
      { num: '<5s', label: 'Response' },
      { num: '85%', label: 'Auto-handled' },
      { num: '24/7', label: 'Uptime' }
    ],
    problem: {
      text: 'An e-commerce brand was drowning in repetitive support tickets. Their team of 5 agents spent most of the day answering the <strong>same 50 questions</strong> over and over.',
      bullets: [
        'Average first response time was 4–6 hours',
        'Agents burned out on repetitive tier-1 queries',
        'No support coverage outside business hours'
      ]
    },
    solution: {
      text: 'Built a RAG-based AI support agent in n8n:',
      bullets: [
        'Ingested the entire knowledge base into a vector store',
        'LLM retrieves relevant context and generates accurate replies',
        'Auto-routes edge cases to human agents via Slack',
        'Handles email and chat channels simultaneously'
      ]
    },
    finalResults: {
      text: 'First-response time dropped from hours to <strong>under 5 seconds</strong>. Agents now only handle complex escalations.',
      bullets: [
        '85% of tier-1 queries handled automatically',
        'Human escalation rate under 15%',
        'Support now runs 24/7 with no extra staff'
      ]
    },
    chips: [
      { icon: '⚡', text: 'First response time dropped from <strong>hours → <5 seconds</strong>' },
      { icon: '🤖', text: '<strong>85%</strong> of queries resolved without human touch' },
      { icon: '🌙', text: 'Full <strong>24/7 coverage</strong> at zero extra staffing cost' }
    ]
  },
  {
    id: 'cs3',
    icon: '📬',
    iconBg: 'rgba(34,197,94,0.12)',
    iconBorder: 'rgba(34,197,94,0.2)',
    number: 'CASE STUDY 03',
    title: 'Reclaiming 2 Hours a Day from Email',
    industry: 'Agency Founder · Solo Operator',
    tags: [
      { label: 'Gmail API', colorClass: 'cs-tag-green' },
      { label: 'Inbox AI', colorClass: 'cs-tag-purple' }
    ],
    results: [
      { num: '2hrs', label: 'Saved/Day' },
      { num: '100%', label: 'Auto-Sorted' },
      { num: '0', label: 'False Alerts' }
    ],
    problem: {
      text: 'A busy agency founder was spending <strong>2+ hours every morning</strong> sorting through a chaotic inbox — newsletters, client emails, invoices, spam all mixed together.',
      bullets: [
        'Important emails frequently missed or delayed',
        'Mental energy wasted on low-value triage',
        'No consistent system for prioritization'
      ]
    },
    solution: {
      text: 'Engineered an LLM-powered inbox triage system using Gmail API + n8n:',
      bullets: [
        'Reads every incoming email in real-time via webhook',
        'GPT-4 classifies intent, urgency, and sender type',
        'Auto-labels, routes, and drafts suggested replies',
        'Critical emails pinged instantly to Slack'
      ]
    },
    finalResults: {
      text: 'The founder now opens their inbox to a <strong>fully sorted, prioritized view</strong> every morning. Morning routine cut from 2 hours to under 10 minutes.',
      bullets: [
        'Zero false-positive escalations after tuning',
        'Tested across 500+ real emails before launch',
        'Client called it "life-changing"'
      ]
    },
    chips: [
      { icon: '⏰', text: 'Morning routine cut from <strong>2hrs → 10 minutes</strong>' },
      { icon: '✉️', text: '<strong>100%</strong> of inbound email auto-classified' },
      { icon: '🎯', text: '<strong>Zero</strong> false positives across 500+ test emails' }
    ]
  },
  {
    id: 'cs4',
    icon: '⚙️',
    iconBg: 'rgba(245,158,11,0.12)',
    iconBorder: 'rgba(245,158,11,0.2)',
    number: 'CASE STUDY 04',
    title: 'Eliminating Manual CRM Data Entry Forever',
    industry: 'Real Estate Agency · Operations Team',
    tags: [
      { label: 'CRM', colorClass: 'cs-tag-amber' },
      { label: 'Webhooks', colorClass: 'cs-tag-purple' }
    ],
    results: [
      { num: '70%', label: 'Less Manual Work' },
      { num: '<30s', label: 'CRM Update' },
      { num: '0', label: 'Data Errors' }
    ],
    problem: {
      text: 'A real estate agency\'s operations team spent hours each day <strong>manually copying data</strong> from web forms, emails, and spreadsheets into their CRM system.',
      bullets: [
        'CRM always 1 day behind reality',
        'Frequent data entry mistakes causing lost leads',
        'Staff morale low from repetitive copy-paste work'
      ]
    },
    solution: {
      text: 'Designed a fully modular event-driven automation stack in n8n:',
      bullets: [
        'Webhooks capture form submissions instantly',
        'Data normalized and validated before CRM write',
        'Notifications sent to relevant team members via Slack',
        'Error handling + retry logic for near-zero failures'
      ]
    },
    finalResults: {
      text: 'CRM is now updated in <strong>real-time, under 30 seconds</strong> from any form submission or lead source. The operations team was redeployed to higher-value work.',
      bullets: [
        '70% reduction in manual operational workload',
        'Zero data entry errors since launch',
        'Full audit trail and logging built in'
      ]
    },
    chips: [
      { icon: '🗄️', text: 'CRM updated in <strong>real-time (<30s)</strong> from any source' },
      { icon: '📉', text: '<strong>70% reduction</strong> in manual operational workload' },
      { icon: '✅', text: '<strong>Zero</strong> data entry errors since deployment' }
    ]
  }
];

const CaseStudies = () => {
  // First case study open by default
  const [openId, setOpenId] = useState('cs1');

  const toggleCS = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <div className="section-divider"></div>

      <section className="section-cs" id="case-studies">
        <div className="section-label">Case Studies</div>
        <h2 className="section-title">Real Problems.<br /><span>Real Results.</span></h2>
        <p className="section-sub">
          Four client engagements — each showing the exact problem, how I solved it, and the measurable outcome delivered.
        </p>

        {caseStudiesData.map((cs, index) => (
          <div 
            key={cs.id} 
            className={`cs-card ${openId === cs.id ? 'open' : ''}`}
            style={{ animationDelay: `${0.05 + (index * 0.10)}s` }}
          >
            <div className="cs-header" onClick={() => toggleCS(cs.id)}>
              <div className="cs-header-left">
                <div 
                  className="cs-icon" 
                  style={{ background: cs.iconBg, border: `1px solid ${cs.iconBorder}` }}
                >
                  {cs.icon}
                </div>
                <div className="cs-header-meta">
                  <div className="cs-number">{cs.number}</div>
                  <div className="cs-title">{cs.title}</div>
                  <div className="cs-client-row">
                    <span className="cs-industry">{cs.industry}</span>
                    {cs.tags.map(tag => (
                      <span key={tag.label} className={`cs-tag ${tag.colorClass}`}>{tag.label}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="cs-header-results">
                {cs.results.map((res, i) => (
                  <div key={i} className="result-pill">
                    <div className="result-pill-num">{res.num}</div>
                    <div className="result-pill-label">{res.label}</div>
                  </div>
                ))}
              </div>
              <button className="cs-toggle-btn">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </button>
            </div>

            <div className="cs-body">
              <div className="cs-body-inner">
                <div className="psr-grid">
                  
                  {/* PROBLEM */}
                  <div className="psr-step">
                    <div className="psr-step-label label-problem">
                      <div className="psr-step-icon">🔴</div> Problem
                    </div>
                    <div className="psr-step-content">
                      <p dangerouslySetInnerHTML={{ __html: cs.problem.text }}></p>
                      <ul>
                        {cs.problem.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div className="psr-divider"></div>

                  {/* SOLUTION */}
                  <div className="psr-step">
                    <div className="psr-step-label label-solution">
                      <div className="psr-step-icon">⚡</div> Solution
                    </div>
                    <div className="psr-step-content">
                      <p dangerouslySetInnerHTML={{ __html: cs.solution.text }}></p>
                      <ul>
                        {cs.solution.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div className="psr-divider"></div>

                  {/* RESULTS */}
                  <div className="psr-step">
                    <div className="psr-step-label label-results">
                      <div className="psr-step-icon">✅</div> Results
                    </div>
                    <div className="psr-step-content">
                      <p dangerouslySetInnerHTML={{ __html: cs.finalResults.text }}></p>
                      <ul>
                        {cs.finalResults.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    </div>
                  </div>

                </div>

                {/* RESULTS CHIPS */}
                <div className="results-row">
                  {cs.chips.map((chip, i) => (
                    <div key={i} className="result-chip">
                      <span className="result-chip-icon">{chip.icon}</span>
                      <span className="result-chip-text" dangerouslySetInnerHTML={{ __html: chip.text }}></span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        ))}

      </section>
    </>
  );
};

export default CaseStudies;
