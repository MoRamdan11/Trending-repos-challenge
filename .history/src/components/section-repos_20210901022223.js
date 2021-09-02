import React from "react";
import Repo from "./Repo-Row/row";
import "./section-repos.css";

const Repos = () => {
  return (
    <section className="section-repos">
      <div className="container">
        <header>
          <p className="subheading">Repos</p>
          <h2 className="heading-secondary">
            Trendy-Repos chooses best-repos from +190M repos
          </h2>
        </header>
      </div>
    </section>
  );
};

export default Repos;
