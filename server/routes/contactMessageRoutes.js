import express from "express";
const messagerouter = express.Router();
import contactMessages from "../models/contactMessageModule.js";

messagerouter.get("/", async (req, res) => {
	try {
		const messages = await contactMessages.find();
		res.status(200).json(messages);
	} catch (error) {
		res.send({ error: "messages not found" });
	}
});

messagerouter.get("/:id", async (req, res) => {
	try {
		const messages = await contactMessages.findOne({ _id: req.params.id });
		res.status(200).json(messages);
	} catch (error) {
		res.send({ error: "messages not found" });
	}
});

messagerouter.get("/messageCount", async (req, res) => {
	try {
		const messages = await contactMessages.find();
		res.status(200).send(messages.length);
	} catch (error) {
		res.send({ error: "message count failed" });
	}
});

messagerouter.post("/", async (req, res) => {
	try {
		const message = new contactMessages({
			name: req.body.name,
			email: req.body.email,
			subject: req.body.subject,
			message: req.body.message,
		});
		const messages = await message.save();
		res.status(200).json(messages);
	} catch (error) {
		res.send({ error: "message not sent" });
	}
});

messagerouter.delete("/:id", async (req, res) => {
	try {
		const messages = await contactMessages.deleteOne({ _id: req.params.id });
		res.status(200).json(messages);
	} catch (error) {
		res.send({ error: "message not found" });
	}
});

export default messagerouter;
