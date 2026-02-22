import { useState } from 'react';

export default function MusicPlaylist() {
  const [selectedSong, setSelectedSong] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [filterMood, setFilterMood] = useState('all');

  const playlist = [
    {
      id: 1,
      title: "10,000 Reasons (Bless the Lord)",
      artist: "Matt Redman",
      mood: "worship",
      reason: "A reminder that no matter what we face, there are always countless reasons to worship. In relationships, gratitude transforms everything.",
      connection: "When challenges come, worshiping together refocuses our hearts on what truly matters—God's faithfulness.",
      lyrics: '"The sun comes up, it\'s a new day dawning..."',
      spotify: "https://open.spotify.com/track/0qWRCY6eA7iramCH7vLEgK"
    },
    {
      id: 2,
      title: "Oceans (Where Feet May Fail)",
      artist: "Hillsong UNITED",
      mood: "faith",
      reason: "Taking a leap of faith requires trust. This song embodies stepping into the unknown with confidence in God's presence.",
      connection: "Every relationship requires stepping out of comfort zones—trusting God to meet you there.",
      lyrics: '"Spirit lead me where my trust is without borders..."',
      spotify: "https://open.spotify.com/track/1Hco7QvnvsxwLoRq7jcxqc"
    },
    {
      id: 3,
      title: "Build Your Kingdom Here",
      artist: "Rend Collective",
      mood: "purpose",
      reason: "Relationships aren't just about us—they're about building God's Kingdom together, making a difference.",
      connection: "When two people unite with Kingdom purpose, they multiply their impact for eternity.",
      lyrics: '"Come set Your rule and reign in our hearts again..."',
      spotify: "https://open.spotify.com/track/4KlFbT8ZvdVF0I1tYNd8vh"
    },
    {
      id: 4,
      title: "Good Good Father",
      artist: "Chris Tomlin",
      mood: "comfort",
      reason: "Understanding God as our perfect Father helps us love each other better—no pressure to be perfect, just loved.",
      connection: "When we know we're loved by the Father, we can love each other from overflow, not emptiness.",
      lyrics: '"You\'re a good, good Father, it\'s who You are..."',
      spotify: "https://open.spotify.com/track/4E701t4BnFfIDOONhQzKR8"
    },
    {
      id: 5,
      title: "Love Someone",
      artist: "Lukas Graham",
      mood: "romantic",
      reason: "Love isn't just a feeling—it's a choice, an action, a commitment. This song captures that beautifully.",
      connection: "The best kind of love is intentional, choosing each other every single day.",
      lyrics: '"Before you love someone, you gotta learn to love yourself..."',
      spotify: "https://open.spotify.com/track/0E9PbDoY3qgXvdXw7xU8fU"
    },
    {
      id: 6,
      title: "Cornerstone",
      artist: "Hillsong Worship",
      mood: "foundation",
      reason: "Christ must be the cornerstone of any relationship that will last. Everything else shifts, but He remains.",
      connection: "Building on the Rock means storms won't destroy what you've built together.",
      lyrics: '"Christ alone, Cornerstone, weak made strong in the Savior\'s love..."',
      spotify: "https://open.spotify.com/track/5m1YQgj4y9l46wQGYYxfDI"
    },
    {
      id: 7,
      title: "Stand By You",
      artist: "Rachel Platten",
      mood: "supportive",
      reason: "True love means standing together through everything—victories, struggles, breakdowns, and breakthroughs.",
      connection: "Knowing someone will stand by you no matter what creates unshakeable security.",
      lyrics: '"Even if we can\'t find heaven, I\'ll walk through hell with you..."',
      spotify: "https://open.spotify.com/track/4nxIqFVJ2Sy4JyHaLnQ9cg"
    },
    {
      id: 8,
      title: "Great Are You Lord",
      artist: "All Sons & Daughters",
      mood: "worship",
      reason: "Simplicity and sincerity in worship—letting your life be one continuous song of praise together.",
      connection: "When you worship together, you're practicing unity at the deepest level.",
      lyrics: '"It\'s Your breath in our lungs, so we pour out our praise..."',
      spotify: "https://open.spotify.com/track/3vqNeVKDDHCksvvCihJlNE"
    },
    {
      id: 9,
      title: "A Thousand Years",
      artist: "Christina Perri",
      mood: "romantic",
      reason: "The idea of waiting, of being certain, of knowing someone is worth every moment—timeless romance.",
      connection: "Some things are worth waiting for. True love doesn't rush, it matures.",
      lyrics: '"I have died everyday waiting for you..."',
      spotify: "https://open.spotify.com/track/0goHCwmPpBgrYATlKyGjdH"
    },
    {
      id: 10,
      title: "Reckless Love",
      artist: "Cory Asbury",
      mood: "grace",
      reason: "God's love pursues relentlessly. Understanding this transforms how we love others—with grace and pursuit.",
      connection: "When you've experienced God's reckless love, you can love others with that same overwhelming grace.",
      lyrics: '"Oh, the overwhelming, never-ending, reckless love of God..."',
      spotify: "https://open.spotify.com/track/3hAKmcLMJId5Wd7SbkGULl"
    },
    {
      id: 11,
      title: "Closer",
      artist: "The Chainsmokers ft. Halsey",
      mood: "connection",
      reason: "Nostalgia, memories, and the magnetic pull that brings two people back together—powerful connection.",
      connection: "Some connections transcend distance, time, and circumstances. They just keep pulling you back.",
      lyrics: '"So baby pull me closer in the backseat of your Rover..."',
      spotify: "https://open.spotify.com/track/7BKLCZ1jbUBVqRi2FVlTVw"
    },
    {
      id: 12,
      title: "Way Maker",
      artist: "Sinach",
      mood: "faith",
      reason: "When you can't see the way forward, God is making a way. Trust Him in the waiting and the uncertainty.",
      connection: "In relationships, God is the ultimate Way Maker—trust His timing and His path.",
      lyrics: '"Way Maker, Miracle Worker, Promise Keeper, Light in the darkness..."',
      spotify: "https://open.spotify.com/track/2GBT4iMs0FjhJkKlE7Kqa8"
    },
    {
      id: 13,
      title: "Perfect",
      artist: "Ed Sheeran",
      mood: "romantic",
      reason: "Finding someone who feels like home, who sees you as beautiful even in ordinary moments—that's rare.",
      connection: "Real love isn't about perfection, it's about finding someone who's perfect *for you*.",
      lyrics: '"I found a love for me, darling just dive right in..."',
      spotify: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v"
    },
    {
      id: 14,
      title: "The Blessing",
      artist: "Kari Jobe & Cody Carnes",
      mood: "blessing",
      reason: "Speaking blessing over someone is powerful. This song is a prayer for favor, protection, and presence.",
      connection: "When you bless each other intentionally, you partner with God's plans for your lives.",
      lyrics: '"The Lord bless you and keep you, make His face shine upon you..."',
      spotify: "https://open.spotify.com/track/1CgJDl3IuQxC0TkwtGvBPE"
    },
    {
      id: 15,
      title: "Counting Stars",
      artist: "OneRepublic",
      mood: "hopeful",
      reason: "Not settling for ordinary when extraordinary is possible—choosing faith over fear, hope over cynicism.",
      connection: "Don't settle. Keep counting stars. Keep believing in something greater.",
      lyrics: '"Lately I\'ve been losing sleep, dreaming about the things that we could be..."',
      spotify: "https://open.spotify.com/track/2tpWsVSb9UEmDRxAl1zhX1"
    }
  ];

  const moods = [
    { value: 'all', label: 'All Songs', icon: '🎵', color: '#667eea' },
    { value: 'worship', label: 'Worship', icon: '🙏', color: '#8b5cf6' },
    { value: 'romantic', label: 'Romantic', icon: '💕', color: '#ec4899' },
    { value: 'faith', label: 'Faith', icon: '✝️', color: '#3b82f6' },
    { value: 'supportive', label: 'Supportive', icon: '🤝', color: '#10b981' },
    { value: 'hopeful', label: 'Hopeful', icon: '⭐', color: '#f59e0b' }
  ];

  const filteredPlaylist = filterMood === 'all' 
    ? playlist 
    : playlist.filter(song => song.mood === filterMood);

  const toggleFavorite = (songId) => {
    if (favorites.includes(songId)) {
      setFavorites(favorites.filter(id => id !== songId));
    } else {
      setFavorites([...favorites, songId]);
    }
  };

  return (
    <div className="container">
      <div className="card scale-in">
        <h2 className="card-title">🎵 Our Playlist</h2>
        <div className="card-content">
          <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px', color: '#667eea', lineHeight: '1.8' }}>
            Music speaks what words can't express. Each song tells part of a story—about faith, love, 
            connection, and the journey we're on. Listen, feel, and let the music say what the heart knows. 💙
          </p>

          {/* Favorites Counter */}
          {favorites.length > 0 && (
            <div style={{
              background: 'linear-gradient(135deg, #ec4899, #db2777)',
              color: 'white',
              padding: '20px',
              borderRadius: '15px',
              marginBottom: '25px',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                ❤️ {favorites.length} Favorite Song{favorites.length !== 1 ? 's' : ''}
              </span>
            </div>
          )}

          {/* Mood Filter */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            marginBottom: '30px',
            border: '3px solid #E8B4F0'
          }}>
            <h3 style={{ color: '#667eea', marginBottom: '15px', fontSize: '16px' }}>Filter by Mood:</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '10px'
            }}>
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => setFilterMood(mood.value)}
                  style={{
                    padding: '12px 8px',
                    background: filterMood === mood.value ? mood.color : 'white',
                    color: filterMood === mood.value ? 'white' : mood.color,
                    border: `2px solid ${mood.color}`,
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div>{mood.icon}</div>
                  <div style={{ marginTop: '5px' }}>{mood.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Song Detail View */}
          {selectedSong && (
            <div className="fade-in" style={{
              background: 'white',
              padding: '35px',
              borderRadius: '20px',
              marginBottom: '30px',
              border: '3px solid #667eea'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <button
                  onClick={() => setSelectedSong(null)}
                  style={{
                    padding: '10px 20px',
                    background: '#e5e7eb',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}
                >
                  ← Back to Playlist
                </button>
                <button
                  onClick={() => toggleFavorite(selectedSong.id)}
                  style={{
                    padding: '10px 20px',
                    background: favorites.includes(selectedSong.id) ? '#ec4899' : '#E8B4F0',
                    color: favorites.includes(selectedSong.id) ? 'white' : '#667eea',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '18px'
                  }}
                >
                  {favorites.includes(selectedSong.id) ? '❤️' : '🤍'}
                </button>
              </div>

              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ fontSize: '60px', marginBottom: '15px' }}>🎵</div>
                <h2 style={{ color: '#667eea', fontSize: '28px', marginBottom: '10px' }}>
                  {selectedSong.title}
                </h2>
                <p style={{ fontSize: '18px', color: '#764ba2', marginBottom: '20px' }}>
                  {selectedSong.artist}
                </p>
                <div style={{
                  display: 'inline-block',
                  background: moods.find(m => m.value === selectedSong.mood)?.color || '#667eea',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 'bold'
                }}>
                  {moods.find(m => m.value === selectedSong.mood)?.icon} {moods.find(m => m.value === selectedSong.mood)?.label}
                </div>
              </div>

              <div style={{
                background: '#f9fafb',
                padding: '25px',
                borderRadius: '15px',
                marginBottom: '20px'
              }}>
                <h3 style={{ color: '#667eea', fontSize: '16px', marginBottom: '12px' }}>
                  💭 Why This Song Matters:
                </h3>
                <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.8' }}>
                  {selectedSong.reason}
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #FFF8F0, #E8B4F0)',
                padding: '25px',
                borderRadius: '15px',
                marginBottom: '20px'
              }}>
                <h3 style={{ color: '#764ba2', fontSize: '16px', marginBottom: '12px' }}>
                  💙 The Connection:
                </h3>
                <p style={{ fontSize: '15px', color: '#667eea', lineHeight: '1.8' }}>
                  {selectedSong.connection}
                </p>
              </div>

              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '12px',
                border: '2px solid #E8B4F0',
                marginBottom: '25px',
                fontStyle: 'italic',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '15px', color: '#667eea' }}>
                  {selectedSong.lyrics}
                </p>
              </div>

              <a
                href={selectedSong.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '18px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                🎧 Listen on Spotify
              </a>
            </div>
          )}

          {/* Playlist Grid */}
          {!selectedSong && (
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <h3 style={{ color: '#667eea' }}>
                  {filteredPlaylist.length} Song{filteredPlaylist.length !== 1 ? 's' : ''}
                </h3>
                {filterMood !== 'all' && (
                  <button
                    onClick={() => setFilterMood('all')}
                    style={{
                      padding: '8px 15px',
                      background: '#E8B4F0',
                      color: '#667eea',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: 'bold'
                    }}
                  >
                    Clear Filter
                  </button>
                )}
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px'
              }}>
                {filteredPlaylist.map((song) => {
                  const moodInfo = moods.find(m => m.value === song.mood);
                  
                  return (
                    <div
                      key={song.id}
                      style={{
                        background: 'white',
                        padding: '25px',
                        borderRadius: '15px',
                        border: `3px solid ${moodInfo?.color}30`,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        position: 'relative'
                      }}
                      className="hover-lift"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(song.id);
                        }}
                        style={{
                          position: 'absolute',
                          top: '15px',
                          right: '15px',
                          background: 'none',
                          border: 'none',
                          fontSize: '24px',
                          cursor: 'pointer'
                        }}
                      >
                        {favorites.includes(song.id) ? '❤️' : '🤍'}
                      </button>

                      <div
                        onClick={() => setSelectedSong(song)}
                      >
                        <div style={{
                          fontSize: '48px',
                          marginBottom: '15px',
                          textAlign: 'center'
                        }}>
                          🎵
                        </div>

                        <h3 style={{
                          color: moodInfo?.color || '#667eea',
                          marginBottom: '8px',
                          fontSize: '18px',
                          fontWeight: 'bold'
                        }}>
                          {song.title}
                        </h3>

                        <p style={{
                          fontSize: '14px',
                          color: '#9ca3af',
                          marginBottom: '15px'
                        }}>
                          {song.artist}
                        </p>

                        <div style={{
                          background: `${moodInfo?.color}15`,
                          color: moodInfo?.color,
                          padding: '6px 12px',
                          borderRadius: '15px',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          display: 'inline-block',
                          marginBottom: '15px'
                        }}>
                          {moodInfo?.icon} {moodInfo?.label}
                        </div>

                        <p style={{
                          fontSize: '14px',
                          color: '#6b7280',
                          lineHeight: '1.6'
                        }}>
                          {song.reason.substring(0, 100)}...
                        </p>

                        <p style={{
                          marginTop: '15px',
                          color: moodInfo?.color,
                          fontSize: '14px',
                          fontWeight: 'bold'
                        }}>
                          Read more →
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {filteredPlaylist.length === 0 && (
            <div style={{
              background: 'linear-gradient(135deg, #FFF8F0, #E8B4F0)',
              padding: '50px 30px',
              borderRadius: '20px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '60px', marginBottom: '15px' }}>🎵</div>
              <h3 style={{ color: '#764ba2', marginBottom: '12px' }}>
                No Songs in This Mood
              </h3>
              <p style={{ fontSize: '15px', color: '#667eea' }}>
                Try selecting a different mood filter to see more songs.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
