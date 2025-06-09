// moonTheme.js — 🌙 Night sky mood activator!
// Adds twinkling stars and a glowing moon

export function initMoonTheme() {
  createStars(200, 3); // ⭐ More stars for that night sky drama
  createMoon();        // 🌕 Because why not glow like a boss
}

// ✨ Generate twinkling stars
function createStars(count = 100, sizeVariation = 2) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    const size = 0.5 + Math.random() * sizeVariation;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.opacity = 0.3 + Math.random() * 0.7;
    star.style.animationDuration = `${2 + Math.random() * 5}s`;
    star.style.animationDelay = `${Math.random() * 10}s`;
    document.body.appendChild(star);
  }
}

// 🌕 The glorious glowing moon
function createMoon() {
  const moon = document.createElement('div');
  moon.className = 'moon';
  document.body.appendChild(moon);
}