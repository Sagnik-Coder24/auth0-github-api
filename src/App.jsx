import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Github from "./Components/Github";
import Header from "./Components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Page from "./Components/Page";
import Loader from "./Components/Loader";

function App() {
  const auth = useAuth0();

  const [idToken, setIdToken] = useState("");
  const [profile, setprofile] = useState({});

  const gitty = idToken ? <Github /> : <Page />;

  return (
    <>
      <Header
        idToken={idToken}
        setIdToken={setIdToken}
        setprofile={setprofile}
      />
      {(auth.error || auth.isLoading) && (
        <Loader error={auth.error} isLoading={auth.isLoading} />
      )}
      {!auth.error && !auth.isLoading && gitty}
    </>
  );
}

export default App;
