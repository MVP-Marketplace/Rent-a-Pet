const router = require("express").Router();

/**
 * These are the routes our application will recognize
 */

const userRoutes = require("./user-api");
const petRoutes = require("./pet-api");
const postRoutes = require("./post-api");
const postCommentRoutes = require("./postComment-api");
const postLikeRoutes = require("./postLike-api");
const userFeedRoutes = require("./userFeed-api");
const userFollowerRoutes = require("./userFollower-api");
const bankDetailsRoutes = require("./bankDetails-api");
const paymentMethodRoutes = require("./paymentMethod-api");
const stripeRoutes = require("./stripe-api");
const image = require("./image-api");

const animalRoutes = require("./animal-api");
const characteristicRoutes = require("./characteristic-api");
const descriptionRoutes = require("./description-api");
const organizationRoutes = require("./organization-api");

//user routes /api/user

router.use("/user", userRoutes);
router.use("/pet", petRoutes);
router.use("/post", postRoutes);
router.use("/postcomment", postCommentRoutes);
router.use("/postlike", postLikeRoutes);
router.use("/userfeed", userFeedRoutes);
router.use("/userfollower", userFollowerRoutes);
router.use("/bankdetails", bankDetailsRoutes);
router.use("/paymentmethod", paymentMethodRoutes);
router.use("/stripe-test", stripeRoutes);
router.use("/image", image);

router.use("/animal", animalRoutes);
router.use("/characteristic", characteristicRoutes);
router.use("/description", descriptionRoutes);
router.use("/organization", organizationRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
