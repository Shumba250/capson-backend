import Joi from "joi";

const commentSchemaValidation = Joi.object({
	name: Joi.string().min(4).required(),
	email: Joi.string().email({ minDomainSegments: 2 }).required(),
	message: Joi.string().min(25).required(),
});

export { commentSchemaValidation };
