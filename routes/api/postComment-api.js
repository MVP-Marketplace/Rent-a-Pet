const router = require("express").Router();

const postCommentController = require("../../controllers/postCommentController");

// Final route /api/postComment

router
  .route("/")
  .get(postCommentController.findAll)
  .post(postCommentController.create);

// /api/postComment/:id

router
  .route("/:id")
  .get(postCommentController.findById)
  .put(postCommentController.update)
  .delete(postCommentController.remove);

module.exports = router;
