// MemoryGame.jsx — 🧠 Match the Emoji game polished for portfolio vibes

import React, { useEffect, useState } from 'react';
import './memory.css';
import { createFirework } from './fireworks'; // 🎆 Boom boom yay!

const MemoryGame = () => {
  const emojis = ['❤️', '😂', '🔥', '👍', '😍', '🙏', '🎉', '🤔'];
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    const shuffled = [...emojis, ...emojis]
      .sort(() => 0.5 - Math.random())
      .map((emoji, i) => ({ id: i, emoji, flipped: false, matched: false }));
    setCards(shuffled);

    const id = setInterval(() => setTime((t) => t + 1), 1000);
    setTimerId(id);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (matched.length === emojis.length) {
      clearInterval(timerId);
      for (let i = 0; i < 15; i++) {
        setTimeout(() => createFirework(), i * 200);
      }
    }
  }, [matched]);

  const handleFlip = (card) => {
    if (flipped.length === 2 || flipped.some((c) => c.id === card.id) || card.matched) return;

    const newFlipped = [...flipped, card];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((prev) => prev + 1);
      const [first, second] = newFlipped;
      if (first.emoji === second.emoji) {
        setMatched((prev) => [...prev, first.emoji]);
        setCards((prev) =>
          prev.map((c) => (c.emoji === first.emoji ? { ...c, matched: true } : c))
        );
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="memory-wrapper">
      <div className="memory-container">
        <h1 className="game-title">Match The Emoji</h1>
        <div className="game-stats">
          <div className="stat">⏱️ {time}s</div>
          <div className="stat">🔁 {moves}</div>
        </div>

        <div className="game-board">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`card ${
                flipped.some((c) => c.id === card.id) || card.matched ? 'flipped' : ''
              } ${card.matched ? 'matched' : ''}`}
              onClick={() => handleFlip(card)}
            >
              <div className="card-face card-front">{card.emoji}</div>
              <div className="card-face card-back">?</div>
            </div>
          ))}
        </div>

        <div className="fireworks-container" id="fireworks"></div>
      </div>
    </div>
  );
};

export default MemoryGame;