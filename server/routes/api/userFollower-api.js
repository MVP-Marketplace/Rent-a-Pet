const router = require("express").Router();

const userFollowerController = require("../../controllers/userFollowerController");

// Final route /api/userFollower

router
  .route("/")
  .get(userFollowerController.findAll)
  .post(userFollowerController.create);

// /api/userFollower/:id

router
  .route("/:id")
  .get(userFollowerController.findById)
  .put(userFollowerController.update)
  .delete(userFollowerController.remove);

module.exports = router;
