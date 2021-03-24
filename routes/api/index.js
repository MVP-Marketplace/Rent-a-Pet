const router = require("express").Router();

/**
 * These are the routes our application will recognize
 */

const userRoutes = require("./user-api");

//user routes /api/user

router.use("/user",userRoutes);

module.exports = router;