import express from 'express';
import {
  createUser,
  deleteUser,
  retireveSingleUser,
  retrieveAllUses,
  updateUser,
  userCount,
} from '../../controller/signupController.js';
import { createSignupValidation } from '../../middleWares/signupValidation.js';
import adminAccess from '../../middleWares/adminAccess.js';
import { authorized } from '../../middleWares/authentication.js';

const signupRouter = express.Router();

signupRouter.get('/', authorized, adminAccess, retrieveAllUses);

signupRouter.get('/signupCount', authorized, adminAccess, userCount);

signupRouter.get('/:id', authorized, adminAccess, retireveSingleUser);

signupRouter.post('/', createSignupValidation, createUser);

signupRouter.patch(
  '/:id',
  createSignupValidation,
  authorized,
  adminAccess,
  updateUser
);

signupRouter.delete('/:id', authorized, adminAccess, deleteUser);

export default signupRouter;
