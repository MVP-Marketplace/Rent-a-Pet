const router = require("express").Router();

const animalController = require("../../controllers/animalController");

//the final route is /api/description

router.route("/").get(animalController.findAll).post(animalController.create);

// /api/description/:id

router
  .route("/:id")
  .get(animalController.findById)
  .put(animalController.update)
  .delete(animalController.remove);

module.exports = router;
