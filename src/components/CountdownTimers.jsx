import { useState, useEffect } from 'react';

export default function CountdownTimers() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeValues = [
    { value: "24", label: "Hours in Each Day", icon: "⏰" },
    { value: "168", label: "Hours in Each Week", icon: "📅" },
    { value: "Now", label: "The Perfect Time", icon: "⭐" },
  ];

  return (
    <div className="container">
      <div className="card fade-in">
        <h2 className="card-title">⏰ Time Matters</h2>
        <div className="card-content">
          <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px', color: '#667eea' }}>
            Time is the most valuable resource we have 💙
          </p>

          <div className="stats-grid">
            {timeValues.map((item, idx) => (
              <div key={idx} className="stat-card" style={{
                background: idx === 0 ? 'linear-gradient(135deg, #667eea, #764ba2)' :
                           idx === 1 ? 'linear-gradient(135deg, #764ba2, #E8B4F0)' :
                           'linear-gradient(135deg, #E8B4F0, #FFF8F0)',
                color: idx === 0 ? 'white' : '#667eea'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>{item.icon}</div>
                <div className="stat-number" style={{ color: idx === 0 ? 'white' : '#667eea' }}>
                  {item.value}
                </div>
                <div className="stat-label" style={{ color: idx === 0 ? 'rgba(255,255,255,0.9)' : 'inherit' }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '40px',
            background: 'white',
            padding: '30px',
            borderRadius: '20px',
            border: '3px solid #667eea'
          }}>
            <h3 style={{ color: '#667eea', textAlign: 'center', marginBottom: '20px' }}>
              💭 The Value of Time
            </h3>
            <div style={{ fontSize: '15px', lineHeight: '2', color: '#2D3748' }}>
              <p>⏰ Every moment is an opportunity to build something meaningful</p>
              <p>📍 Proximity turns possibilities into realities</p>
              <p>💙 Shared time creates shared memories</p>
              <p>✨ The best time to start is always now</p>
            </div>
          </div>

          <div style={{
            marginTop: '30px',
            padding: '25px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
              ⏳ <strong>Distance:</strong> "Can't wait to see you in 3 months!"
            </p>
            <p style={{ fontSize: '18px', marginTop: '15px', lineHeight: '1.8' }}>
              💙 <strong>Proximity:</strong> "Want to grab coffee in 3 minutes?" ☕
            </p>
          </div>

          <div style={{
            marginTop: '20px',
            padding: '20px',
            background: 'linear-gradient(135deg, #FFF8F0, white)',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '16px', color: '#667eea', fontStyle: 'italic' }}>
              🙏 Time is precious. When opportunity and proximity align, 
              it's worth exploring what could be. 💙
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
