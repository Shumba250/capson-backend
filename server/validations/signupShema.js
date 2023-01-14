import Joi from "joi";

const signupSchemaValidation = Joi.object({
	firstName: Joi.string().min(4).required(),
	lastName: Joi.string().min(4).required(),
	email: Joi.string().email({ minDomainSegments: 2 }).required(),
});

export { signupSchemaValidation };
