import React, { useState } from "react";
import "./Navigation.css";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleMobileNavigation = () => {
    setOpenNav((prevState) => {
      return !prevState;
    });
  };
  const closeNav = () => {
    setOpenNav(false);
  };
  return (
    <header className={openNav ? "main-header open-nav" : "main-header"}>
      <a href="#" className="logo-link">
        <p className="nav-title">
          Trendy<ion-icon name="logo-github" className="logo"></ion-icon>Repos
        </p>
      </a>
      <nav className="main-nav">
        <ul className="nav-list">
          <a onClick={closeNav} className="nav-link" href="#">
            Home
          </a>
          <a onClick={closeNav} className="nav-link" href="#repos">
            Repos
          </a>
          <a onClick={closeNav} className="nav-link" href="#pagination">
            Pages
          </a>
          <a onClick={closeNav} className="nav-link nav-btn" href="#repos">
            Be trendy
          </a>
        </ul>
      </nav>
      <button className="mobile-btn" onClick={handleMobileNavigation}>
        <ion-icon name="close-outline"></ion-icon>
        <ion-icon name="menu-outline"></ion-icon>
      </button>
    </header>
  );
};

export default Navbar;
