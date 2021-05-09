import React from "react";
import firebaseApp from "../firebase/firebase.utils";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <h2>You've reached the landing page</h2>
      <button onClick={() => firebaseApp.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
