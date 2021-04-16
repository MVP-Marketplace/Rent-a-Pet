const router = require("express").Router();

const userFeedController = require("../../controllers/userFeedController");

// Final route /api/userFeed

router
  .route("/")
  .get(userFeedController.findAll)
  .post(userFeedController.create);

// /api/userFeed/:id

router
  .route("/:id")
  .get(userFeedController.findById)
  .put(userFeedController.update)
  .delete(userFeedController.remove);

module.exports = router;
