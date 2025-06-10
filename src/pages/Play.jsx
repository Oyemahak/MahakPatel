import React from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Play = () => {
  return (
    <main>
      <section id="projects">
        <div className="projects-header-centered playground-header">
          <h2>Mahak's Playground</h2>
          <p className="contact-description">
            Not just code, this is where creativity gets to play! Try out these mini games I built just for fun.
          </p>
        </div>

        <div className="projects-grid playground-grid">
          <div className="project playground-card">
            <img src="/assets/images/touch-me-preview.png" alt="Touch Me Game Preview" />
            <h3>Touch Me</h3>
            <p>Test your reflexes with this fast-paced game. Ready, set... tap!</p>
            <Link to="/touchme">
              <button className="resume-button center-btn">Play Now</button>
            </Link>
          </div>

          <div className="project playground-card">
            <img src="/assets/images/emogy-preview.png" alt="Emoji Match Game Preview" />
            <h3>Match Emogy</h3>
            <p>Can your brain keep up with emoji chaos? Find the pairs before the clock runs out!</p>
            <Link to="/memorygame">
              <button className="resume-button center-btn">Play Now</button>
            </Link>
          </div>
        </div>
      </section>

      <Contact />
      <div className="separator"></div>
      <Footer />
    </main>
  );
};

export default Play;