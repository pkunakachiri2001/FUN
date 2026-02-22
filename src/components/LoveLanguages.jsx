import { useState } from 'react';

export default function LoveLanguages() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Which would mean more to you?",
      options: [
        { text: "Receiving a heartfelt note or text", language: "words" },
        { text: "Getting an unexpected gift", language: "gifts" },
        { text: "Spending uninterrupted quality time together", language: "time" },
        { text: "A warm, long hug", language: "touch" },
        { text: "Someone helping you with a difficult task", language: "service" }
      ]
    },
    {
      id: 2,
      question: "What makes you feel most loved?",
      options: [
        { text: "Hearing 'I appreciate you'", language: "words" },
        { text: "Receiving thoughtful surprises", language: "gifts" },
        { text: "Having someone's full attention", language: "time" },
        { text: "Physical affection and closeness", language: "touch" },
        { text: "Someone taking care of things for you", language: "service" }
      ]
    },
    {
      id: 3,
      question: "What hurts you most deeply?",
      options: [
        { text: "Harsh or critical words", language: "words" },
        { text: "Being forgotten on special occasions", language: "gifts" },
        { text: "Being too busy to spend time together", language: "time" },
        { text: "Lack of physical affection", language: "touch" },
        { text: "Not helping when you need it", language: "service" }
      ]
    },
    {
      id: 4,
      question: "How do you naturally show love?",
      options: [
        { text: "Through compliments and encouragement", language: "words" },
        { text: "By giving thoughtful presents", language: "gifts" },
        { text: "By prioritizing time together", language: "time" },
        { text: "Through hugs and physical closeness", language: "touch" },
        { text: "By helping and doing things", language: "service" }
      ]
    },
    {
      id: 5,
      question: "What would be your ideal date?",
      options: [
        { text: "Deep conversation over coffee", language: "words" },
        { text: "Receiving a surprise they picked just for you", language: "gifts" },
        { text: "A whole day with no distractions", language: "time" },
        { text: "Walking hand-in-hand somewhere beautiful", language: "touch" },
        { text: "Having them plan everything perfectly", language: "service" }
      ]
    }
  ];

  const languageDescriptions = {
    words: {
      name: "Words of Affirmation",
      icon: "💬",
      description: "You value verbal expressions of love, encouragement, and appreciation. Compliments, 'I love you,' and words of encouragement mean the world to you.",
      howToLove: [
        "Send thoughtful texts throughout the day",
        "Give genuine compliments regularly",
        "Express appreciation verbally",
        "Write heartfelt notes or letters",
        "Use encouraging words during tough times"
      ],
      color: "#667eea"
    },
    gifts: {
      name: "Receiving Gifts",
      icon: "🎁",
      description: "You cherish thoughtful gifts as symbols of love and care. It's not about materialism—it's the thought and effort that count.",
      howToLove: [
        "Remember and celebrate special dates",
        "Give small, meaningful surprises",
        "Notice what they mention wanting",
        "Create handmade gifts with personal meaning",
        "Bring back souvenirs from trips"
      ],
      color: "#764ba2"
    },
    time: {
      name: "Quality Time",
      icon: "⏰",
      description: "You feel most loved when given undivided attention. Being present, listening actively, and creating shared memories matter most.",
      howToLove: [
        "Put away phones during conversations",
        "Plan regular one-on-one time",
        "Create meaningful shared experiences",
        "Listen with full attention",
        "Prioritize them in your schedule"
      ],
      color: "#E8B4F0"
    },
    touch: {
      name: "Physical Touch",
      icon: "🤗",
      description: "You feel connection through physical presence and affection. Appropriate hugs, hand-holding, and closeness communicate love.",
      howToLove: [
        "Greet with warm hugs",
        "Hold hands when walking together",
        "Sit close during conversations",
        "Offer comfort through appropriate touch",
        "Be physically present during tough times"
      ],
      color: "#10b981"
    },
    service: {
      name: "Acts of Service",
      icon: "🛠️",
      description: "You feel loved when people do things to help you. Actions speak louder than words—helping with tasks shows you care.",
      howToLove: [
        "Help with assignments or projects",
        "Do thoughtful favors without being asked",
        "Support them during busy/stressful times",
        "Take care of practical needs",
        "Follow through on commitments reliably"
      ],
      color: "#f59e0b"
    }
  };

  const handleAnswer = (questionId, language) => {
    setAnswers({ ...answers, [questionId]: language });
  };

  const calculateResult = () => {
    const scores = {};
    Object.values(answers).forEach(lang => {
      scores[lang] = (scores[lang] || 0) + 1;
    });

    const topLanguage = Object.keys(scores).reduce((a, b) => 
      scores[a] > scores[b] ? a : b
    );

    setResult(topLanguage);
  };

  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <div className="container">
      <div className="card scale-in">
        <h2 className="card-title">💕 Discover Your Love Language</h2>
        <div className="card-content">
          <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px', color: '#667eea' }}>
            Understanding how you give and receive love can transform relationships. 
            Answer honestly—there are no wrong answers! 💙
          </p>

          {!result ? (
            <>
              {questions.map((q, idx) => (
                <div key={q.id} style={{
                  background: 'white',
                  padding: '25px',
                  borderRadius: '15px',
                  marginBottom: '25px',
                  border: answers[q.id] ? '3px solid #667eea' : '3px solid #E8B4F0'
                }}>
                  <h3 style={{ color: '#667eea', marginBottom: '20px', fontSize: '18px' }}>
                    {idx + 1}. {q.question}
                  </h3>
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {q.options.map((opt, optIdx) => (
                      <button
                        key={optIdx}
                        onClick={() => handleAnswer(q.id, opt.language)}
                        style={{
                          padding: '15px 20px',
                          background: answers[q.id] === opt.language 
                            ? 'linear-gradient(135deg, #667eea, #764ba2)'
                            : '#FFF8F0',
                          color: answers[q.id] === opt.language ? 'white' : '#2D3748',
                          border: 'none',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          textAlign: 'left',
                          fontSize: '15px',
                          fontWeight: answers[q.id] === opt.language ? '600' : '400',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {answers[q.id] === opt.language && '✓ '}
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {allAnswered && (
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                  <button
                    onClick={calculateResult}
                    className="btn btn-primary glow-pulse heartbeat-strong"
                    style={{ fontSize: '18px', padding: '15px 40px' }}
                  >
                    Discover My Love Language 💙
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="fade-in">
              <div style={{
                background: `linear-gradient(135deg, ${languageDescriptions[result].color}, #E8B4F0)`,
                padding: '40px',
                borderRadius: '20px',
                textAlign: 'center',
                marginBottom: '30px',
                color: 'white'
              }}>
                <div style={{ fontSize: '80px', marginBottom: '20px' }}>
                  {languageDescriptions[result].icon}
                </div>
                <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>
                  Your Primary Love Language:
                </h2>
                <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>
                  {languageDescriptions[result].name}
                </h1>
              </div>

              <div style={{
                background: 'white',
                padding: '30px',
                borderRadius: '15px',
                marginBottom: '25px',
                border: '3px solid #E8B4F0'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '15px' }}>What This Means:</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#2D3748' }}>
                  {languageDescriptions[result].description}
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #FFF8F0, #E8B4F0)',
                padding: '30px',
                borderRadius: '15px',
                marginBottom: '25px'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '20px' }}>
                  How Someone Could Love You Well:
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2' }}>
                  {languageDescriptions[result].howToLove.map((way, idx) => (
                    <li key={idx} style={{ fontSize: '15px', color: '#2D3748' }}>
                      💙 {way}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                padding: '25px',
                borderRadius: '15px',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  💡 <strong>Important:</strong> Most people have a primary and secondary love language. 
                  Understanding both can help create deeper connections in relationships. 
                  The right person will learn to speak your language. 💙
                </p>
              </div>

              <div style={{ textAlign: 'center', marginTop: '25px' }}>
                <button
                  onClick={() => { setAnswers({}); setResult(null); }}
                  style={{
                    padding: '12px 30px',
                    background: 'white',
                    color: '#667eea',
                    border: '2px solid #667eea',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '15px',
                    fontWeight: '600'
                  }}
                >
                  Take Quiz Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
