// Skills.js
import React from 'react';

function Skills() {
  const skillsList = [
    'Java',
    'Python',
    'SQL',
    'API',
    'HTML',
    'JavaScript',
    'Git',
    'GitLab',
    'Cloud',
    'R',
    'Power BI',
    'Kubernetes',
    'MongoDB',
    'Debian packaging',
    'Go',
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skillsList.map((skill, index) => (
          <span key={index} className="skill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
