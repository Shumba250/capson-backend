import express from "express";
const router = express.Router();
import Article from "../models/blogmodules.js";

router.get("/", async (req, res) => {
	try {
		const blog = await Article.find();
		res.status(200).json(blog);
	} catch (error) {
		res.send({ error: "Article doesn't exist!" });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const blog = await Article.findOne({ _id: req.params.id });
		res.status(200).json(blog);
	} catch (error) {
		res.send({ error: "Article does not exist" });
	}
});

router.post("/", async (req, res) => {
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
		const blogs = await blog.save();
		res.status(200).json(blogs);
	} catch {
		res.send({ error: "Article doesn't exist!" });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const blog = await Article.deleteOne({ _id: req.params.id });
		res.status(200).json(blog);
	} catch {
		res.send({ error: "Article doesn't exist!" });
	}
});
export default router;
