const router = require("express").Router();

const image = require("../../controllers/images");

// Final route /api/post

router.route("/").get(image.findAll);

module.exports = router;
