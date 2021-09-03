import React, { useEffect, useState } from "react";
import Repo from "./Repo-Row/repo";
import Pagination from "./pagination/pagination";
import "./section-repos.css";
import axios from "axios";
import { connect } from "react-redux";

const Repos = ({ currentPage }) => {
  const [reposData, setReposData] = useState([]);
  const [endRepo, setEndRepo] = useState(10);
  useEffect(() => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${currentPage}`
      )
      .then((response) => {
        setReposData([]);
        setEndRepo(10);
        setReposData(response.data.items);
        setTimeout(300, () => {
          console.log("eee", reposData);
        });
        console.log("eee", reposData);
        // console.log(response.data);
      });
  }, [currentPage]);

  const handlemoreClick = () => {
    setEndRepo(endRepo + 10);
  };
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
          {reposData.slice(0, endRepo).map((repo) => {
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
          {endRepo < reposData.length && (
            <div className="more-box">
              <button onClick={handlemoreClick} className="more-btn">
                View more repos
              </button>
            </div>
          )}
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
