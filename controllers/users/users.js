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

module.exports = {
  getAllUsers,
  getUserDetail,
  updateUser,
  deleteUser,
};
