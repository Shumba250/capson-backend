import jwt from "jsonwebtoken";
import "dotenv/config";

const tokenEncoded = async (id) => {
	const token = jwt.sign({ id }, process.env.jwtStrng, {
		expiresIn: "1h",
	});
	return token;
};

export default tokenEncoded;
