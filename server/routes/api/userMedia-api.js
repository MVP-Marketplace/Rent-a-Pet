const router = require ("express").Router();

const userMediaController = require("../../controllers/userMediaController");


const isAuth = require('../../../middleware/serverSideAuthMiddleware').checkIfAuthenticated;
//the final route is /api/user-media 

/**
 * TO-DO
 * 1.  Auth around media create route
 * 2.  Auth around media delete route
 * 3. Auth around media update route
 */

router
.route("/")
.get(userMediaController.findAll)
.post(userMediaController.create);


// /api/user-media/:id

router
.route("/:id")
.get(userMediaController.findById)
// .put(userMediaController.update) 
.delete(isAuth,userMediaController.remove)
.post(userMediaController.uploadAvatar);


module.exports = router;