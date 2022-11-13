const posts = require('../../models/post.js');

const uploadFood = async(req, res) => {
    try{
        const postData = {
            name: req.body.name,
            type: req.body.type,
            dateStart: req.body.dateStart,
            dateEnd: req.body.dateEnd,
            location: req.body.location,
            file: req.body.file
        }

        const postInsertData = await posts.insertMany(postData);
        if(!postInsertData){
            throw new Error("Can not upload");
        }else{
            res.status(200).send({message: "Successful Post"});
        }
    }catch(err){
        res.status(404).send();
    }
}

module.exports = uploadFood;