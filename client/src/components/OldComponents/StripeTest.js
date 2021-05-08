import React, { useCallback } from "react";
import { withRouter } from "react-router";


const StripeTest = ({ history }) => {

  const setupPayout = useCallback(async event => {

    event.preventDefault();
    
    try {
    
        fetch("http://localhost:3001/api/stripe-test/onboard-user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(response => response.json())
            .then(data => {
              if (data.url) {
                window.location = data.url;
              } else {
                  console.log('there was some error');

                console.log("data", data);
              }
            });

    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
    <h1>Let's get you set up for getting paid!</h1>
    <form onSubmit={setupPayout}>
      <button id="submit" type="submit">Setup Your Stripe Payout</button>
    </form>
  </div>

  );
};

export default withRouter(StripeTest);

