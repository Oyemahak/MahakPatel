import React from "react";
import "../styles/global.css";
import "../styles/theme-animations.css";
import WorkedFor from "../components/WorkedFor";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <main id="main-content">
        {/* Intro Section */}
        <section id="intro">
          <div className="intro-left">
            <h1>Mahak Patel</h1>
            <p className="bio">
              I'm a <span className="highlight">Web Developer</span> and{" "}
              <span className="highlight">UI/UX designer</span> who builds functional, stylish, and goal-driven digital
              experiences. I make sure every design is implementable and every website delivers results.
            </p>
            <p className="bio">
              <i>Scroll Down</i> to explore my projects and see how I bring creativity and precision to every line of
              code.
            </p>

            <div className="tooltip-bottom">
              <a href="/assets/images/Mahak_Patel_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="resume-button">Resume</button>
              </a>
              <span className="tooltiptext-bottom">
                Yeah yeah, it's not just a hover effect. Resume's attached—go ahead, click it!
              </span>
            </div>

            <div className="connect-container">
              <p className="connect">Connect with me:</p>
              <div className="social-icons">
                <a href="https://github.com/Oyemahak" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.instagram.com/oyemahak/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mahak-patel-167640150/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:mahakpateluux@gmail.com" aria-label="Email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="intro-right">
            <img src="/assets/images/profile-image.png" alt="Mahak Patel profile" />
            <p className="cta">
              I don't just build websites—I build solutions that work, look great, and get the job done.
            </p>
          </div>
        </section>

        {/* Worked For Section */}
        <WorkedFor />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />

        {/* Separator */}
        <div className="separator"></div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;