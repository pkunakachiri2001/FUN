import { useState, useEffect } from 'react';

export default function ProximityCounter() {
  const stats = [
    { number: "~1000", label: "Steps Away (Not Miles!)" },
    { number: "15", label: "Minutes for Coffee" },
    { number: "Daily", label: "Potential Interactions" },
    { number: "24/7", label: "Availability" }
  ];

  return (
    <div className="container">
      <div className="card scale-in shona-border">
        <div className="zim-pattern"></div>
        <h2 className="card-title gradient-text-animate">📍 The Proximity Advantage ✨</h2>
        <div className="card-content">
          <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '30px', color: '#667eea', fontWeight: '600' }} className="heartbeat-strong">
            "Proximity isn't everything... but it's something meaningful! 💙"
          </p>

          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className={`stat-card ${idx % 2 === 0 ? 'glow-pulse' : 'float-smooth'}`}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px', textAlign: 'center' }}>
              💙 vs ✈️: The Real Difference
            </h3>

            <div className="comparison-grid" style={{ display: 'grid', gap: '20px' }}>
              <div className="slide-in-left glow-pulse" style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                padding: '25px',
                borderRadius: '15px'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>💙 Close Proximity</div>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '15px', lineHeight: '2' }}>
                  <li>✓ Coffee dates between classes</li>
                  <li>✓ Study sessions together</li>
                  <li>✓ Activities on weekends</li>
                  <li>✓ Spontaneous meet-ups</li>
                  <li>✓ In-person support when needed</li>
                  <li>✓ Quality time without planning</li>
                  <li>✓ Face-to-face communication</li>
                  <li>✓ Building memories daily</li>
                </ul>
              </div>

              <div className="slide-in-right" style={{
                background: 'linear-gradient(135deg, #FFF8F0, #E8B4F0)',
                padding: '25px',
                borderRadius: '15px',
                opacity: 0.7
              }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>✈️ Long Distance</div>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '15px', lineHeight: '2', color: '#718096' }}>
                  <li>• Video calls (Wifi-dependent)</li>
                  <li>• Texting (delayed responses)</li>
                  <li>• Missing special moments</li>
                  <li>• Expensive travel for visits</li>
                  <li>• Time zone complications</li>
                  <li>• Loneliness on tough days</li>
                  <li>• Wondering "what if..."</li>
                  <li>• Waiting for "someday"</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: '40px',
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            border: '3px solid #E8B4F0'
          }}>
            <h3 style={{ color: '#667eea', marginBottom: '15px' }}>📊 Research Says...</h3>
            <div style={{ fontSize: '15px', lineHeight: '1.8' }}>
              <p><strong>🔬 Studies show:</strong></p>
              <ul style={{ marginTop: '15px', lineHeight: '2' }}>
                <li>Proximity effect: We're more likely to form close relationships with people we see regularly</li>
                <li>Long-distance relationships have a 58% breakup rate (vs. 27% for close-proximity couples)</li>
                <li>Face-to-face interaction builds trust 3x faster than digital communication</li>
                <li>Shared physical experiences create stronger emotional bonds</li>
              </ul>
              <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#667eea' }}>
                💡 Distance can work, but proximity has natural advantages worth considering.
              </p>
            </div>
          </div>

          <div className="rainbow-border heartbeat-strong" style={{
            marginTop: '30px',
            textAlign: 'center',
            padding: '30px',
            background: 'linear-gradient(135deg, #FFF8F0, #FFFFFF)',
            borderRadius: '15px'
          }}>
            <p style={{ fontSize: '20px', color: '#667eea', fontWeight: 'bold', marginBottom: '15px' }} className="gradient-text-animate">
              "Good things come to those who wait..."
            </p>
            <p style={{ fontSize: '18px', color: '#764ba2', fontWeight: 'bold' }}>
              "But better things come to those who are present!" 💙✨
            </p>
            <p style={{ fontSize: '14px', color: '#718096', marginTop: '20px' }}>
              When opportunity and proximity align, it's worth exploring. 🙏
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
