import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Vighnesh Vejandla</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About.js">About</Link></li>
        <li><Link to="/Projects.js">Projects</Link></li>
        <li><Link to="/Contact.js">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
