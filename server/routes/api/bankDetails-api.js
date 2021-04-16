const router = require ("express").Router({mergeParams: true});

const bankDetailsController = require("../../controllers/bankDetailsController");

//the final route is /api/bankdetails

router
.route("/")
.get(bankDetailsController.findAll)
.post(bankDetailsController.create);


// /api/user/:id

router
.route("/:id")
.get(bankDetailsController.findById)
.put(bankDetailsController.update)
.delete(bankDetailsController.remove);


module.exports = router;