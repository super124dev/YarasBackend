// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const historySchema = mongoose.Schema({
    historyName: {
        type: String,
        required: true
    },
    historyType: {
        type: String,
        enum: ['Food', 'Grocery', 'Pharma'],
        default: 'Food'
    },
});

const History = mongoose.model('History', historySchema);

module.exports = History;