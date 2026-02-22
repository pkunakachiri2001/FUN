import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Proposal from './components/Proposal';
import Reasons from './components/Reasons';
import DailyInspiration from './components/DailyInspiration';
import ProximityCounter from './components/ProximityCounter';
import DateCoupons from './components/DateCoupons';
import FriendshipQuiz from './components/FriendshipQuiz';
import FortuneMessages from './components/FortuneMessages';
import CountdownTimers from './components/CountdownTimers';
import WhyImDifferent from './components/WhyImDifferent';
import PrayerBox from './components/PrayerBox';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate floating hearts
    const heartInterval = setInterval(() => {
      setHearts(prev => [...prev, {
        id: Date.now(),
        left: Math.random() * 100,
        emoji: ['💙', '🤍', '💕', '💗', '✨'][Math.floor(Math.random() * 5)]
      }]);
      
      // Remove old hearts
      setTimeout(() => {
        setHearts(prev => prev.slice(1));
      }, 10000);
    }, 2000);

    return () => clearInterval(heartInterval);
  }, []);

  const navItems = [
    { path: '/', label: 'Question', icon: '💭' },
    { path: '/reasons', label: 'Reasons', icon: '💝' },
    { path: '/inspiration', label: 'Faith', icon: '🙏' },
    { path: '/proximity', label: 'Campus', icon: '📍' },
    { path: '/coupons', label: 'Dates', icon: '🎁' },
    { path: '/quiz', label: 'Quiz', icon: '🎮' },
    { path: '/fortune', label: 'Fortune', icon: '🥠' },
    { path: '/countdown', label: 'Days', icon: '⏰' },
    { path: '/different', label: 'Why Me', icon: '💫' },
    { path: '/prayer', label: 'Prayer', icon: '🕊️' }
  ];

  return (
    <div className="app">
      {/* Floating Hearts Background */}
      <div className="hearts-bg">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="heart-float"
            style={{ left: `${heart.left}%` }}
          >
            {heart.emoji}
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="header">
        <h1>HEY 💙 Xaloe!</h1>
        <p style={{ fontSize: '18px', fontStyle: 'italic', marginTop: '10px' }}>
          I made something special for you...
        </p>
        <p style={{ fontSize: '16px', marginTop: '5px', color: '#E8B4F0' }}>
          my Zimbabwean Queen 🇿🇼👑
        </p>
      </header>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-grid">
          {navItems.map(item => (
            <button
              key={item.path}
              className={`nav-btn ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Proposal />} />
          <Route path="/reasons" element={<Reasons />} />
          <Route path="/inspiration" element={<DailyInspiration />} />
          <Route path="/proximity" element={<ProximityCounter />} />
          <Route path="/coupons" element={<DateCoupons />} />
          <Route path="/quiz" element={<FriendshipQuiz />} />
          <Route path="/fortune" element={<FortuneMessages />} />
          <Route path="/countdown" element={<CountdownTimers />} />
          <Route path="/different" element={<WhyImDifferent />} />
          <Route path="/prayer" element={<PrayerBox />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
