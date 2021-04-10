const db = require('../models/index');

/** INDEX route - returns all BankDetails */


module.exports = {

  findAll: function(req, res) {
    db.BankDetails
      .find()
      .then(dbModel => {
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },
/**
 * Returns BankDetails specified by the id parameter
 * @param {*} req 
 * @param {*} res 
 */
  findById: function(req, res) {
    db.BankDetails
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

/**
 * Creates a new BankDetails record in the database.
 * @param {*} req 
 * @param {*} res 
 */
  create: function(req, res) {

    db.BankDetails
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  /**
   * Update BankDetails record in the database.
   * @param {*} req 
   * @param {*} res 
   */
  update: function(req, res) {

    db.BankDetails
      .findOneAndUpdate({_id: req.params.id }, req.body)
      .then(dbModel => {

        console.log('dbmodel', dbModel)
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },
/**
 * Remove the specified BankDetails from the database.
 * @param {*} req 
 * @param {*} res 
 */
  remove: function(req, res) {

    db.BankDetails
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

}