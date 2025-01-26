import React from 'react';
import './Projects.css';
import Kunban from '../Photos/kunban-board.jpg';
import RRS from '../Photos/RRS.jpg'
import TradeMarkia from '../Photos/trademarkia.jpg'
import PortfolioTracker from '../Photos/Portfolio_tracker.jpg'
import LOL from '../Photos/LOL.png'
import GoLang from '../Photos/GoLang.jpg'
import BlueStock from '../Photos/BlueStock.jpeg'
import ChessGame from '../Photos/ChessGame.jpg'
import AquaCulture from '../Photos/AquaCulture.jpg'

const Projects = () => {
  const projectList = [
    {
      title: 'Kanban Board',
      description: 'A ReactJS application implementing a Kanban board for task management. Users can add, move, edit, and delete tasks across columns.',
      languages: ['ReactJS', 'CSS'],
      image: Kunban,
      github: 'https://github.com/VighneshVejandla/Kunban-Board.git',
    },
    {
      title: 'Restaurant Reservation System',
      description: 'A React app to book and manage restaurant reservations with a modern user interface.',
      languages: ['ReactJS', 'CSS', 'JavaScript'],
      image: RRS,
      github: 'https://github.com/VighneshVejandla/MERN-RESTAURANT-RESRVATION',
    },
    {
      title: 'Trademakeia Homepage',
      description: 'A responsive homepage replica of Trademakeia with working APIs.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      image: TradeMarkia,
      link: 'https://trademakeia-demo.com',
      github: 'https://github.com/VighneshVejandla/21bce7609',
    },
    {
      title: 'Portfolio Tracker',
      description: 'A full-stack application to manage and track stock portfolio holdings with real-time stock price integration.',
      languages: ['ReactJS', 'Java', 'Spring Boot', 'MySQL'],
      image: PortfolioTracker,
      github: 'https://github.com/VighneshVejandla/portifolioTracker',
    },
    {
      title: 'Low-Light Image Enhancer',
      description: 'A Flask-based tool for enhancing low-light images using deep learning models like MFDNet.',
      languages: ['Python', 'Flask'],
      image: LOL,
      github: 'https://github.com/VighneshVejandla/Low-Light-Image-Enhancement',
    },
    {
      title: 'APIs Using Golang & PostgreSQL',
      description: 'A backend project utilizing Go and PostgreSQL to build a robust RESTful API for managing data efficiently.',
      languages: ['Go', 'PostgreSQL'],
      image: GoLang,
      github: 'https://github.com/VighneshVejandla/APIs_Using_Golang_PostgreSQL',
    },
    {
      title: 'Bluestock Fintech Internship Project',
      description: 'Developed and optimized backend services to enhance financial data processing and improve API response times for fintech applications.',
      languages: ['Java', 'Spring Boot', 'MySQL'],
      image: BlueStock,
      github: 'https://github.com/VighneshVejandla/BlueStock_fintech',
    },
    {
      "title": "Chess-like Game Project",
      "description": "Developed a real-time multiplayer chess-like game in React, featuring 5 characters (3 pawns, 2 heroes) on a 5x5 board, with WebSocket integration for player connection and move synchronization.",
      "languages": ["React", "JavaScript", "CSS", "WebSocket"],
      "image": ChessGame,
      "github": "https://github.com/VighneshVejandla/hitwicket"
    },
    {
      "title": "Aquaculture Website",
      "description": "Developed a website focused on aquaculture, featuring information on aquaculture practices, sustainability, and industry insights.",
      "languages": ["HTML", "CSS", "JavaScript"],
      "image": AquaCulture,
      "github": "https://github.com/VighneshVejandla/Aquaculture--website"
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-languages">
                {project.languages.map((language, idx) => (
                  <span className="language-tag" key={idx}>
                    {language}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <i className="fab fa-github github-icon"></i> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
