const express = require("express");
const postList = require("../controllers/posts/postList.js");
const router = express.Router();

/**
 * @api {GET} /post Get all info foods
 * @apiVersion 1.0.0
 * @apiName postList
 * @apiGroup PostList
 * @apiPermission admin
 *
 * @apiDescription Get all info foods
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/post
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
 *    [
 *         {
 *       "_id": "637248a120703327305f2a7b",
 *       "name": "Chè đậu đen",
 *       "type": "Thực phẩm ăn liền",
 *       "location": "339/12-14 Tô Hiến Thành, phường 12, quận 10, TP.HCM  ",
 *       "timeStart": "2022-11-15T05:00:00.000Z",
 *      "timeEnd": "2022-11-15T06:00:00.000Z",
 *       "file": "https://res.cloudinary.com/dp0npssm1/image/upload/v1668434080/nhi81sgljhp3bcw344z3.png",
 *       "email": "leductin.9e@gmail.com",
 *       "__v": 0,
 *       "id": 7,
 *       "amount": 10
 *   },
 *   {
 *       "_id": "6372636aa4eb9d0046a5b5b7",
 *       "name": "Bún riêu Phú Quốc",
 *       "type": "Phở",
 *       "location": "Trường đại học Công nghệ Thuc Pham",
 *       "timeStart": "2022-11-14T20:00:00.000Z",
 *       "timeEnd": "2022-11-14T21:00:00.000Z",
 *       "file": "https://res.cloudinary.com/dp0npssm1/image/upload/v1668440937/te10uen2be7ruhmpb5bd.png",
 *       "email": "quyen",
 *       "__v": 0,
 *       "id": 8,
 *       "amount": 11
 *   },
 *    ]
 *
 * @apiError invalid input data
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "result":"fail",
 *       "message": "invalid input"
 *     }
 *
 * @apiSampleRequest http://localhost:3001/post
 */
router.get("/post", postList);

module.exports = router;
