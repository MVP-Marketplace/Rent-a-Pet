import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { use } from "../../../routes/api";
import firebaseApp from "../firebase/firebase.utils";

const SignUp = ({ history }) => {

  const handleSignUp = useCallback(async event => {

    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      var userCredential = await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
        console.log(userCredential);
        console.log(userCredential.user);
        console.log(userCredential.user.uid);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
