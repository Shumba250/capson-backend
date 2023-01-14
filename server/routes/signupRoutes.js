import express from "express";
import {
	createUser,
	deleteUser,
	retireveSingleUser,
	retrieveAllUses,
	updateUser,
	userCount,
} from "../controller/signupController.js";
import { createSignupValidation } from "../middleWares/signupValidation.js";
const signupRouter = express.Router();
import signup from "../models/signupModule.js";

signupRouter.get("/", retrieveAllUses);

signupRouter.get("/signupCount", userCount);

signupRouter.get("/:id", retireveSingleUser);

signupRouter.post("/", createSignupValidation, createUser);

signupRouter.patch("/:id", createSignupValidation, updateUser);

signupRouter.delete("/:id", deleteUser);

export default signupRouter;
