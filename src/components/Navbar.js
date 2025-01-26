import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Vighnesh Vejandla</div>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="nav-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/About.js">
            <FontAwesomeIcon icon={faUser} className="nav-icon" /> About
          </Link>
        </li>
        <li>
          <Link to="/Projects.js">
            <FontAwesomeIcon icon={faProjectDiagram} className="nav-icon" /> Projects
          </Link>
        </li>
        <li>
          <Link to="/Contact.js">
            <FontAwesomeIcon icon={faEnvelope} className="nav-icon" /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
