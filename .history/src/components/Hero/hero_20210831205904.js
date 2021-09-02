import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero-container" style={{ margin: "0 auto" }}>
      <h1 className="hero-header">Don't waste time with normal repos.</h1>
      <p>
        The top trending repos with details (name, descrption, owner-name,
        ...etc) are here.
      </p>
    </div>
  );
};

export default Hero;
