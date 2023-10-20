const router = require("express").Router();

const userController = require("../controllers/user.controller");

// Get all users
router.route("/").get(userController.allUsers);

// Add a new user
router.route("/").post(userController.addUser);

// login user
router.route("/login").post(userController.loginUser);

// Get user profile
router.route("/me").get(userController.getUserProfile);

module.exports = router;