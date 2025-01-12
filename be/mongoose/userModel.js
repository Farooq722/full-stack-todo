const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Must provide an email"],
        unique: [true, "Email must be unique"]
    },
    password: {
        type: String,
        required: [true, "Must provide a password"],
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;