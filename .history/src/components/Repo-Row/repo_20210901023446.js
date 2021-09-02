import React from "react";

const Row = () => {
  return (
    <div className="repo-box">
      <img src={require("../../img/users/steve.jpg").default} />
      <p className="repo-name">repo-name</p>
    </div>
  );
};

export default Row;
