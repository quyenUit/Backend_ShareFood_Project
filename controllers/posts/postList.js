const posts = require("../../models/post.js");

const postList = async(req, res) => {
    const showAllPost = await posts.find({});
    if(showAllPost){
        res.send(showAllPost);
    }else{
        res.send(404);
    }

}

module.exports = postList;