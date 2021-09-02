import axios from "axios";
import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    async function getRepos() {
      const data = await axios
        .get(
          "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=2"
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log("error --> ", e);
        });
    }
    getRepos();
  }, []);
  return (
    <div style={{ display: "grid" }}>
      <div>
        <img
          style={{ width: "100%" }}
          src={require("../img/github animation.jpg").default}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Test;
