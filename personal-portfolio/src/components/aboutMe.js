import React from 'react';
// import avatar from '../images/avatar.jpg';
// import '../styles/aboutMe.css';

function AboutMe() {
    return (
      <section id="about-me">
        <h2>About Me</h2>
        <div className="bio">
          {/* <img src={avatar} alt="Avatar" /> */}
          <p>
            Hi there! My name is Nick and I'm a web developer based in Utah. I'm passionate about building great user experiences and enjoy learning new technologies to improve my skills.
          </p>
        </div>
      </section>
    );
  }
  
  export default AboutMe;