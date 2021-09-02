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
          Mhjdaoihfoidahifhoaihfidhadoifhoiahdfoildhiofhdiahdihaoihdihdaifh
        </p>
        <aside className="repo-secondary-info">
          <div className="repo-stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <p>700 stars</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="repo-issues">Issues: 1.6k</p>
          </div>
          <p className="repo-submit">Submitted 30 days ago by Mo</p>
        </aside>
      </div>
    </div>
  );
};

export default Row;
