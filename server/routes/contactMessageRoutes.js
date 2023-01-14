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

messagerouter.get("/", retrieveAllMessages);

messagerouter.get("/:id", retrieveSingleMessage);

messagerouter.get("/messageCount", messageCount);

messagerouter.post("/", createContactMessageValication, createMessage);

messagerouter.delete("/:id", deleteMessage);

export default messagerouter;
