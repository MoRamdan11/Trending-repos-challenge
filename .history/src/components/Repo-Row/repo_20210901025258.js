import React from "react";
import "./repo.css";
const Row = () => {
  return (
    <div className="repo-box">
      <img
        src={require("../../img/users/steve.jpg").default}
        alt="repo-owner-img"
        className="repo-img"
      />
      <div>
        <p className="repo-name">repo-name</p>
        <p className="repo-description">
          Mhjdaoihfoidahifhoaihfidhadoifhoiahdfoildhiofhdiahdihaoihdihdaifh
        </p>
        <p className="repo-stars">Stars: 700</p>
        <p className="repo-issues">Issues: 1.6k</p>
        <p className="repo-submit">Submitted 30 days ago by Mo</p>
      </div>
    </div>
  );
};

export default Row;
