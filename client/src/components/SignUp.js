import React, { useCallback } from "react";
import { withRouter } from "react-router";


const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      /**
       * hit the API route process.env.HOSTNAME/api/user
       * with the following payload
       * {
       *  first_name
       *  last_name
       *  email_address
       *  user_type 
       *  status
       *  password
       * } 
       * 
       * The API call creates the new user record in Firebase, returns the uid from Firebase
       * and saves the user data (minus password) in our application database.
       * */  
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
