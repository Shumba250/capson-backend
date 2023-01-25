import express from 'express';
import { logIn } from '../../controller/LogInController.js';
import { logInFormValidation } from '../../middleWares/adminSignupValidation.js';
import { authorizedUserLogin } from '../../middleWares/authentication.js';


/**
 * @openapi
 * /login:
 *   post:
 *     tags:
 *       - Login
 *     summary: Login for both users and admins
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *                 type: object
 *                 properties:
 *                  email:
 *                      type: string
 *                      default: mudakikwaaimable@gmail.com
 *                      required: true
 *                  password:
 *                      type: string
 *                      default: bob
 *                      required: true
 *     responses:
 *       200:
 *         description: login success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  LoggedIn:
 *                      type: string
 *                      default: login success
 *                  token:
 *                      type: string
 *       400:
 *         description: Invalid info
 *       401:
 *         description: Failes to authenticate this login's
 *       500:
 *         description: Internal error
 */
const LogIn = express.Router();

LogIn.post('/', logInFormValidation, authorizedUserLogin, logIn);

export { LogIn };
