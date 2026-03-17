import React, { useState } from 'react';

const Contact = () => {
  const [activeBudget, setActiveBudget] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    waster: '',
    msg: ''
  });
  
  const [formState, setFormState] = useState('idle');
  const [emailCopied, setEmailCopied] = useState(false);

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
      [id === 'f-name' ? 'name' : id === 'f-email' ? 'email' : id === 'f-company' ? 'company' : id === 'f-waster' ? 'waster' : 'msg']: value
    }));
  };

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('abdullahdilshad111@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 2000);
      return;
    }

    setFormState('submitting');

    try {
      const payload = {
        access_key: "692ed1c9-f592-49a4-920c-af70e8ee4c9b",
        name: formData.name,
        email: formData.email,
        message: `Company: ${formData.company || 'Not specified'}\nBudget: ${activeBudget || 'Not specified'}\nBiggest Time-Waster: ${formData.waster || 'Not specified'}\n\nMessage:\n${formData.msg}`,
        subject: "New Audit Request from Portfolio Website"
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const json = await res.json();

      if (json.success) {
        setFormState('success');
        setFormData({ name: '', email: '', company: '', waster: '', msg: '' });
        setActiveBudget(null);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 3000);
      }
    } catch (err) {
      console.error("Submission Error: ", err);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  return (
    <>
      <div className="section-divider"></div>

      <section className="section-contact" id="contact">
        <div className="section-label">Audit & Contact</div>
        <h2 className="section-title">Ready to reclaim your<br /><span>team's time?</span></h2>
        <p className="section-sub">Book a free 15-minute Automation Audit. I'll analyze your biggest time-waster and sketch a solution. No pitch, no obligation.</p>

        <div className="contact-grid" style={{ marginTop: '50px' }}>
          
          {/* LEFT: Trust Signals & Calendly */}
          <div className="contact-info">
            <div className="trust-signals">
              <div className="trust-item">
                <span className="trust-icon">⚡</span> 15-min call, not a 60-min sales pitch
              </div>
              <div className="trust-item">
                <span className="trust-icon">🔒</span> No spam, unsubscribe anytime
              </div>
              <div className="trust-item">
                <span className="trust-icon">⭐</span> 5/5 from 12+ clients
              </div>
              <div className="trust-item">
                <span className="trust-icon">📩</span> Average response time: &lt; 2 hours
              </div>
            </div>

            <div className="email-copy-block">
              <div className="ec-label">Direct Email</div>
              <button className={`btn-copy-email ${emailCopied ? 'copied' : ''}`} onClick={copyEmail}>
                abdullahdilshad111@gmail.com
                <span className="copy-icon">
                  {emailCopied ? '✓' : '❐'}
                </span>
              </button>
            </div>

            <div className="calendly-wrapper">
              <div className="calendly-label">Pick a time to talk directly:</div>
              <iframe 
                src="https://calendly.com/abdullahdilshad111/15-minute-automation-audit" 
                width="100%" 
                height="400" 
                frameBorder="0" 
                title="Calendly Scheduling"
                className="calendly-iframe"
              ></iframe>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="contact-form-wrap">
            {formState !== 'success' && (
              <>
                <div className="form-title">Request an Audit Offline</div>
                <div className="form-sub">Can't find a time on Calendly? Fill this out and I'll send you an async audit.</div>

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
                    <label className="form-label">Company Name</label>
                    <input type="text" className="form-input" placeholder="Acme Corp" id="f-company" value={formData.company} onChange={handleInputChange} />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Biggest Time-Waster?</label>
                    <select className="form-select" id="f-waster" value={formData.waster} onChange={handleInputChange}>
                      <option value="" disabled>Select the biggest bottleneck...</option>
                      <option value="Lead qualification & outreach">Lead qualification & outreach</option>
                      <option value="Customer support & ticket routing">Customer support & ticket routing</option>
                      <option value="Data entry across different apps">Data entry across different apps</option>
                      <option value="Proposal or document generation">Proposal or document generation</option>
                      <option value="Reporting & KPI tracking">Reporting & KPI tracking</option>
                      <option value="Other">Other</option>
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
                    <label className="form-label">Any specific notes?</label>
                    <textarea className="form-textarea" placeholder="Describe the manual process in a bit more detail..." id="f-msg" value={formData.msg} onChange={handleInputChange}></textarea>
                  </div>

                  <button 
                  type="submit" 
                  className={`btn-submit ${formState}`}
                  disabled={formState === 'submitting'}
                  onClick={handleSubmit}
                >
                  <span className="btn-text">
                    {formState === 'idle' && 'Book My Audit'}
                    {formState === 'submitting' && 'Booking...'}
                    {formState === 'error' && 'Error - Try Again'}
                  </span>
                  {formState === 'idle' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  )}
                </button>
                </div>
              </>
            )}

            {/* Success State */}
            {formState === 'success' && (
              <div className="form-success" style={{ display: 'block' }}>
                <div className="success-icon">✅</div>
                <div className="success-title">You're booked!</div>
                <div className="success-sub">Check your email for the confirmation. I'll reach out shortly to prepare for the audit.</div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
