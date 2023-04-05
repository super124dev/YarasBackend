// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const orderSchema = mongoose.Schema({
    foodName: {
        type: String,
        required: true
    },
    fromUser: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    foodPrice: {
        type: Number,
        required: true
    },
    foodCount: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

const OrderList = mongoose.model('Order', orderSchema);

module.exports = OrderList;