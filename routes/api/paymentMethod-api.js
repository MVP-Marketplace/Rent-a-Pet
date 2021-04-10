const router = require ("express").Router({mergeParams: true});
// mergeParams permits nested routes to acces parameters from the 'parent' route

const paymentMethodController = require("../../controllers/paymentMethodController");

//the final route is /api/user 

router
.route("/")
.get(paymentMethodController.findAll)
.post(paymentMethodController.create);


// /api/user/:id

router
.route("/:id")
.get(paymentMethodController.findById)
.put(paymentMethodController.update)
.delete(paymentMethodController.remove);


module.exports = router;