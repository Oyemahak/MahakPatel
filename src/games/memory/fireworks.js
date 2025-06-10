// fireworks.js — 🎆 Celebration logic for MemoryGame
// Matches Mahak’s dark-themed gamified vibe!

export function createFirework() {
  const colors = ['#7F5AF0', '#2CB67D', '#FF6E6E']; // Purple, Teal, Coral
  const firework = document.createElement('div');

  firework.style.position = 'fixed';
  firework.style.width = '6px';
  firework.style.height = '6px';
  firework.style.borderRadius = '50%';
  firework.style.backgroundColor = randomColor();
  firework.style.left = `${Math.random() * 100}%`;
  firework.style.top = `${Math.random() * 100}%`;
  firework.style.zIndex = '999';
  firework.style.pointerEvents = 'none';
  firework.style.boxShadow = `0 0 12px 3px ${randomColor()}`;

  document.getElementById('fireworks')?.appendChild(firework);

  const animation = firework.animate(
    [
      { transform: 'scale(0)', opacity: 1 },
      { transform: 'scale(3)', opacity: 0 },
    ],
    {
      duration: 1000,
      easing: 'ease-out',
    }
  );

  animation.onfinish = () => firework.remove();
}

function randomColor() {
  const palette = ['#7F5AF0', '#2CB67D', '#FF6E6E'];
  return palette[Math.floor(Math.random() * palette.length)];
}