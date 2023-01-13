import Joi from "joi";

const blogSchemaValidation = Joi.object({
	title: Joi.string().min(15).required(),
	description: Joi.string().min(20).required(),
	Image: Joi.string().required(),
	likes: Joi.array(),
	comments: Joi.array(),
});

export default blogSchemaValidation;
