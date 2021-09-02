import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="main-header">
      <p className="nav-title">
        Trendy <ion-icon name="logo-github"></ion-icon> Repos
      </p>
      <nav className="main-nav">
        <ul className="nav-list">
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Repos
          </a>
          <a className="nav-link" href="#">
            Features
          </a>
          <a className="nav-link nav-btn" href="#">
            Be trendy
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
