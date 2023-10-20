const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxLength: 20
    },
    description: {
        type: String,
        required: true,
        maxLength: 200
    },
    price: {
        type: Number,
        required: true,
        maxLength: 10
    },
    quantity: {
        type: Number,
        required: true,
        maxLength: 6
    },
}, {timestamps: true});


module.exports = {
    productModel: mongoose.model("product", productSchema),
    productSchema: productSchema
};