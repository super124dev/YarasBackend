// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const AddCartSchema = mongoose.Schema({
    ProductName: {
        type: String,
        required: true,
        unique: true
    },
    ProductCount: {
        type: Number,
        required: true,
    },
    ProductPrice: {
        type: Number,
        require: true,
    }
}, {
    timestamps: true
});

const AddCart = mongoose.model('AddCart', AddCartSchema);

module.exports = AddCart;