import { useState } from 'react';

export default function Reasons() {
  const [revealedCount, setRevealedCount] = useState(10);
  const [favorites, setFavorites] = useState([]);

  // Psychologically crafted reasons - mix of emotional, logical, and values-based
  const reasons = [
    { id: 1, text: "Proximity builds strong bonds - we're in the same place every day 💙", category: "proximity" },
    { id: 2, text: "Shared faith and values create the foundation for lasting connection 🙏", category: "values" },
    { id: 3, text: "In-person connection is more meaningful than digital interaction 📱➡️👥", category: "proximity" },
    { id: 4, text: "We share laughter and genuine moments together 😄", category: "connection" },
    { id: 5, text: "Noticing the little things builds deeper understanding 💭", category: "attention" },
    { id: 6, text: "Shared spiritual practices strengthen relationships 🙏✨", category: "faith" },
    { id: 7, text: "Respect and patience create a healthy foundation ⏰", category: "respect" },
    { id: 8, text: "Building memories together matters more than waiting 🌟", category: "proximity" },
    { id: 9, text: "Supporting each other's dreams creates partnership 🎓", category: "support" },
    { id: 10, text: "Shared spaces often lead to meaningful connections 🏫", category: "faith" },
    { id: 11, text: "Admiration and inspiration fuel healthy relationships 💫", category: "admiration" },
    { id: 12, text: "Studying together combines productivity with connection 📚", category: "connection" },
    { id: 13, text: "Mutual respect is the cornerstone of any relationship 🤝", category: "respect" },
    { id: 14, text: "Understanding each other's challenges builds empathy 💙", category: "empathy" },
    { id: 15, text: "Spontaneous coffee dates create special moments ☕", category: "proximity" },
    { id: 16, text: "Faith-centered values should never be compromised 🙏💙", category: "values" },
    { id: 17, text: "Shared worship experiences deepen spiritual bonds ⛪", category: "faith" },
    { id: 18, text: "Genuine smiles reveal authentic connection 😊", category: "attention" },
    { id: 19, text: "Growing and learning together creates stronger bonds 🌱", category: "growth" },
    { id: 20, text: "Celebrating victories in person is more meaningful 🎉", category: "proximity" },
    { id: 21, text: "True care means prioritizing the other person's happiness 💝", category: "selfless" },
    { id: 22, text: "Inside jokes show a special level of understanding 🤫", category: "connection" },
    { id: 23, text: "Patience with timing shows maturity 🕊️", category: "faith" },
    { id: 24, text: "Shared experiences create deeper connections 🎭", category: "connection" },
    { id: 25, text: "Seeing someone fully means respecting their whole self 👤", category: "respect" },
    { id: 26, text: "Distance makes hearts grow fonder, but proximity makes hearts grow closer 💙", category: "wisdom" },
    { id: 27, text: "Multiple connection points create stronger relationships 🤝", category: "friendship" },
    { id: 28, text: "Spontaneity adds joy to everyday life 🍽️", category: "proximity" },
    { id: 29, text: "Faith should always be the priority in relationships 🙏", category: "faith" },
    { id: 30, text: "Mutual inspiration leads to growth ✨", category: "admiration" },
    { id: 31, text: "Face-to-face conversations build deeper trust 💬", category: "connection" },
    { id: 32, text: "Attention to detail shows genuine care 📍", category: "attention" },
    { id: 33, text: "Shared life seasons create natural understanding 🎓", category: "compatibility" },
    { id: 34, text: "Acts of service show love in action 🍲", category: "care" },
    { id: 35, text: "Choosing proximity over distance is practical wisdom 🧠", category: "wisdom" },
    { id: 36, text: "We can go to Bible study together 📖", category: "faith" },
    { id: 37, text: "I'll never ask you to choose between your faith and me 🙏💙", category: "values" },
    { id: 38, text: "We can celebrate holidays together on campus 🎄", category: "proximity" },
    { id: 39, text: "I know your class schedule (not in a creepy way! 😅) ", category: "attention" },
    { id: 40, text: "We can have movie nights with friends - group dates honor your values 🎬", category: "respect" },
    { id: 41, text: "God might be using this app to speak to your heart 💭", category: "faith" },
    { id: 42, text: "We already trust each other as friends 🤝", category: "foundation" },
    { id: 43, text: "I see your potential and want to cheer you on from the front row 📣", category: "support" },
    { id: 44, text: "We can walk across campus together under the stars 🌟", category: "romance" },
    { id: 45, text: "Respecting boundaries builds trust 🛡️", category: "respect" },
    { id: 46, text: "Shared humor shows compatibility 😂", category: "compatibility" },
    { id: 47, text: "Patience demonstrates genuine care ⏳", category: "patience" },
    { id: 48, text: "Friendship foundations create lasting relationships 👫", category: "foundation" },
    { id: 49, text: "Proximity helps relationships thrive naturally 🌱", category: "wisdom" },
    { id: 50, text: "Comfort around each other shows authentic connection 😊", category: "connection" },
    { id: 51, text: "Loyalty is a beautiful and admirable quality 💎", category: "admiration" },
    { id: 52, text: "We can join campus ministry together ✝️", category: "faith" },
    { id: 53, text: "I'll never compromise your relationship with God 🙏", category: "values" },
    { id: 54, text: "We understand each other's campus stress 😅", category: "empathy" },
    { id: 55, text: "I can help you with assignments (if you want!) 📝", category: "support" },
    { id: 56, text: "We're building memories right now, not waiting to build them later ⏰", category: "present" },
    { id: 57, text: "Caring about someone's happiness shows genuine love 🙏💙", category: "selfless" },
    { id: 58, text: "We can explore the city together on weekends 🌆", category: "adventure" },
    { id: 59, text: "Emotional intelligence strengthens relationships 🤗", category: "emotional intelligence" },
    { id: 60, text: "We're both committed to honoring God in relationships ✨", category: "values" },
    { id: 61, text: "I'll always encourage your spiritual growth first 🌱", category: "faith" },
    { id: 62, text: "We can have breakfast together before morning classes 🥐", category: "proximity" },
    { id: 63, text: "Remembering preferences shows thoughtfulness ☕", category: "attention" },
    { id: 64, text: "We can volunteer together for campus causes 🤝", category: "shared values" },
    { id: 65, text: "Respecting someone's journey shows maturity 🚶‍♀️", category: "patience" },
    { id: 66, text: "We already know each other's families (sort of!) 👨‍👩‍👧‍👦", category: "foundation" },
    { id: 67, text: "God's timing is perfect - maybe now is our timing 🕊️", category: "faith" },
    { id: 68, text: "We can have deep conversations over campus walks 🚶‍♂️🚶‍♀️", category: "connection" },
    { id: 69, text: "Supporting spiritual growth rather than competing with it 🙏", category: "respect" },
    { id: 70, text: "We're both figuring out life - let's figure it out together 🧩", category: "partnership" },
    { id: 71, text: "Physical presence during tough times matters 🤗", category: "proximity" },
    { id: 72, text: "We challenge each other to be better 💪", category: "growth" },
    { id: 73, text: "I understand your struggles because I'm living the same student life 🎓", category: "empathy" },
    { id: 74, text: "We can surprise each other with little campus visits 🎁", category: "spontaneity" },
    { id: 75, text: "Caring through prayer shows deep spiritual connection 🙏", category: "care" },
    { id: 76, text: "We have the same goals for faith-centered relationships 💑", category: "values" },
    { id: 77, text: "I'll never ask you to lower your standards 🌟", category: "respect" },
    { id: 78, text: "We can attend campus worship nights together 🎶", category: "faith" },
    { id: 79, text: "Genuine attention creates meaningful recognition 👀💙", category: "attention" },
    { id: 80, text: "We're not just talking about 'someday' - we can live it now 🌟", category: "present" },
    { id: 81, text: "Long distance relationships have a 58% failure rate - proximity matters 📊", category: "wisdom" },
    { id: 82, text: "I'll always respect if you choose differently 🤝", category: "respect" },
    { id: 83, text: "We can fast and pray together during spiritual seasons 🙏", category: "faith" },
    { id: 84, text: "Accepting someone fully without trying to change them 💙", category: "acceptance" },
    { id: 85, text: "We can have board game nights with our friend groups 🎲", category: "fun" },
    { id: 86, text: "I believe in the sacredness of relationships - I won't take you for granted 💎", category: "values" },
    { id: 87, text: "We can pack lunches and have picnics on campus 🧺", category: "romance" },
    { id: 88, text: "Emotional awareness deepens understanding 😊➡️💭", category: "emotional intelligence" },
    { id: 89, text: "We're reading the same textbooks - literally! 📚", category: "compatibility" },
    { id: 90, text: "I'll honor your commitment to purity and godliness 🙏💙", category: "respect" },
    { id: 91, text: "We can serve together in campus outreach programs ⛪", category: "ministry" },
    { id: 92, text: "Trust should be earned through actions, not demanded 🤝", category: "integrity" },
    { id: 93, text: "We can have late-night talks at the campus café ☕🌙", category: "connection" },
    { id: 94, text: "God brought us both to this university - that's not random 🎓✨", category: "faith" },
    { id: 95, text: "I'll support you through exams, stress, and victories 📝🎉", category: "support" },
    { id: 96, text: "We can explore God's plan together, step by step 🚶‍♂️🚶‍♀️", category: "faith" },
    { id: 97, text: "Healthy relationships add value without requiring sacrifice 🎁", category: "addition" },
    { id: 98, text: "We already have a foundation of friendship and respect 🏗️", category: "foundation" },
    { id: 99, text: "Faith-centered relationships honor God in beautiful ways 🙏💙", category: "vision" },
    { id: 100, text: "Because sometimes, love is right in front of you - you just need to say 'yes' ✨", category: "summary" }
  ];

  const handleRevealMore = () => {
    setRevealedCount(prev => Math.min(prev + 10, 100));
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="container">
      <div className="card scale-in shona-border">
        <div className="zim-pattern"></div>
        <h2 className="card-title gradient-text-animate">100 Reasons Why This Could Be Great 💙✨</h2>
        <div className="card-content">
          <p style={{ marginBottom: '20px', textAlign: 'center', fontSize: '16px', color: '#718096' }}>
            Sometimes it helps to see things from a different perspective. 
            {favorites.length > 0 && ` (You've favorited ${favorites.length} reasons 💙)`}
          </p>

          <ul className="reasons-list">
            {reasons.slice(0, revealedCount).map((reason, index) => (
              <li 
                key={reason.id} 
                className={`reason-item ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
                onClick={() => toggleFavorite(reason.id)}
                style={{
                  background: favorites.includes(reason.id) ? 'linear-gradient(135deg, #E8B4F0, #FFF8F0)' : undefined,
                  animationDelay: `${index * 0.05}s`
                }}
              >
                <span className="reason-number">{reason.id}.</span>
                <span className="reason-text">{reason.text}</span>
                {favorites.includes(reason.id) && <span className="heartbeat-strong">⭐</span>}
              </li>
            ))}
          </ul>

          {revealedCount < 100 && (
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button className="btn btn-primary glow-pulse" onClick={handleRevealMore}>
                Show 10 More Reasons 💭
              </button>
              <p style={{ marginTop: '15px', color: '#718096', fontSize: '14px' }}>
                {100 - revealedCount} more reasons waiting...
              </p>
            </div>
          )}

          {revealedCount === 100 && (
            <div className="card rainbow-border heartbeat-strong" style={{ marginTop: '30px', background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white' }}>
              <p style={{ fontSize: '18px', textAlign: 'center' }}>
                💙✨ You read all 100 reasons! Thank you for taking the time to consider this. 😊
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
