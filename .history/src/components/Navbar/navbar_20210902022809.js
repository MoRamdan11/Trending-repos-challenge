import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="main-header">
      <p className="nav-title">
        <span>Trendy</span>{" "}
        <ion-icon name="logo-github" className="logo"></ion-icon>{" "}
        <span>Repos</span>
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
