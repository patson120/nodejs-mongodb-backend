const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: 4,
        maxLength: 20
    },
    description: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 200
    },
    price: {
        type: Number,
        required: true,
        maxLength: 10,
        min: 10
    },
    quantity: {
        type: Number,
        required: true,
        maxLength: 6,
        min: 1,
        validate: {
            validator: v => v % 2 === 0,
            message: props => `${props.value} is not a valid number`,
        }
    },
    owner: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },

}, {timestamps: true});

module.exports = {
    productModel: mongoose.model("Product", productSchema),
    productSchema: productSchema
};