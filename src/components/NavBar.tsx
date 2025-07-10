import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css"

export default function NavBar() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState<boolean>(false);

  const toggleNavbarVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsNavbarExpanded((prev) => !prev);
  };

  const closeMenu = () => {
    setIsNavbarExpanded(false);
  }

  return (
    <header id="navbar">
      <nav className="navbar-container container">
        <Link to="/" className="home-link">
          henrychristian.tech
        </Link>

        <button
          type="button"
          id="navbar-toggle"
          aria-controls="navbar-menu"
          aria-label="Toggle menu"
          aria-expanded={isNavbarExpanded}
          onClick={toggleNavbarVisibility}
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        <div id="navbar-menu">
          <ul className="navbar-links">
            <li className="navbar-item">
              <Link className="navbar-link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
