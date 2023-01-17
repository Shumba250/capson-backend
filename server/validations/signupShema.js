import Joi from "joi";

const signupSchemaValidation = Joi.object({
	firstName: Joi.string().min(4).required(),
	lastName: Joi.string().min(4).required(),
	email: Joi.string().email({ minDomainSegments: 2 }).required(),
	password: Joi.string().required(),
});

const logInFormSchema = Joi.object({
	email: Joi.string().email({ minDomainSegments: 2 }).required(),
	password: Joi.string().required(),
});

export { signupSchemaValidation, logInFormSchema };
