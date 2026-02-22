import { useState } from 'react';

export default function FortuneMessages() {
  const [currentFortune, setCurrentFortune] = useState(null);
  const [cracked, setCracked] = useState(false);
  const [fortuneCount, setFortuneCount] = useState(0);

  const fortunes = [
    {
      id: 1,
      message: "A special someone on campus is thinking about you right now... 💙",
      lucky: "Lucky day: Today. Lucky person: The one who made this app. 😊"
    },
    {
      id: 2,
      message: "God's timing is perfect. Maybe this app is His way of speaking to your heart. 🙏",
      lucky: "Lucky number: 2 (as in, the two of us together!)"
    },
    {
      id: 3,
      message: "Proximity is a blessing in disguise. Don't overlook what's right in front of you. 📍",
      lucky: "Lucky color: Blue 💙 (like this app and my eyes when I see you!)"
    },
    {
      id: 4,
      message: "Your heart knows the answer. Trust your instincts and God's guidance. ✨",
      lucky: "Lucky verse: Proverbs 3:5 - Trust in the LORD 🙏"
    },
    {
      id: 5,
      message: "Sometimes the best love stories start with a simple 'yes' to coffee. ☕",
      lucky: "Lucky place: Campus café (hint hint!)"
    },
    {
      id: 6,
      message: "Distance makes the heart grow fonder, but presence makes it grow closer. 💙",
      lucky: "Lucky distance: 1000 steps, not 1000 miles 👣"
    },
    {
      id: 7,
      message: "The universe (and this guy) believes in second chances. What do you say? 🌟",
      lucky: "Lucky answer: 'Yes, let's talk!' 😊"
    },
    {
      id: 8,
      message: "Faith, friendship, and proximity - you have all three here. Don't take it for granted. 🙏",
      lucky: "Lucky blessing: A relationship that honors God 💙"
    },
    {
      id: 9,
      message: "Someone is willing to wait, to respect your pace, and to put God first. Worth considering? 💭",
      lucky: "Lucky virtue: Patience (I have plenty!)"
    },
    {
      id: 10,
      message: "God placed you both at the same university. Coincidence? I think not. 🏫✨",
      lucky: "Lucky sign: Divine appointment 🕊️"
    },
    {
      id: 11,
      message: "Your hesitation is understandable. Take your time. I'm not going anywhere (literally, I'm on campus). 😊",
      lucky: "Lucky timing: Whenever you're ready ⏰"
    },
    {
      id: 12,
      message: "The NO button ran away for a reason... Your heart might be more open than your mind thinks. 💙",
      lucky: "Lucky realization: Sometimes playful pressure reveals true feelings 🎯"
    }
  ];

  const crackCookie = () => {
    setCracked(true);
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setCurrentFortune(randomFortune);
    setFortuneCount(prev => prev + 1);
  };

  const getNewCookie = () => {
    setCracked(false);
    setCurrentFortune(null);
  };

  return (
    <div className="container">
      <div className="card fade-in">
        <h2 className="card-title">🥠 Fortune Messages</h2>
        <div className="card-content">
          <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px', color: '#667eea' }}>
            Tap the fortune cookie to reveal your message! 💙
          </p>

          {fortuneCount > 0 && (
            <div style={{
              background: 'linear-gradient(135deg, #FFF8F0, #E8B4F0)',
              padding: '15px',
              borderRadius: '10px',
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              <p style={{ fontSize: '14px', color: '#667eea' }}>
                🎉 You've opened {fortuneCount} fortune cookie{fortuneCount > 1 ? 's' : ''}!
              </p>
            </div>
          )}

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            {!cracked ? (
              <div
                onClick={crackCookie}
                style={{
                  fontSize: '150px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  display: 'inline-block',
                  animation: 'bounce 2s infinite'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                🥠
              </div>
            ) : (
              <div style={{ animation: 'fadeIn 0.5s ease' }}>
                <div style={{ fontSize: '100px', marginBottom: '20px' }}>
                  💌
                </div>
              </div>
            )}
          </div>

          {cracked && currentFortune && (
            <div style={{ animation: 'fadeIn 0.6s ease' }}>
              <div style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                padding: '30px',
                borderRadius: '20px',
                marginBottom: '30px',
                boxShadow: '0 8px 30px rgba(102, 126, 234, 0.3)'
              }}>
                <p style={{
                  fontSize: '22px',
                  lineHeight: '1.6',
                  fontStyle: 'italic',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  "{currentFortune.message}"
                </p>
                <div style={{
                  borderTop: '2px solid rgba(255, 255, 255, 0.3)',
                  paddingTop: '15px',
                  marginTop: '15px'
                }}>
                  <p style={{ fontSize: '15px', opacity: 0.95, textAlign: 'center' }}>
                    {currentFortune.lucky}
                  </p>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  className="btn btn-primary"
                  onClick={getNewCookie}
                  style={{ marginBottom: '20px' }}
                >
                  Get Another Fortune 🥠
                </button>
              </div>
            </div>
          )}

          {!cracked && (
            <div style={{
              background: 'linear-gradient(135deg, #FFF8F0, white)',
              padding: '25px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '16px', color: '#667eea', fontWeight: 'bold', marginBottom: '10px' }}>
                💡 Fortune Cookie Wisdom
              </p>
              <p style={{ fontSize: '15px', color: '#2D3748', lineHeight: '1.8' }}>
                Sometimes the answers we seek are hidden in playful moments. 
                Crack open the cookie and see what message awaits! 😊
              </p>
            </div>
          )}

          <div style={{
            marginTop: '30px',
            padding: '20px',
            background: 'linear-gradient(135deg, #E8B4F0, #FFF8F0)',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#764ba2' }}>
              🎯 Fun fact: All these fortunes were written by someone who genuinely cares about you. 
              No algorithms, no randomness - just heartfelt messages. 💙
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
