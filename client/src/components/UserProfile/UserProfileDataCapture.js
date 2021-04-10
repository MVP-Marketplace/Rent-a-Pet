import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import firebaseApp from "../../firebase/firebase.utils";

const UserProfileDataCapture = ({ history }) => {
  

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const saveUserProfile = useCallback(async event => {

    /** we'll need uid from Firebase here. */

    event.preventDefault();
    let userProfile = JSON.stringify({
      first_name: firstName,
      last_name: lastName
    })
  
  }, [history]);

  return (
    <div>
      <h1>Create Your Profile</h1>
      <form onSubmit={saveUserProfile}>
        <label>
          First/Given Name
          <input name="firstName" type="firstName" placeholder="First Name" />
        </label>
        <label>
          Family/Last Name
          <input name="lastName" type="lastName" placeholder="Last/Family Name" />
        </label>
        <button type="submit">Save Profile Data</button>
      </form>
    </div>
  );
};

export default withRouter(UserProfileDataCapture);
