const router = require("express").Router();

/**
 * These are the routes our application will recognize
 */

const userRoutes = require("./user-api");
const petRoutes = require("./pet-api");
const bankDetailsRoutes = require("./bankDetails-api");
const paymentMethodRoutes = require("./paymentMethod-api");

//user routes /api/user

router.use("/user", userRoutes);
router.use("/pet", petRoutes);
router.use("/bankdetails", bankDetailsRoutes);
router.use("/paymentmethod", paymentMethodRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
