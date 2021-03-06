import React, { useCallback, useContext, useReducer, useState } from "react";
import { withRouter, Redirect } from "react-router";
import firebaseApp from "../firebase/firebase.utils";
import { AuthContext } from "../Auth.js";

import axios from 'axios';
import { auth } from "firebase-admin";

const Login = ({ history }) => {

  const {userToken, setUserToken} = useState('');

  var token ='';

    
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {

        await firebaseApp
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(({user}) => {
          return user.getIdToken()
            .then((idToken) => {
              console.log("User Token", idToken);
              // this token needs to be stored in state so it can be passed to any API calls in the http header.
              // Authentication: 'Bearer'+tokenValueHere
            })
        })

          
        history.push("/");
      } catch (error) {
        alert(error);
      }

  
    },
    [history]

    
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {

      return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);