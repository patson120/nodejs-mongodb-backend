
const models = require("../models");
const jwtUtils = require("../utils/jwt.utils");

module.exports = {
    addPost: async (req, res) => {
        try {
            const newPost = await models.Post.create({
                ...req.body,
                author: jwtUtils.getUserId(jwtUtils.getUserToken(req)),
            });
            return res.status(201).json({ newPost });
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    },

    allPosts: (req, res) => {
        // models.Post.find({ title: { "$regex": /[4c]/ }, }, {}).sort({ createdAt: -1 }).then((docs) => {
        models.Post.find({}).sort({ createdAt: -1 }).populate("author").then((docs) => {
            return res.status(200).json({ result: docs });
        }).catch((err) => {
            return res.status(400).json({ error: "Not Found" });
        });

    },

    updatePost: async (req, res, next) => {
        // Update the post
        await models.Post.updateOne({ _id: req.params.id }, { $set: req.body });
        return res.status(201).json({ message: "Post updated successfully" });
    },

    getPost: async (req, res, next) => {
        // Retieve a post
        let post = await models.Post.findById({ _id: req.params.id }).populate("author");
        return res.status(200).json({ post: post });
    },

    deletePost: async (req, res, next) => {
        // Delete a post
        await models.Post.deleteOne({ _id: req.params.id });
        return res.status(200).json({ message: "Post deleted successfully" });
    }
}