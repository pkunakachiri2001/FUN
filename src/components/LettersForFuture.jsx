import { useState, useEffect } from 'react';

export default function LettersForFuture() {
  const [letters, setLetters] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newLetter, setNewLetter] = useState({
    occasion: '',
    message: '',
    created: new Date().toISOString()
  });
  const [selectedLetter, setSelectedLetter] = useState(null);

  const occasions = [
    {
      value: 'doubt',
      label: 'When You Have Doubts',
      icon: '💭',
      color: '#667eea',
      description: 'For moments when uncertainty clouds your heart'
    },
    {
      value: 'happy',
      label: 'On a Happy Day',
      icon: '☀️',
      color: '#f59e0b',
      description: 'For celebrating joyful moments together'
    },
    {
      value: 'hard',
      label: 'During Hard Times',
      icon: '🌧️',
      color: '#6366f1',
      description: 'For when life feels overwhelming'
    },
    {
      value: 'anniversary',
      label: 'Our First Month',
      icon: '🎉',
      color: '#ec4899',
      description: 'To celebrate the milestone together'
    },
    {
      value: 'prayer',
      label: 'When You Need Prayer',
      icon: '🙏',
      color: '#8b5cf6',
      description: 'For spiritual encouragement and intercession'
    },
    {
      value: 'missing',
      label: 'When We\'re Apart',
      icon: '💙',
      color: '#3b82f6',
      description: 'For distance and separation moments'
    },
    {
      value: 'growth',
      label: 'Celebrating Your Growth',
      icon: '🌱',
      color: '#10b981',
      description: 'Recognizing progress and development'
    },
    {
      value: 'future',
      label: 'Looking to the Future',
      icon: '✨',
      color: '#764ba2',
      description: 'Dreams, hopes, and what could be'
    }
  ];

  useEffect(() => {
    const saved = localStorage.getItem('futureLetters');
    if (saved) {
      setLetters(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newLetter.message.trim() && newLetter.occasion) {
      const letterToSave = {
        ...newLetter,
        id: Date.now(),
        opened: false
      };
      const updatedLetters = [...letters, letterToSave];
      setLetters(updatedLetters);
      localStorage.setItem('futureLetters', JSON.stringify(updatedLetters));
      setNewLetter({ occasion: '', message: '', created: new Date().toISOString() });
      setShowForm(false);
    }
  };

  const openLetter = (letter) => {
    const updatedLetters = letters.map(l => 
      l.id === letter.id ? { ...l, opened: true, openedDate: new Date().toISOString() } : l
    );
    setLetters(updatedLetters);
    localStorage.setItem('futureLetters', JSON.stringify(updatedLetters));
    setSelectedLetter({ ...letter, opened: true });
  };

  const deleteLetter = (letterId) => {
    const updatedLetters = letters.filter(l => l.id !== letterId);
    setLetters(updatedLetters);
    localStorage.setItem('futureLetters', JSON.stringify(updatedLetters));
    setSelectedLetter(null);
  };

  const getOccasionDetails = (occasionValue) => {
    return occasions.find(o => o.value === occasionValue) || occasions[0];
  };

  const unopenedCount = letters.filter(l => !l.opened).length;
  const openedCount = letters.filter(l => l.opened).length;

  return (
    <div className="container">
      <div className="card scale-in">
        <h2 className="card-title">💌 Letters for the Future</h2>
        <div className="card-content">
          <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px', color: '#667eea', lineHeight: '1.8' }}>
            Write messages for different moments in time. These letters are for future occasions—
            celebrations, struggles, doubts, or victories. When the right moment comes, they'll be waiting. 💙
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '15px',
            marginBottom: '30px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              padding: '25px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{unopenedCount}</div>
              <div style={{ fontSize: '14px', opacity: 0.9 }}>Sealed Letters</div>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              padding: '25px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{openedCount}</div>
              <div style={{ fontSize: '14px', opacity: 0.9 }}>Letters Read</div>
            </div>
          </div>

          {/* Write New Letter Button */}
          {!showForm && !selectedLetter && (
            <button
              onClick={() => setShowForm(true)}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '20px',
                fontSize: '18px',
                marginBottom: '30px'
              }}
            >
              ✍️ Write a New Letter
            </button>
          )}

          {/* Letter Form */}
          {showForm && (
            <div className="fade-in" style={{
              background: 'white',
              padding: '30px',
              borderRadius: '20px',
              marginBottom: '30px',
              border: '3px solid #E8B4F0'
            }}>
              <h3 style={{ color: '#667eea', marginBottom: '25px' }}>Write Your Letter</h3>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', marginBottom: '15px', color: '#764ba2', fontWeight: 'bold' }}>
                    For What Occasion?
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                    {occasions.map((occ) => (
                      <button
                        key={occ.value}
                        type="button"
                        onClick={() => setNewLetter({ ...newLetter, occasion: occ.value })}
                        style={{
                          padding: '15px',
                          background: newLetter.occasion === occ.value 
                            ? occ.color
                            : 'white',
                          color: newLetter.occasion === occ.value ? 'white' : occ.color,
                          border: `2px solid ${occ.color}`,
                          borderRadius: '10px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          transition: 'all 0.3s ease',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ fontSize: '24px', marginBottom: '5px' }}>{occ.icon}</div>
                        <div>{occ.label}</div>
                      </button>
                    ))}
                  </div>
                  {newLetter.occasion && (
                    <p style={{ 
                      marginTop: '15px', 
                      fontSize: '14px', 
                      color: '#667eea',
                      fontStyle: 'italic'
                    }}>
                      {getOccasionDetails(newLetter.occasion).description}
                    </p>
                  )}
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', marginBottom: '10px', color: '#764ba2', fontWeight: 'bold' }}>
                    Your Message:
                  </label>
                  <textarea
                    value={newLetter.message}
                    onChange={(e) => setNewLetter({ ...newLetter, message: e.target.value })}
                    placeholder="Write from your heart. This message will wait for the perfect moment..."
                    style={{
                      width: '100%',
                      minHeight: '200px',
                      padding: '15px',
                      fontSize: '15px',
                      border: '2px solid #E8B4F0',
                      borderRadius: '10px',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '15px' }}>
                  <button
                    type="submit"
                    disabled={!newLetter.occasion || !newLetter.message.trim()}
                    className="btn btn-primary"
                    style={{
                      flex: 1,
                      padding: '15px',
                      opacity: (newLetter.occasion && newLetter.message.trim()) ? 1 : 0.5,
                      cursor: (newLetter.occasion && newLetter.message.trim()) ? 'pointer' : 'not-allowed'
                    }}
                  >
                    💌 Seal the Letter
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setNewLetter({ occasion: '', message: '', created: new Date().toISOString() });
                    }}
                    className="btn"
                    style={{
                      flex: 1,
                      padding: '15px',
                      background: '#e5e7eb',
                      color: '#374151'
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Selected Letter View */}
          {selectedLetter && (
            <div className="fade-in" style={{
              background: 'white',
              padding: '40px',
              borderRadius: '20px',
              marginBottom: '30px',
              border: `3px solid ${getOccasionDetails(selectedLetter.occasion).color}`
            }}>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ fontSize: '60px', marginBottom: '15px' }}>
                  {getOccasionDetails(selectedLetter.occasion).icon}
                </div>
                <h3 style={{ 
                  color: getOccasionDetails(selectedLetter.occasion).color,
                  fontSize: '24px',
                  marginBottom: '10px'
                }}>
                  {getOccasionDetails(selectedLetter.occasion).label}
                </h3>
                <p style={{ fontSize: '13px', color: '#9ca3af' }}>
                  Written on {new Date(selectedLetter.created).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </p>
                {selectedLetter.openedDate && (
                  <p style={{ fontSize: '13px', color: '#9ca3af' }}>
                    Opened on {new Date(selectedLetter.openedDate).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </p>
                )}
              </div>

              <div style={{
                background: '#f9fafb',
                padding: '25px',
                borderRadius: '15px',
                marginBottom: '25px',
                lineHeight: '1.8',
                fontSize: '16px',
                color: '#374151',
                whiteSpace: 'pre-wrap'
              }}>
                {selectedLetter.message}
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <button
                  onClick={() => setSelectedLetter(null)}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '15px' }}
                >
                  ← Back to Letters
                </button>
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to delete this letter? This cannot be undone.')) {
                      deleteLetter(selectedLetter.id);
                    }
                  }}
                  className="btn"
                  style={{
                    flex: 1,
                    padding: '15px',
                    background: '#ef4444',
                    color: 'white'
                  }}
                >
                  Delete Letter
                </button>
              </div>
            </div>
          )}

          {/* Letters Grid */}
          {!showForm && !selectedLetter && letters.length > 0 && (
            <div>
              <h3 style={{ color: '#667eea', marginBottom: '20px' }}>Your Letter Collection</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px'
              }}>
                {letters.map((letter) => {
                  const occasionDetails = getOccasionDetails(letter.occasion);
                  return (
                    <div
                      key={letter.id}
                      onClick={() => openLetter(letter)}
                      style={{
                        background: letter.opened 
                          ? 'linear-gradient(135deg, #f3f4f6, #e5e7eb)'
                          : `linear-gradient(135deg, ${occasionDetails.color}15, ${occasionDetails.color}30)`,
                        padding: '25px',
                        borderRadius: '15px',
                        cursor: 'pointer',
                        border: `3px solid ${occasionDetails.color}`,
                        transition: 'all 0.3s ease',
                        position: 'relative'
                      }}
                      className="hover-lift"
                    >
                      {!letter.opened && (
                        <div style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          background: occasionDetails.color,
                          color: 'white',
                          padding: '5px 12px',
                          borderRadius: '20px',
                          fontSize: '11px',
                          fontWeight: 'bold'
                        }}>
                          SEALED
                        </div>
                      )}
                      <div style={{ 
                        fontSize: '40px', 
                        marginBottom: '15px',
                        opacity: letter.opened ? 0.5 : 1
                      }}>
                        {occasionDetails.icon}
                      </div>
                      <h4 style={{ 
                        color: occasionDetails.color, 
                        marginBottom: '10px',
                        fontSize: '16px',
                        fontWeight: 'bold'
                      }}>
                        {occasionDetails.label}
                      </h4>
                      <p style={{ 
                        fontSize: '13px', 
                        color: '#6b7280',
                        marginBottom: '10px'
                      }}>
                        {new Date(letter.created).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                      <p style={{ 
                        fontSize: '14px', 
                        color: letter.opened ? '#9ca3af' : occasionDetails.color,
                        fontStyle: 'italic'
                      }}>
                        {letter.opened ? 'Opened & Read' : 'Click to open →'}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {!showForm && !selectedLetter && letters.length === 0 && (
            <div style={{
              background: 'linear-gradient(135deg, #FFF8F0, #E8B4F0)',
              padding: '50px 30px',
              borderRadius: '20px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '80px', marginBottom: '20px' }}>💌</div>
              <h3 style={{ color: '#764ba2', marginBottom: '15px', fontSize: '22px' }}>
                No Letters Yet
              </h3>
              <p style={{ fontSize: '16px', color: '#667eea', lineHeight: '1.8' }}>
                Start writing letters for future moments. They'll be here waiting when the time is right. 💙
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
