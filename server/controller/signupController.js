import signup from "../models/signupModule.js";

const retrieveAllUses = async (req, res) => {
	try {
		const signups = await signup.find();
		res.status(200).json({
			status: "success",
			message: "all users retieved",
			data: { users: signups },
		});
	} catch (error) {
		res.status(404).json({
			status: "error",
			message: "failed to retrieve all users information",
		});
	}
};

const userCount = async (req, res) => {
	try {
		const signups = await signup.find().exec();
		res.status(200).json({
			status: "success",
			message: "number of users retreived",
			data: { users: signups.length },
		});
	} catch (error) {
		res.status(404).json({
			status: "error",
			message: "users not found",
		});
	}
};

const retireveSingleUser = async (req, res) => {
	try {
		const signs = await signup.findOne({ _id: req.params.id });
		res.status(200).json({
			status: "success",
			message: "user retrieved",
			data: { user: signs },
		});
	} catch (error) {
		res.status(404).json({
			status: "error",
			message: "failed to retrieve user information",
		});
	}
};

const createUser = async (req, res) => {
	try {
		const signups = new signup({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
		});
		const user = await signups.save();
		res
			.status(200)
			.json({ status: "success", message: "user added", data: { user: user } });
	} catch (error) {
		res.status(400).json({
			status: "error",
			message: "failed to add a user information",
		});
	}
};

const updateUser = async (req, res) => {
	try {
		const user = await signup.findOne({ _id: req.params.id });
		if (req.body.firstName) {
			user.firstName = req.body.firstName;
		}
		if (req.body.lastName) {
			user.lastName = req.body.lastName;
		}
		if (req.body.email) {
			user.email = req.body.email;
		}
		const users = await user.save();
		res.status(200).json({
			status: "success",
			message: "user information updated",
			data: { user: users },
		});
	} catch (error) {
		res.status(404).json({
			status: "error",
			message: "failed to update users information",
		});
	}
};

const deleteUser = async (req, res) => {
	try {
		const signups = await signup.deleteOne({ _id: req.params.id });
		res.status(200).json({
			status: "success",
			message: "user deleted",
			data: { user: signups },
		});
	} catch (error) {
		res.status(404).json({
			status: "success",
			message: "user not found",
		});
	}
};

export {
	createUser,
	updateUser,
	deleteUser,
	retrieveAllUses,
	userCount,
	retireveSingleUser,
};
