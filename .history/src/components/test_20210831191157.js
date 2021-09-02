import axios from "axios";
import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    async function getRepos() {
      const data = await axios
        .get(
          "https://api.github.com/search/repositories?q=created:>2021-8-31&sort=stars&order=desc&page=2"
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
    <div>
      <h1>Leo Leo</h1>
    </div>
  );
};

export default Test;
