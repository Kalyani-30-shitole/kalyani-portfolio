import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-brand">
        <div className="navbar-logo">K</div>
        <div className="navbar-name">KALYANI SHITOLE</div>
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <a href="#profile" onClick={closeMenu}>[01] PROFILE</a>
        <a href="#skills" onClick={closeMenu}>[02] SKILLS</a>
        <a href="#projects" onClick={closeMenu}>[03] PROJECTS</a>
        <a href="#education" onClick={closeMenu}>[04] EDUCATION</a>
        <a href="#education" onClick={closeMenu}>[05] CERTIFICATIONS</a>
        <a href="#contact" onClick={closeMenu}>[06] CONTACT</a>
      </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

    </nav>
  );
}

export default Navbar;