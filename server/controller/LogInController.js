import tokenEncoded from "../utils/tokenEncoded.js";

const logIn = async (req, res) => {
	try {
		const token = await tokenEncoded(req.user._id);
		res
			.status(200)
			.json({ status: "success", message: "login success", token });
	} catch (error) {
		res.status(500).json({ status: "failed", message: "login failed" });
	}
};

export { logIn };
