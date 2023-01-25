import updateBlogValidation from '../validations/updateBlogSchema.js';

async function updateBlogValidations(req, res, next) {
  const { error, value } = updateBlogValidation.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    return res.status(400).send(error.message);
  }
  req.validatedData = value;
  next();
}

export default updateBlogValidations;
