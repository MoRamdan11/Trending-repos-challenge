import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container grid grid--2cols">
        <div>
          <h1 className="heading-primay">Don't waste time with poor repos</h1>
          <p className="hero-text">
            Top trending Github-repos are here. Check repos details (name,
            descrption, owner-name ...etc).
          </p>
          <a href="#" className="btn">
            View repos &rarr;
          </a>
          <div className="users-container">
            <div className="user-imgs">
              <img
                src={require("../../img/users/user-1.jpg").default}
                alt="github-user-img"
              />
              <img
                src={require("../../img/users/user-2.jpg").default}
                alt="github-user-img"
              />
              <img
                src={require("../../img/users/user-3.jpg").default}
                alt="github-user-img"
              />
              <img
                src={require("../../img/users/user-4.jpg").default}
                alt="github-user-img"
              />
              <img
                src={require("../../img/users/user-5.jpg").default}
                alt="github-user-img"
              />
              <img
                src={require("../../img/users/user-6.jpg").default}
                alt="github-user-img"
              />
            </div>
            <p className="users-text">
              <span>40M+ </span>Github users!
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <img
            class="hero-img"
            src={require("./hero-img.png").default}
            alt="github logo and github code"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
