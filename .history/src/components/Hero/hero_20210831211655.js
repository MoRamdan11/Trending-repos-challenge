import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div
        className="hero-container grid grid--2cols"
        style={{ margin: "0 auto" }}
      >
        <div>
          <h1 className="heading-primay">Don't waste time with poor repos.</h1>
          <p className="hero-text">
            The top trending repos are here. Check repos details (name,
            descrption, owner-name, ...etc).
          </p>
        </div>
        <div>
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
