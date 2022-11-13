const mongoose = require("mongoose");

const UserDBSchema = new mongoose.Schema({
    name: String,
    type: String,
    amount: Number,
    location: String,
    timeStart: Date,
    timeEnd: Date
})

const posts = mongoose.model('posts', UserDBSchema);

module.exports = posts;