const users = require("../models/user.js")
const bcrypt = require("bcrypt");
const postUserData = async (req, res) => {
    const Email = req.body.email;
    const Password = req.body.password;
    try{
        const findUser = await users.findOne({email: Email});
        const matchPassword = await bcrypt.compare(Password, findUser.password);
        if(!matchPassword){
            throw new Error('No User Found');
        }
        else{
            res.send(findUser);
        }
    }catch(err){
        res.status(404).send();
    }
}

module.exports = postUserData;