const orders = require("../../models/order.js")

const CreateOrder = async(req, res) => {
    const timeOrder = Date.now();

    const newOrder = {
        orderNumber: req.body.amount,
        userId: req.body.userId,
        postId: req.body.postId,
        userPostEmail: req.body.userPostEmail,
        note: req.body.note,
        status: req.body.status
    }
    
    const response = await orders.insertMany(newOrder);

    if(!response){
        throw new Error("Can not upload");
    }else{
        res.status(200).send({ message: "Successful Waiting Order" });
    }
}

module.exports = CreateOrder;