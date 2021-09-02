import axios from "axios";
import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    async function getRepos() {
      const data = await axios
        .get(
          "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc"
        )
        .then((response) => {
          console.log(response);
        });
    }
  }, []);
  return (
    <div>
      <h1>Leo Leo</h1>
    </div>
  );
};

export default Test;
