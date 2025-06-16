import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('https://admin-dashboard-mahak.onrender.com/api/skills')
      .then((res) => res.json())
      .then((data) => {
        const visibleSkills = data.filter(skill => skill.visible); // ✅ Show only visible ones
        setSkills(visibleSkills);
      })
      .catch((err) => console.error('❌ Failed to fetch skills:', err));
  }, []);

  const categorizedSkills = {
    Development: [],
    'Design & Tools': [],
    'Cloud & Databases': [],
  };

  skills.forEach(skill => {
    if (categorizedSkills[skill.category]) {
      categorizedSkills[skill.category].push(skill);
    }
  });

  return (
    <section id="skills">
      <h2>Professional Skills</h2>
      <div className="skills-container">
        <div className="skills-grid">
          {Object.entries(categorizedSkills).map(([category, skillList]) => (
            <div className="skills-category" key={category}>
              <h3>{category}</h3>
              <div className="skills-icons">
                {skillList.map((skill, index) => (
                  <div className="skill-icon" key={index} title={skill.name}>
                    <i className={`devicon-${skill.icon} colored`}></i>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;