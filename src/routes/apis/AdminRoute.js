import express from 'express';
import {
  createAdmin,
  removeAdmin,
  retrieveAllAdmins,
} from '../../controller/AdminController.js';
import adminAccess from '../../middleWares/adminAccess.js';
import { createLoginValidation } from '../../middleWares/adminSignupValidation.js';
import { authorized } from '../../middleWares/authentication.js';

const AdminRouter = express.Router();

/**
 * @openapi
 * /Admin:
 *   get:
 *     tags:
 *       - Admin
 *     summary: Retrieve all admins
 *     security:
 *       - token: []
 *     responses:
 *       200:
 *         description: A list of admins
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schema/Response'
 *       401:
 *         description: Should authorized( logged in)
 *       403:
 *         description: Should have an admin access to retrieve all admins
 *       500:
 *         description: Server error
 */

AdminRouter.get('/', authorized, adminAccess, retrieveAllAdmins);

/**
 * @openapi
 * /Admin:
 *   post:
 *     tags:
 *       - Admin
 *     summary: Create an admin
 *     security:
 *       - token: []
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schema/UserSignUp'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schema/Response'
 *       400:
 *         description: Invalid infor
 *       401:
 *         description: Should authorized( logged in)
 *       403:
 *         description: Should have an admin access to create an admins
 *       500:
 *         description: Server error
 */

AdminRouter.post(
  '/',
  createLoginValidation,
  authorized,
  adminAccess,
  createAdmin
);

/**
 * @openapi
 * /Admin/{id}:
 *   delete:
 *     tags:
 *       - Admin
 *     summary: Delete the admin
 *     security:
 *       - token: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The unique id of the admin
 *         required: true
 *     responses:
 *       204:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *                 type: string
 *                 default: Admin deleted
 *       400:
 *         description: Invalid admin id
 *       401:
 *         description: Should authorized( logged in)
 *       403:
 *         description: Should have an admin access to delete the admin
 *       404:
 *         description: user not found
 *       500:
 *         description: Server error
 */

AdminRouter.delete('/:id', authorized, adminAccess, removeAdmin);

export default AdminRouter;
