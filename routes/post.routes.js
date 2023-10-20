
const router = require("express").Router();

const postController = require("../controllers/post.controller");

// Get all posts
router.route("/").get(postController.allPosts);

// Add a new post
router.route("/").post(postController.addPost);

// Get a new post
router.route("/:id").get(postController.getPost);

// Update a post
router.route("/:id").post(postController.updatePost);

// Delete a post
router.route("/:id").delete(postController.deletePost);

module.exports = router;