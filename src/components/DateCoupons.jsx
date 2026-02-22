import { useState } from 'react';

export default function DateCoupons() {
  const [redeemedCoupons, setRedeemedCoupons] = useState([]);

  const coupons = [
    {
      id: 1,
      title: "Campus Coffee Date ☕",
      description: "One coffee of your choice between classes, my treat!",
      location: "Campus Café",
      faithful: true,
      details: "Casual, friendly, and respectful. Just two friends talking over coffee."
    },
    {
      id: 2,
      title: "Library Study Session 📚",
      description: "Study together for upcoming exams. I'll bring snacks!",
      location: "University Library",
      faithful: true,
      details: "Focused study time with moral support and encouragement."
    },
    {
      id: 3,
      title: "Church Service Together ⛪",
      description: "Attend Sunday worship together and grab lunch after",
      location: "Your favorite church",
      faithful: true,
      details: "Spiritual fellowship first, friendship second. God at the center."
    },
    {
      id: 4,
      title: "Campus Walk & Talk 🚶‍♂️🚶‍♀️",
      description: "A peaceful walk around campus, deep conversations welcome",
      location: "Campus grounds",
      faithful: true,
      details: "Fresh air, honest conversation, and getting to know each other better."
    },
    {
      id: 5,
      title: "Group Movie Night 🎬",
      description: "Movie with friends (group setting - respects your values!)",
      location: "Campus cinema or dorm common room",
      faithful: true,
      details: "Safe, fun, and appropriate. Friends included!"
    },
    {
      id: 6,
      title: "Surprise Lunch Coupon 🍽️",
      description: "Lunch at the campus cafeteria, surprise day of your choice",
      location: "Campus cafeteria",
      faithful: true,
      details: "Just say the word and I'll meet you for lunch!"
    },
    {
      id: 7,
      title: "Bible Study Date 📖",
      description: "Study God's Word together, discuss faith and life",
      location: "Campus ministry center",
      faithful: true,
      details: "Growing in faith together - the best kind of date!"
    },
    {
      id: 8,
      title: "Campus Event Together 🎭",
      description: "Attend any campus event together (concert, sports, fair)",
      location: "Various campus venues",
      faithful: true,
      details: "Making memories at university events side by side."
    },
    {
      id: 9,
      title: "Prayer Walk 🙏",
      description: "Walk and pray together around campus or nearby park",
      location: "Campus/Park",
      faithful: true,
      details: "Seeking God's guidance together through prayer and nature."
    },
    {
      id: 10,
      title: "Breakfast Before Class 🥐",
      description: "Early morning breakfast to start the day right",
      location: "Campus café",
      faithful: true,
      details: "Fuel for the day and positive vibes before morning classes!"
    },
    {
      id: 11,
      title: "Volunteer Together 🤝",
      description: "Serve at a campus or community outreach event",
      location: "Various locations",
      faithful: true,
      details: "Serving others together - honoring God through action."
    },
    {
      id: 12,
      title: "Picnic on Campus 🧺",
      description: "Pack a lunch and enjoy it outdoors on a nice day",
      location: "Campus green space",
      faithful: true,
      details: "Simple, peaceful, and wholesome. Just good conversation and sunshine."
    }
  ];

  const handleRedeem = (couponId) => {
    if (!redeemedCoupons.includes(couponId)) {
      setRedeemedCoupons([...redeemedCoupons, couponId]);
    }
  };

  return (
    <div className="container">
      <div className="card fade-in">
        <h2 className="card-title">🎁 Your Virtual Date Coupons</h2>
        <div className="card-content">
          <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px', color: '#667eea' }}>
            All faith-friendly, respectful, and ready whenever you say "yes"! 💙
          </p>

          {redeemedCoupons.length > 0 && (
            <div style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              padding: '20px',
              borderRadius: '15px',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                🎉 You've "redeemed" {redeemedCoupons.length} coupons!
              </p>
              <p style={{ fontSize: '14px', marginTop: '10px', opacity: 0.9 }}>
                (Now we just need to make them real... 😊)
              </p>
            </div>
          )}

          <div style={{ display: 'grid', gap: '20px' }}>
            {coupons.map(coupon => {
              const isRedeemed = redeemedCoupons.includes(coupon.id);
              return (
                <div
                  key={coupon.id}
                  style={{
                    background: isRedeemed 
                      ? 'linear-gradient(135deg, #E8B4F0, #FFF8F0)'
                      : 'white',
                    padding: '25px',
                    borderRadius: '15px',
                    border: `3px ${isRedeemed ? 'solid' : 'dashed'} #667eea`,
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleRedeem(coupon.id)}
                >
                  {coupon.faithful && (
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: '#667eea',
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      ✝️ Faith-Friendly
                    </div>
                  )}

                  {isRedeemed && (
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: '#10b981',
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      ✓ Selected!
                    </div>
                  )}

                  <h3 style={{ color: '#667eea', fontSize: '20px', marginBottom: '10px', marginTop: isRedeemed ? '25px' : '0' }}>
                    {coupon.title}
                  </h3>
                  <p style={{ fontSize: '15px', marginBottom: '10px', color: '#2D3748' }}>
                    {coupon.description}
                  </p>
                  <p style={{ fontSize: '13px', color: '#718096', marginBottom: '10px' }}>
                    📍 {coupon.location}
                  </p>
                  <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#764ba2' }}>
                    {coupon.details}
                  </p>

                  {!isRedeemed && (
                    <button 
                      style={{
                        marginTop: '15px',
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
                      "Redeem" This Coupon 💙
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{
            marginTop: '40px',
            padding: '25px',
            background: 'linear-gradient(135deg, #FFF8F0, #FFFFFF)',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '18px', color: '#667eea', fontWeight: 'bold', marginBottom: '10px' }}>
              💡 The Best Part?
            </p>
            <p style={{ fontSize: '16px', color: '#2D3748', lineHeight: '1.8' }}>
              Every single one of these dates honors your faith, respects your boundaries, 
              and can happen THIS WEEK - not "someday when we finally see each other." 💙
            </p>
            <p style={{ fontSize: '15px', color: '#764ba2', marginTop: '15px', fontStyle: 'italic' }}>
              Long distance = Planning months ahead<br />
              Campus dating = Spontaneous coffee tomorrow ☕
            </p>
          </div>

          <div style={{
            marginTop: '20px',
            padding: '20px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '16px' }}>
              🎁 All {coupons.length} coupons are yours if you'll just give us a chance. 
              No pressure, no expectations - just genuine, respectful friendship first. 🙏💙
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
