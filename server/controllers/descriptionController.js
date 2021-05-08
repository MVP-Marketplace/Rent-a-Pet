const db = require('../models/index');

/** INDEX route - returns all Descriptions */


module.exports = {

  findAll: function(req, res) {
    db.Description
      .find()
      .then(dbModel => {
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },
/**
 * Returns Description specified by the id parameter 
 */
  findById: function(req, res) {
    db.Description
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

/**
 * Creates a new Description record in the database. 
 */
  create: function(req, res) {

    db.Description
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  /**
   * Update Description record in the database.
   */
  update: function(req, res) {

    db.Description
      .findOneAndUpdate({_id: req.params.id }, req.body)
      .then(dbModel => {

        console.log('dbmodel', dbModel)
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },
/**
 * Remove the specified Description from the database.
 */
  remove: function(req, res) {

    db.Description
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

  
}