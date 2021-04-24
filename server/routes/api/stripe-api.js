const router = require ("express").Router();
const isAuth = require('../../../middleware/serverSideAuthMiddleware').checkIfAuthenticated;

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//the final route is /api/stripe-test
/***
 * REFERENCE:  https://github.com/stripe-samples/connect-onboarding-for-express
 * 
 * TO-DO
 * 1.  Active the webhook endpoints to monitor activity in our Stripe accounts
 * or any connected accounts (e.g. monitor when payments go into the accounts.)
 * 2.  WE NEED TO SPECIFY THESE URLs to make sure the user returns cleanly to our application after the sign up is complete.
 */

/**
 * calls will be something like 
 * /api/stripe/onboard-user
 * /api/stripe/onboard-user/refresh
 */

// add back isAuth once unit testing is completed.
router.post('/onboard-user', async (req, res) => {

    try {
        // step 1: create the connected account for our application user.
        const account = await stripe.accounts.create({ type: "express"});

        req.session.accountID = account.id;

        // step 1b:  store this accountID in our database for this user so 
        // we can direct payments received to it in the future.
        // PERHAPS wait until the complete process is finished to push into the DB.

        const origin = `${req.headers.origin}`;

        // step 2: create the account link and redirect user.
        // this account link is used to provide banking details directly to Stripe
        // so nothing is retained on our application server.
        const accountLinkURL = await generateAccountLink(account.id, origin);

        res.send({ url: accountLinkURL});


    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
})

 

/**
 * This is used if the onboarding is terminated before completion.
 * 
 */

 router.get("/onboard-user/refresh", async (req, res) => {
    if (!req.session.accountID) {
      res.redirect("/");
      return;
    }
    try {
      const {accountID} = req.session;
      const origin = `${req.secure ? "https://" : "https://"}${req.headers.host}`;
      
      const accountLinkURL = await generateAccountLink(accountID, origin)
      res.redirect(accountLinkURL);
    } catch (err) {
      res.status(500).send({
        error: err.message
      });
    }
  });


  /** 
   * Stripe recommends having a redirection url established.
   */
function generateAccountLink(accountID, origin) {
    return stripe.accountLinks.create({
      type: "account_onboarding",
      account: accountID,
      
      refresh_url: `${origin}/onboard-user/refresh`,
      return_url: `${origin}/success.html`,
    }).then((link) => link.url);
  }

module.exports = router;