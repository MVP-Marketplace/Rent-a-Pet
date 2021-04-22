const router = require("express").Router();

const postController = require("../../controllers/postController");

// Final route /api/post

router.route("/").get(postController.findAll).post(postController.create);

// /api/post/:id

router
  .route("/:id")
  .get(postController.findById)
  .put(postController.update)
  .delete(postController.remove)
  .post(postController.uploadMedia);

module.exports = router;
