const express = require("express");
const router = express.Router();
const Article = require("../models/blogmodules");

router.get("/", async (req, res) => {
	const blogs = await Article.find();
	res.json(blogs);
});

router.post("/", async (req, res) => {
	try {
		const blog = new Article({
			title: req.body.title,
			description: req.body.description,
			image: req.body.image,
		});
		const result = await blog.save();
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json(error.message);
	}
});

router.patch("/:id", async (req, res) => {
	try {
		const blog = await Article.findOne({ _id: req.params.id });
		if (req.body.title) {
			blog.title = req.body.title;
		}

		if (req.body.description) {
			blog.description = req.body.description;
		}
		if (req.body.image) {
			blog.image = req.body.image;
		}
		const result = await blog.save();
		res.status(200).json(result);
	} catch {
		res.status(404);
		res.send({ error: "Post doesn't exist!" });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const blog = await Article.deleteOne({ _id: req.params.id });
		res.status(204).send();
	} catch {
		res.status(404);
		res.send({ error: "Post doesn't exist!" });
	}
});
module.exports = router;
