import React, { useCallback } from "react";
import { withRouter } from "react-router";

import firebaseApp from "../firebase/firebase.utils";

const SignUp = ({ history }) => {

  const handleSignUp = useCallback(async event => {

    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      var userCredential = await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
        // console.log(userCredential);
        // console.log(userCredential.user);
        // console.log(userCredential.user.uid);
        /** 
         * Now need to pass the uid to the createUser API route so we store it in the DB.
         * the value can be found in userCredential.user.uid
         */
        // const baseURL = 'http://localhost:3001/api'
        // fetch(baseURL + 'user', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     // 'Authorization': userCredential.user.uid
        //   },
        //   body: JSON.stringify({
        //     first_name:
        //     last_name: 
        //     email_address: email.value,
        //     uid: userCredential.user.uid
        //   })

        // })
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
