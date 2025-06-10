// TouchMe.jsx — 👆 React version of "Catch the Button" game

import React, { useEffect, useRef, useState } from 'react';
import './touchme.css';

const TouchMe = () => {
  const buttonRef = useRef(null);
  const boxRef = useRef(null);
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    const box = boxRef.current;

    const moveButton = () => {
      const boxWidth = box.offsetWidth;
      const boxHeight = box.offsetHeight;
      const buttonWidth = button.offsetWidth;
      const buttonHeight = button.offsetHeight;

      const newX = Math.random() * (boxWidth - buttonWidth);
      const newY = Math.random() * (boxHeight - buttonHeight);

      button.style.left = `${newX}px`;
      button.style.top = `${newY}px`;
    };

    const handleMouseOver = () => moveButton();
    const handleClick = () => setCelebrate(true);

    button.addEventListener('mouseover', handleMouseOver);
    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('mouseover', handleMouseOver);
      button.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="touchme-container">
      <div className="touchme-text">Catch me if you can!</div>
      <div className="touchme-box" ref={boxRef}>
        <button id="funnyButton" ref={buttonRef}>
          Come on you can do it! 😜
        </button>
      </div>

      {celebrate && (
        <div className="celebration active">
          <div className="celebration-content">
            <h1>Congratulations 🎉</h1>
            <p>Even the smallest win is proof that you're moving forward. Celebrate it!</p>
            <div className="button-group">
              <button className="button-23" onClick={() => window.location.reload()}>
                🔄 Try Again
              </button>
              <button className="button-40" onClick={() => setCelebrate(false)}>
                🏠 Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TouchMe;