// Projects.js
import React from 'react';

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="project">
        <h3>Password-Generator</h3>
        <p>This is a java console application to generate Random passwords
            and performing a strength check.
        </p>
      </div>
      <div className="project">
        <h3>Machine learning and Deep learning</h3>
        <p>The project is part of my data science and machine learning practices. 
            The project covers regression, decision trees, SVM, Neural networks, CNN and time series forecasting.
            I have used both python and R programming.
        </p>
      </div>
      {/* Add more project entries as needed */}
    </section>
  );
}

export default Projects;
