// fireworks.js — 🎆 Boom! Boom! Celebration script

export function createFirework() {
  const colors = ['#7F5AF0', '#2CB67D', '#FF6E6E']; // Purple, teal, coral
  const firework = document.createElement('div');

  firework.style.position = 'fixed';
  firework.style.width = '6px';
  firework.style.height = '6px';
  firework.style.borderRadius = '50%';
  firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  firework.style.left = `${Math.random() * 100}%`;
  firework.style.top = `${Math.random() * 100}%`;
  firework.style.boxShadow = `0 0 10px 2px ${colors[Math.floor(Math.random() * colors.length)]}`;
  firework.style.zIndex = '999';
  firework.style.pointerEvents = 'none';

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