const users = require("../../models/user.js");
const bcrypt = require("bcrypt");

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
    const id = req.params.id;
    const updateData = req.body;
    const options = { new: true };
    const result = await users.findByIdAndUpdate(id, updateData, options);
    res.send(result);
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

module.exports = { getAllUsers, getUserDetail, updateUser, deleteUser };
