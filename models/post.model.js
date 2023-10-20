const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        maxLength: 200
    },
    content: {
        type: String,
        required: true,
        maxLength: 2000
    },
    author: { type: mongoose.Types.ObjectId, ref: 'user' },
},
    { timestamps: true })

module.exports = mongoose.model("post", postSchema)

