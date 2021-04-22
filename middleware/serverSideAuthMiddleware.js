const User = require( '../server/models/user');
const {admin} = require('../firebase-server-side/firebase-server-side-utils');


const checkIfAuthenticated = (req, res, next) => {

  let uidFromToken ='';
  // step 1: retrieve the authorization token

      if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
      ) {
        req.authToken = req.headers.authorization.split(' ')[1];
      } else {
        req.authToken = null;
      }

      if (!req.authToken) {
  
        res.status(403).json({
          message: "Unauthorized - Token is invalid or missing"
        })
      }

  // step 2: decode the token and confirm it is valid.    
      admin
      .auth()
      .verifyIdToken(req.authToken)
      .then(decodedToken => {
        // console.log('Decoded Token ', decodedToken);
        uidFromToken = decodedToken.uid;
      }).catch(authError => {
        
        res.status(403).json({message: 'Token Validation Error',
        authError})
      })
  // step 3:  confirm the user associated with the token still exists in our database.
       .then(uid => {
         User.find(
           { uid: uidFromToken}
         )
         .catch((dbError) => {
           res.status(400).json({
             message: 'User Not Found',
             dbError
           })
         })
         console.log('successfully located the user');
         next();
       })
       .catch((error) => {
         res.status(400).json({
           message: 'Database error 2',
           error
         })
       })

};

module.exports = { checkIfAuthenticated }