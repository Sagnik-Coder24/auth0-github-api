import React, { useEffect } from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    color: "#333",
  },
  message: {
    fontSize: "1.2rem",
    color: "#666",
    marginBottom: "20px",
  },
};

function Page({ setIsGuest }) {
  useEffect(() => {
    document.getElementsByClassName("next-page-btn")[0].style.width = "200px";
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>You are not signed in</h1>
      <p style={styles.message}>Please sign in to access this page.</p>
      <button className="next-page-btn" onClick={() => setIsGuest(true)}>
        Continue as guest
      </button>
    </div>
  );
}

export default Page;
