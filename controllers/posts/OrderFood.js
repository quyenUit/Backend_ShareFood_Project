const posts = require("../../models/post.js");
const orders = require("../../models/order.js")
const OrderFood = async(req, res) => {
    const orderFood = posts.findOneAndUpdate({_id: req.body.id}, 
        {$set:{amount: req.body.amount}}, 
        {new: true}, 
        (err, doc) => {
        if(err){
            console.log("Something wrong when updating data!");
        }
    })
    if(orderFood){
        await orders.deleteOne({_id: req.body.orderId}).then(() => {
            console.log("Data deleted")
        }).catch((err) => {
            console.log(err);
        }); 
        res.json({
            success: true,
            message: "Update successfully"
        })
    }else{
        res.json({
            success: false,
            message: "Update failed"
        })
    }
}


const DeleteOrderFood = async(req, res) => {
    const {orderId} = req.params;

    await orders.deleteOne({_id: orderId}).then(() => {

    }).catch((err) => {
        res.json({
            success: false,
            message: "Update failed"
        })
    });
    res.json({
        success: true,
        message: "Update successfully"
    })
}

module.exports = {OrderFood, DeleteOrderFood};