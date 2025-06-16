import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  // Fetch skills from the backend
  useEffect(() => {
    fetch('https://admin-dashboard-mahak.onrender.com/api/skills')
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error('Failed to fetch skills:', err));
  }, []);

  // ✅ Only include visible skills
  const visibleSkills = skills.filter(skill => skill.visible);

  // Group visible skills by category
  const categorizedSkills = {
    Development: [],
    'Design & Tools': [],
    'Cloud & Databases': [],
  };

  visibleSkills.forEach((skill) => {
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
                  <div
                    className="skill-icon"
                    key={index}
                    title={skill.name}
                  >
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