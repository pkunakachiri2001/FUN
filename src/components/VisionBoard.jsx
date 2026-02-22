import { useState } from 'react';

export default function VisionBoard() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const visionCategories = [
    {
      id: 'spiritual',
      title: '🙏 Spiritual Growth',
      icon: '✝️',
      dreams: [
        "Pray together daily",
        "Serve in ministry together",
        "Attend Bible study as a couple",
        "Support each other's faith journey",
        "Fast and worship together",
        "Encourage spiritual accountability"
      ],
      color: '#667eea'
    },
    {
      id: 'academic',
      title: '📚 Academic Excellence',
      icon: '🎓',
      dreams: [
        "Study sessions at the library",
        "Motivate each other during exams",
        "Celebrate academic achievements",
        "Share knowledge and help with assignments",
        "Encourage graduate school dreams",
        "Build professional networks together"
      ],
      color: '#764ba2'
    },
    {
      id: 'adventure',
      title: '🌍 Adventures',
      icon: '✈️',
      dreams: [
        "Explore new places together",
        "Try new restaurants and cafes",
        "Weekend road trips",
        "Discover hidden gems in the city",
        "Create bucket list experiences",
        "Document memories together"
      ],
      color: '#10b981'
    },
    {
      id: 'growth',
      title: '🌱 Personal Growth',
      icon: '💪',
      dreams: [
        "Challenge each other to be better",
        "Set and achieve goals together",
        "Learn new skills as a team",
        "Encourage healthy habits",
        "Support career aspirations",
        "Grow in emotional intelligence"
      ],
      color: '#f59e0b'
    },
    {
      id: 'connection',
      title: '💙 Deep Connection',
      icon: '💬',
      dreams: [
        "Have meaningful conversations daily",
        "Understand each other's dreams",
        "Build inside jokes and memories",
        "Create traditions together",
        "Be each other's best friend",
        "Communicate openly and honestly"
      ],
      color: '#E8B4F0'
    },
    {
      id: 'service',
      title: '🤝 Service Together',
      icon: '❤️',
      dreams: [
        "Volunteer for meaningful causes",
        "Impact campus community positively",
        "Mentor younger students",
        "Serve in church ministries",
        "Give back to those in need",
        "Make a difference together"
      ],
      color: '#ec4899'
    },
    {
      id: 'fun',
      title: '🎉 Fun & Laughter',
      icon: '😊',
      dreams: [
        "Game nights with friends",
        "Movie marathons",
        "Campus events together",
        "Try new hobbies",
        "Spontaneous adventures",
        "Never stop laughing together"
      ],
      color: '#8b5cf6'
    },
    {
      id: 'future',
      title: '✨ Future Plans',
      icon: '🏡',
      dreams: [
        "Support each other's career goals",
        "Plan life after graduation together",
        "Build strong family foundation",
        "Create shared financial goals",
        "Dream about the future",
        "Make plans that honor God"
      ],
      color: '#06b6d4'
    }
  ];

  const toggleCategory = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  return (
    <div className="container">
      <div className="card scale-in">
        <h2 className="card-title">🌟 Vision Board: What Could Be</h2>
        <div className="card-content">
          <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px', color: '#667eea', lineHeight: '1.8' }}>
            Sometimes it helps to visualize possibilities. Click categories to explore 
            what a meaningful relationship could look like. Nothing is set in stone—
            this is just dreaming out loud. ✨
          </p>

          <div style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            padding: '20px',
            borderRadius: '15px',
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <p style={{ fontSize: '16px' }}>
              💭 <strong>Tap any category</strong> to see what that area could look like together
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            {visionCategories.map(category => (
              <div
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                style={{
                  background: selectedCategories.includes(category.id)
                    ? `linear-gradient(135deg, ${category.color}, #E8B4F0)`
                    : 'white',
                  border: `3px solid ${category.color}`,
                  borderRadius: '15px',
                  padding: '25px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  color: selectedCategories.includes(category.id) ? 'white' : '#2D3748',
                  transform: selectedCategories.includes(category.id) ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '10px', textAlign: 'center' }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '18px', marginBottom: '10px', textAlign: 'center', fontWeight: 'bold' }}>
                  {category.title}
                </h3>
                <p style={{ fontSize: '13px', textAlign: 'center', opacity: 0.9 }}>
                  {selectedCategories.includes(category.id) ? 'Tap to hide' : 'Tap to explore'}
                </p>
              </div>
            ))}
          </div>

          {selectedCategories.length > 0 && (
            <div className="fade-in" style={{ marginTop: '40px' }}>
              <h3 style={{ color: '#667eea', marginBottom: '25px', textAlign: 'center', fontSize: '22px' }}>
                💙 Selected Dreams & Possibilities
              </h3>
              
              {visionCategories
                .filter(cat => selectedCategories.includes(cat.id))
                .map((category, idx) => (
                  <div
                    key={category.id}
                    className={idx % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                    style={{
                      background: `linear-gradient(135deg, ${category.color}, #E8B4F0)`,
                      padding: '30px',
                      borderRadius: '15px',
                      marginBottom: '20px',
                      color: 'white'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                      <span style={{ fontSize: '40px' }}>{category.icon}</span>
                      <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>{category.title}</h3>
                    </div>
                    
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2' }}>
                      {category.dreams.map((dream, dreamIdx) => (
                        <li key={dreamIdx} style={{ fontSize: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ fontSize: '20px' }}>✓</span>
                          {dream}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          )}

          <div style={{
            marginTop: '40px',
            background: 'linear-gradient(135deg, #FFF8F0, white)',
            padding: '30px',
            borderRadius: '15px',
            border: '3px solid #E8B4F0',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#2D3748', marginBottom: '15px' }}>
              <strong style={{ color: '#667eea' }}>Remember:</strong> These aren't demands or expectations—
              they're just possibilities. The beauty of a relationship is creating your own unique vision together.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#667eea', fontStyle: 'italic' }}>
              💭 "The best relationships are built on shared dreams and mutual support." 💙
            </p>
          </div>

          {selectedCategories.length >= 3 && (
            <div style={{
              marginTop: '25px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              padding: '25px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                ✨ {selectedCategories.length} areas selected!
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
                Imagining this many shared dreams? That's a beautiful vision of what could be. 
                When two people align on values and dreams, magic happens. 💙
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
