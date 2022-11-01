const mongoose = require("mongoose");

const UserDBSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    birthday: Date,
    email: String,
    password: String
})

const users = mongoose.model('users', UserDBSchema);

module.exports = users;