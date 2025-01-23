import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-container">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Vighnesh Vejandla, a passionate frontend developer dedicated to building stunning and responsive web applications. 
        </p>
        <p>
          Explore my projects, learn more about me, and feel free to get in touch!
        </p>
        <a href="/Projects.js" className="home-btn">View My Work</a>
      </div>
    </section>
    
  );
};

export default Home;
