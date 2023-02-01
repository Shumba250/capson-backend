import adminAccess from '../../middleWares/adminAccess';
import { admins } from '../../controller/AdminController';
import { authorized } from '../../middleWares/authentication';
import express from 'express';

const adminPermission = express.Router();

adminPermission.get('/', authorized, adminAccess, admins);

export default adminPermission;
