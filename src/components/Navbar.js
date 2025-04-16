import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/journal">Journal</Link>
      <Link to="/gallery">Gallery</Link>
    </nav>
  );
}

export default Navbar;
