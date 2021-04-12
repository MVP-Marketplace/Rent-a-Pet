import React, { useCallback, useContext, useReducer, useState } from "react";
import { withRouter, Redirect } from "react-router";
import firebaseApp from "../firebase/firebase.utils";
import { AuthContext } from "../Auth.js";

import axios from 'axios';
import { auth } from "firebase-admin";

const Login = ({ history }) => {

  const {userToken, setUserToken} = useState('');

  var token ='';

  // firebaseApp.auth().onAuthStateChanged( async function(user) {
  //   if (user) {
  //     // User is signed in.
  //     try {
  //         token = await firebaseApp.auth.currentUser.getIdToken();
  //     } catch (err) { alert(err); }
  //   } else {
  //     // No user is signed in.
  //   }

    
  //   console.log(`Current Authed User ${firebaseApp.auth().currentUser}`);
  //   console.log(`Current User Token ${token}`);
  // });
    
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
              // this token need to be stored in state so it can be passed to the API in the http header.
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