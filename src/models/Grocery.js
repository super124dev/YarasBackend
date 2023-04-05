// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const grocerySchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true,
    },
    Popular: {
        type: Boolean,
        required: false
    }
}, {
    timestamps: true
});

const Grocery = mongoose.model('Grocery', grocerySchema);

module.exports = Grocery;