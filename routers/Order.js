const express = require("express");
const {
  OrderFood,
  DeleteOrderFood,
  GetOrderFood,
  GetOrderFoodByOwn,
} = require("../controllers/posts/OrderFood.js");
const router = express.Router();
const CreateOrder = require("../controllers/orders/CreateOrder.js");

router.post("/order", CreateOrder);
/**
 * @api {GET} /order/:userId Get information ordered of a user by user ID
 * @apiVersion 1.0.0
 * @apiName GetOrderFood
 * @apiGroup Orders
 * @apiPermission admin and Owner
 *
 * @apiDescription Get information ordered of a user by user ID
 *
 * @apiParam {String} _id Users unique Id.
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/order/639750ebb5dab087df08051c
 * @apiSuccess {Number} statusCode status of order
 * @apiSuccess {Array} data order by user.
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *      {
 *          "statusCode": 200,
 *          "data": [
 *                      {
 *                          "_id": "639941217ec83148bd04296c",
 *                          "orderNumber": 5,
 *                          "userId": "639750ebb5dab087df08051c",
 *                          "userPostEmail": "nam@gmail.com",
 *                          "postId": "6399402b7ec83148bd04294f",
 *                          "note": "Không lấy nước nắm",
 *                          "status": "Success",
 *                          "orderDate": "2022-12-14T03:21:05.413Z",
 *                          "__v": 0
 *                      },
 *                      {
 *                          "_id": "6399419f7ec83148bd0429aa",
 *                          "orderNumber": 1,
 *                          "userId": "639750ebb5dab087df08051c",
 *                          "userPostEmail": "nam@gmail.com",
 *                          "postId": "63993e5b7ec83148bd04294c",
 *                          "note": null,
 *                           "status": "Failed",
 *                          "orderDate": "2022-12-14T03:23:11.948Z",
 *                          "__v": 0
 *       }
 *   ]
 *}
 *
 * @apiError invalid input data
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "result":"fail",
 *       "message": "invalid input"
 *     }
 *
 * @apiSampleRequest http://localhost:3001/order/639750ebb5dab087df08051c
 */
router.get("/order/:userId", GetOrderFood);
/**
 * @api {GET} /orders/list/:userPostEmail Get information order of a user by email
 * @apiVersion 1.0.0
 * @apiName GetOrderFoodByOwn
 * @apiGroup Orders
 * @apiPermission admin and Owner
 *
 * @apiDescription Get information order of a user
 *
 * @apiParam {String} email Users unique Email.
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/orders/list/tamquoc@diennghia.com
 * @apiSuccess {Number} statusCode status of order 
 * @apiSuccess {Array} data order by user.
 
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *   "statusCode": 200,
 *   "data": [
 *       {
 *           "_id": "63993d477ec83148bd042906",
 *           "orderNumber": 1,
 *           "userId": "6386343de645a2fa05d7c460",
 *           "userPostEmail": "tamquoc@diennghia.com",
 *           "postId": "63993bdb7ec83148bd0428d8",
 *           "note": null,
 *           "status": "Success",
 *           "orderDate": "2022-12-14T03:04:39.924Z",
 *           "__v": 0
 *       }
 *     ] 
 *    }
 *
 * @apiError invalid input data
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "result":"fail",
 *       "message": "invalid input"
 *     }
 *
 * @apiSampleRequest http://localhost:3001/orders/list/tamquoc@diennghia.com
 */
router.get("/orders/list/:userPostEmail", GetOrderFoodByOwn);
router.put("/post/update/:postId", OrderFood);
router.delete("/post/update/:orderId", DeleteOrderFood);

module.exports = router;
