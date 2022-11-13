const posts = require('../../models/post.js');
const cloudinary = require("../../utils/cloudinary.js");
const uploadFood = async(req, res) => {
    const now = Date.now();
    let date_ob = new Date(now);
    let start = new Date(date_ob.getFullYear(),date_ob.getMonth(),date_ob.getDate()+1, req.body.dateStart.split(':')[0]+7, req.body.dateStart.split(':')[1]);
    let end = new Date(date_ob.getFullYear(),date_ob.getMonth(),date_ob.getDate()+1, req.body.dateEnd.split(':')[0]+7, req.body.dateEnd.split(':')[1]);
    const {name, type, location, file} = req.body;
    
    try{
        const result = await cloudinary.uploader.upload(file, {})

        if(result){
            const postData = {
                name,
                type,
                dateStart: start,
                dateEnd: end,
                location,
                file:{
                    public_id: result.public_id,
                    url: result.secure_url
                }
            }

            const postInsertData = await posts.insertMany(postData);

            if(!postInsertData){
                throw new Error("Can not upload");
            }else{
                res.status(200).send({message: "Successful Post"});
            }
        }
    }catch(err){
        res.status(404).send();
    }
}

module.exports = uploadFood;