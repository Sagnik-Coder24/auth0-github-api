import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";
import Profile from "./Profile";
import { Allnames } from "./Allnames";
import Loader from "./Loader";

const API = "https://api.github.com/users";

function Github() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [avatar, setAvatar] = useState("");
  const [repos, setRepos] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [homeURL, setHomeURL] = useState("");
  const [notFound, setNotFound] = useState("");
  const [names, setNames] = useState([]);
  const [userCount, setUserCount] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [isNameSearched, setIsNameSearched] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [prevButtonVisible, setPrevButtonVisible] = useState(false);
  const [nameInUrl, setNameInUrl] = useState("");
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const profileCount = useRef(100);

  const getGithubProfile = (username) => {
    setIsProfileLoading(true);
    let finalURL = `${API}/${username}`;
    fetch(finalURL)
      .then((result) => result.json())
      .then((data) => {
        setUsername(data.login);
        setName(data.name);
        setLocation(data.location);
        setAvatar(data.avatar_url);
        setRepos(data.public_repos);
        setFollowers(data.followers);
        setFollowing(data.following);
        setHomeURL(data.html_url);
        setNotFound(data.message);
        setIsLoading(false);
        setIsProfileLoading(false);
      })
      .catch((error) => {
        console.error("Error: ", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (userCount !== -1) getGithubName(nameInUrl, pageNumber);
  }, [pageNumber]);

  const getGithubName = (name, page) => {
    setIsLoading(true);
    const searchUsersByName = async () => {
      const response = await fetch(
        `https://api.github.com/search/users?q=${name}+in:name&page=${page}&per_page=100`
      );
      const data = await response.json();
      setUserCount(data.total_count);
      if (data.message === "Validation Failed") {
        setUserCount(0);
        return [];
      }
      if (data.total_count <= profileCount.current) setButtonVisible(false);
      else setButtonVisible(true);
      if (profileCount.current > 100) setPrevButtonVisible(true);
      else setPrevButtonVisible(false);
      return data.items;
    };

    searchUsersByName()
      .then((users) => {
        setNames(
          users.map((user, i) => (
            <Allnames
              key={i}
              username={user.login}
              url={user.html_url}
              avatar={user.avatar_url}
              getGithubProfile={getGithubProfile}
            />
          ))
        );
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error:", error.message);
      });
  };

  const updateProfileCount = (val) => {
    profileCount.current = val;
  };

  return (
    <>
      <section id="card">
        <br />
        <Search
          getGithubProfile={getGithubProfile}
          getGithubName={getGithubName}
          setUsername={setUsername}
          setIsNameSearched={setIsNameSearched}
          setIsLoading={setIsLoading}
          setName={setName}
          setPageNumber={setPageNumber}
          setButtonVisible={setButtonVisible}
          updateProfileCount={updateProfileCount}
          setNameInUrl={setNameInUrl}
        />
        <br />
        {isLoading ? (
          <>
            <Loader isLoading={isLoading} />
          </>
        ) : (
          <>
            {isProfileLoading && <div className="loader-mini"></div>}
            <Profile
              userData={{
                username,
                name,
                location,
                avatar,
                repos,
                followers,
                following,
                homeURL,
                notFound,
              }}
              isNameSearched={isNameSearched}
            />
            {isNameSearched && (
              <>
                {userCount === 0 ? (
                  <div className="notfound">
                    <h2>Hey</h2>
                    <p>The name you are searching for is unavailable...</p>
                  </div>
                ) : (
                  <>
                    <br />
                    <br />
                    <h2
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      Total Profiles Found
                    </h2>
                    <h3>{userCount}</h3>
                    <hr />
                    <br />
                    {names}
                    <br />
                    <div className="buttons-2">
                      {prevButtonVisible ? (
                        <button
                          className="next-page-btn"
                          onClick={() => {
                            setPageNumber((p) => p - 1);
                            profileCount.current -= 100;
                          }}
                        >
                          Prev Page
                        </button>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                      <p>{pageNumber}</p>
                      {buttonVisible ? (
                        <button
                          className="next-page-btn"
                          onClick={() => {
                            setPageNumber((p) => p + 1);
                            profileCount.current += 100;
                          }}
                        >
                          Next Page
                        </button>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                    </div>
                    <br />
                  </>
                )}
              </>
            )}
            {userCount === -1 && username === "" && (
              <div className="notfound">
                <h2>Hey</h2>
                <p>Search any GitHub profile...</p>
              </div>
            )}
          </>
        )}

        <br />
      </section>
    </>
  );
}

export default Github;
