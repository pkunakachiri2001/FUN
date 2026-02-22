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
        "I respect that you're with someone - I'm not demanding anything",
        "I'm willing to wait for you to be ready (no pressure, no timeline)",
        "I'll never compromise your values or purity standards",
        "Patient enough to build friendship first",
        "I respect your 'no' if that's your final answer",
        "Your happiness > my desires, always"
      ],
      summary: "I want to earn your heart, not steal it or pressure you into it."
    },
    {
      category: "💪 Practical Support",
      icon: "🛠️",
      points: [
        "Help with assignments, projects, and deadlines",
        "Can bring you food when you're too busy to leave the library",
        "Be there for campus stress and exam anxiety",
        "Celebrate every test passed and hurdle cleared",
        "Support your dreams with actions, not just words",
        "Real help when you need it, not virtual encouragement"
      ],
      summary: "I can actually DO things for you, not just text about doing them."
    },
    {
      category: "🎯 Intentionality",
      icon: "🎯",
      points: [
        "I built this entire app just to communicate with you",
        "Every feature here is tailored to your values and personality",
        "I'm willing to fight for us in a respectful, faith-honoring way",
        "Effort speaks louder than words - this is my effort",
        "I'm not giving up easily, but I'll respect your final decision",
        "You're worth creative, thoughtful pursuit"
      ],
      summary: "This app exists because you matter that much to me."
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
        <h2 className="card-title gradient-text-animate">💫 Why I'm Different 🇿🇼</h2>
        <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#667eea', textAlign: 'center', marginTop: '-5px' }}>
          Nei ndakasiyana - Zvandiri kuunza kwauri
        </p>
        <div className="card-content">
          <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px', color: '#667eea', lineHeight: '1.8' }} className="heartbeat-strong">
            I'm not saying I'm better than anyone. But I am saying I offer something different - 
            something that proximity, shared faith, and genuine care make possible. Ndinokupa chimwe chinhu chakasiyana! 💙
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
              🎯 The Core Difference (Musiyano Mukuru)
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              I'm not asking you to choose me over him because I'm "better." 
              I'm asking you to consider choosing <strong>presence over distance</strong> (Kuvapo vs Kure), 
              <strong>today over someday</strong> (Nhasi vs Rimwe zuva), and <strong>proximity over pixels</strong>. 💙🇿🇼
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
                <strong>I'm not perfect.</strong> I'm not claiming to have all the answers or be the "ideal guy."
              </p>
              <p style={{ marginBottom: '15px' }}>
                <strong>But I am present.</strong> I'm here on campus with you, ready to show up for the big and small moments.
              </p>
              <p style={{ marginBottom: '15px' }}>
                <strong>I share your faith.</strong> God comes first, always - that's non-negotiable for both of us.
              </p>
              <p style={{ marginBottom: '15px' }}>
                <strong>I respect you.</strong> Your values, your pace, your journey - all honored and protected.
              </p>
              <p style={{ marginTop: '25px', fontSize: '18px', color: '#667eea', fontWeight: 'bold', textAlign: 'center' }}>
                I offer something real, something present, something built on more than hope and Wi-Fi. 💙
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
              The other offers today, right now, on the same campus. 
            </p>
            <p style={{ fontSize: '16px', marginTop: '15px', color: '#667eea', fontWeight: '600' }}>
              Why wait for someday when you can build something today? 💙
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
