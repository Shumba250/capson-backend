import blogSchemaValidation from '../validations/blogSchema.js';

async function createBlogValidations(req, res, next) {
  try {
    const { title, description } = req.body;
    const data = { title, description, image: req.file.path };
    const { error, value } = blogSchemaValidation.validate(data, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).send(error.message);
    }
    req.validatedData = value;
    next();
  } catch (error) {
    console.log(error);
  }
}

export { createBlogValidations };
