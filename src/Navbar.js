import React, { useState } from 'react';
import './index.css';
import icon from "./image/icon.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"><img src={icon} class="d-block w-100" alt="..." id="car2" /></a>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/"><i class="fa-solid fa-house"></i>Home</a></li>
        <li><a href="/about"><i class="fa-solid fa-heart"></i>About</a></li>
        <li><a href="/services"><i class="fa-solid fa-user"></i>Services</a></li>
        <li><a href="/contact"><i class="fa-solid fa-phone"></i>Contact</a></li>
        <li><a href="/login"><i class="fa-solid fa-circle-user"></i>Login</a></li>
        <li><a href="/register"> <i class="fa-solid fa-truck"></i>Ticket</a></li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
