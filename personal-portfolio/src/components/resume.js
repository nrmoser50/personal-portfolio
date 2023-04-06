import React from 'react';

const Resume = () => {
  return (
    <div id="resume">
      <h2>Resume</h2>
      <p>Download my resume <a href="/path/to/resume.pdf" download>here</a>.</p>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
};

export default Resume;