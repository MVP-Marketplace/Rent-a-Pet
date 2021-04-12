const router = require("express").Router();

const postLikeController = require("../../controllers/postLikeController");

// Final route /api/postLike

router
  .route("/")
  .get(postLikeController.findAll)
  .post(postLikeController.create);

// /api/postLike/:id

router
  .route("/:id")
  .get(postLikeController.findById)
  .put(postLikeController.update)
  .delete(postLikeController.remove);

module.exports = router;
