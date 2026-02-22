import { useState, useEffect, useRef } from 'react';
import './Proposal.css';

export default function Proposal() {
  const [noAttempts, setNoAttempts] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 50, y: 50 });
  const [yesClicked, setYesClicked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [yesSize, setYesSize] = useState(1);
  const [noSize, setNoSize] = useState(1);
  const noButtonRef = useRef(null);

  useEffect(() => {
    // Psychological element: Yes button gets bigger, No button gets smaller
    setYesSize(1 + noAttempts * 0.1);
    setNoSize(Math.max(0.3, 1 - noAttempts * 0.05));
  }, [noAttempts]);

  const handleNoHover = () => {
    // Psychological elements: Increase difficulty progressively
    setNoAttempts(prev => prev + 1);
    
    // Calculate new random position (avoiding current position)
    const newX = Math.random() * 70 + 10; // 10% to 80%
    const newY = Math.random() * 60 + 10; // 10% to 70%
    
    setNoPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    setYesClicked(true);
    setShowConfetti(true);
    
    // Create confetti
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        createConfetti();
      }, i * 30);
    }
  };

  const createConfetti = () => {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.background = ['#667eea', '#E8B4F0', '#FFF8F0', '#a8b5ff'][Math.floor(Math.random() * 4)];
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 3000);
  };

  const getNoButtonText = () => {
    if (noAttempts === 0) return 'No';
    if (noAttempts < 3) return 'No...?';
    if (noAttempts < 5) return 'Wait...';
    if (noAttempts < 8) return 'Hmm...';
    if (noAttempts < 12) return 'Really?';
    if (noAttempts < 15) return '🤔';
    return '👀';
  };

  const getEncouragementText = () => {
    if (noAttempts === 0) return "Just answer honestly... 😊";
    if (noAttempts < 3) return "The 'No' button is a bit shy... 😅";
    if (noAttempts < 5) return "I see you're trying hard to say no... 🙈";
    if (noAttempts < 8) return "God works in mysterious ways... 🙏";
    if (noAttempts < 12) return "Maybe this is a sign? ✨";
    if (noAttempts < 15) return "The universe is trying to tell you something... 💫";
    return "Perhaps 'Yes' is easier? 💙";
  };

  if (yesClicked) {
    return (
      <div className="container">
        <div className="card celebration-card scale-in glow-pulse">
          <div className="zim-pattern"></div>
          <div className="celebration-content">
            <div className="celebration-emoji bounce-heart">🎉💙✨😊</div>
            <h2 className="card-title gradient-text-animate">Thank You! 💕</h2>
            <div className="card-content">
              <p style={{ fontSize: '20px', marginBottom: '20px' }} className="heartbeat-strong">
                I'm glad we can have this conversation! 💙
              </p>
              <p style={{ marginBottom: '20px' }} className="gradient-text-animate">
                What this means:
              </p>
              <ul style={{ textAlign: 'left', marginLeft: '20px', lineHeight: '2' }} className="slide-in-left">
                <li>✨ Respect for faith and values always</li>
                <li>💙 Being present and supportive</li>
                <li>🙏 Supporting spiritual growth</li>
                <li>😊 Building genuine connection</li>
                <li>🌟 Being the best version of myself</li>
                <li>🤝 Honest communication and patience</li>
              </ul>
              <p style={{ marginTop: '30px', fontSize: '18px', fontStyle: 'italic' }} className="glow-pulse">
                "Love is patient, love is kind..." - 1 Corinthians 13:4
              </p>
              <div style={{ marginTop: '30px' }}>
                <p style={{ fontSize: '24px' }} className="heartbeat-strong">💙 Let's talk soon? ✨ 💙</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card proposal-card scale-in shona-border">
        <div className="zim-pattern"></div>
        <div className="proposal-emoji zim-float">💙✨</div>
        
        <h2 className="card-title gradient-text-animate">A Simple Question...</h2>
        
        <div className="card-content">
          <p style={{ fontSize: '22px', marginBottom: '20px', fontWeight: '600' }} className="heartbeat-strong">
            Would you give this a chance?
          </p>
          
          <p style={{ marginBottom: '30px', fontSize: '16px', color: '#718096' }} className="fade-in">
            I believe we have something special. We're at the same place, we share values, 
            and there's a genuine connection here worth exploring. 💙
          </p>

          {/* Psychological element: Visual comparison */}
          <div className="comparison-box">
            <div className="comparison-item">
              <div className="comparison-icon">📍</div>
              <div className="comparison-text">
                <strong>Proximity:</strong> Right here, present and available
              </div>
            </div>
            <div className="comparison-item">
              <div className="comparison-icon">💙</div>
              <div className="comparison-text">
                <strong>Connection:</strong> Genuine, shared values and interests
              </div>
            </div>
          </div>

          <p style={{ margin: '30px 0', fontSize: '18px', fontWeight: '600' }}>
            Can we at least talk about it? 💭
          </p>

          {/* Buttons */}
          <div className="proposal-buttons">
            <button
              className="btn btn-primary yes-button glow-pulse heartbeat-strong"
              onClick={handleYesClick}
              style={{ transform: `scale(${yesSize})` }}
            >
              Yes, Let's Talk! 💙✨
            </button>
            
            {noAttempts < 20 ? (
              <button
                ref={noButtonRef}
                className="btn btn-secondary no-button shake-no"
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                style={{
                  position: noAttempts > 0 ? 'absolute' : 'relative',
                  left: noAttempts > 0 ? `${noPosition.x}%` : 'auto',
                  top: noAttempts > 0 ? `${noPosition.y}%` : 'auto',
                  transform: `scale(${noSize})`,
                  transition: 'all 0.3s ease'
                }}
              >
                {getNoButtonText()}
              </button>
            ) : null}
          </div>

          {/* Encouragement Text */}
          {noAttempts > 0 && (
            <p className="encouragement-text fade-in" style={{ marginTop: '30px', fontStyle: 'italic', color: '#667eea' }}>
              {getEncouragementText()}
            </p>
          )}

          {/* Attempt Counter - Psychological pressure */}
          {noAttempts > 5 && (
            <p className="attempt-counter fade-in" style={{ marginTop: '20px', fontSize: '14px', color: '#718096' }}>
              You've tried to say no {noAttempts} times... Interesting, isn't it? 🤔
            </p>
          )}
        </div>
      </div>

      {/* Psychological Element: Social Proof */}
      <div className="card slide-in-right rainbow-border" style={{ marginTop: '20px', background: 'linear-gradient(135deg, #FFF8F0, #E8B4F0)' }}>
        <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#667eea' }}>
          💡 <strong>Did you know?</strong> Studies show that proximity is one of the strongest predictors of successful relationships. 
          Being in the same place matters more than we often realize. 💙
        </p>
      </div>
    </div>
  );
}
