
const postModel = require("../models/post.model");
const { productModel } = require("../models/product.model");
const orderModel = require("../models/order.model");
const userModel = require("../models/user.model");

module.exports = {
    Post: postModel,
    Product: productModel,
    Order: orderModel,
    User: userModel,
}