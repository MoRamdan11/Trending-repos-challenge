import React from "react";

const Row = () => {
  return (
    <div className="repo-box">
      <img src={require("../../img/users/steve.jpg").default} />
      <p className="repo-name">repo-name</p>
      <p className="repo-description">description</p>
      <p className="repo-stars">Stars: 700</p>
      <p className="repo-issues">Issues: 1.6k</p>
    </div>
  );
};

export default Row;
