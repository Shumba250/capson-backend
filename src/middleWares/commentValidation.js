import { commentSchemaValidation } from "../validations/commentSchema.js";

function createCommentValidation(req, res, next) {
	const { error, value } = commentSchemaValidation.validate(req.body, {
		abortEarly: false,
	});
	if (error) {
		return res.status(400).send(error.message);
	}
	req.validatedData = value;
	next();
}

export { createCommentValidation };
