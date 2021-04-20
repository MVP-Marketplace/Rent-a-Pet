const { response } = require('express');
const db = require('../models/index');
cloudinary = require('cloudinary').v2;

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
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
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
  },
  // **Upload Avatar **//
  uploadAvatar: async function (req,res){

    // must include a fully qualified path to the file.
    // otherwise, cloudinary assumes the path is relative to where server.js resides.
    // TO DO - turn Cloudinary call into middleware to keep from repeating code in multiple files.

    /**
     * 
     * UnhandledPromiseRejectionWarning
     * This means that a promise you called rejected, but there was no catch used to handle the error. Add a catch after the offending then to handle this properly.
     */

      const userId = req.params.id;
      

       await cloudinary.uploader.upload(
      req.body.image
      )
      .then((uploadResult) => {
        db.User
        .findOneAndUpdate(
          {_id: userId},
          {$set: 
            {
              avatar: uploadResult.secure_url
            }
          })
          .catch(dbErr => res.status(500).json(dbErr))
          
      })// I think the missing catch should go here.
      .catch((findErr) => {
        res.status(402).json({
          message: 'User not found',
          findErr
        })
      })
      .then((saveResult) => {
        res.status(200).json({
        message: 'upload success',
        saveResult,
        // QUESTION: can we retrieve a thumbnail of the asset from cloudinary???
      })
      .catch((error) => {
        res.status(501).json({
          message: 'upload failure',
          error,
        });
      })
    })
    .catch(ultimateError => res.json(ultimateError));
    
   
  }

}
