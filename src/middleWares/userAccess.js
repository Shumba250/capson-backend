import signup from "../models/signupModule.js";

const userAccess = async (req, res, next) => {
	try {
		const users = await signup.findOne({ _id: req.user._id, role: "admin" });
		if (users) {
			return res.status(401).json({
				status: "blocked",
				message: "only users allowed to do this action",
			});
		}
		next();
	} catch (error) {
		res.status(500).json(error);
	}
};

export default userAccess;
