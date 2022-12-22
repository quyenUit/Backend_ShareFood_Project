const AddUserAccount = require("../controllers/register.js");
const express = require("express");

const router = express.Router();

/**
 * @api {POST} /register Post account user
 * @apiVersion 1.0.0
 * @apiName AddUserAccount
 * @apiGroup Users
 * @apiPermission Every type of user
 *
 * @apiDescription Registration account user
 *
 *  @apiBody {String} username Register for user.
 *  @apiBody {String} email Register for user.
 *  @apiBody {String} password Register for user.
 *  @apiBody {String} repassword Register for user.
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/register
 * @apiSuccess {String} message

 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *   {
 *      "message": "Successful Registration"
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
 * @apiSampleRequest http://localhost:3001/register
 */
router.post("/register", AddUserAccount);

module.exports = router;
