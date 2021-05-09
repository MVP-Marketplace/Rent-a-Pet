const db = require('../models/index');

/** INDEX route - returns all Organizations */


module.exports = {

  findAll: function(req, res) {
    db.Organization
      .find()
      .then(dbModel => {
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },
/**
 * Returns Organization specified by the id parameter 
 */
  findById: function(req, res) {
    db.Organization
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

/**
 * Creates a new Organization record in the database. 
 */
  create: function(req, res) {

    db.Organization
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  /**
   * Update Organization record in the database.
   */
  update: function(req, res) {

    db.Organization
      .findOneAndUpdate({_id: req.params.id }, req.body)
      .then(dbModel => {

        console.log('dbmodel', dbModel)
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },
/**
 * Remove the specified Organization from the database.
 */
  remove: function(req, res) {

    db.Organization
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

}