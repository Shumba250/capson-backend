import blogSchemaValidation from "../validations/blogSchema.js";

async function createBlogValidations(req, res, next) {
	const { error, value } = blogSchemaValidation.validate(req.body, {
		abortEarly: false,
	});
	if (error) {
		return res.status(400).send(error.message);
	}
	req.validatedData = value;
	next();
}

export { createBlogValidations };
