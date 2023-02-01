import Joi from "joi";

const commentSchemaValidation = Joi.object({
	comment: Joi.string().min(10).required(),
});

export { commentSchemaValidation };
