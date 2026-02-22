import { useState, useEffect } from 'react';

export default function DailyInspiration() {
  const [currentVerse, setCurrentVerse] = useState(null);
  const [currentPrayer, setCurrentPrayer] = useState(null);

  // Faith-centered Bible verses about love, relationships, and trust
  const verses = [
    {
      id: 1,
      verse: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
      reference: "1 Corinthians 13:4",
      application: "True love waits patiently and acts with kindness. I'm willing to wait for your heart. 💙"
    },
    {
      id: 2,
      verse: "Trust in the LORD with all your heart and lean not on your own understanding.",
      reference: "Proverbs 3:5",
      application: "Sometimes our hearts know what our minds can't explain. Trust God's leading. 🙏"
    },
    {
      id: 3,
      verse: "Two are better than one, because they have a good return for their labor.",
      reference: "Ecclesiastes 4:9",
      application: "We're stronger together - supporting each other through university and life. 💪"
    },
    {
      id: 4,
      verse: "And now these three remain: faith, hope and love. But the greatest of these is love.",
      reference: "1 Corinthians 13:13",
      application: "Love is the greatest gift. I want to give that gift to you. 💝"
    },
    {
      id: 5,
      verse: "Delight yourself in the LORD, and he will give you the desires of your heart.",
      reference: "Psalm 37:4",
      application: "God knows the desires of both our hearts. Let's trust His plan. ✨"
    },
    {
      id: 6,
      verse: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you.",
      reference: "Jeremiah 29:11",
      application: "God's plans are perfect. Maybe His plan includes us together. 🕊️"
    },
    {
      id: 7,
      verse: "Above all, love each other deeply, because love covers over a multitude of sins.",
      reference: "1 Peter 4:8",
      application: "Deep, authentic love is worth pursuing - and we already have a foundation. 💙"
    },
    {
      id: 8,
      verse: "Be completely humble and gentle; be patient, bearing with one another in love.",
      reference: "Ephesians 4:2",
      application: "I promise patience, humility, and gentleness in pursuing your heart. 🙏"
    },
    {
      id: 9,
      verse: "There is no fear in love. But perfect love drives out fear.",
      reference: "1 John 4:18",
      application: "Don't fear the 'what ifs'. Let's explore this with courage and faith. 💫"
    },
    {
      id: 10,
      verse: "Commit to the LORD whatever you do, and he will establish your plans.",
      reference: "Proverbs 16:3",
      application: "Let's commit this decision to prayer and see where God leads. 🙏"
    }
  ];

  const prayers = [
    "God, guide Xaloe's heart today. Help her discern Your will and find peace in her decisions. 🙏",
    "Lord, if this is meant to be, open the doors. If not, give us both peace and clarity. 🕊️",
    "Father, bless Xaloe today. May she feel loved, valued, and supported in every way. 💙",
    "Jesus, help me be patient and respectful as I wait for Your timing in our lives. ⏰",
    "God, strengthen Xaloe's faith and mine. May we both seek You first above all else. ✨",
    "Lord, give Xaloe wisdom in her relationships and peace in her decisions. 🙏",
    "Father, if we're meant to be together, prepare both our hearts for that journey. 💕",
    "Jesus, help Xaloe see herself as You see her - beautiful, valued, and deeply loved. 👑",
    "God, I pray that proximity would work in our favor, but Your will above all. 🏫",
    "Lord, bless Xaloe's day. May she encounter Your love in unexpected ways. 💙"
  ];

  useEffect(() => {
    // Select random verse and prayer daily
    const today = new Date().getDate();
    setCurrentVerse(verses[today % verses.length]);
    setCurrentPrayer(prayers[today % prayers.length]);
  }, []);

  if (!currentVerse) return null;

  return (
    <div className="container">
      <div className="card scale-in shona-border">
        <div className="zim-pattern"></div>
        <h2 className="card-title gradient-text-animate">🙏 Today's Inspiration 🇿🇼</h2>
        <div className="card-content">
          <div className="verse-card glow-pulse" style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            padding: '30px',
            borderRadius: '20px',
            marginBottom: '30px'
          }}>
            <p style={{ fontSize: '20px', fontStyle: 'italic', marginBottom: '15px', lineHeight: '1.8' }}>
              "{currentVerse.verse}"
            </p>
            <p style={{ fontSize: '16px', fontWeight: 'bold', opacity: 0.9 }}>
              — {currentVerse.reference}
            </p>
          </div>

          <div className="slide-in-left" style={{
            background: 'linear-gradient(135deg, #FFF8F0, #E8B4F0)',
            padding: '25px',
            borderRadius: '15px',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: '#667eea', marginBottom: '15px' }}>💭 Reflection</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
              {currentVerse.application}
            </p>
          </div>

          <div className="slide-in-right rainbow-border" style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px'
          }}>
            <h3 style={{ color: '#667eea', marginBottom: '15px' }}>🕊️ Prayer for You Today</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', fontStyle: 'italic' }}>
              {currentPrayer}
            </p>
            <p style={{ fontSize: '14px', marginTop: '15px', color: '#667eea', fontStyle: 'italic' }}>
              I pray for you every day 🙏🇿🇼
            </p>
          </div>

          <div className="heartbeat-strong" style={{ marginTop: '30px', textAlign: 'center', padding: '20px', background: '#FFF8F0', borderRadius: '15px' }}>
            <p style={{ fontSize: '14px', color: '#718096', marginBottom: '10px' }}>
              💡 <strong>Relationship Principle:</strong>
            </p>
            <p style={{ fontSize: '16px', color: '#667eea', fontWeight: '600' }}>
              "A cord of three strands is not quickly broken" - Ecclesiastes 4:12
            </p>
            <p style={{ fontSize: '14px', color: '#718096', marginTop: '10px' }}>
              God + You + Me = A relationship built on solid ground 🙏💙
            </p>
          </div>
        </div>
      </div>

      <div className="card float-smooth rainbow-border" style={{ background: 'linear-gradient(135deg, #E8B4F0, #FFF8F0)' }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#667eea', marginBottom: '15px' }} className="gradient-text-animate">🌟 Faith-Centered Dating 🇿🇼</h3>
          <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
            I respect your faith deeply. Any relationship with you would honor God first, 
            your values second, and our personal desires third. That's a promise. 💙🙏
          </p>
        </div>
      </div>
    </div>
  );
}
