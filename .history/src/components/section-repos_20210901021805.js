import React from "react";
import "./section-repos.css";

const Repos = () => {
  return (
    <section className="section-repos grid">
      <div className="container" style={{ backgroundColor: "red" }}>
        <p className="subheading">Repos</p>
        <h2 className="heading-secondary">
          Trendy-Repos chooses best-repos from +190M repos
        </h2>
      </div>
    </section>
  );
};

export default Repos;
