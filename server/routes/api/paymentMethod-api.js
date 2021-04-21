const router = require ("express").Router({mergeParams: true});
// mergeParams permits nested routes to acces parameters from the 'parent' route

const paymentMethodController = require("../../controllers/paymentMethodController");

// const checkIfAuthenticated = require('../../middleware/serverSideAuthMiddleware').checkIfAuthenticated;
const { route } = require("./bankDetails-api");


//the final route is /api/user 

// router.use(checkIfAuthenticated);

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