
const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        minLength: 4,
        maxLength: 20,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        minLength: 15,
        maxLength: 50,
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 100,
    }
}, {timestamps: true});

module.exports = mongoose.model("User", userModel);

