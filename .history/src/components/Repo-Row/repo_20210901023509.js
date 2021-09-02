import React from "react";

const Row = () => {
  return (
    <div className="repo-box">
      <img src={require("../../img/users/steve.jpg").default} />
      <p className="repo-name">repo-name</p>
      <p className="repo-description">description</p>
    </div>
  );
};

export default Row;
