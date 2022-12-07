const users = require("../../models/user.js");
const bcrypt = require("bcrypt");
const postUserData = require("../signup.js");

// get api all users
const getAllUsers = async (req, res) => {
  try {
    const data = await users.find();
    res.json(data.map((item) => {
      return {
        _id: item._id,
        phone: item.phone,
        fname: item.fname,
        address: item.address,
        email: item.email,
      }
    }))
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// get api user detail
const getUserDetail = async (req, res) => {
  try {
    const data = await users.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// get api a user
const getUser = async (req, res) => {
  const userId = req.params.id;
  const username = req.params.username;
  try {
    const user = userId
      ? await users.findById(userId)
      : await users.findOne({ username: username });
    const { password, createdate, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
};

// update api users by id
const updateUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const updateData = {
      email: req.body.email,
      password: hashedPassword,
      address: req.body.address,
      phone: req.body.phone,
    };
    const id = req.params.id;
    const options = { new: true };
    const result = await users.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      options
    );
    res.send(result);

    console.log(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete api user by id
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await users.findByIdAndDelete(id);
    res.send(`User with id ${data.id} has been deleted...`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// follow a user
const follow = async (req, res) => {
  if (req.body._id !== req.params.id) {
    try {
      const user = await users.findById(req.params.id);
      console.log(user);
      const currentUser = await users.findById(req.body._id);
      console.log(currentUser);
      if (!user.followers.includes(req.body._id)) {
        await user.updateOne({ $push: { followers: req.body._id } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you allready follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can't follow yoursefl");
  }
};

//unfollow a user
const unfollow = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await users.findById(req.params.id);
      const currentUser = await users.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("user has been unfollow");
      } else {
        res.status(403).json("you don't follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can't unfollow this yourself");
  }
};

module.exports = {
  getAllUsers,
  getUserDetail,
  getUser,
  updateUser,
  deleteUser,
  follow,
  unfollow,
};
