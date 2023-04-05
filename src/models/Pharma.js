// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const pharmaSchema = mongoose.Schema({
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

const Pharma = mongoose.model('Pharma', pharmaSchema);

module.exports = Pharma;