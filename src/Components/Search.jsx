import React, { useRef } from "react";

const Search = ({
  getGithubProfile,
  getGithubName,
  setUsername,
  setIsNameSearched,
  setIsLoading,
  setName,
  setButtonVisible,
  updateProfileCount,
  setNameInUrl,
}) => {
  const searchRef = useRef();
  const nameRef = useRef();

  const formSubmit = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setButtonVisible(true);
      updateProfileCount(100);
      setNameInUrl(nameRef.current.value);
      setUsername("");
      if (searchRef.current.value) {
        setIsLoading(true);
        setIsNameSearched(false);
        getGithubProfile(searchRef.current.value);
      }
      if (nameRef.current.value) {
        setName(nameRef.current.value);
        setIsNameSearched(true);
        getGithubName(nameRef.current.value, 1);
      }
      searchRef.current.value = "";
      nameRef.current.value = "";
    }
  };

  return (
    <div className="search-box">
      <form onSubmit={formSubmit}>
        <label>
          <input
            type="search"
            ref={searchRef}
            placeholder="Type Username"
            onKeyDown={formSubmit}
          />
          <input
            type="search"
            ref={nameRef}
            placeholder="Type Name"
            onKeyDown={formSubmit}
          />
        </label>
      </form>
    </div>
  );
};

export default Search;
