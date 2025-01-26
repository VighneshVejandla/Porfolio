import React from 'react';
import './About.css';
import inter from '../Photos/inter.jpeg'
import school from '../Photos/school.jpg'
import university from '../Photos/university.jpg'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="main-heading">About Me</h2>
        <div className="education-container">
        <p className="about-me-text">
          Hello! I am Vejandala Vighnesh, <br/> and I am a passionate Software Developer with experience in building 
          scalable applications using ReactJS, Java with Spring Boot, Go, and PostgreSQL. Currently pursuing a Bachelor's 
          degree in Computer Science and Engineering at VIT-AP University (2021-2025), I have honed my skills in web development, 
          low-light image enhancement, and data structures. I am proficient in creating full-stack applications, working on real-time 
          multiplayer games, and integrating APIs to deliver user-focused solutions.
          <br/>I have successfully completed internships as a Software Development Engineer, gaining hands-on experience in building 
          robust systems. My interests lie in exploring emerging technologies, enhancing problem-solving abilities through LeetCode 
          challenges, and continually expanding my technical skill set. In my free time, I enjoy sketching, watching anime, and 
          playing mobile games.
        </p>

        <h2 className="section-heading">Education</h2>
          <div className="education-item">
            <img src={university} alt="VIT-AP University" className="education-image" />
            <div className="education-content">
              <h3>Bachelor's in Technology (BTech)</h3>
              <p>VIT-AP University, Computer Science and Engineering, 2021-2025</p>
              <p><strong>CGPA :</strong> 8.29</p>
            </div>
          </div>

          <div className="education-item alternate">
            <div className="education-content">
              <h3>Intermediate</h3>
              <p>Narayana Junior College, Science Stream, 2019-2021</p>
              <p><strong>Marks</strong> 875/1000</p>
            </div>
            <img src={inter} alt="Narayana Junior College" className="education-image" />
          </div>

          <div className="education-item">
            <img src={school} alt="Narayana [E.M] High School - Avanigadda" className="education-image" />
            <div className="education-content">
              <h3>School</h3>
              <p>Narayana [E.M] High School - Avanigadda, 2018 - 2019</p>
              <p><strong>GPA :</strong> 10</p>
            </div>
          </div>
        </div>

        <h2 className="section-heading">Skills</h2>
        <div className="skills-container">
          {[
            { icon: 'fab fa-java', name: 'Java', level: 80, color: '#f89820' },
            { icon: 'fab fa-python', name: 'Python', level: 70, color: '#3776ab' },
            { icon: 'fab fa-html5', name: 'HTML', level: 90, color: '#e44d26' },
            { icon: 'fab fa-css3-alt', name: 'CSS', level: 85, color: '#264de4' },
            { icon: 'fab fa-js-square', name: 'JavaScript', level: 75, color: '#f7df1e' },
            { icon: 'fab fa-react', name: 'React', level: 80, color: '#61dafb' },
            { icon: 'fas fa-database', name: 'MongoDB', level: 65, color: '#4DB33D' },
            { icon: 'fas fa-server', name: 'Django', level: 70, color: '#092E20' },
            { icon: 'fas fa-table', name: 'PostgreSQL', level: 60, color: '#336791' }
          ].map((skill, index) => (
            <div key={index} className="skill-item">
              <i className={skill.icon} style={{ color: skill.color }}></i>
              <span>{skill.name}</span>
              <div className="skill-bar">
                <div
                  className="skill-level"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color
                  }}
                ></div>
              </div>
              <p className="skill-percentage">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;