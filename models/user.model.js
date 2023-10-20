
const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        maxLength: 20,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        maxLength: 50,
    },
    password: {
        type: String,
        required: true,
        maxLength: 100,
    }
}, {timestamps: true});

module.exports = mongoose.model("user", userModel);

