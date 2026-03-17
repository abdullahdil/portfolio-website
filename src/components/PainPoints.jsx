import React from 'react';

const painPoints = [
  {
    emoji: '😩',
    title: 'Your team manually enters the same data into 3 different tools',
    desc: 'Every lead, every form, every sale — someone has to copy-paste it... Hours wasted. Errors everywhere.'
  },
  {
    emoji: '📥',
    title: 'Your inbox is a black hole that swallows your mornings',
    desc: 'You spend the first 2 hours of every day triaging email instead of doing real work. Important messages get buried.'
  },
  {
    emoji: '🐌',
    title: 'Your sales team is too busy researching to actually sell',
    desc: 'They spend 70% of their time finding leads, enriching data, and writing outreach emails — and maybe 30% actually talking to prospects.'
  },
  {
    emoji: '😤',
    title: 'Your support team answers the same 20 questions all day',
    desc: 'Tier-1 tickets eat your best agents alive. They\'re drowning in repetitive FAQs while real issues pile up and customer wait times balloon.'
  },
  {
    emoji: '💸',
    title: 'You\'re paying people to do work software should handle',
    desc: 'You\'ve hired humans to do robotic tasks. Copy data. Send follow-ups. Update records. Generate reports. That\'s not a people problem — it\'s a systems problem.'
  },
  {
    emoji: '📊',
    title: 'Your reporting is always a week out of date',
    desc: 'Every time leadership wants a status update, someone has to manually pull numbers from 5 different places and stitch together a spreadsheet.'
  }
];

const PainPoints = () => {
  return (
    <>
      <div className="divider"></div>

      <section className="section-pain">
        <div className="pain-intro">
          <div className="section-label">Sound Familiar?</div>
          <h2 className="section-title">You're Losing Hours Every Day<br />to Work <span>a Machine Can Do.</span></h2>
          <p className="section-sub" style={{ marginTop: '16px' }}>
            These are the exact problems my clients had before we worked together. If any of these hit close to home — keep reading.
          </p>
        </div>

        <div className="pain-grid">
          {painPoints.map((pain, index) => (
            <div 
              key={index} 
              className="pain-card" 
              style={{ animationDelay: `${0.05 + index * 0.07}s` }}
            >
              <span className="pain-emoji">{pain.emoji}</span>
              <div className="pain-title">{pain.title}</div>
              <div className="pain-desc">{pain.desc}</div>
            </div>
          ))}
        </div>

        <div className="pain-to-solution">
          <div className="pts-text">I fix exactly this</div>
          <div className="pts-arrow"></div>
        </div>
      </section>
    </>
  );
};

export default PainPoints;
