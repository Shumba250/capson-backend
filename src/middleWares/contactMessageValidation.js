import { contactMessageValidation } from "../validations/contactMessageSchema.js";

function createContactMessageValication(req, res, next) {
	const { error, value } = contactMessageValidation.validate(req.body, {
		abortEarly: false,
	});
	if (error) {
		return res.status(400).send(error.message);
	}
	req.validatedData = value;
	next();
}

export { createContactMessageValication };
