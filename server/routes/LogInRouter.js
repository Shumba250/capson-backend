import express from "express";
import { logIn } from "../controller/LogInController.js";
import { logInFormValidation } from "../middleWares/adminSignupValidation.js";
import { authorizedUserLogin } from "../middleWares/authentication.js";

const LogIn = express.Router();

LogIn.post("/", logInFormValidation, authorizedUserLogin, logIn);

export { LogIn };
