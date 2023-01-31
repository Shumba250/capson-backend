import Joi from "joi";

const commentSchemaValidation = Joi.object({
	comment: Joi.string().min(25).required(),
});

export { commentSchemaValidation };
