import React, { useState } from 'react';

const Contact = () => {
  const [activeBudget, setActiveBudget] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    msg: ''
  });
  
  // 'idle' | 'error' | 'success'
  const [formState, setFormState] = useState('idle');

  const budgetOptions = [
    'Under $500', 
    '$500 – $1,000', 
    '$1,000 – $3,000', 
    '$3,000+', 
    "Let's Discuss"
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      // Map element IDs to state keys
      [id === 'f-name' ? 'name' : id === 'f-email' ? 'email' : id === 'f-type' ? 'type' : 'msg']: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form action if any

    if (!formData.name.trim() || !formData.email.trim() || !formData.msg.trim()) {
      setFormState('error');
      setTimeout(() => {
        setFormState('idle');
      }, 2000);
      return;
    }

    // Success
    setFormState('success');
  };

  return (
    <>
      <div className="section-divider"></div>

      <section className="section-contact" id="contact">
        <div className="section-label">Contact</div>
        <h2 className="section-title">Let's Build Something<br /><span>Remarkable.</span></h2>
        <p className="section-sub">Have a workflow to automate, a process to eliminate, or an AI idea to bring to life? I'm ready to make it happen.</p>

        <div className="contact-grid">
          
          {/* LEFT: Contact Info */}
          <div className="contact-info">
            <div className="availability-card">
              <div className="avail-header">
                <div className="avail-dot"></div>
                <div className="avail-title">Currently Available for New Projects</div>
              </div>
              <div className="avail-desc">Taking on freelance automation projects. Typical delivery in 48–72 hours from scoping to production.</div>
            </div>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <div className="info-label">Email</div>
                <div className="info-value"><a href="mailto:abdullahdilshad111@gmail.com">abdullahdilshad111@gmail.com</a></div>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-text">
                <div className="info-label">WhatsApp / Phone</div>
                <div className="info-value"><a href="tel:+923106442188">+92 310 644 2188</a></div>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <div className="info-label">Location</div>
                <div className="info-value">Islamabad, Pakistan · Remote Worldwide</div>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">⏰</div>
              <div className="info-text">
                <div className="info-label">Response Time</div>
                <div className="info-value">Usually within a few hours</div>
              </div>
            </div>

            <div className="social-row">
              <a className="social-btn" href="https://linkedin.com/in/abdullah-dilshad" target="_blank" rel="noreferrer">
                <span className="social-icon">💼</span> LinkedIn
              </a>
              <a className="social-btn" href="https://n8n.io/creators/abdullahmil" target="_blank" rel="noreferrer">
                <span className="social-icon">⬡</span> n8n Profile
              </a>
              <a className="social-btn" href="https://x.com/AbdullahDilsha7" target="_blank" rel="noreferrer">
                <span className="social-icon">𝕏</span> Twitter/X
              </a>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="contact-form-wrap">
            {formState !== 'success' && (
              <>
                <div className="form-title">Send a Message</div>
                <div className="form-sub">Fill in the details and I'll get back to you within hours.</div>

                <div id="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input type="text" className="form-input" placeholder="John Smith" id="f-name" value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-input" placeholder="john@company.com" id="f-email" value={formData.email} onChange={handleInputChange} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">What do you need automated?</label>
                    <select className="form-select" id="f-type" value={formData.type} onChange={handleInputChange}>
                      <option value="" disabled>Select a project type...</option>
                      <option value="Lead Generation & Outreach">Lead Generation & Outreach</option>
                      <option value="AI Customer Support Agent">AI Customer Support Agent</option>
                      <option value="Email / Inbox Automation">Email / Inbox Automation</option>
                      <option value="CRM & Data Pipeline">CRM & Data Pipeline</option>
                      <option value="API Integration">API Integration</option>
                      <option value="Custom n8n Workflow">Custom n8n Workflow</option>
                      <option value="Something else...">Something else...</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Budget Range</label>
                    <div className="budget-pills">
                      {budgetOptions.map(option => (
                        <button 
                          key={option}
                          className={`budget-pill ${activeBudget === option ? 'active' : ''}`}
                          onClick={(e) => { e.preventDefault(); setActiveBudget(option); }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Tell me about your project</label>
                    <textarea className="form-textarea" placeholder="Describe the manual process you want to eliminate, what tools you currently use, and what a successful outcome looks like..." id="f-msg" value={formData.msg} onChange={handleInputChange}></textarea>
                  </div>

                  <button 
                    className="btn-submit" 
                    onClick={handleSubmit}
                    style={formState === 'error' ? { background: 'linear-gradient(135deg,#ef4444,#dc2626)' } : {}}
                  >
                    {formState === 'error' ? (
                      'Please fill in required fields'
                    ) : (
                      <>
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <line x1="22" y1="2" x2="11" y2="13"/>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </>
            )}

            {/* Success State */}
            {formState === 'success' && (
              <div className="form-success" style={{ display: 'block' }}>
                <div className="success-icon">✅</div>
                <div className="success-title">Message Sent!</div>
                <div className="success-sub">Thanks for reaching out. I'll review your project details and get back to you within a few hours.</div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
