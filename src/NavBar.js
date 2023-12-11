import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"; // Import your logo
import "./NavBar.css"; // Import the CSS file

function NavBar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/networth-tracker">Networth Tracker</Link>
        </li>
        <li>
          <Link to="/our-uniqueness">Our Uniqueness</Link>
        </li>
        <li>
          <Link to="/our-services">Our Services</Link>
        </li>
        <li>
          <Link to="/learning">Learning</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
