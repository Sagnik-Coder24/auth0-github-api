import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header({ idToken, setIdToken, setprofile }) {
  const {
    logout,
    loginWithRedirect,
    loginWithPopup,
    isAuthenticated,
    user,
    getAccessTokenSilently,
    isLoading,
    getIdTokenClaims,
  } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && idToken === "") {
      handleAuthResult();
    }
    getProfile();
  }, [isLoading]);

  const handleAuthResult = async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      const idTokenClaims = await getIdTokenClaims();
      setProfile(idTokenClaims.__raw, user);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const setProfile = (idToken, profile) => {
    localStorage.setItem("idToken", idToken);
    localStorage.setItem("profile", JSON.stringify(profile));
    setIdToken(idToken);
    setprofile(profile);
  };

  const getProfile = () => {
    if (localStorage.getItem("idToken") !== null) {
      setIdToken(localStorage.getItem("idToken"));
      setprofile(JSON.parse(localStorage.getItem("profile")));
    }
  };

  const onSignIn = () => {
    loginWithPopup();
  };

  const onLogOut = () => {
    logout();
    setIdToken("");
    setprofile({});
    localStorage.removeItem("idToken");
    localStorage.removeItem("profile");
  };

  const loginOut =
    idToken !== "" ? (
      <Nav.Link onClick={onLogOut}>Sign Out</Nav.Link>
    ) : (
      <Nav.Link onClick={onSignIn}>Sign In</Nav.Link>
    );

  return (
    <Navbar className="header" bg="light" expand="lg">
      <Navbar.Brand>Github Searcher</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {isLoading && <p>...</p>}
        {!isLoading && <Nav className="ml-auto">{loginOut}</Nav>}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
