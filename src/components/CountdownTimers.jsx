import { useState, useEffect } from 'react';

export default function CountdownTimers() {
  const [timers, setTimers] = useState({
    daysSinceMet: 0,
    daysSinceFirstTalk: 0,
    daysOnCampus: 0,
    daysSinceSmile: 0
  });

  useEffect(() => {
    // Customize these dates to match your actual timeline
    const firstMetDate = new Date('2025-09-15'); // Example: when you first met
    const firstTalkDate = new Date('2025-10-01'); // When you first had a real conversation
    const campusStartDate = new Date('2025-09-01'); // Semester start
    
    const calculateDays = (startDate) => {
      const today = new Date();
      const diffTime = Math.abs(today - startDate);
      return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    };

    setTimers({
      daysSinceMet: calculateDays(firstMetDate),
      daysSinceFirstTalk: calculateDays(firstTalkDate),
      daysOnCampus: calculateDays(campusStartDate),
      daysSinceSmile: 0 // Always 0 because seeing you makes me smile every day!
    });
  }, []);

  const milestones = [
    { days: 30, message: "One month of seeing each other on campus! 🎯" },
    { days: 60, message: "Two months of building this connection! 💙" },
    { days: 100, message: "100 days of proximity - that's significant! 📍" },
    { days: 180, message: "Half a year at the same university! 🏫" },
  ];

  const reachedMilestones = milestones.filter(m => timers.daysOnCampus >= m.days);
  const nextMilestone = milestones.find(m => timers.daysOnCampus < m.days);

  return (
    <div className="container">
      <div className="card fade-in">
        <h2 className="card-title">⏰ Our Timeline</h2>
        <div className="card-content">
          <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px', color: '#667eea' }}>
            Time we've shared on campus together 💙
          </p>

          <div className="stats-grid">
            <div className="stat-card" style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white'
            }}>
              <div className="stat-number">{timers.daysSinceMet}</div>
              <div className="stat-label" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Days Since We Met
              </div>
            </div>

            <div className="stat-card" style={{
              background: 'linear-gradient(135deg, #764ba2, #E8B4F0)'
            }}>
              <div className="stat-number" style={{ color: '#667eea' }}>
                {timers.daysSinceFirstTalk}
              </div>
              <div className="stat-label">Days Since First Real Talk</div>
            </div>

            <div className="stat-card" style={{
              background: 'linear-gradient(135deg, #E8B4F0, #FFF8F0)'
            }}>
              <div className="stat-number" style={{ color: '#667eea' }}>
                {timers.daysOnCampus}
              </div>
              <div className="stat-label">Days on Campus Together</div>
            </div>

            <div className="stat-card" style={{
              background: 'linear-gradient(135deg, #FFF8F0, white)',
              border: '3px solid #667eea'
            }}>
              <div className="stat-number" style={{ color: '#667eea' }}>
                {timers.daysSinceSmile}
              </div>
              <div className="stat-label">Days Since Last Smile</div>
              <p style={{ fontSize: '12px', marginTop: '10px', fontStyle: 'italic', color: '#764ba2' }}>
                (Always 0 - you make me smile daily! 😊)
              </p>
            </div>
          </div>

          {reachedMilestones.length > 0 && (
            <div style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              padding: '30px',
              borderRadius: '20px',
              marginTop: '40px',
              marginBottom: '30px'
            }}>
              <h3 style={{ fontSize: '22px', marginBottom: '20px', textAlign: 'center' }}>
                🎉 Milestones Reached!
              </h3>
              <div style={{ display: 'grid', gap: '15px' }}>
                {reachedMilestones.map((milestone, idx) => (
                  <div key={idx} style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '15px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}>
                    <span style={{ fontSize: '32px' }}>✓</span>
                    <span style={{ fontSize: '16px' }}>{milestone.message}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {nextMilestone && (
            <div style={{
              background: 'linear-gradient(135deg, #FFF8F0, #E8B4F0)',
              padding: '25px',
              borderRadius: '15px',
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              <h3 style={{ color: '#667eea', marginBottom: '15px' }}>
                📍 Next Milestone
              </h3>
              <p style={{ fontSize: '18px', color: '#2D3748', marginBottom: '10px' }}>
                {nextMilestone.message}
              </p>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#764ba2' }}>
                {nextMilestone.days - timers.daysOnCampus} days to go!
              </p>
            </div>
          )}

          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '20px',
            border: '3px solid #667eea'
          }}>
            <h3 style={{ color: '#667eea', textAlign: 'center', marginBottom: '20px' }}>
              💭 Time Perspective
            </h3>
            <div style={{ fontSize: '15px', lineHeight: '2', color: '#2D3748' }}>
              <p>⏰ <strong>{timers.daysOnCampus} days</strong> of being on the same campus</p>
              <p>📍 <strong>{timers.daysSinceMet} days</strong> of knowing each other exists</p>
              <p>💙 <strong>{timers.daysSinceFirstTalk} days</strong> of genuine connection</p>
              <p>✨ <strong>Countless moments</strong> of passing by, smiling, and wondering "what if"</p>
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
              ⏳ <strong>Long Distance Couple:</strong> "Can't wait to see you in 3 months!"
            </p>
            <p style={{ fontSize: '18px', marginTop: '15px', lineHeight: '1.8' }}>
              💙 <strong>Us (if you say yes):</strong> "Want to grab coffee in 3 minutes?" ☕
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
              🙏 Time is a gift from God. We have the gift of proximity and shared time. 
              Let's not waste it waiting for "someday" when "today" is right here. 💙
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
