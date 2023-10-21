const mongoose = require('mongoose');

const { productSchema } = require("../models/product.model");

const orderModel = new mongoose.Schema({
    customerId: {
        type: String,
        required: true,
    },
    products: [productSchema],

}, { timestamps: true });

module.exports = mongoose.model('Order', orderModel);