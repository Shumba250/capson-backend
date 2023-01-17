import {
	logInFormSchema,
	signupSchemaValidation,
} from "../validations/signupShema.js";

function createLoginValidation(req, res, next) {
	const { error, value } = signupSchemaValidation.validate(req.body, {
		abortEarly: false,
	});
	if (error) {
		return res.status(400).send(error.message);
	}
	req.validatedData = value;
	next();
}

function logInFormValidation(req, res, next) {
	const { error, value } = logInFormSchema.validate(req.body, {
		abortEarly: false,
	});
	if (error) {
		return res.status(400).send(error.message);
	}
	req.validatedData = value;
	next();
}

export { createLoginValidation, logInFormValidation };
