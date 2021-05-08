const router = require("express").Router();

const organizationController = require("../../controllers/organizationController");

//the final route is /api/description

router.route("/").get(organizationController.findAll).post(organizationController.create);

// /api/description/:id

router
  .route("/:id")
  .get(organizationController.findById)
  .put(organizationController.update)
  .delete(organizationController.remove);

module.exports = router;
