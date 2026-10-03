import { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">AI</span>
          <span>Asad Iqbal</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
        <ul id="primary-navigation" className={`nav-links${menuOpen ? " is-open" : ""}`}>
          {links.map(([label, target]) => (
            <li key={target}><a href={`#${target}`} onClick={() => setMenuOpen(false)}>{label}</a></li>
          ))}
          <li className="mobile-resume">
            <a className="button button-primary" href="/Asad_Iqbal_Resume.pdf" download="Asad_Iqbal_Resume.pdf">
              <FaDownload aria-hidden="true" /> Download Resume
            </a>
          </li>
        </ul>
        <a className="button button-primary nav-resume" href="/Asad_Iqbal_Resume.pdf" download="Asad_Iqbal_Resume.pdf">
          <FaDownload aria-hidden="true" /> Download Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;