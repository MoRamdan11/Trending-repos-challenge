import React, { useEffect, useState } from "react";
import Repo from "./Repo-Row/repo";
import Pagination from "./pagination/pagination";
import "./section-repos.css";
import axios from "axios";
import { connect } from "react-redux";

const Repos = ({ currentPage }) => {
  const [reposData, setReposData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${currentPage}`
      )
      .then((response) => {
        setReposData([]);
        setReposData(response.data.items);
        setTimeout(300, () => {
          console.log("eee", reposData);
        });
        console.log("eee", reposData);
        // console.log(response.data);
      });
  }, [currentPage]);
  return (
    <section className="section-repos">
      <div className="container">
        <header>
          <p className="subheading">Repos</p>
          <h2 className="heading-secondary">
            Trendy-Repos choose from 190M+ repositories
          </h2>
        </header>
        <div>
          {reposData.map((repo) => {
            return (
              <Repo
                key={repo.id}
                name={repo.name}
                description={repo.description}
                stars={repo.stargazers_count}
                issues={repo.open_issues_count}
                avatar={repo.owner.avatar_url}
                ownerName={repo.owner.login}
              />
            );
          })}
          <Pagination />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentStates.currentPage,
  };
};
export default connect(mapStateToProps)(Repos);
