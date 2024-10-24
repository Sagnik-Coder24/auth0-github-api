import React from "react";

const Profile = ({ userData, isNameSearched }) => {
  let followers_url = `${userData.homeURL}?tab=followers`;
  let following_url = `${userData.homeURL}?tab=following`;
  let repos_url = `${userData.homeURL}?tab=repositories`;

  return (
    <div>
      {userData.username !== "" && !userData.notFound && (
        <section className="github-profile">
          <div className="github-profile-info">
            <a
              href={userData.homeURL}
              target="_blank"
              title={userData.name || userData.username}
            >
              <img src={userData.avatar} alt={userData.username} />
            </a>
            <h2>
              <a
                href={userData.homeURL}
                title={userData.username}
                target="_blank"
              >
                {userData.name || userData.username}
              </a>
            </h2>
            <h3>{userData.location}</h3>
          </div>
          <div className="github-profile-state">
            <ul>
              <li>
                <a
                  href={followers_url}
                  target="_blank"
                  title="Number Of Followers"
                >
                  <i>{userData.followers}</i>
                  <span>Followers</span>
                </a>
              </li>
              <li>
                <a
                  href={repos_url}
                  target="_blank"
                  title="Number Of Repositoriy"
                >
                  <i>{userData.repos}</i>
                  <span>Repositoriy</span>
                </a>
              </li>
              <li>
                <a
                  href={following_url}
                  target="_blank"
                  title="Number Of Following"
                >
                  <i>{userData.following}</i>
                  <span>Following</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      )}
      <br />
      {!isNameSearched && userData.notFound && (
        <div className="notfound">
          <h2>Hey</h2>
          <p>Are you sure, for whom you are looking for ???</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
