// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const foodSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true,
    },
    Price: {
        type: Number,
        required: true
    },
    RestaurantName: {
        type: String,
        required: true,
    },
    ImageUrl: {
        type: String,
        required: false,
    }
}, {
    timestamps: true
});

const FoodTable = mongoose.model('Food', foodSchema);

module.exports = FoodTable;