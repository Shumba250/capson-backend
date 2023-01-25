import express from 'express';
import { logIn } from '../../controller/LogInController.js';
import { logInFormValidation } from '../../middleWares/adminSignupValidation.js';
import { authorizedUserLogin } from '../../middleWares/authentication.js';


/**
 * @openapi
 * /login:
 *  post:
 *      tags:
 *          - Login
 *      summury: User/Admin Login
 *      requestBody: 
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  email:
 *                    type: string
 *                    default: aimable@gmail.com
 *                    required: true
 *                  password:
 *                    type: string
 *                    default: aimable
 *                    required: true
 *      responses:
 *          200:
 *            description: Success log in
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
const LogIn = express.Router();

LogIn.post('/', logInFormValidation, authorizedUserLogin, logIn);

export { LogIn };
