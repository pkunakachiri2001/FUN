import { useState } from 'react';

export default function WhyImDifferent() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const differences = [
    {
      category: "📍 Physical Presence",
      icon: "🏫",
      points: [
        "I'm here on campus with you every day - not miles away",
        "I can celebrate your victories in person, not through a screen",
        "When you need a hug, I can be there in minutes, not months",
        "We can have spontaneous coffee dates between classes",
        "I can help you with assignments face-to-face",
        "We see each other's reality, not just the curated version"
      ],
      summary: "Proximity means I'm not just in your phone - I'm in your daily life."
    },
    {
      category: "🙏 Faith Alignment",
      icon: "✝️",
      points: [
        "I respect your faith and will never ask you to compromise",
        "We can attend church together, not separately",
        "Prayer together in person > prayer separately over text",
        "I'll support your spiritual growth as my #1 priority",
        "We can serve in ministry together on campus",
        "Faith-centered dating is my foundation, not an afterthought"
      ],
      summary: "Your relationship with God comes before our relationship - always."
    },
    {
      category: "💙 Emotional Presence",
      icon: "💭",
      points: [
        "I notice when you're having a bad day (I see you, not just text you)",
        "I can read your real emotions, not just emojis",
        "Physical comfort during tough times - presence > pixels",
        "Shared experiences create deeper bonds than shared screens",
        "I'm learning your love language in real-time",
        "Your laugh, your smile - I get to experience them live"
      ],
      summary: "Emotional support is stronger when delivered in person."
    },
    {
      category: "⏰ Time & Availability",
      icon: "🕐",
      points: [
        "No time zones to calculate or navigate",
        "Same campus schedule - we're living parallel lives",
        "Can respond to 'need you now' moments immediately",
        "Study together during exam season stress",
        "Celebrate campus events side by side",
        "Build memories today, not plan for 'someday'"
      ],
      summary: "Same timezone, same campus, same season of life = perfect timing."
    },
    {
      category: "🤝 Respect & Patience",
      icon: "⏳",
      points: [
        "Respect for where someone is in their journey",
        "Willingness to wait without pressure or timelines",
        "Never compromising values or standards",
        "Patient enough to build friendship as foundation",
        "Respecting decisions, whatever they may be",
        "Prioritizing the other person's happiness"
      ],
      summary: "Healthy relationships are built on respect, not pressure."
    },
    {
      category: "💪 Practical Support",
      icon: "🛠️",
      points: [
        "Help with assignments, projects, and deadlines",
        "Being available for study sessions and support",
        "Present during stressful times and challenges",
        "Celebrating successes in person",
        "Supporting dreams with actions, not just words",
        "Real help when needed, not just virtual support"
      ],
      summary: "Actions speak louder than words - being present makes a difference."
    },
    {
      category: "🎯 Intentionality",
      icon: "🎯",
      points: [
        "Creating something thoughtful to express feelings",
        "Every detail considered with care and respect",
        "Effort that goes beyond typical communication",
        "Actions that demonstrate genuine interest",
        "Respectful pursuit while honoring boundaries",
        "Creative expression shows depth of care"
      ],
      summary: "Thoughtful effort shows how much someone values a connection."
    },
    {
      category: "🌱 Growth Together",
      icon: "📈",
      points: [
        "We're both in university - growing and learning simultaneously",
        "Can challenge each other academically and spiritually",
        "Build a foundation during formative years",
        "Grow together instead of apart",
        "Navigate challenges side by side",
        "Create a relationship with strong roots from day one"
      ],
      summary: "We're in the same season of growth - let's grow together."
    }
  ];

  return (
    <div className="container">
      <div className="card scale-in shona-border">
        <div className="zim-pattern"></div>
        <h2 className="card-title gradient-text-animate">💫 What Makes This Different ✨</h2>
        <div className="card-content">
          <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px', color: '#667eea', lineHeight: '1.8' }} className="heartbeat-strong">
            This isn't about being better than anyone else. It's about offering something meaningful - 
            where proximity, shared values, and genuine connection make something special possible. 💙
          </p>

          <div className="glow-pulse" style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            padding: '25px',
            borderRadius: '15px',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
              🎯 The Core Difference
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              This is about choosing <strong>presence over distance</strong>, 
              <strong>today over someday</strong>, and <strong>proximity over screens</strong>. 
              Real connection happens in real time, in real places. 💙✨
            </p>
          </div>

          <div style={{ display: 'grid', gap: '20px' }}>
            {differences.map((diff, idx) => (
              <div
                key={idx}
                style={{
                  background: expandedCategory === idx 
                    ? 'linear-gradient(135deg, #E8B4F0, #FFF8F0)' 
                    : 'white',
                  padding: '25px',
                  borderRadius: '15px',
                  border: `3px solid ${expandedCategory === idx ? '#667eea' : '#E8B4F0'}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setExpandedCategory(expandedCategory === idx ? null : idx)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span style={{ fontSize: '40px' }}>{diff.icon}</span>
                    <h3 style={{ color: '#667eea', fontSize: '20px', margin: 0 }}>
                      {diff.category}
                    </h3>
                  </div>
                  <span style={{ fontSize: '24px', color: '#667eea' }}>
                    {expandedCategory === idx ? '▼' : '▶'}
                  </span>
                </div>

                <p style={{ fontSize: '15px', fontStyle: 'italic', color: '#764ba2', marginBottom: expandedCategory === idx ? '20px' : '0' }}>
                  {diff.summary}
                </p>

                {expandedCategory === idx && (
                  <div style={{ animation: 'fadeIn 0.5s ease' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {diff.points.map((point, pIdx) => (
                        <li key={pIdx} style={{
                          padding: '12px 15px',
                          background: 'white',
                          borderRadius: '10px',
                          marginBottom: '10px',
                          fontSize: '15px',
                          color: '#2D3748',
                          borderLeft: '4px solid #667eea'
                        }}>
                          ✓ {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '40px',
            padding: '30px',
            background: 'white',
            borderRadius: '20px',
            border: '3px solid #667eea'
          }}>
            <h3 style={{ color: '#667eea', textAlign: 'center', marginBottom: '20px' }}>
              💙 The Bottom Line
            </h3>
            <div style={{ fontSize: '16px', lineHeight: '2', color: '#2D3748' }}>
              <p style={{ marginBottom: '15px' }}>
                <strong>Nobody is perfect.</strong> We all have strengths and areas for growth.
              </p>
              <p style={{ marginBottom: '15px' }}>
                <strong>But presence matters.</strong> Being in the same place creates opportunities for real connection.
              </p>
              <p style={{ marginBottom: '15px' }}>
                <strong>Shared faith is foundational.</strong> When values align, relationships have a strong base.
              </p>
              <p style={{ marginBottom: '15px' }}>
                <strong>Respect is essential.</strong> Values, pace, and personal journey should always be honored.
              </p>
              <p style={{ marginTop: '25px', fontSize: '18px', color: '#667eea', fontWeight: 'bold', textAlign: 'center' }}>
                Real connections are built on genuine presence, shared values, and mutual respect. 💙
              </p>
            </div>
          </div>

          <div style={{
            marginTop: '20px',
            padding: '25px',
            background: 'linear-gradient(135deg, #FFF8F0, #E8B4F0)',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#764ba2' }}>
              📍 <strong>Distance vs. Presence:</strong> One requires faith that someday will come. 
              The other offers today, right now, in the same space. 
            </p>
            <p style={{ fontSize: '16px', marginTop: '15px', color: '#667eea', fontWeight: '600' }}>
              Why wait for someday when today is available? 💙
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
