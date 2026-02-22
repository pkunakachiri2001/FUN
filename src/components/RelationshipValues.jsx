import { useState, useEffect } from 'react';

export default function RelationshipValues() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const valueCategories = [
    {
      category: 'Faith & Spirituality',
      icon: '🙏',
      color: '#8b5cf6',
      values: [
        { id: 'prayer', label: 'Regular prayer together', description: 'Making prayer a daily practice' },
        { id: 'church', label: 'Active church involvement', description: 'Worshiping and serving in community' },
        { id: 'bible', label: 'Bible study & discussion', description: 'Growing through Scripture together' },
        { id: 'godly', label: 'God-honoring relationship', description: 'Keeping Christ at the center' },
        { id: 'ministry', label: 'Serving others together', description: 'Using gifts to bless others' }
      ]
    },
    {
      category: 'Communication',
      icon: '💬',
      color: '#3b82f6',
      values: [
        { id: 'honest', label: 'Radical honesty', description: 'No secrets, full transparency' },
        { id: 'listening', label: 'Active listening', description: 'Truly hearing each other out' },
        { id: 'vulnerable', label: 'Emotional vulnerability', description: 'Sharing fears and weaknesses' },
        { id: 'resolve', label: 'Healthy conflict resolution', description: 'Fighting fair and finding solutions' },
        { id: 'affirm', label: 'Regular affirmation', description: 'Speaking encouragement often' }
      ]
    },
    {
      category: 'Commitment & Trust',
      icon: '💍',
      color: '#ec4899',
      values: [
        { id: 'faithful', label: 'Complete faithfulness', description: 'Total commitment to each other' },
        { id: 'reliable', label: 'Keeping promises', description: 'Following through on word' },
        { id: 'loyal', label: 'Unwavering loyalty', description: 'Having each other\'s back always' },
        { id: 'longterm', label: 'Long-term mindset', description: 'Building for forever, not just now' },
        { id: 'security', label: 'Emotional security', description: 'Creating safe space for each other' }
      ]
    },
    {
      category: 'Growth & Development',
      icon: '🌱',
      color: '#10b981',
      values: [
        { id: 'encourage', label: 'Mutual encouragement', description: 'Championing each other\'s dreams' },
        { id: 'challenge', label: 'Healthy challenge', description: 'Pushing each other to be better' },
        { id: 'learn', label: 'Continuous learning', description: 'Growing intellectually together' },
        { id: 'goals', label: 'Supporting goals', description: 'Helping achieve individual aspirations' },
        { id: 'feedback', label: 'Constructive feedback', description: 'Speaking truth in love' }
      ]
    },
    {
      category: 'Quality Time',
      icon: '⏰',
      color: '#f59e0b',
      values: [
        { id: 'present', label: 'Being fully present', description: 'No distractions when together' },
        { id: 'dates', label: 'Regular intentional dates', description: 'Prioritizing special time' },
        { id: 'adventures', label: 'Shared adventures', description: 'Creating memories together' },
        { id: 'routine', label: 'Daily small moments', description: 'Finding joy in ordinary days' },
        { id: 'travel', label: 'Exploring together', description: 'Discovering new places as a team' }
      ]
    },
    {
      category: 'Affection & Romance',
      icon: '💙',
      color: '#667eea',
      values: [
        { id: 'physical', label: 'Physical affection', description: 'Appropriate touch and closeness' },
        { id: 'romance', label: 'Keeping romance alive', description: 'Intentional romantic gestures' },
        { id: 'attraction', label: 'Maintaining attraction', description: 'Effort in appearance and energy' },
        { id: 'playful', label: 'Playfulness & fun', description: 'Laughter and lightheartedness' },
        { id: 'surprise', label: 'Thoughtful surprises', description: 'Unexpected acts of love' }
      ]
    },
    {
      category: 'Respect & Partnership',
      icon: '🤝',
      color: '#6366f1',
      values: [
        { id: 'equal', label: 'Equal partnership', description: 'Mutual respect in decisions' },
        { id: 'boundaries', label: 'Respecting boundaries', description: 'Honoring personal space and limits' },
        { id: 'family', label: 'Valuing each other\'s families', description: 'Including loved ones' },
        { id: 'independence', label: 'Healthy independence', description: 'Supporting individual identity' },
        { id: 'decisions', label: 'Joint decision-making', description: 'Major choices made together' }
      ]
    },
    {
      category: 'Fun & Laughter',
      icon: '😄',
      color: '#f97316',
      values: [
        { id: 'humor', label: 'Sense of humor', description: 'Finding joy and laughter together' },
        { id: 'spontaneous', label: 'Spontaneity', description: 'Embracing unexpected moments' },
        { id: 'hobbies', label: 'Shared interests', description: 'Activities enjoyed together' },
        { id: 'lighthearted', label: 'Not taking life too seriously', description: 'Keeping perspective' },
        { id: 'memories', label: 'Creating inside jokes', description: 'Building shared humor' }
      ]
    }
  ];

  useEffect(() => {
    const saved = localStorage.getItem('relationshipValues');
    if (saved) {
      setSelectedValues(JSON.parse(saved));
    }
  }, []);

  const toggleValue = (valueId) => {
    let updated;
    if (selectedValues.includes(valueId)) {
      updated = selectedValues.filter(v => v !== valueId);
    } else {
      updated = [...selectedValues, valueId];
    }
    setSelectedValues(updated);
    localStorage.setItem('relationshipValues', JSON.stringify(updated));
  };

  const getSelectedByCategory = (category) => {
    return category.values.filter(v => selectedValues.includes(v.id)).length;
  };

  const totalPossible = valueCategories.reduce((sum, cat) => sum + cat.values.length, 0);
  const selectedCount = selectedValues.length;

  const topCategories = [...valueCategories]
    .map(cat => ({
      ...cat,
      count: getSelectedByCategory(cat)
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)
    .filter(cat => cat.count > 0);

  return (
    <div className="container">
      <div className="card scale-in">
        <h2 className="card-title">💙 Relationship Values Checklist</h2>
        <div className="card-content">
          <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px', color: '#667eea', lineHeight: '1.8' }}>
            What matters most to you in a relationship? Select the values that are non-negotiable, 
            important, or desirable. This helps clarify what you're looking for and what you bring. 💙
          </p>

          {/* Progress Summary */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            padding: '30px',
            borderRadius: '20px',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
              {selectedCount}
            </div>
            <div style={{ fontSize: '16px', opacity: 0.95 }}>
              Values Selected (out of {totalPossible} total)
            </div>
            {selectedCount > 0 && (
              <button
                onClick={() => setShowResults(!showResults)}
                style={{
                  marginTop: '20px',
                  padding: '12px 30px',
                  background: 'white',
                  color: '#667eea',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                {showResults ? 'Hide' : 'View'} My Value Profile
              </button>
            )}
          </div>

          {/* Results View */}
          {showResults && selectedCount > 0 && (
            <div className="fade-in" style={{
              background: 'white',
              padding: '30px',
              borderRadius: '20px',
              marginBottom: '30px',
              border: '3px solid #E8B4F0'
            }}>
              <h3 style={{ color: '#667eea', marginBottom: '20px' }}>Your Value Profile</h3>
              
              {topCategories.length > 0 && (
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ color: '#764ba2', marginBottom: '15px', fontSize: '16px' }}>
                    Top Priority Categories:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {topCategories.map((cat, idx) => (
                      <div key={cat.category} style={{
                        background: `${cat.color}15`,
                        border: `2px solid ${cat.color}`,
                        padding: '20px',
                        borderRadius: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                      }}>
                        <div style={{ fontSize: '36px' }}>{cat.icon}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 'bold', color: cat.color, fontSize: '16px' }}>
                            #{idx + 1} {cat.category}
                          </div>
                          <div style={{ fontSize: '14px', color: '#6b7280' }}>
                            {cat.count} of {cat.values.length} values selected
                          </div>
                        </div>
                        <div style={{
                          fontSize: '24px',
                          fontWeight: 'bold',
                          color: cat.color
                        }}>
                          {Math.round((cat.count / cat.values.length) * 100)}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div style={{
                background: 'linear-gradient(135deg, #FFF8F0, #E8B4F0)',
                padding: '25px',
                borderRadius: '15px',
                marginBottom: '20px'
              }}>
                <p style={{ fontSize: '15px', color: '#764ba2', lineHeight: '1.8', marginBottom: '15px' }}>
                  <strong>💡 What This Means:</strong>
                </p>
                <p style={{ fontSize: '14px', color: '#667eea', lineHeight: '1.8' }}>
                  {selectedCount < 10 && "You have a focused set of core values. You know what's truly essential and aren't distracted by less important factors."}
                  {selectedCount >= 10 && selectedCount < 20 && "You have a balanced approach to relationship values. You recognize multiple important dimensions of a healthy relationship."}
                  {selectedCount >= 20 && selectedCount < 30 && "You have comprehensive relationship values. You've thought deeply about what makes relationships work and value many dimensions."}
                  {selectedCount >= 30 && "You have high standards across all areas of relationship. You believe a great relationship should excel in many dimensions."}
                </p>
              </div>

              <button
                onClick={() => {
                  const summary = valueCategories.map(cat => {
                    const selected = cat.values.filter(v => selectedValues.includes(v.id));
                    if (selected.length === 0) return null;
                    return `${cat.category}: ${selected.map(v => v.label).join(', ')}`;
                  }).filter(Boolean).join('\n\n');
                  
                  navigator.clipboard.writeText(`My Relationship Values:\n\n${summary}`);
                  alert('Your values have been copied to clipboard!');
                }}
                className="btn btn-primary"
                style={{ width: '100%', padding: '15px' }}
              >
                📋 Copy My Values
              </button>
            </div>
          )}

          {/* Values by Category */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {valueCategories.map((category) => {
              const selectedInCategory = getSelectedByCategory(category);
              
              return (
                <div key={category.category} style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '20px',
                  border: `3px solid ${category.color}30`
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '20px'
                  }}>
                    <div style={{ fontSize: '36px' }}>{category.icon}</div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ color: category.color, marginBottom: '5px' }}>
                        {category.category}
                      </h3>
                      <p style={{ fontSize: '13px', color: '#9ca3af' }}>
                        {selectedInCategory} of {category.values.length} selected
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {category.values.map((value) => {
                      const isSelected = selectedValues.includes(value.id);
                      
                      return (
                        <div
                          key={value.id}
                          onClick={() => toggleValue(value.id)}
                          style={{
                            padding: '20px',
                            background: isSelected ? `${category.color}15` : '#f9fafb',
                            border: `2px solid ${isSelected ? category.color : '#e5e7eb'}`,
                            borderRadius: '12px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                          className="hover-lift"
                        >
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                            <div style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '6px',
                              border: `2px solid ${isSelected ? category.color : '#d1d5db'}`,
                              background: isSelected ? category.color : 'white',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: '2px'
                            }}>
                              {isSelected && (
                                <span style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
                              )}
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{
                                fontWeight: 'bold',
                                color: isSelected ? category.color : '#374151',
                                marginBottom: '5px',
                                fontSize: '15px'
                              }}>
                                {value.label}
                              </div>
                              <div style={{
                                fontSize: '13px',
                                color: '#6b7280',
                                lineHeight: '1.6'
                              }}>
                                {value.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {selectedCount === 0 && (
            <div style={{
              background: 'linear-gradient(135deg, #FFF8F0, #E8B4F0)',
              padding: '40px 30px',
              borderRadius: '20px',
              textAlign: 'center',
              marginTop: '30px'
            }}>
              <div style={{ fontSize: '60px', marginBottom: '15px' }}>💡</div>
              <h3 style={{ color: '#764ba2', marginBottom: '12px' }}>
                Start Selecting Your Values
              </h3>
              <p style={{ fontSize: '15px', color: '#667eea', lineHeight: '1.8' }}>
                Click on any value that matters to you. There are no right or wrong answers—
                this is about understanding what YOU want in a relationship. 💙
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
