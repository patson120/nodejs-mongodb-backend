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
    author: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
},
    { timestamps: true })

module.exports = mongoose.model("Post", postSchema)

