// TouchMe.jsx — 👆 React version of "Catch the Button" game (final version)

import React, { useEffect, useRef, useState } from 'react';
import './touchme.css';
import Footer from '../../components/Footer';

const TouchMe = () => {
  const buttonRef = useRef(null);
  const boxRef = useRef(null);
  const [celebrate, setCelebrate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable on mobile/tablet

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
  }, [isMobile]);

  return (
    <div className="touchme-container">
      <div className="touchme-text">Catch me if you can!</div>
      <div className="touchme-box" ref={boxRef}>
        <button
          id="funnyButton"
          ref={buttonRef}
          disabled={isMobile}
          title={isMobile ? "This game is desktop only 👀 Try on a larger screen!" : ""}
        >
          Come on you can do it! 😜
        </button>
      </div>

      {celebrate && (
        <div className="celebration active">
          <div className="celebration-content">
            <h1>Congratulations 🎉</h1>
            <p>You outwitted the button. Respect 👏</p>
            <div className="button-group">
              <button className="button-23" onClick={() => window.location.reload()}>
                🔄 Try Again
              </button>
              <button className="button-40" onClick={() => window.location.href = '/play'}>
                🏠 Back to Play
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TouchMe;