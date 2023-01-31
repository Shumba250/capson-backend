import express from 'express';
import {
  createUser,
  deleteUser,
  retireveSingleUser,
  retrieveAllUses,
  updateUser,
  userCount,
} from '../../controller/signupController';
import { createSignupValidation } from '../../middleWares/signupValidation.js';
import adminAccess from '../../middleWares/adminAccess.js';
import { authorized } from '../../middleWares/authentication.js';

const signupRouter = express.Router();

/**
 * @openapi
 * /signups:
 *   get:
 *     tags:
 *       - Users
 *     summary: Retrieve a list of all users
 *     security:
 *       - token: []
 *     responses:
 *       200:
 *         description: Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schema/Response'
 *       401:
 *         description: Should authorized( logged in)
 *       403:
 *         description: Should have an admin access to retrieve all users
 *       500:
 *         description: Server error
 */

signupRouter.get('/', authorized, adminAccess, retrieveAllUses);

/**
 *  @openapi
 * /signups/signupCount:
 *   get:
 *     tags:
 *       - Users
 *     summary: Count the number of all users
 *     security:
 *       - token: []
 *     responses:
 *       200:
 *         description: userCount
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  userCount:
 *                      type: number
 *                      default: 0
 *       401:
 *         description: Should authorized( logged in)
 *       403:
 *         description: Should have an admin access to retrieve all users
 *       500:
 *         description: Server error
 */

signupRouter.get('/signupCount', authorized, adminAccess, userCount);


/**
 *  @openapi
 * //signups/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Retrieve a single user
 *     security:
 *       - token: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The unique id of the user
 *         required: true
 *     responses:
 *       200:
 *         description: User
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schema/Response'
 *       400:
 *         description: Invalid user id
 *       401:
 *         description: Should authorized( logged in)
 *       403:
 *         description: Should have an admin access to get a single user
 *       404:
 *         description: user not found
 *       500:
 *         description: Server error
 */

signupRouter.get('/:id', retireveSingleUser);

/**
 * @openapi
 * /signups:
 *   post:
 *     tags:
 *       - Users
 *     summary: Register a new user
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schema/UserSignUp'
 *     responses:
 *       200:
 *         description: User Registered
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schema/Response'
 *       400:
 *         description: Invalid infor
 *       500:
 *         description: Server error
 */

signupRouter.post('/', createSignupValidation, createUser);

/**
 *  @openapi
 * /signups/{id}:
 *   patch:
 *     tags:
 *       - Users
 *     summary: Update a user infor
 *     security:
 *       - token: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The unique id of the user
 *         required: true
 *     responses:
 *       200:
 *         description: User
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schema/Response'
 *       400:
 *         description: Invalid user id
 *       401:
 *         description: Should authorized( logged in)
 *       403:
 *         description: Should have an admin access to update the users infor
 *       404:
 *         description: user not found
 *       500:
 *         description: Server error
 */

signupRouter.patch(
  '/:id',
  createSignupValidation,
  authorized,
  adminAccess,
  updateUser
);

/**
 * @openapi
 * /signups/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete a user
 *     security:
 *       - token: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The unique id of the user
 *         required: true
 *     responses:
 *       204:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *                 type: string
 *                 default: User deleted
 *       400:
 *         description: Invalid user id
 *       401:
 *         description: Should authorized( logged in)
 *       403:
 *         description: Should have an admin access to delete a user
 *       404:
 *         description: user not found
 *       500:
 *         description: Server error
 */

signupRouter.delete('/:id', authorized, adminAccess, deleteUser);

export default signupRouter;
