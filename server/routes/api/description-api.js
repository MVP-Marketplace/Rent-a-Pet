const router = require("express").Router();

const descriptionController = require("../../controllers/descriptionController");

//the final route is /api/description

router.route("/").get(descriptionController.findAll).post(descriptionController.create);

// /api/description/:id

router
  .route("/:id")
  .get(descriptionController.findById)
  .put(descriptionController.update)
  .delete(descriptionController.remove);

module.exports = router;
