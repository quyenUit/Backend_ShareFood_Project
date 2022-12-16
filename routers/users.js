const express = require("express");
const userController = require("../controllers/users/users.js");
const routes = express.Router();

//======================================//
/**
 * @api {GET} /users/list Get all use
 * @apiVersion 1.0.0
 * @apiName getAllUsers
 * @apiGroup Users
 * @apiPermission Every type of user
 *
 * @apiDescription Get all users
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/users/list
 * @apiSuccess {String} _id id for the user
 * @apiSuccess {String} username Username of the User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {String} password Password of the User.
 * @apiSuccess {Date} createdate Createdate of the User.
 * @apiSuccess {String} address Address of the User.
 * @apiSuccess {String} phone Phone of the User.
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    [
 *         {
 *              "_id": "6386343de645a2fa05d7c460",
 *              "phone": "0111999888",
 *              "username": "Nam",
 *               "address": "193/58A, An Hòa Tây, Ba Tri, Bến Tre",
 *              "email": "nam@gmail.com",
 *              "createdate": "2022-11-29T17:00:00.000Z"
 *          },
 *          {
 *              "_id": "638c18b6980120c1698f3f80",
 *              "phone": "0123456789",
 *              "username": "tin",
 *              "address": "Ktx khu A, Linh Trung, Thủ Đức, tp. HCM",
 *              "email": "19522348@gm.uit.edu.vn"
 *          }
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
 * @apiSampleRequest http://localhost:3001/users/list
 */

routes.get("/users/list", userController.getAllUsers);
/**
 * @api {GET} /users/:id Get information one use
 * @apiVersion 1.0.0
 * @apiName getUserDetail
 * @apiGroup Users
 * @apiPermission Every type of user
 *
 * @apiDescription Get one users
 *
 * @apiParam {String} id Users unique ID.
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/users/639750ebb5dab087df08051c
 * @apiSuccess {String} _id id for the user
 * @apiSuccess {String} username Username of the User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {String} password Password of the User.
 * @apiSuccess {Date} createdate Createdate of the User.
 * @apiSuccess {String} address Address of the User.
 * @apiSuccess {String} phone Phone of the User.
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *       "_id": "639750ebb5dab087df08051c",
 *        "username": "Tôn Quyền",
 *        "email": "tamquoc@diennghia.com",
 *        "password": "$2b$10$ToOa9n6zuRV5in/8bs9UAOrYVFfZEJp7X0OPhxGVGstc9KpKF0k1q",
 *        "createdate": "2022-12-12T17:00:00.000Z",
 *        "__v": 0,
 *        "address": "11/12 Nguyễn Thị Sáu, Thạnh Lộc, Quận 12",
 *        "phone": "0999999999"
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
 * @apiSampleRequest http://localhost:3001/users/639750ebb5dab087df08051c
 */
routes.get("/users/:id", userController.getUserDetail);
routes.get("/users", userController.getUser);
/**
 * @api {PATCH} /users/update/:id Update information one user
 * @apiVersion 1.0.0
 * @apiName updateUser
 * @apiGroup Users
 * @apiPermission Every type of user
 *
 * @apiDescription Update information one user
 *
 * @apiParam {String} id User unique ID.
 *
 * @apiBody {String} username Username for user
 * @apiBody {String} address Address of user
 * @apiBody {String} phone Phone of user
 * @apiBody {String} password Password for user
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/users/update/639750ebb5dab087df08051c
 * @apiSuccess {String} username Username of the User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {String} password Password of the User.
 * @apiSuccess {Date} createdate Createdate of the User.
 * @apiSuccess {String} address Address of the User.
 * @apiSuccess {String} phone Phone of the User.
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "_id": "639ad346667f25863c0c3efb",
 *      "username": "Lữ Bố",
 *      "email": "giangdong@tamquoc.com",
 *      "password": "$2b$10$mk61WuDdDlHAyr9XdC.qYOCM5.Dro6d28htGRq8kFfKNVDcqnEhM6",
 *      "createdate": "2022-12-15T17:00:00.000Z",
 *      "__v": 0,
 *      "address": "Kinh Châu, Trung Quốc",
 *      "phone": "0988776655"
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
 * @apiSampleRequest http://localhost:3001/users/update/639750ebb5dab087df08051c
 */
routes.patch("/users/update/:id", userController.updateUser);
/**
 * @api {DELETE} /users/delete/:id delete user
 * @apiVersion 1.0.0
 * @apiName deleteUser
 * @apiGroup Users
 * @apiPermission admin
 *
 * @apiDescription  delete user
 *
 * @apiParam {String} id User unique ID.
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/users/delete/639b3065024a7b55c5185d6a
 * @apiSuccess {String} mesage
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *   {
 *      "User with id 639b3065024a7b55c5185d6a has been deleted..."
 *   }
 *
 * @apiError invalid input data
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "result":"fail",
 *       "message": "invalid input"
 *     }
 *
 * @apiSampleRequest http://localhost:3001/users/delete/639b3065024a7b55c5185d6a
 */
routes.delete("/users/delete/:id", userController.deleteUser);
routes.put("users/:id/follow", userController.follow);
routes.put("users/:id/unfollow", userController.unfollow);
/**
 * @api {PUT} /users/:id Update information one user by admin
 * @apiVersion 1.0.0
 * @apiName updateUserInAdmin
 * @apiGroup Users
 * @apiPermission admin
 *
 * @apiDescription Update information one user by admin
 *
 * @apiParam {String} id User unique ID.
 *
 * @apiBody {String} username Username for user
 * @apiBody {String} address Address for user
 * @apiBody {String} phone Phone for user
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/users/delete/639b3065024a7b55c5185d6a
 * @apiSuccess {String} _id id for the user
 * @apiSuccess {String} username Username of the User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {String} password Password of the User.
 * @apiSuccess {Date} createdate Createdate of the User.
 * @apiSuccess {String} address Address of the User.
 * @apiSuccess {String} phone Phone of the User.
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *   {
 *      "_id": "639ad346667f25863c0c3efb",
 *      "username": "Tào Tháo",
 *      "email": "giangdong@tamquoc.com",
 *      "password": "$2b$10$mk61WuDdDlHAyr9XdC.qYOCM5.Dro6d28htGRq8kFfKNVDcqnEhM6",
 *      "createdate": "2022-12-15T17:00:00.000Z",
 *      "__v": 0,
 *      "address": "Tào Ngụy, Trung Quốc",
 *      "phone": "0955667788"
 *  }
 *
 * @apiError invalid input data
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "result":"fail",
 *       "message": "invalid input"
 *     }
 *
 * @apiSampleRequest http://localhost:3001/users/639ad346667f25863c0c3efb
 */
routes.put("/users/:id", userController.updateUserInAdmin);

module.exports = routes;
