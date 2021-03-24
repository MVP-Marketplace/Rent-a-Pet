const db = require('../models/index');

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
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

/**
 * Creates a new user record in the database.
 * @param {*} req 
 * @param {*} res 
 */
  create: function(req, res) {

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
  }

}