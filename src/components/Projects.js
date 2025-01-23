import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my skills, projects, and contact details.',
      link: 'https://yourportfolio.com',
    },
    {
      title: 'E-commerce Store',
      description: 'A fully responsive e-commerce platform with features like product search, cart, and checkout.',
      link: 'https://ecommerce-demo.com',
    },
    {
      title: 'Task Manager App',
      description: 'A React app for managing daily tasks with features like add, edit, delete, and mark complete.',
      link: 'https://taskmanagerapp.com',
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
