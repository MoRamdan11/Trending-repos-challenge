import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <h1>
        Trend <ion-icon name="logo-github"></ion-icon> Repos
      </h1>
      <ul>
        <a href="#">Repos</a>
        <a href="#">Features</a>
        <a href="#">Be trendy</a>
      </ul>
    </header>
  );
};

export default Navbar;
