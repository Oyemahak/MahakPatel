import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/global.css';

const Navbar = () => {
  const location = useLocation();

  // Let main.js control theme logic; no theme switching code here.

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'default';
    document.body.className = `${savedTheme}-theme`;
  }, []);

  return (
    <header>
      <div className="header-grid">
        <div className="header-col logo-col">
          <Link to="/">
            <img className="logo" src="/assets/images/logo.png" alt="Mahak Patel logo" />
          </Link>
        </div>
        <div className="header-col role-col">
          <div className="theme-switcher">
            <button className="theme-btn" data-theme="default" aria-label="Default Theme">
              <i className="fas fa-palette"></i>
            </button>
            <button className="theme-btn" data-theme="moon" aria-label="Moon Theme">
              <i className="fas fa-moon"></i>
            </button>
            <button className="theme-btn" data-theme="snow" aria-label="Snow Theme">
              <i className="fas fa-snowflake"></i>
            </button>
            <button className="theme-btn" data-theme="rain" aria-label="Rain Theme">
              <i className="fas fa-cloud-rain"></i>
            </button>
          </div>
        </div>
        <div className="header-col nav-col">
          <nav>
            <ul className="desktop-menu">
              <li className="tooltip-bottom">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <span className="tooltiptext-bottom">Back to home. Safe and sound.</span>
              </li>
              <li className="tooltip-bottom">
                <Link to="/play">Play</Link>
                <span className="tooltiptext-bottom">My creative playground!</span>
              </li>
              <li className="tooltip-bottom">
                <Link to="/about">About</Link>
                <span className="tooltiptext-bottom">Who’s behind this magic?</span>
              </li>
              <li className="tooltip-bottom">
                <a href="#contact">Contact</a>
                <span className="tooltiptext-bottom">Talk to me. I don’t bite.</span>
              </li>
            </ul>
            <div className="mobile-menu-icon">
              <i className="fas fa-bars"></i>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
