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
      application: "True love shows itself through patience and genuine kindness, not through pressure or urgency. 💙"
    },
    {
      id: 2,
      verse: "Trust in the LORD with all your heart and lean not on your own understanding.",
      reference: "Proverbs 3:5",
      application: "The best relationships begin with trusting God's direction and timing in our lives. 🙏"
    },
    {
      id: 3,
      verse: "Two are better than one, because they have a good return for their labor.",
      reference: "Ecclesiastes 4:9",
      application: "Strong partnerships are built on mutual support and shared growth. 💪"
    },
    {
      id: 4,
      verse: "And now these three remain: faith, hope and love. But the greatest of these is love.",
      reference: "1 Corinthians 13:13",
      application: "Love is the greatest gift we can share with another person. 💝"
    },
    {
      id: 5,
      verse: "Delight yourself in the LORD, and he will give you the desires of your heart.",
      reference: "Psalm 37:4",
      application: "When we prioritize our relationship with God, He aligns our hearts with His perfect plan. ✨"
    },
    {
      id: 6,
      verse: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you.",
      reference: "Jeremiah 29:11",
      application: "God's plans are always perfect, even when we can't see the full picture yet. 🕊️"
    },
    {
      id: 7,
      verse: "Above all, love each other deeply, because love covers over a multitude of sins.",
      reference: "1 Peter 4:8",
      application: "Deep, authentic love is built on a foundation of genuine friendship and respect. 💙"
    },
    {
      id: 8,
      verse: "Be completely humble and gentle; be patient, bearing with one another in love.",
      reference: "Ephesians 4:2",
      application: "The best relationships are built on patience, humility, and gentleness. 🙏"
    },
    {
      id: 9,
      verse: "There is no fear in love. But perfect love drives out fear.",
      reference: "1 John 4:18",
      application: "True love gives us courage to be vulnerable and authentic with each other. 💫"
    },
    {
      id: 10,
      verse: "Commit to the LORD whatever you do, and he will establish your plans.",
      reference: "Proverbs 16:3",
      application: "When we commit our relationships to God first, He guides us to the right path. 🙏"
    }
  ];

  const prayers = [
    "God, guide our hearts today. Help us discern Your will and find peace in our decisions. 🙏",
    "Lord, if this is meant to be, open the doors. If not, give us both peace and clarity. 🕊️",
    "Father, may we feel loved, valued, and supported in every way. 💙",
    "Jesus, help us be patient and respectful as we wait for Your perfect timing. ⏰",
    "God, strengthen our faith. May we seek You first above all else. ✨",
    "Lord, grant wisdom in relationships and peace in important decisions. 🙏",
    "Father, prepare our hearts for the journey You have planned for us. 💕",
    "Jesus, help us see ourselves as You see us - beautiful, valued, and deeply loved. 👑",
    "God, may Your will be done in all our relationships and connections. 🏫",
    "Lord, may we encounter Your love in unexpected and beautiful ways. 💙"
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
        <h2 className="card-title gradient-text-animate">🙏 Today's Inspiration ✨</h2>
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
            <h3 style={{ color: '#667eea', marginBottom: '15px' }}>🕊️ Prayer for Today</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', fontStyle: 'italic' }}>
              {currentPrayer}
            </p>
            <p style={{ fontSize: '14px', marginTop: '15px', color: '#667eea', fontStyle: 'italic' }}>
              Faith guides us through every decision 🙏✨
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
          <h3 style={{ color: '#667eea', marginBottom: '15px' }} className="gradient-text-animate">🌟 Faith-Centered Connection ✨</h3>
          <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
            A strong relationship honors God first, values second, and personal desires third. 
            That's the foundation of something meaningful and lasting. 💙🙏
          </p>
        </div>
      </div>
    </div>
  );
}
