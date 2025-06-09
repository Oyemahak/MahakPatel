import React from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const About = () => {
  return (
    <main>
      <section id="intro">
        <div className="intro-left">
          <h1>Mahak Patel</h1>
          <p className="bio">
            I'm a designer focused on building brands and creating digital experiences
            <span className="highlight"> — currently based in Toronto, Canada.</span>
          </p>
          <p className="bio">
            Ex-employee of <span className="highlight">Accenture</span> with 3 years of experience working with Citi Bank through Accenture.
          </p>
          <p className="bio">
            Also took on <span className="highlight">freelance gigs</span> – built the site for Dazzling Smile Dental Clinic and teamed up with TPM (Toronto's oldest theatre).
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div className="tooltip-bottom">
              <a href="/assets/images/Mahak_Patel_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="resume-button">Resume</button>
              </a>
              <span className="tooltiptext-bottom">Yeah yeah, it's not just a hover. Resume's actually there—click it already.</span>
            </div>

            <div className="tooltip-bottom">
              <a href="/#projects">
                <button className="resume-button">My Work</button>
              </a>
              <span className="tooltiptext-bottom">Let's go see what I've been building.</span>
            </div>
          </div>

          <div className="connect-container">
            <p className="connect">Connect with me:</p>
            <div className="social-icons">
              <a href="https://github.com/Oyemahak" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://www.instagram.com/oyemahak/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/mahak-patel-167640150/" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="mailto:mahakpateluux@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>

        <div className="intro-right">
          <img src="/assets/images/about-image.svg" alt="Professional web developer and UI/UX designer illustration" />
          <p className="cta">
            Aside from design, I enjoy trekking, camping, and I'm a professional badminton player.
          </p>
        </div>
      </section>

      <Contact />
      <div className="separator"></div>
      <Footer />
    </main>
  );
};

export default About;