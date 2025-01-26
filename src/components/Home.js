import React from 'react';
import './Home.css';
import Resume from './Vighnesh_Vejandla_Resume.pdf';
import avatar from '../Photos/Avatar.png'

const Home = () => {
  return (
    <>
    <section className="home-section" id="home">
      <div className="home-container">
      <h1>Welcome to my Portfolio</h1>
        <p className='paragraph'>
          Hi, I'm Vighnesh Vejandla, a software development enthusiast with a strong foundation in React and backend development. I specialize in crafting seamless and efficient web applications.
        </p>
        <p className='paragraph'>
          Dive into my projects, get insights into my journey, and don't hesitate to reach out for collaboration or inquiries!
        </p>
        <a href={Resume} className="home-btn" download="Vighnesh_Vejandla_Resume.pdf">Download my Resume</a>
        <div className="social-links">
          <a href="https://linkedin.com/in/vighnesh-vejandla-59b87822b/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/VighneshVejandla" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://leetcode.com/u/Vighnesh2003/" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-code"></i>
          </a>
        </div>
      </div>
        <img src={avatar} className='image' alt='Vighnesh vejandla'></img>
    </section>
  </>
  );
};

export default Home;
