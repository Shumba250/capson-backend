import express from "express";
import { createContactMessageValication } from "../middleWares/contactMessageValidation.js";
import {
	createMessage,
	deleteMessage,
	messageCount,
	retrieveAllMessages,
	retrieveSingleMessage,
} from "../controller/contactMessageController.js";
const messagerouter = express.Router();
import contactMessages from "../models/contactMessageModule.js";
import { authorized } from "../middleWares/authentication.js";
import adminAccess from "../middleWares/adminAccess.js";

messagerouter.get("/", authorized, adminAccess, retrieveAllMessages);

messagerouter.get("/:id", authorized, adminAccess, retrieveSingleMessage);

messagerouter.get("/messageCount", authorized, adminAccess, messageCount);

messagerouter.post("/", createContactMessageValication, createMessage);

messagerouter.delete("/:id", authorized, adminAccess, deleteMessage);

export default messagerouter;
