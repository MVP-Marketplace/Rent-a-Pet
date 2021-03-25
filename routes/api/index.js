const router = require("express").Router();

/**
 * These are the routes our application will recognize
 */

const userRoutes = require("./user-api");
const petRoutes = require("./pet-api");

//user routes /api/user

router.use("/user", userRoutes);
router.use("/pet", petRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
