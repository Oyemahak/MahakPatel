import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Professional Skills</h2>
      <div className="skills-container">
        <div className="skills-grid">
          
          {/* Development Skills */}
          <div className="skills-category">
            <h3>Development</h3>
            <div className="skills-icons">
              {[
                'javascript-plain',
                'typescript-plain',
                'react-original',
                'nodejs-plain',
                'python-plain',
                'html5-plain',
                'css3-plain',
                'tailwindcss-plain'
              ].map((icon, index) => (
                <div className="skill-icon" title={icon.split('-')[0]} key={index}>
                  <i className={`devicon-${icon} colored`}></i>
                </div>
              ))}
            </div>
          </div>

          {/* Design & Tools */}
          <div className="skills-category">
            <h3>Design & Tools</h3>
            <div className="skills-icons">
              {[
                'figma-plain',
                'xd-plain',
                'photoshop-plain',
                'illustrator-plain',
                'vscode-plain',
                'git-plain',
                'github-original',
                'jira-plain'
              ].map((icon, index) => (
                <div className="skill-icon" title={icon.split('-')[0]} key={index}>
                  <i className={`devicon-${icon} colored`}></i>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud & Databases */}
          <div className="skills-category">
            <h3>Cloud & Databases</h3>
            <div className="skills-icons">
              {[
                'amazonwebservices-plain',
                'googlecloud-plain',
                'firebase-plain',
                'mongodb-plain',
                'postgresql-plain',
                'mysql-plain',
                'docker-plain',
                'kubernetes-plain'
              ].map((icon, index) => (
                <div className="skill-icon" title={icon.split('-')[0]} key={index}>
                  <i className={`devicon-${icon} colored`}></i>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
