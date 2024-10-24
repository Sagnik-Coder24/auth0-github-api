import React from "react";

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

const Loader = ({ error, isLoading }) => {
  return (
    <>
      {error && (
        <div style={styles.container}>
          <h1 style={styles.heading}>You have encounterd an error : </h1>
          <p style={styles.message}>{error.message}</p>
        </div>
      )}
      {isLoading && <div className="loader"></div>}
    </>
  );
};

export default Loader;
