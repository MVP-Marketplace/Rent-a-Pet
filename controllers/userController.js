const db = require('../models/index');

const firebaseAdmin = require("../firebase-server-side/firebase-server-side-utils"); 
const admin = require("firebase-admin");

/** INDEX route - returns all Users */


module.exports = {

  findAll: function(req, res) {
    db.User
      .find()
      .then(dbModel => {
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },
/**
 * Returns user specified by the id parameter
 * @param {*} req 
 * @param {*} res 
 */
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .populate('BankingInformation')
      .populate('PaymentInformation')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

/**
 * Creates a new user record in the database.
 * @param {*} req 
 * @param {*} res 
 */
  create: function(req, res) {

    var newUid;

    var email_address = req.body.email_address;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var user_type = req.body.user_type;

    const newFirebaseUserRecord = 
    {
      email: email_address,
      emailVerified: false,
      password: req.body.password,
      displayName: `${first_name} ${last_name}`,
      disabled: false,
    }

    // step 1:  create new user in Firebase.  Don't think this is optimal but doing this to avoid getting stuck
    // alternative is to turn this call into middleware.

    admin
    .auth()
    .createUser(
      newFirebaseUserRecord
    )
    .then((userRecord) => {
      console.log('New User Record', userRecord);
      console.log('Successfully created new user:', userRecord.uid);
      newUid = userRecord.uid;


   // step 2: create the new user in our database.

 
   
   const newUser = {
    first_name: first_name,
    last_name: last_name,
    email_address: email_address,
    user_type: user_type,
    status: 'active',
    firebase_uid: newUid
}
console.log(`New user Object: ${newUser}`)
    /**
     * The request may include the following 
     * UserProfile: {fName, LName, emailAddress, uid},
     * PetPreferences: {species, age, gender},
     * BankingDetails: {abaNumber, accountNumber},
     * PaymentDetails: {cardNumber, expirationDate, billingZipCode}
     * 
     * First save the User, then call the controller to save the other elements in their respective tables.
     */

    db.User
      .create(newUser)
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));

  
    })
    .catch((error) => {
      console.log('Error creating new user: ', error);
    });

  },
  
  /**
   * Update user record in the database.
   * @param {*} req 
   * @param {*} res 
   */
  update: function(req, res) {

    db.User
      .findOneAndUpdate({_id: req.params.id }, req.body)
      .then(dbModel => {

        console.log('dbmodel', dbModel)
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },
/**
 * Remove the specified user from the database.
 * @param {*} req 
 * @param {*} res 
 */
  remove: function(req, res) {

    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

}