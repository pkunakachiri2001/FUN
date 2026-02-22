import { useState } from 'react';

export default function FriendshipQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What matters most in a relationship to you?",
      options: [
        { text: "Shared faith and values", points: 10, response: "We both put God first! 🙏" },
        { text: "Physical proximity", points: 8, response: "We're literally on the same campus! 📍" },
        { text: "Emotional connection", points: 9, response: "Our conversations always feel natural 💭" },
        { text: "Long-term compatibility", points: 10, response: "We're both growing in the same season of life 🌱" }
      ]
    },
    {
      id: 2,
      question: "How do you prefer to resolve conflicts?",
      options: [
        { text: "Face-to-face conversation", points: 10, response: "I'm always here to talk in person! 😊" },
        { text: "Give each other space first", points: 8, response: "I respect your need for space 🤝" },
        { text: "Prayer and reflection", points: 10, response: "We can pray through challenges together 🙏" },
        { text: "Writing out feelings", points: 7, response: "I'll always listen, however you communicate 💙" }
      ]
    },
    {
      id: 3,
      question: "What's your ideal first date?",
      options: [
        { text: "Coffee and deep conversation", points: 10, response: "Campus café tomorrow? ☕" },
        { text: "Church service together", points: 10, response: "Sunday worship sounds perfect ⛪" },
        { text: "Outdoor walk in nature", points: 9, response: "Campus has beautiful walking paths! 🌳" },
        { text: "Group activity with friends", points: 10, response: "Safe, fun, and your comfort first! 🎉" }
      ]
    },
    {
      id: 4,
      question: "What role does faith play in your dating life?",
      options: [
        { text: "It's the foundation of everything", points: 10, response: "Same here - God first, always! 🙏💙" },
        { text: "Very important but not controlling", points: 9, response: "Guided by faith, not legalism ✨" },
        { text: "Important for major decisions", points: 8, response: "Let's seek God's will together 🕊️" },
        { text: "It's personal and private", points: 7, response: "I respect your private relationship with God 💭" }
      ]
    },
    {
      id: 5,
      question: "How important is physical proximity in a relationship?",
      options: [
        { text: "Very important - presence matters", points: 10, response: "Exactly! I'm right here! 📍" },
        { text: "Somewhat important", points: 7, response: "Fair, but why choose distance when I'm here? 🤔" },
        { text: "Not very important - love overcomes distance", points: 5, response: "True, but proximity sure helps! 💙" },
        { text: "Depends on the situation", points: 8, response: "Fair point - let's talk about our situation 😊" }
      ]
    },
    {
      id: 6,
      question: "What makes you feel most loved?",
      options: [
        { text: "Quality time together", points: 10, response: "We can have that daily! ⏰" },
        { text: "Words of affirmation", points: 9, response: "I'll remind you how amazing you are every day ✨" },
        { text: "Acts of service", points: 9, response: "Let me help with your assignments anytime! 📚" },
        { text: "Physical touch (hugs, etc.)", points: 10, response: "I can be there for hugs when you need them 🤗" }
      ]
    },
    {
      id: 7,
      question: "Where do you see yourself in 5 years?",
      options: [
        { text: "Married with strong faith", points: 10, response: "Beautiful vision - I'd love to support that 💍" },
        { text: "Successful career first", points: 8, response: "I'll cheer you on through every milestone! 📈" },
        { text: "Serving in ministry", points: 10, response: "We could serve alongside each other 🙏" },
        { text: "Still figuring it out", points: 9, response: "Let's figure it out together 🧩" }
      ]
    },
    {
      id: 8,
      question: "What would make you consider ending your current relationship?",
      options: [
        { text: "Lack of spiritual alignment", points: 8, response: "We share the same faith foundation 🙏" },
        { text: "Distance becoming too difficult", points: 10, response: "I'm literally steps away, not states away 👣" },
        { text: "Someone better suited nearby", points: 10, response: "*raises hand* Maybe I'm that someone? 😊" },
        { text: "Feeling neglected or alone", points: 10, response: "You'd never feel alone with me on campus 💙" }
      ]
    }
  ];

  const handleAnswer = (option) => {
    const newAnswers = [...answers, { question: currentQuestion, option, response: option.response }];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const getTotalScore = () => {
    return answers.reduce((sum, answer) => sum + answer.option.points, 0);
  };

  if (showResults) {
    const totalScore = getTotalScore();
    const maxScore = questions.length * 10;
    const percentage = Math.round((totalScore / maxScore) * 100);

    return (
      <div className="container">
        <div className="card fade-in">
          <h2 className="card-title">✨ Quiz Results</h2>
          <div className="card-content">
            <div style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              padding: '40px',
              borderRadius: '20px',
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              <div style={{ fontSize: '72px', marginBottom: '20px' }}>💙</div>
              <h3 style={{ fontSize: '32px', marginBottom: '15px' }}>
                {percentage}% Compatibility!
              </h3>
              <p style={{ fontSize: '18px', opacity: 0.95 }}>
                {percentage >= 90 && "We're incredibly aligned! 🎉"}
                {percentage >= 75 && percentage < 90 && "Strong potential here! 💫"}
                {percentage >= 60 && percentage < 75 && "We have great foundation! ✨"}
                {percentage < 60 && "Every relationship takes work - I'm willing! 💪"}
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ color: '#667eea', marginBottom: '20px' }}>Your Answers & My Responses:</h3>
              {answers.map((answer, idx) => (
                <div key={idx} style={{
                  background: '#FFF8F0',
                  padding: '20px',
                  borderRadius: '15px',
                  marginBottom: '15px',
                  borderLeft: '4px solid #667eea'
                }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '10px', color: '#2D3748' }}>
                    Q{idx + 1}: {questions[idx].question}
                  </p>
                  <p style={{ color: '#764ba2', marginBottom: '8px' }}>
                    ✓ Your answer: {answer.option.text}
                  </p>
                  <p style={{ color: '#667eea', fontStyle: 'italic', fontSize: '15px' }}>
                    💙 {answer.response}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #E8B4F0, #FFF8F0)',
              padding: '30px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '20px', color: '#667eea', fontWeight: 'bold', marginBottom: '15px' }}>
                The Bottom Line...
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#2D3748' }}>
                Based on your answers, we share {percentage}% alignment in values, preferences, and vision. 
                That's more than just coincidence - that's compatibility! 💙
              </p>
              <p style={{ fontSize: '15px', marginTop: '15px', fontStyle: 'italic', color: '#764ba2' }}>
                "And what if God placed us on the same campus for this very reason?" 🙏
              </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button className="btn btn-primary" onClick={restartQuiz}>
                Take Quiz Again 🔄
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="container">
      <div className="card fade-in">
        <h2 className="card-title">🎮 Friendship & Compatibility Quiz</h2>
        <div className="card-content">
          <div style={{
            background: 'linear-gradient(135deg, #FFF8F0, #E8B4F0)',
            padding: '15px',
            borderRadius: '10px',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '14px', color: '#667eea', fontWeight: 'bold' }}>
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <div style={{
              background: '#667eea',
              height: '8px',
              borderRadius: '4px',
              marginTop: '10px',
              overflow: 'hidden'
            }}>
              <div style={{
                background: 'white',
                height: '100%',
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>

          <h3 style={{
            fontSize: '22px',
            color: '#2D3748',
            marginBottom: '30px',
            textAlign: 'center',
            lineHeight: '1.5'
          }}>
            {question.question}
          </h3>

          <div style={{ display: 'grid', gap: '15px' }}>
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                style={{
                  padding: '20px',
                  background: 'white',
                  border: '2px solid #667eea',
                  borderRadius: '15px',
                  fontSize: '16px',
                  color: '#2D3748',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = '#2D3748';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                {String.fromCharCode(65 + idx)}. {option.text}
              </button>
            ))}
          </div>

          <p style={{
            textAlign: 'center',
            marginTop: '30px',
            fontSize: '14px',
            color: '#718096',
            fontStyle: 'italic'
          }}>
            💡 Answer honestly - I want to know the real you! 💙
          </p>
        </div>
      </div>
    </div>
  );
}
