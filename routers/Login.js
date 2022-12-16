const express = require("express");
const postUserData = require("../controllers/signup.js");
const router = express.Router();

//---------------------------------> POST USER DATA (SEARCHING) <-----------------------------------//
/**
 * @api {POST} /signup Login
 * @apiVersion 1.0.0
 * @apiName postUserData
 * @apiGroup User
 * @apiPermission Every one
 *
 * @apiDescription login
 *
 * @apiBody {string} username
 * @apiBody {String} password
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/signup
 *
 * @apiSuccess {String} id user
 * @apiSuccess {String} username
 * @apiSuccess {String} email
 * @apiSuccess {String} password
 * @apiSuccess {Date} createdate
 * @apiSuccess {String} address
 * @apiSuccess {String} phone
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *           "_id": "639750ebb5dab087df08051c",
 *           "username": "Tôn Quyền",
 *           "email": "tamquoc@diennghia.com",
 *           "password": "$2b$10$ToOa9n6zuRV5in/8bs9UAOrYVFfZEJp7X0OPhxGVGstc9KpKF0k1q",
 *           "createdate": "2022-12-12T17:00:00.000Z",
 *           "__v": 0,
 *           "address": "11/12 Nguyễn Thị Sáu, Thạnh Lộc, Quận 12",
 *           "phone": "0999999999"
 *      }
 *
 * @apiError invalid input data
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "result": "fail",
 *       "message": "invalid input"
 *     }
 * @apiSampleRequest http://localhost:3001/signup
 */
router.post("/signup", postUserData);

//---------------------------------> POST NEW USER DATA (ADDING) <----------------------------------//

module.exports = router;
