import Joi from 'joi';

const updateBlogValidation = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  image: Joi.string().optional(),
}).min(1);

export default updateBlogValidation;
