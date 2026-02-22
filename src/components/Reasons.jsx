import { useState } from 'react';

export default function Reasons() {
  const [revealedCount, setRevealedCount] = useState(10);
  const [favorites, setFavorites] = useState([]);

  // Psychologically crafted reasons - mix of emotional, logical, and values-based
  const reasons = [
    { id: 1, text: "We see each other every day on campus - proximity builds strong bonds 💙", category: "proximity" },
    { id: 2, text: "We share the same faith and values - the foundation of lasting love 🙏", category: "values" },
    { id: 3, text: "I can be there for you in person, not just through screens 📱➡️👥", category: "proximity" },
    { id: 4, text: "We make each other laugh in the hallways 😄", category: "connection" },
    { id: 5, text: "I notice the little things - like when you're having a tough day 💭", category: "attention" },
    { id: 6, text: "We can pray together in person 🙏✨", category: "faith" },
    { id: 7, text: "I'm willing to wait and respect your pace - no pressure ⏰", category: "respect" },
    { id: 8, text: "We can build memories together, not just miss each other 🌟", category: "proximity" },
    { id: 9, text: "I want to support your dreams and walk beside you through university 🎓", category: "support" },
    { id: 10, text: "We share the same campus - God's way of bringing people together 🏫", category: "faith" },
    { id: 11, text: "I admire your dedication to your faith - it inspires me 💫", category: "admiration" },
    { id: 12, text: "We can study together at the library 📚", category: "connection" },
    { id: 13, text: "I respect that you're in another relationship - I just want a fair chance 🤝", category: "respect" },
    { id: 14, text: "Long distance is hard - I know because I see you struggle with it 💔", category: "empathy" },
    { id: 15, text: "We could grab coffee between classes ☕", category: "proximity" },
    { id: 16, text: "I'll always put your faith first and never ask you to compromise 🙏💙", category: "values" },
    { id: 17, text: "We can attend church together - shared worship strengthens relationships ⛪", category: "faith" },
    { id: 18, text: "I notice when you smile - and I live for those moments 😊", category: "attention" },
    { id: 19, text: "We're both growing and learning - let's grow together 🌱", category: "growth" },
    { id: 20, text: "I can celebrate your victories in person, not just over text 🎉", category: "proximity" },
    { id: 21, text: "Your happiness matters more to me than winning you over 💝", category: "selfless" },
    { id: 22, text: "We already have inside jokes - that's rare and special 🤫", category: "connection" },
    { id: 23, text: "I'm patient enough to let God's timing work 🕊️", category: "faith" },
    { id: 24, text: "We can go to campus events together 🎭", category: "connection" },
    { id: 25, text: "I see you as a whole person - not just my 'crush' 👤", category: "respect" },
    { id: 26, text: "Distance makes hearts grow fonder, but proximity makes hearts grow closer 💙", category: "wisdom" },
    { id: 27, text: "I want to be your study buddy, prayer partner, and best friend 🤝", category: "friendship" },
    { id: 28, text: "We can make spontaneous plans - 'want to grab lunch?' 🍽️", category: "proximity" },
    { id: 29, text: "I'll support your relationship with God above all else 🙏", category: "faith" },
    { id: 30, text: "You inspire me to be a better person every day ✨", category: "admiration" },
    { id: 31, text: "We can have real conversations, face-to-face 💬", category: "connection" },
    { id: 32, text: "I know your favorite spots on campus 📍", category: "attention" },
    { id: 33, text: "We're in the same season of life - figuring out university together 🎓", category: "compatibility" },
    { id: 34, text: "I can bring you soup when you're sick 🍲", category: "care" },
    { id: 35, text: "Choosing someone present over someone absent isn't giving up - it's wise 🧠", category: "wisdom" },
    { id: 36, text: "We can go to Bible study together 📖", category: "faith" },
    { id: 37, text: "I'll never ask you to choose between your faith and me 🙏💙", category: "values" },
    { id: 38, text: "We can celebrate holidays together on campus 🎄", category: "proximity" },
    { id: 39, text: "I know your class schedule (not in a creepy way! 😅) ", category: "attention" },
    { id: 40, text: "We can have movie nights with friends - group dates honor your values 🎬", category: "respect" },
    { id: 41, text: "God might be using this app to speak to your heart 💭", category: "faith" },
    { id: 42, text: "We already trust each other as friends 🤝", category: "foundation" },
    { id: 43, text: "I see your potential and want to cheer you on from the front row 📣", category: "support" },
    { id: 44, text: "We can walk across campus together under the stars 🌟", category: "romance" },
    { id: 45, text: "I respect your boundaries more than anyone 🛡️", category: "respect" },
    { id: 46, text: "We laugh at the same jokes 😂", category: "compatibility" },
    { id: 47, text: "I'll wait for you to be ready - no timeline, no pressure ⏳", category: "patience" },
    { id: 48, text: "We can build a relationship grounded in friendship first 👫", category: "foundation" },
    { id: 49, text: "Proximity isn't everything, but it sure helps relationships thrive 🌱", category: "wisdom" },
    { id: 50, text: "We're already comfortable around each other 😊", category: "connection" },
    { id: 51, text: "I respect that you're loyal - it's one of the things I love about you 💎", category: "admiration" },
    { id: 52, text: "We can join campus ministry together ✝️", category: "faith" },
    { id: 53, text: "I'll never compromise your relationship with God 🙏", category: "values" },
    { id: 54, text: "We understand each other's campus stress 😅", category: "empathy" },
    { id: 55, text: "I can help you with assignments (if you want!) 📝", category: "support" },
    { id: 56, text: "We're building memories right now, not waiting to build them later ⏰", category: "present" },
    { id: 57, text: "Your happiness is my prayer 🙏💙", category: "selfless" },
    { id: 58, text: "We can explore the city together on weekends 🌆", category: "adventure" },
    { id: 59, text: "I notice when you need space vs. when you need company 🤗", category: "emotional intelligence" },
    { id: 60, text: "We're both committed to honoring God in relationships ✨", category: "values" },
    { id: 61, text: "I'll always encourage your spiritual growth first 🌱", category: "faith" },
    { id: 62, text: "We can have breakfast together before morning classes 🥐", category: "proximity" },
    { id: 63, text: "I know your coffee order ☕", category: "attention" },
    { id: 64, text: "We can volunteer together for campus causes 🤝", category: "shared values" },
    { id: 65, text: "I respect your journey and won't rush you 🚶‍♀️", category: "patience" },
    { id: 66, text: "We already know each other's families (sort of!) 👨‍👩‍👧‍👦", category: "foundation" },
    { id: 67, text: "God's timing is perfect - maybe now is our timing 🕊️", category: "faith" },
    { id: 68, text: "We can have deep conversations over campus walks 🚶‍♂️🚶‍♀️", category: "connection" },
    { id: 69, text: "I'll celebrate your relationship with God, not compete with it 🙏", category: "respect" },
    { id: 70, text: "We're both figuring out life - let's figure it out together 🧩", category: "partnership" },
    { id: 71, text: "I can be there when you need a hug, not just a text 🤗", category: "proximity" },
    { id: 72, text: "We challenge each other to be better 💪", category: "growth" },
    { id: 73, text: "I understand your struggles because I'm living the same student life 🎓", category: "empathy" },
    { id: 74, text: "We can surprise each other with little campus visits 🎁", category: "spontaneity" },
    { id: 75, text: "I pray for you - even when you don't know it 🙏", category: "care" },
    { id: 76, text: "We have the same goals for faith-centered relationships 💑", category: "values" },
    { id: 77, text: "I'll never ask you to lower your standards 🌟", category: "respect" },
    { id: 78, text: "We can attend campus worship nights together 🎶", category: "faith" },
    { id: 79, text: "I see you - really see you - every day 👀💙", category: "attention" },
    { id: 80, text: "We're not just talking about 'someday' - we can live it now 🌟", category: "present" },
    { id: 81, text: "Long distance relationships have a 58% failure rate - proximity matters 📊", category: "wisdom" },
    { id: 82, text: "I'll always respect if you choose differently 🤝", category: "respect" },
    { id: 83, text: "We can fast and pray together during spiritual seasons 🙏", category: "faith" },
    { id: 84, text: "I want to know your heart, not change it 💙", category: "acceptance" },
    { id: 85, text: "We can have board game nights with our friend groups 🎲", category: "fun" },
    { id: 86, text: "I believe in the sacredness of relationships - I won't take you for granted 💎", category: "values" },
    { id: 87, text: "We can pack lunches and have picnics on campus 🧺", category: "romance" },
    { id: 88, text: "I notice when your smile doesn't reach your eyes 😊➡️💭", category: "emotional intelligence" },
    { id: 89, text: "We're reading the same textbooks - literally! 📚", category: "compatibility" },
    { id: 90, text: "I'll honor your commitment to purity and godliness 🙏💙", category: "respect" },
    { id: 91, text: "We can serve together in campus outreach programs ⛪", category: "ministry" },
    { id: 92, text: "I want to earn your trust, not demand it 🤝", category: "integrity" },
    { id: 93, text: "We can have late-night talks at the campus café ☕🌙", category: "connection" },
    { id: 94, text: "God brought us both to this university - that's not random 🎓✨", category: "faith" },
    { id: 95, text: "I'll support you through exams, stress, and victories 📝🎉", category: "support" },
    { id: 96, text: "We can explore God's plan together, step by step 🚶‍♂️🚶‍♀️", category: "faith" },
    { id: 97, text: "I'm not asking you to give up anything - I'm offering to add to your life 🎁", category: "addition" },
    { id: 98, text: "We already have a foundation of friendship and respect 🏗️", category: "foundation" },
    { id: 99, text: "I believe we could honor God together in a beautiful relationship 🙏💙", category: "vision" },
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
        <h2 className="card-title gradient-text-animate">100 Reasons Why We Could Be Great Together 💙🇿🇼</h2>
        <div className="card-content">
          <p style={{ marginBottom: '20px', textAlign: 'center', fontSize: '16px', color: '#718096' }}>
            I've thought about this a lot... Here's why I believe in us. 
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
                💙🇿🇼 You read all 100 reasons! That has to mean something... right? 😊
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
