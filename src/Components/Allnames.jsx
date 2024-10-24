import React from "react";

export const Allnames = ({ username, url, avatar, getGithubProfile }) => {
  return (
    <div className="names-outer">
      <img
        src={avatar}
        alt={username}
        onClick={() => {
          getGithubProfile(username);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
      <div className="names-inner">
        <p
          onClick={() => {
            getGithubProfile(username);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <b>Username: </b>
          {username}
        </p>
        <a href={url} target="_blank">
          <p>Click here to visit profile.</p>
        </a>
      </div>
    </div>
  );
};
