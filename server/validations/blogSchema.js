import Joi from 'joi';

const blogSchemaValidation = Joi.object({
  title: Joi.string().min(10).required(),
  description: Joi.string().min(10).required(),
  image: Joi.string().required(),
  likes: Joi.array(),
  comments: Joi.array(),
});

export default blogSchemaValidation;
