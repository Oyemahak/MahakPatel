import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('https://admin-dashboard-mahak.onrender.com/api/skills')
      .then((res) => res.json())
      .then((data) => {
        const visibleSkills = data.filter(skill => skill.visible);
        console.log('✅ Skills from backend:', visibleSkills); // 👈 DEBUG LOG
        setSkills(visibleSkills);
      })
      .catch((err) => console.error('❌ Failed to fetch skills:', err));
  }, []);

  const categorizedSkills = {
    Development: [],
    'Design & Tools': [],
    'Cloud & Databases': [],
  };

  skills.forEach((skill) => {
    if (categorizedSkills[skill.category]) {
      categorizedSkills[skill.category].push(skill);
    }
  });

  return (
    <section id="skills">
      <h2>Professional Skills</h2>
      <div className="skills-container">
        <div className="skills-grid">
          {Object.entries(categorizedSkills).map(([category, skillsList]) => (
            <div className="skills-category" key={category}>
              <h3>{category}</h3>
              <div className="skills-icons">
                {skillsList.map((skill, index) => (
                  <div className="skill-icon" key={index} title={skill.name}>
                    <i className={`devicon-${skill.icon.trim()} colored`}></i>
                  </div>
                ))}

                {/* Always show fallback test icon */}
                <div className="skill-icon" title="Test Icon">
                  <i className="devicon-javascript-plain colored"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;