const User = require( '../models/user');
const admin = require('./firebase-service');


const getAuthToken = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    req.authToken = req.headers.authorization.split(' ')[1];
  } else {
    req.authToken = null;
  }
  next();
};


const checkIfAuthenticated = (req, res, next) => {

  // step 1: retrieve the authorization token
 getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;

  // step 2: decode the token and confirm it is valid.
      const userInfo = await admin
        .auth()
        .verifyIdToken(authToken);
      req.authId = userInfo.uid;

      // step 3:  confirm the user associated with the token still exists in our database.

      const confirmedUser = await User.find({
        uid: req.authId
      })
      .then(confirmedUser => res.json(confirmedUser))
      .catch(error => res.status(401).json(error));

      return next();

    } catch (e) {
      return res
        .status(401)
        .send({ error: 'You are not authorized to make this request' });
    }
  });
};

module.exports = { checkIfAuthenticated, getAuthToken }