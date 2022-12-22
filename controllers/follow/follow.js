const FollowUser = require("../../models/follow.js");
const bcrypt = require("bcrypt");

// follow

const follow = async (req, res) => {
  try {
    let whomFollowed = await FollowUser.findByIdAndUpdate(
      { _id: req.body.followingId },
      {
        $push: { following: req.body.followerId },
      }
    );
    console.log(whomFollowed);
    let whoFollowedMe = await FollowUser.findByIdAndUpdate(
      { following: req.body.followerId },
      {
        $push: { followers: req.body.followingId },
      }
    );
    console.log(whoFollowedMe);
    return res.status(200).send({ message: "User Follow Success" });
  } catch (e) {
    return res
      .status(500)
      .send({ message: "User Follow Failed", data: e.message });
  }
};

// unfollow

const unfollow = async (req, res) => {
  try {
    let whomUnFollowed = await FollowUser.findByIdAndUpdate(
      { _id: req.body.followingId },
      { $pull: { following: req.body.followerId } }
    );
    console.log(whomUnFollowed);
    let whoUnFollowedMe = await FollowUser.findByIdAndUpdate(
      { _id: req.body.followerId },
      { $pull: { followers: req.body.followingId } }
    );
    console.log(whoUnFollowedMe);
    return res.status(200).send({ message: "User UnFollow Success" });
  } catch (e) {
    return res
      .status(500)
      .send({ message: "User UnFollow Failed", data: e.message });
  }
};

module.exports = {
  follow,
  unfollow,
};
