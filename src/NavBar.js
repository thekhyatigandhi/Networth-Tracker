import React from "react";
import logo from "./logo.png"; // Import your logo
import "./NavBar"; // Import the CSS file

function NavBar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#networth-tracker">Networth Tracker</a>
        </li>
        <li>
          <a href="#uniqueness">Our Uniqueness</a>
        </li>
        <li>
          <a href="#services">Our Services</a>
        </li>
        <li>
          <a href="#learning">Learning</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
