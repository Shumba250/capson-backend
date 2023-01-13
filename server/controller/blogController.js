import Article from "../models/blogmodules.js";

const createArticle = async (req, res) => {
	try {
		const blog = new Article({
			title: req.body.title,
			description: req.body.description,
			image: req.body.image,
		});
		const blogs = await blog.save();
		res.status(200).json(blogs);
	} catch (error) {
		res.send({ error: "Article doesn't exist!" });
	}
};

export { createArticle };
