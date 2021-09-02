import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero-container" style={{ margin: "0 auto" }}>
      <h1 className="hero-header">Best Repos are here.</h1>
      <p>
        The top trending repos with details (name, descrption, owner-name,
        ...etc)
      </p>
    </div>
  );
};

export default Hero;
