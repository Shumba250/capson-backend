import signup from "../models/signupModule.js";
import bcrypt from "bcrypt";

//retrieve all users
const retrieveAllUses = async (req, res) => {
	try {
		const signups = await signup.find().exec();
		res.status(200).json({
			status: "success",
			message: "all users retieved",
			data: { userCount: signups.length, users: signups },
		});
	} catch (error) {
		res.status(404).json({
			status: "error",
			message: "failed to retrieve all users information",
		});
	}
};
//retieve the number of users
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
//retireve a single user
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
//add a user
const createUser = async (req, res) => {
	try {
		const { firstName, lastName, email, password } = req.body;
		const hashPass = await bcrypt.hash(password, 10);
		const signups = new signup({
			firstName,
			lastName,
			email,
			password: hashPass,
		});
		const userRegistered = await signup.findOne({ email: signups.email });
		if (userRegistered) {
			res
				.status(400)
				.json({ status: "User not created", message: "user already exists" });
		}
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
// update users information
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
// delete a user
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
