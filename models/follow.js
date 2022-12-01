const mongoose = require("mongoose");

const UserDBSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    following: {
      type: Array,
    },
    followers: {
      type: Array,
    },
  },
  { timestamps: true }
);

const follow = mongoose.model("follow", UserDBSchema);

module.exports = follow;
