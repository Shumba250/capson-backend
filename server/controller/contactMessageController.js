import contactMessages from "../models/contactMessageModule.js";

const retrieveAllMessages = async (req, res) => {
	try {
		const messages = await contactMessages.find();
		res.status(200).json({
			status: "success",
			message: "all messages retireved",
			data: { messages: messages },
		});
	} catch (error) {
		res
			.status(404)
			.json({ status: "error", message: "failed to retrieve messages" });
	}
};

const messageCount = async (req, res) => {
	try {
		const messages = await contactMessages.find().exec();
		res.status(200).json({
			status: "success",
			message: "number of messages retireved",
			data: { messages: messages.length },
		});
	} catch (error) {
		res.status(404).json({ status: "error", message: "invalid resource path" });
	}
};

const retrieveSingleMessage = async (req, res) => {
	try {
		const messages = await contactMessages.findOne({ _id: req.params.id });
		res.status(200).json({
			status: "success",
			message: "message retireved",
			data: { messages: messages },
		});
	} catch (error) {
		res.status(404).json({ status: "error", message: "message not found" });
	}
};

const createMessage = async (req, res) => {
	try {
		const message = new contactMessages({
			name: req.body.name,
			email: req.body.email,
			subject: req.body.subject,
			message: req.body.message,
		});
		const messages = await message.save();
		res.status(200).json({
			status: "success",
			message: "message was sent successfully",
			data: { messages: messages },
		});
	} catch (error) {
		res.status(404).json({ status: "error", message: "message not sent" });
	}
};

const deleteMessage = async (req, res) => {
	try {
		const messages = await contactMessages.deleteOne({ _id: req.params.id });
		res.status(200).json({
			status: "success",
			message: "message deleted successfully",
			data: { messages: messages },
		});
	} catch (error) {
		res.status(404).json({ status: "error", message: "message not deleted" });
	}
};

export {
	createMessage,
	retrieveAllMessages,
	retrieveSingleMessage,
	messageCount,
	deleteMessage,
};
