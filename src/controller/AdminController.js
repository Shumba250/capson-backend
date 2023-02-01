import signup from "../models/signupModule.js";
import bcrypt from "bcrypt";

const retrieveAllAdmins = async (req, res) => {
	try {
		const Admin = await signup.find({ role: "admin" }).exec();
		res.status(200).json({
			status: "success",
			message: "list of all Admins",
			data: { adminCount: Admin.length, Admin },
		});
	} catch (error) {
		res
			.status(400)
			.json({ status: "error", message: "failed to retrieve list of admins" });
	}
};
const admins = async (req, res) => {
	res.status(200).json("Is an admin");
  };

const createAdmin = async (req, res) => {
	try {
		const { firstName, lastName, email, password } = req.body;
		const hashPass = await bcrypt.hash(password, 10);
		const Admin = new signup({
			firstName,
			lastName,
			email,
			password: hashPass,
			role: "admin",
		});
		const alreadyRegistered = await signup.findOne({ email: Admin.email });
		if (alreadyRegistered) {
			return res
				.status(400)
				.json({ status: "Not added", message: "admin already exists" });
		}

		const adminCreated = await Admin.save();
		res.status(200).json({
			status: "success",
			message: "Admin created",
			data: { Admin: adminCreated },
		});
	} catch (error) {
		res
			.status(500)
			.json({ status: "error", message: "unexpected server error" });
	}
};

const removeAdmin = async (req, res) => {
	try {
		const Admin = await signup.deleteOne({ _id: req.params.id });
		res.status(200).json({
			status: " success",
			message: "Admin deleted",
			data: { Admins: Admin },
		});
	} catch (error) {
		res.status(400).json({ status: "error", message: "admin not found" });
	}
};

export { createAdmin, retrieveAllAdmins, removeAdmin, admins };
