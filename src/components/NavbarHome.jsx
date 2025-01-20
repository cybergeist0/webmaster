import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const NavbarHome = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/webmaster/" className="navbar-logo">
          Restaurant Name
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/webmaster/" className="nav-links" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/webmaster/menu" className="nav-links" onClick={() => setMenuOpen(false)}>
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/webmaster/approach" className="nav-links" onClick={() => setMenuOpen(false)}>
              Our Approach
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/webmaster/contact" className="nav-links" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarHome;
