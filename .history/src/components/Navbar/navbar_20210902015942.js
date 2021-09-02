import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <h1 className="nav-header">
        Trend <ion-icon name="logo-github"></ion-icon> Repos
      </h1>
      <nav>
        <ul className="nav-list">
          <a className="nav-link" href="#">
            Repos
          </a>
          <a className="nav-link" href="#">
            Features
          </a>
          <a className="nav-link" href="#">
            Be trendy
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
