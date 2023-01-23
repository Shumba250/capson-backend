import Joi from 'joi';

const updateBlogValidation = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  image: Joi.string(),
}).min(1);

export default updateBlogValidation;
