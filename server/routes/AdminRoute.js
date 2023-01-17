import express from "express";
import {
	createAdmin,
	removeAdmin,
	retrieveAllAdmins,
} from "../controller/AdminController.js";
import adminAccess from "../middleWares/adminAccess.js";
import { createLoginValidation } from "../middleWares/adminSignupValidation.js";
import { authorized } from "../middleWares/authentication.js";

const AdminRouter = express.Router();

AdminRouter.get("/", authorized, adminAccess, retrieveAllAdmins);

AdminRouter.post("/", createLoginValidation, createAdmin);

AdminRouter.delete("/:id", authorized, adminAccess, removeAdmin);

export default AdminRouter;
