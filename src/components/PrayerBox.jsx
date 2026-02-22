import { useState } from 'react';

export default function PrayerBox() {
  const [prayers, setPrayers] = useState([]);
  const [newPrayer, setNewPrayer] = useState('');
  const [prayerType, setPrayerType] = useState('general');
  const [showSuccess, setShowSuccess] = useState(false);

  const prayerTypes = [
    { value: 'general', label: 'General Prayer', icon: '🙏', color: '#667eea' },
    { value: 'guidance', label: 'Need Guidance', icon: '🧭', color: '#764ba2' },
    { value: 'strength', label: 'Need Strength', icon: '💪', color: '#E8B4F0' },
    { value: 'peace', label: 'Need Peace', icon: '🕊️', color: '#667eea' },
    { value: 'thanks', label: 'Thanksgiving', icon: '🙌', color: '#10b981' },
    { value: 'relationship', label: 'Relationship Clarity', icon: '💙', color: '#764ba2' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPrayer.trim()) return;

    const prayer = {
      id: Date.now(),
      text: newPrayer,
      type: prayerType,
      date: new Date().toISOString(),
      prayed: false
    };

    setPrayers([prayer, ...prayers]);
    setNewPrayer('');
    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), 3000);

    // In a real app, you could send this to a backend or store locally
    console.log('Prayer submitted:', prayer);
  };

  const markAsPrayed = (id) => {
    setPrayers(prayers.map(p => 
      p.id === id ? { ...p, prayed: true } : p
    ));
  };

  const deletePrayer = (id) => {
    setPrayers(prayers.filter(p => p.id !== id));
  };

  const getTypeDetails = (type) => {
    return prayerTypes.find(t => t.value === type) || prayerTypes[0];
  };

  return (
    <div className="container">
      <div className="card fade-in">
        <h2 className="card-title">🕊️ Prayer Request Box</h2>
        <div className="card-content">
          <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px', color: '#667eea', lineHeight: '1.8' }}>
            Your faith matters to me. Share your prayer requests, and I'll be praying for you. 
            This is a sacred space between you, me, and God. 🙏💙
          </p>

          {showSuccess && (
            <div style={{
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              padding: '20px',
              borderRadius: '15px',
              marginBottom: '30px',
              textAlign: 'center',
              animation: 'fadeIn 0.5s ease'
            }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                ✓ Prayer Request Received! 🙏
              </p>
              <p style={{ fontSize: '14px', marginTop: '10px', opacity: 0.95 }}>
                I'll be praying for this. God hears us. 💙
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{
            background: 'white',
            padding: '30px',
            borderRadius: '20px',
            border: '3px solid #E8B4F0',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>✍️ Share Your Prayer Request</h3>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px', color: '#2D3748', fontWeight: '600' }}>
                Prayer Type:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
                {prayerTypes.map(type => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setPrayerType(type.value)}
                    style={{
                      padding: '12px',
                      background: prayerType === type.value 
                        ? `linear-gradient(135deg, ${type.color}, #764ba2)` 
                        : 'white',
                      color: prayerType === type.value ? 'white' : '#2D3748',
                      border: `2px solid ${type.color}`,
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <span>{type.icon}</span>
                    <span>{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px', color: '#2D3748', fontWeight: '600' }}>
                Your Prayer:
              </label>
              <textarea
                value={newPrayer}
                onChange={(e) => setNewPrayer(e.target.value)}
                placeholder="Share what's on your heart... God is listening, and so am I. 🙏"
                style={{
                  width: '100%',
                  minHeight: '120px',
                  padding: '15px',
                  borderRadius: '10px',
                  border: '2px solid #E8B4F0',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%' }}
              disabled={!newPrayer.trim()}
            >
              🙏 Submit Prayer Request
            </button>

            <p style={{ fontSize: '13px', color: '#718096', marginTop: '15px', textAlign: 'center', fontStyle: 'italic' }}>
              🔒 Your prayers are safe. This is between you, me, and God.
            </p>
          </form>

          {prayers.length > 0 && (
            <div>
              <h3 style={{ color: '#667eea', marginBottom: '20px' }}>
                📖 Your Prayer Requests ({prayers.length})
              </h3>
              
              <div style={{ display: 'grid', gap: '20px' }}>
                {prayers.map(prayer => {
                  const typeDetails = getTypeDetails(prayer.type);
                  return (
                    <div
                      key={prayer.id}
                      style={{
                        background: prayer.prayed 
                          ? 'linear-gradient(135deg, #10b981, #059669)' 
                          : 'linear-gradient(135deg, #FFF8F0, white)',
                        padding: '25px',
                        borderRadius: '15px',
                        border: prayer.prayed 
                          ? '3px solid #10b981' 
                          : '3px solid #E8B4F0',
                        position: 'relative'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                        <div style={{
                          background: typeDetails.color,
                          color: 'white',
                          padding: '8px 15px',
                          borderRadius: '20px',
                          fontSize: '13px',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}>
                          <span>{typeDetails.icon}</span>
                          <span>{typeDetails.label}</span>
                        </div>
                        
                        {prayer.prayed && (
                          <div style={{
                            background: 'white',
                            color: '#10b981',
                            padding: '5px 12px',
                            borderRadius: '15px',
                            fontSize: '12px',
                            fontWeight: 'bold'
                          }}>
                            ✓ Prayed For
                          </div>
                        )}
                      </div>

                      <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: prayer.prayed ? 'white' : '#2D3748',
                        marginBottom: '15px'
                      }}>
                        {prayer.text}
                      </p>

                      <div style={{
                        fontSize: '13px',
                        color: prayer.prayed ? 'rgba(255,255,255,0.9)' : '#718096',
                        marginBottom: '15px'
                      }}>
                        {new Date(prayer.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>

                      <div style={{ display: 'flex', gap: '10px' }}>
                        {!prayer.prayed && (
                          <button
                            onClick={() => markAsPrayed(prayer.id)}
                            style={{
                              padding: '10px 20px',
                              background: 'linear-gradient(135deg, #667eea, #764ba2)',
                              color: 'white',
                              border: 'none',
                              borderRadius: '20px',
                              cursor: 'pointer',
                              fontSize: '14px',
                              fontWeight: '600'
                            }}
                          >
                            ✓ Mark as Prayed
                          </button>
                        )}
                        
                        <button
                          onClick={() => deletePrayer(prayer.id)}
                          style={{
                            padding: '10px 20px',
                            background: prayer.prayed ? 'rgba(255,255,255,0.3)' : '#FFF8F0',
                            color: prayer.prayed ? 'white' : '#718096',
                            border: 'none',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div style={{
            marginTop: '40px',
            padding: '30px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            borderRadius: '20px',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>🙏 My Prayer for You</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.8', fontStyle: 'italic' }}>
              "Father, I pray for Xaloe today. Guide her heart, give her clarity in her decisions, 
              and surround her with Your peace. If it's Your will for us to be together, open that door. 
              If not, give us both peace and direction. Above all, help her feel Your love today. 
              In Jesus' name, Amen. 💙"
            </p>
          </div>

          <div style={{
            marginTop: '20px',
            padding: '20px',
            background: 'linear-gradient(135deg, #FFF8F0, #E8B4F0)',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '15px', color: '#667eea', lineHeight: '1.8' }}>
              💡 <strong>Why This Feature?</strong><br />
              Because your spiritual life matters more than any relationship. 
              I want to support your walk with God first, and everything else second. 
              That's the foundation of any relationship I want to build. 🙏💙
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
