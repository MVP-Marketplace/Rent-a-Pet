const router = require("express").Router();

const petController = require("../../controllers/petController");

//the final route is /api/pet

router.route("/").get(petController.findAll).post(petController.create);

// /api/pet/:id

router
  .route("/:id")
  .get(petController.findById)
  .put(petController.update)
  .delete(petController.remove);

module.exports = router;
