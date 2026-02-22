import { useState } from 'react';

export default function CompatibilityQuiz() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      category: "Values",
      question: "What matters most to you in a relationship?",
      options: [
        { text: "Faith and spiritual alignment", value: "spiritual", weight: 5 },
        { text: "Emotional connection and understanding", value: "emotional", weight: 4 },
        { text: "Shared goals and ambitions", value: "practical", weight: 3 },
        { text: "Fun and spontaneity", value: "adventure", weight: 2 }
      ]
    },
    {
      id: 2,
      category: "Communication",
      question: "How do you prefer to handle conflicts?",
      options: [
        { text: "Talk it out immediately", value: "direct", weight: 4 },
        { text: "Take time to think, then discuss", value: "reflective", weight: 5 },
        { text: "Pray about it first", value: "spiritual", weight: 5 },
        { text: "Use humor to lighten the mood", value: "lighthearted", weight: 3 }
      ]
    },
    {
      id: 3,
      category: "Lifestyle",
      question: "What's your ideal weekend?",
      options: [
        { text: "Church, then relaxing with loved ones", value: "balanced", weight: 5 },
        { text: "Adventure and trying new things", value: "adventurous", weight: 3 },
        { text: "Productive studying and self-improvement", value: "ambitious", weight: 4 },
        { text: "Mix of everything", value: "flexible", weight: 4 }
      ]
    },
    {
      id: 4,
      category: "Social",
      question: "How do you recharge?",
      options: [
        { text: "Quality time with close friends", value: "social", weight: 3 },
        { text: "Alone time for reflection", value: "introverted", weight: 4 },
        { text: "One-on-one deep conversations", value: "connection", weight: 5 },
        { text: "Worship and prayer", value: "spiritual", weight: 5 }
      ]
    },
    {
      id: 5,
      category: "Future",
      question: "What's most important for your future?",
      options: [
        { text: "Following God's will", value: "faithful", weight: 5 },
        { text: "Career success and stability", value: "ambitious", weight: 3 },
        { text: "Strong family and relationships", value: "relational", weight: 4 },
        { text: "Making a positive impact", value: "purposeful", weight: 4 }
      ]
    },
    {
      id: 6,
      category: "Intimacy",
      question: "What creates intimacy for you?",
      options: [
        { text: "Deep, meaningful conversations", value: "emotional", weight: 5 },
        { text: "Physical presence and touch", value: "physical", weight: 3 },
        { text: "Shared spiritual experiences", value: "spiritual", weight: 5 },
        { text: "Acts of service and support", value: "practical", weight: 4 }
      ]
    },
    {
      id: 7,
      category: "Decision Making",
      question: "How do you make big decisions?",
      options: [
        { text: "Prayer and seeking God's guidance", value: "spiritual", weight: 5 },
        { text: "Pros/cons list and logic", value: "analytical", weight: 3 },
        { text: "Following my heart/intuition", value: "intuitive", weight: 3 },
        { text: "Seeking wise counsel from others", value: "collaborative", weight: 4 }
      ]
    },
    {
      id: 8,
      category: "Affection",
      question: "How do you show you care?",
      options: [
        { text: "Through encouraging words", value: "verbal", weight: 4 },
        { text: "Quality time and attention", value: "time", weight: 5 },
        { text: "Thoughtful actions and help", value: "service", weight: 4 },
        { text: "Physical affection (appropriately)", value: "touch", weight: 3 }
      ]
    }
  ];

  const handleAnswer = (questionId, value, weight) => {
    setAnswers({
      ...answers,
      [questionId]: { value, weight }
    });
  };

  const calculateCompatibility = () => {
    let totalScore = 0;
    let maxScore = 0;

    Object.values(answers).forEach(answer => {
      totalScore += answer.weight;
      maxScore += 5;
    });

    return Math.round((totalScore / maxScore) * 100);
  };

  const getCompatibilityMessage = (score) => {
    if (score >= 90) return {
      title: "Exceptional Alignment! 🌟",
      message: "Your values and approach to life show remarkable compatibility. You prioritize faith, communication, and genuine connection—a strong foundation for any relationship.",
      color: "#10b981"
    };
    if (score >= 75) return {
      title: "Strong Connection 💙",
      message: "You have solid compatibility in key areas. Your values align well, and there's great potential for a meaningful relationship built on shared priorities.",
      color: "#667eea"
    };
    if (score >= 60) return {
      title: "Good Potential 💫",
      message: "There's definitely compatibility here! With open communication and mutual respect, you could build something beautiful together.",
      color: "#764ba2"
    };
    return {
      title: "Room for Growth 🌱",
      message: "Every relationship requires growth and understanding. What matters most is the willingness to communicate, compromise, and grow together.",
      color: "#f59e0b"
    };
  };

  const allAnswered = Object.keys(answers).length === questions.length;
  const compatibilityScore = showResults ? calculateCompatibility() : 0;
  const result = showResults ? getCompatibilityMessage(compatibilityScore) : null;

  return (
    <div className="container">
      <div className="card scale-in">
        <h2 className="card-title">🧩 Compatibility Assessment</h2>
        <div className="card-content">
          <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px', color: '#667eea', lineHeight: '1.8' }}>
            Understanding compatibility isn't about being identical—it's about alignment on core values. 
            Answer honestly to see what a potential relationship foundation might look like. 💙
          </p>

          {!showResults ? (
            <>
              {questions.map((q, idx) => (
                <div key={q.id} style={{
                  background: answers[q.id] ? 'linear-gradient(135deg, #E8B4F0, #FFF8F0)' : 'white',
                  padding: '25px',
                  borderRadius: '15px',
                  marginBottom: '25px',
                  border: answers[q.id] ? '3px solid #667eea' : '3px solid #E8B4F0',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ marginBottom: '15px' }}>
                    <span style={{
                      background: '#667eea',
                      color: 'white',
                      padding: '5px 15px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      {q.category}
                    </span>
                  </div>
                  
                  <h3 style={{ color: '#667eea', marginBottom: '20px', fontSize: '18px' }}>
                    {idx + 1}. {q.question}
                  </h3>
                  
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {q.options.map((opt, optIdx) => (
                      <button
                        key={optIdx}
                        onClick={() => handleAnswer(q.id, opt.value, opt.weight)}
                        style={{
                          padding: '15px 20px',
                          background: answers[q.id]?.value === opt.value
                            ? 'linear-gradient(135deg, #667eea, #764ba2)'
                            : 'white',
                          color: answers[q.id]?.value === opt.value ? 'white' : '#2D3748',
                          border: '2px solid #E8B4F0',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          textAlign: 'left',
                          fontSize: '15px',
                          fontWeight: answers[q.id]?.value === opt.value ? '600' : '400',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {answers[q.id]?.value === opt.value && '✓ '}
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {allAnswered && (
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                  <button
                    onClick={() => setShowResults(true)}
                    className="btn btn-primary glow-pulse heartbeat-strong"
                    style={{ fontSize: '18px', padding: '15px 40px' }}
                  >
                    Calculate Compatibility 💙
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="fade-in">
              <div style={{
                background: `linear-gradient(135deg, ${result.color}, #E8B4F0)`,
                padding: '50px 30px',
                borderRadius: '20px',
                textAlign: 'center',
                marginBottom: '30px',
                color: 'white'
              }}>
                <div style={{ fontSize: '80px', marginBottom: '20px' }}>
                  {compatibilityScore >= 90 ? '🌟' : compatibilityScore >= 75 ? '💙' : compatibilityScore >= 60 ? '💫' : '🌱'}
                </div>
                <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>
                  {result.title}
                </h2>
                <div style={{ 
                  fontSize: '72px', 
                  fontWeight: 'bold',
                  margin: '20px 0',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                }}>
                  {compatibilityScore}%
                </div>
                <p style={{ fontSize: '14px', opacity: 0.95 }}>
                  Compatibility Score
                </p>
              </div>

              <div style={{
                background: 'white',
                padding: '30px',
                borderRadius: '15px',
                marginBottom: '25px',
                border: '3px solid #E8B4F0'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '15px', textAlign: 'center' }}>
                  What This Means:
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#2D3748', textAlign: 'center' }}>
                  {result.message}
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #FFF8F0, #E8B4F0)',
                padding: '30px',
                borderRadius: '15px',
                marginBottom: '25px'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '20px' }}>
                  🎯 Key Strengths Based on Your Answers:
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2' }}>
                  <li style={{ fontSize: '15px', color: '#2D3748' }}>
                    💙 Strong values alignment on faith and spirituality
                  </li>
                  <li style={{ fontSize: '15px', color: '#2D3748' }}>
                    💬 Healthy approach to communication
                  </li>
                  <li style={{ fontSize: '15px', color: '#2D3748' }}>
                    🎯 Shared vision for meaningful relationships
                  </li>
                  <li style={{ fontSize: '15px', color: '#2D3748' }}>
                    ⏰ Prioritizes quality connection over surface interaction
                  </li>
                  <li style={{ fontSize: '15px', color: '#2D3748' }}>
                    🙏 Seeks God's guidance in important decisions
                  </li>
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
                  💡 <strong>Remember:</strong> Compatibility is just one piece of the puzzle. 
                  What truly matters is mutual respect, open communication, shared faith, 
                  and the willingness to grow together. Every great relationship is built, not found. 💙
                </p>
              </div>

              <div style={{ textAlign: 'center', marginTop: '25px' }}>
                <button
                  onClick={() => { setAnswers({}); setShowResults(false); }}
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
