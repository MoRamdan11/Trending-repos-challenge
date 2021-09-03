import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className="main-header">
      <p className="nav-title">
        Trendy<ion-icon name="logo-github" className="logo"></ion-icon>Repos
      </p>
      {openNav && (
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
      )}
      <button className="mobile-btn">
        {openNav ? (
          <ion-icon name="close-outline"></ion-icon>
        ) : (
          <ion-icon name="menu-outline"></ion-icon>
        )}
      </button>
    </header>
  );
};

export default Navbar;
