// main.jsx — The Launchpad 🚀
// React entry point with all themes imported like superheroes assembling

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App.jsx';

// 🧼 Global styles first!
import './styles/global.css';

// ✨ Theme base + interactions
import './styles/theme-switcher.css';

// 🌙 Glowing stars & cosmic vibes
import './styles/moon-theme.css';

// ❄️ Flakes, frost, and frozen focus rings
import './styles/snow-theme.css';

// 🌧️ Raindrops & lightning drama
import './styles/rain-theme.css';

import './styles/theme-effects.css'; // formerly theme-animations.css

// 🌟 Render the app!
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);