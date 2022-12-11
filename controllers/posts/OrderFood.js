const posts = require("../../models/post.js");
const orders = require("../../models/order.js")
const GetOrderFood = async(req, res) => {
    const {userId} = req.params;
    await orders.find({userId: userId}).then(data => {
        res.json({
            statusCode: 200,
            data: data
        })
    }).catch(err => {
        res.json({
            statusCode: 500,
            err: err
        })
    })

}

const GetOrderFoodByOwn = async(req, res) => {
    const {userPostEmail} = req.params;
    await orders.find({userPostEmail: userPostEmail}).then(data => {
        res.json({
            statusCode: 200,
            data: data
        })
    }).catch(err => {
        res.json({
            statusCode: 500,
            err: err
        })
    })
}

const OrderFood = async(req, res) => {
    if(req.body.status === "Success"){
        const updatePost =  posts.findOneAndUpdate({_id: req.body.id}, 
            {$set:{amount: req.body.amount}}, 
            {new: true}, 
            (err, doc) => {
            if(err){
                console.log("Something wrong when updating data!");
            }
        })
    }
    const updateStatus = orders.findOneAndUpdate({_id: req.body.orderId},
    {$set:{status: req.body.status}},
    {new: true},
    (err, doc) => {
        if(err){
            console.log("Something wrong");
        }
    })
    if(updateStatus){
        res.json({
            success: true,
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

module.exports = {OrderFood, DeleteOrderFood, GetOrderFood, GetOrderFoodByOwn};