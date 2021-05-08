const db = require('../models/index');

/** INDEX route - returns all Descriptions */


module.exports = {

  findAll: function(req, res) {
    db.Characteristic
      .find()
      .then(dbModel => {
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },
/**
 * Returns Characteristic specified by the id parameter 
 */
  findById: function(req, res) {
    db.Characteristic
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

/**
 * Creates a new Characteristic record in the database. 
 */
  create: function(req, res) {

    db.Characteristic
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  /**
   * Update Characteristic record in the database.
   */
  update: function(req, res) {

    db.Characteristic
      .findOneAndUpdate({_id: req.params.id }, req.body)
      .then(dbModel => {

        console.log('dbmodel', dbModel)
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },
/**
 * Remove the specified Characteristic from the database.
 */
  remove: function(req, res) {

    db.Characteristic
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

}