const router = require ("express").Router();

const userController = require("../../controllers/userController");

//the final route is /api/user 

router
.route("/")
.get(userController.findAll)
.post(userController.create);


// /api/user/:id

router
.route("/:id")
.get(userController.findById)
.put(userController.update)
.delete(userController.remove);


module.exports = router;


