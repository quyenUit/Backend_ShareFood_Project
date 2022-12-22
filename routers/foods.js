const express = require("express");
const userController = require("../controllers/foods/foods.js");
const routes = express.Router();

//======================================//
routes.get("/foods/list", userController.getAllFoods);
/**
 * @api {GET} /foods/detail/:id Get info food detail
 * @apiVersion 1.0.0
 * @apiName getFoodDetail
 * @apiGroup Food
 * @apiPermission admin
 *
 * @apiDescription Get all info foods
 *
 * @apiParam {String} id Foods unique ID.
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/foods/detail/6372407e3aaffa8bc9398d04
 * @apiSuccess {String} _id id for the food
 * @apiSuccess {String} name Name of the food.
 * @apiSuccess {String} type Type of the food.
 * @apiSuccess {String} location Location of the food.
 * @apiSuccess {Date} timeStart TimeStart of the food.
 * @apiSuccess {Date} timeEnd TimeEnd of the food.
 * @apiSuccess {String} file File image of the food.
 * @apiSuccess {String} email Email of the user get food.
 * @apiSuccess {Number} id id food
 * @apiSuccess {Number} amount Amount food
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "_id": "6372407e3aaffa8bc9398d04",
 *      "name": "Bánh canh",
 *      "type": "Thực phẩm ăn liền",
 *      "location": "135 Đoàn Văn Bơ, Quận 4, TP.HCM",
 *      "timeStart": "2022-11-19T14:00:00.000Z",
 *      "timeEnd": "2022-11-20T10:00:00.000Z",
 *      "file": "https://res.cloudinary.com/dp0npssm1/image/upload/v1668431997/dzrbcnpwjbgnewuq46ic.png",
 *      "email": "leductin",
 *      "__v": 0,
 *      "id": 2,
 *      "amount": 20
 *     }
 *
 * @apiError invalid input data
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "result":"fail",
 *       "message": "invalid input"
 *     }
 *
 * @apiSampleRequest http://localhost:3001/foods/detail/6372407e3aaffa8bc9398d04
 */
routes.get("/foods/detail/:id", userController.getFoodDetail);
/**
 * @api {POST} /foods/update/:id update food
 * @apiVersion 1.0.0
 * @apiName updateFood
 * @apiGroup Food
 * @apiPermission admin and user
 *
 * @apiDescription update food
 *
 * @apiParam {String} id Foods unique ID.
 *
 * @apiBody {String} name of the food
 * @apiBody {String} type of the food
 * @apiBody {String} location of the food
 * @apiBody {String} email of the food
 * @apiBody {Number} amount of the food
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/foods/update/6399402b7ec83148bd04294f
 *
 * @apiSuccess {String} _id id for the food
 * @apiSuccess {String} name Name of the food.
 * @apiSuccess {String} type Type of the food.
 * @apiSuccess {String} location Location of the food.
 * @apiSuccess {Date} timeStart TimeStart of the food.
 * @apiSuccess {Date} timeEnd TimeEnd of the food.
 * @apiSuccess {String} file File image of the food.
 * @apiSuccess {String} email Email of the user get food.
 * @apiSuccess {Number} id id food
 * @apiSuccess {Number} amount Amount food
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *
 *      "_id": "6399402b7ec83148bd04294f",
 *      "id": 1670987816656,
 *      "name": "Cơm Tấm Sài Gòn (hộp)",
 *      "type": "Cơm",
 *      "location": "26-28-30 Võ Văn Ngân, Quận Thủ Đức, TP. HCM",
 *      "timeStart": "2022-12-15T02:00:00.000Z",
 *      "timeEnd": "2022-12-15T04:00:00.000Z",
 *      "file": "https://res.cloudinary.com/dp0npssm1/image/upload/v1670987820/s8iasl4aggewrabfzpxl.jpg",
 *      "email": "nam@gmail.com",
 *      "__v": 0,
 *      "amount": 10
 * }
 *
 * @apiError invalid input data
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "result":"fail",
 *       "message": "invalid input"
 *     }
 *
 * @apiSampleRequest http://localhost:3001/foods/update/6399402b7ec83148bd04294f
 */
routes.post("/foods/update/:id", userController.updateFood);
/**
 * @api {DELETE} /foods/delete/:id Delete food
 * @apiVersion 1.0.0
 * @apiName deleteFood
 * @apiGroup Food
 * @apiPermission admin
 *
 * @apiDescription Delete food
 *
 * @apiParam {String} id Foods unique ID.
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/foods/delete/63994879c5d2f7cb4ea68f92
 *
 * @apiSuccess {String} message
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "User with id 1670989943620 has been deleted..."
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
 * @apiSampleRequest http://localhost:3001/foods/delete/63994879c5d2f7cb4ea68f92
 */
routes.delete("/foods/delete/:id", userController.deleteFood);

routes.post("/foods/:id", userController.updateFoodInAdmin);
module.exports = routes;
