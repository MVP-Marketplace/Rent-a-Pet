const router = require("express").Router();

const characteristicController = require("../../controllers/characteristicController");

//the final route is /api/description

router.route("/").get(characteristicController.findAll).post(characteristicController.create);

// /api/description/:id

router
  .route("/:id")
  .get(characteristicController.findById)
  .put(characteristicController.update)
  .delete(characteristicController.remove);

module.exports = router;
