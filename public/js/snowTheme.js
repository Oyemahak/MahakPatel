// snowTheme.js — ❄️ Chill Vibes Incoming!
// Gently rains down animated snowflakes

export function initSnowTheme() {
  createStars(120, 2); // ❄️ Winter nights deserve stars too
  createSnow();        // ☃️ Here come the snowflakes!
}

// ✨ Sprinkle in some stars — winter edition
function createStars(count = 120, sizeVariation = 2) {
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

// ❄️ Let it snow. Let it snow. Let it snow!
function createSnow() {
  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.top = `${Math.random() * -100}px`;
    snowflake.style.opacity = Math.random();
    snowflake.style.animationDuration = `${8 + Math.random() * 15}s`;
    snowflake.style.fontSize = `${0.5 + Math.random()}em`;
    document.body.appendChild(snowflake);
  }
}