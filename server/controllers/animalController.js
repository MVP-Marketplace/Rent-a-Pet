const db = require('../models/index');

/** INDEX route - returns all Animals */


module.exports = {

  findAll: function(req, res) {
    db.Animal
      .find()
      .then(dbModel => {
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },
/**
 * Returns Animal specified by the id parameter 
 */
  findById: function(req, res) {
    db.Animal
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

/**
 * Creates a new Animal record in the database. 
 */
  create: function(req, res) {

    db.Animal
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  /**
   * Update Animal record in the database.
   */
  update: function(req, res) {

    db.Animal
      .findOneAndUpdate({_id: req.params.id }, req.body)
      .then(dbModel => {

        console.log('dbmodel', dbModel)
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },
/**
 * Remove the specified Animal from the database.
 */
  remove: function(req, res) {

    db.Animal
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

}