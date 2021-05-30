const router = require("express").Router();

const userController = require("../../controllers/userController");

const bankDetailsRouter = require("./bankDetails-api.js");
const paymentMethodRouter = require("./paymentMethod-api.js");

const isAuth =
  require("../../../middleware/serverSideAuthMiddleware").checkIfAuthenticated;
//the final route is /api/user

/**
 * Implementing the nested routing structure to pull bank and payment information for the
 * authenticated user.
 * Fetch bank details by user id
 * Fetch payment method by user id
 */

router.use("/:userId/bankdetails", bankDetailsRouter);
router.use("/:userId/paymentmethod", paymentMethodRouter);

router.route("/").get(userController.findAll).post(userController.create);

// /api/user/:id

router
  .route("/:id")
  // .get(isAuth, userController.findById)
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove)
  .post(userController.uploadAvatar);

module.exports = router;
