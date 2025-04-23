import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/journal" className="nav-link">Journal</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
      </div>
    </nav>
  );
}

export default Navbar;