import { Link } from 'react-router-dom';

export default function NavBar() {
    const navbarToggle = document.querySelector("#navbar-toggle");
    let isNavbarExpended = navbarToggle?.getAttribute("aria-expanded") === "true";

    const toggleNavbarVisibility = () => {
        isNavbarExpended = !isNavbarExpended;
        navbarToggle?.setAttribute("aria-expanded", isNavbarExpended);
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
              aria-expanded="false"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div className="navbar-menu">
              <ul className="navbar-links">
                <li className="navbar-item">
                  <Link className="navbar-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link className="navbar-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link className="navbar-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
    );
};
