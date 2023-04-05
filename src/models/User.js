// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    userPassword: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        enum: ['Customer', 'Rider', 'Restaurant'],
        default: 'Customer'
    },
    userLanguage: {
        type: String,
        enum: ['English', 'Arabic', 'French'],
        default: 'English'
    },
    userStatus: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;