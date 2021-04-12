const db = require('../models/index');

/** INDEX route - returns all PaymentMethods */


module.exports = {

  findAll: function(req, res) {
    db.PaymentMethod
      .find()
      .then(dbModel => {
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },
/**
 * Returns PaymentMethod specified by the id parameter
 * @param {*} req 
 * @param {*} res 
 */
  findById: function(req, res) {
    db.PaymentMethod
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

/**
 * Creates a new PaymentMethod record in the database.
 * @param {*} req 
 * @param {*} res 
 */
  create: function(req, res) {

    db.PaymentMethod
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  /**
   * Update PaymentMethod record in the database.
   * @param {*} req 
   * @param {*} res 
   */
  update: function(req, res) {

    db.PaymentMethod
      .findOneAndUpdate({_id: req.params.id }, req.body)
      .then(dbModel => {

        console.log('dbmodel', dbModel)
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },
/**
 * Remove the specified PaymentMethod from the database.
 * @param {*} req 
 * @param {*} res 
 */
  remove: function(req, res) {

    db.PaymentMethod
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

}