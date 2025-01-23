import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          Hi, I'm Vighnesh Vejandla, a passionate frontend developer with a love for crafting beautiful and functional user experiences. 
          With a strong foundation in web technologies like HTML, CSS, JavaScript, and React, I strive to create seamless and responsive websites.
        </p>
        <p>
          In addition to coding, I enjoy exploring new technologies and continuously improving my skills. My goal is to contribute to 
          impactful projects and bring innovative ideas to life. When I'm not coding, you can find me reading books or exploring new places.
        </p>
        <a href="#contact" className="about-btn">Get in Touch</a>
      </div>
    </section>
  );
};

export default About;
