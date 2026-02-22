import { useState, useEffect } from 'react';

export default function DailyChallenges() {
  const [currentDay, setCurrentDay] = useState(1);
  const [completedDays, setCompletedDays] = useState([]);
  const [answer, setAnswer] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  const challenges = [
    {
      day: 1,
      title: "What Makes You Smile?",
      prompt: "Share three things that never fail to make you smile.",
      icon: "😊",
      reflection: "Understanding what brings joy helps us support each other better."
    },
    {
      day: 2,
      title: "Your Faith Story",
      prompt: "How did you come to faith? What does your spiritual journey look like?",
      icon: "🙏",
      reflection: "Shared spiritual foundation is the cornerstone of meaningful relationships."
    },
    {
      day: 3,
      title: "Dream Destination",
      prompt: "If you could travel anywhere, where would you go and why?",
      icon: "✈️",
      reflection: "Dreams reveal our values and what we consider meaningful."
    },
    {
      day: 4,
      title: "Ideal Weekend",
      prompt: "Describe your perfect Saturday—from morning to night.",
      icon: "☀️",
      reflection: "Lifestyle compatibility matters for building a life together."
    },
    {
      day: 5,
      title: "Biggest Fear",
      prompt: "What's something you worry about? What brings you anxiety?",
      icon: "💭",
      reflection: "Vulnerability creates deeper connection and trust."
    },
    {
      day: 6,
      title: "Role Model",
      prompt: "Who do you admire most and why? What qualities inspire you?",
      icon: "⭐",
      reflection: "The people we admire show who we aspire to become."
    },
    {
      day: 7,
      title: "Love Language",
      prompt: "How do you prefer to receive love? What makes you feel most valued?",
      icon: "💙",
      reflection: "Understanding love languages prevents misunderstandings."
    },
    {
      day: 8,
      title: "Childhood Memory",
      prompt: "Share a favorite memory from growing up that shaped who you are today.",
      icon: "👶",
      reflection: "Our past experiences explain our present perspectives."
    },
    {
      day: 9,
      title: "Career Dreams",
      prompt: "Where do you see yourself in 5 years? What are your professional goals?",
      icon: "🎯",
      reflection: "Aligned ambitions create partnership, not competition."
    },
    {
      day: 10,
      title: "Deal Breakers",
      prompt: "What are your non-negotiables in a relationship?",
      icon: "🚫",
      reflection: "Knowing boundaries prevents future heartbreak."
    },
    {
      day: 11,
      title: "Perfect Date",
      prompt: "Describe your ideal date. What would make it memorable?",
      icon: "💕",
      reflection: "Romance looks different to everyone—understanding preferences matters."
    },
    {
      day: 12,
      title: "Conflict Style",
      prompt: "How do you handle disagreements? What helps you resolve conflicts?",
      icon: "🤝",
      reflection: "How we fight matters more than whether we fight."
    },
    {
      day: 13,
      title: "Family Vision",
      prompt: "What does family mean to you? What kind of family do you hope to build?",
      icon: "👨‍👩‍👧‍👦",
      reflection: "Family visions must align for long-term compatibility."
    },
    {
      day: 14,
      title: "Hidden Talent",
      prompt: "What's something you're good at that most people don't know about?",
      icon: "🎨",
      reflection: "Discovering hidden depths keeps relationships exciting."
    },
    {
      day: 15,
      title: "Stress Relief",
      prompt: "When life gets overwhelming, what helps you cope? How do you recharge?",
      icon: "🌊",
      reflection: "Supporting each other during stress requires understanding these needs."
    },
    {
      day: 16,
      title: "Life Lessons",
      prompt: "What's the most important lesson life has taught you so far?",
      icon: "📚",
      reflection: "Our lessons shape our wisdom and perspective."
    },
    {
      day: 17,
      title: "Acts of Service",
      prompt: "What's a thoughtful gesture that would mean the world to you?",
      icon: "🎁",
      reflection: "Small acts of love create big impacts."
    },
    {
      day: 18,
      title: "Spiritual Goals",
      prompt: "What spiritual goals or habits do you want to develop?",
      icon: "✝️",
      reflection: "Growing together spiritually strengthens every other aspect."
    },
    {
      day: 19,
      title: "Friendship Philosophy",
      prompt: "What makes someone a good friend? What do you value in friendships?",
      icon: "👥",
      reflection: "The best relationships start with strong friendship."
    },
    {
      day: 20,
      title: "Music & Meaning",
      prompt: "What song speaks to your soul? Why does it resonate with you?",
      icon: "🎵",
      reflection: "Music reveals emotions words sometimes can't express."
    },
    {
      day: 21,
      title: "Proud Achievement",
      prompt: "What's something you're really proud of accomplishing?",
      icon: "🏆",
      reflection: "Celebrating each other's wins builds encouragement."
    },
    {
      day: 22,
      title: "Comfort Food & Why",
      prompt: "What's your comfort food and what memories are attached to it?",
      icon: "🍕",
      reflection: "Food connects to memory, culture, and emotional comfort."
    },
    {
      day: 23,
      title: "Growth Area",
      prompt: "What's an area where you're actively working to improve?",
      icon: "🌱",
      reflection: "Self-awareness and growth mindset are attractive qualities."
    },
    {
      day: 24,
      title: "Quality Time",
      prompt: "How do you like to spend quality time with people you care about?",
      icon: "⏰",
      reflection: "Quality time looks different to everyone—understanding this prevents disconnection."
    },
    {
      day: 25,
      title: "Words Matter",
      prompt: "What's a compliment or encouragement that would uplift you today?",
      icon: "💬",
      reflection: "Knowing how to encourage each other is powerful."
    },
    {
      day: 26,
      title: "Spontaneity vs Planning",
      prompt: "Are you more spontaneous or do you prefer planning? Why?",
      icon: "🎲",
      reflection: "Understanding this balance helps coordinate expectations."
    },
    {
      day: 27,
      title: "Core Values",
      prompt: "What are your top 3 core values that guide your decisions?",
      icon: "🧭",
      reflection: "Shared values create alignment and understanding."
    },
    {
      day: 28,
      title: "Forgiveness & Grace",
      prompt: "How do you approach forgiveness? What does grace look like to you?",
      icon: "🕊️",
      reflection: "Every relationship needs grace and forgiveness to thrive."
    },
    {
      day: 29,
      title: "The Little Things",
      prompt: "What small gestures or details do you notice and appreciate?",
      icon: "✨",
      reflection: "Paying attention to small things shows genuine care."
    },
    {
      day: 30,
      title: "Relationship Vision",
      prompt: "What does a healthy, God-honoring relationship look like to you?",
      icon: "💙",
      reflection: "Having a shared vision creates direction and purpose."
    }
  ];

  useEffect(() => {
    // Load completed days from localStorage
    const saved = localStorage.getItem('completedChallenges');
    if (saved) {
      setCompletedDays(JSON.parse(saved));
    }
  }, []);

  const handleComplete = () => {
    if (answer.trim()) {
      const newCompleted = [...completedDays, currentDay];
      setCompletedDays(newCompleted);
      localStorage.setItem('completedChallenges', JSON.stringify(newCompleted));
      localStorage.setItem(`challenge_${currentDay}_answer`, answer);
      setAnswer('');
      setShowCompleted(true);
      
      setTimeout(() => {
        setShowCompleted(false);
        if (currentDay < 30) {
          setCurrentDay(currentDay + 1);
        }
      }, 2000);
    }
  };

  const goToDay = (day) => {
    setCurrentDay(day);
    setShowCompleted(false);
    const savedAnswer = localStorage.getItem(`challenge_${day}_answer`);
    if (savedAnswer) {
      setAnswer(savedAnswer);
    } else {
      setAnswer('');
    }
  };

  const currentChallenge = challenges[currentDay - 1];
  const progress = Math.round((completedDays.length / 30) * 100);

  return (
    <div className="container">
      <div className="card scale-in">
        <h2 className="card-title">🎮 30-Day Connection Challenge</h2>
        <div className="card-content">
          <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px', color: '#667eea', lineHeight: '1.8' }}>
            One question a day, thirty days of deeper understanding. 
            Answer honestly—these aren't just questions, they're conversations waiting to happen. 💙
          </p>

          {/* Progress Bar */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            marginBottom: '30px',
            border: '3px solid #E8B4F0'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#667eea' }}>
                Your Progress
              </span>
              <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#764ba2' }}>
                {completedDays.length}/30 Days
              </span>
            </div>
            <div style={{
              background: '#E8B4F0',
              height: '25px',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                height: '100%',
                width: `${progress}%`,
                transition: 'width 0.5s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {progress > 5 && `${progress}%`}
              </div>
            </div>
          </div>

          {showCompleted ? (
            <div className="fade-in" style={{
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              padding: '60px 30px',
              borderRadius: '20px',
              textAlign: 'center',
              animation: 'fadeIn 0.5s ease'
            }}>
              <div style={{ fontSize: '80px', marginBottom: '20px' }}>✓</div>
              <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>Day {currentDay} Complete!</h2>
              <p style={{ fontSize: '16px', marginTop: '15px', opacity: 0.95 }}>
                One day closer to deeper connection 💙
              </p>
            </div>
          ) : (
            <>
              {/* Current Challenge */}
              <div style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                padding: '40px',
                borderRadius: '20px',
                marginBottom: '30px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '60px', marginBottom: '15px' }}>
                  {currentChallenge.icon}
                </div>
                <div style={{
                  background: 'rgba(255,255,255,0.3)',
                  display: 'inline-block',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginBottom: '20px'
                }}>
                  Day {currentDay} of 30
                </div>
                <h2 style={{ fontSize: '28px', marginBottom: '15px', fontWeight: 'bold' }}>
                  {currentChallenge.title}
                </h2>
                <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  {currentChallenge.prompt}
                </p>
              </div>

              {/* Answer Area */}
              <div style={{
                background: 'white',
                padding: '30px',
                borderRadius: '15px',
                marginBottom: '25px',
                border: '3px solid #E8B4F0'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '15px' }}>Your Answer:</h3>
                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Share your thoughts here..."
                  style={{
                    width: '100%',
                    minHeight: '150px',
                    padding: '15px',
                    fontSize: '15px',
                    border: '2px solid #E8B4F0',
                    borderRadius: '10px',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
                <button
                  onClick={handleComplete}
                  disabled={!answer.trim()}
                  className="btn btn-primary"
                  style={{
                    marginTop: '20px',
                    width: '100%',
                    padding: '15px',
                    fontSize: '16px',
                    opacity: answer.trim() ? 1 : 0.5,
                    cursor: answer.trim() ? 'pointer' : 'not-allowed'
                  }}
                >
                  {completedDays.includes(currentDay) ? 'Update Answer ✓' : 'Complete Day ' + currentDay}
                </button>
              </div>

              {/* Reflection */}
              <div style={{
                background: 'linear-gradient(135deg, #FFF8F0, #E8B4F0)',
                padding: '25px',
                borderRadius: '15px',
                marginBottom: '30px',
                fontStyle: 'italic',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '15px', color: '#764ba2', lineHeight: '1.8' }}>
                  💭 <strong>Why This Matters:</strong> {currentChallenge.reflection}
                </p>
              </div>
            </>
          )}

          {/* Day Selector */}
          <div>
            <h3 style={{ color: '#667eea', marginBottom: '20px', textAlign: 'center' }}>
              Jump to Any Day
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
              gap: '10px'
            }}>
              {challenges.map((_, idx) => {
                const day = idx + 1;
                const isCompleted = completedDays.includes(day);
                const isCurrent = day === currentDay;
                
                return (
                  <button
                    key={day}
                    onClick={() => goToDay(day)}
                    style={{
                      padding: '15px',
                      background: isCurrent 
                        ? 'linear-gradient(135deg, #667eea, #764ba2)'
                        : isCompleted 
                        ? 'linear-gradient(135deg, #10b981, #059669)'
                        : 'white',
                      color: isCurrent || isCompleted ? 'white' : '#667eea',
                      border: isCurrent || isCompleted ? 'none' : '2px solid #E8B4F0',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {isCompleted ? '✓' : day}
                  </button>
                );
              })}
            </div>
          </div>

          {completedDays.length >= 10 && (
            <div style={{
              marginTop: '30px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              padding: '25px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                🎉 {completedDays.length} days completed!
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
                You're building something meaningful—one question, one answer, one day at a time. 
                {completedDays.length === 30 && " You did it! 30 days of intentional connection! 💙"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
