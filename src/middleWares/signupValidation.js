import { signupSchemaValidation } from "../validations/signupShema.js";

function createSignupValidation(req, res, next) {
	const { error, value } = signupSchemaValidation.validate(req.body, {
		abortEarly: false,
	});
	if (error) {
		return res.status(400).send(error.message);
	}
	req.validatedData = value;
	next();
}

export { createSignupValidation };
