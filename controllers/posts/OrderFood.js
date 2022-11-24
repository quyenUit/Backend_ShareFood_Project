const posts = require("../../models/post.js");

const OrderFood = async(req, res) => {
    const orderFood = posts.findOneAndUpdate({_id: req.body.id}, {$set:{amount: req.body.amount}}, {
        new: true
    }, (err, doc) => {
        if(err){
            console.log("Something wrong when updating data!");
        }
    })
    console.log(orderFood);
    // if(orderFood){
    //     res.send(orderFood);
    // }else{
    //     res.send(404);
    // }
}


module.exports = OrderFood;