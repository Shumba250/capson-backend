import express from "express";
const router = express.Router();
import Article from "../models/blogmodules.js";

router.get("/", async (req, res) => {
	try {
		const blogs = await Article.find();
		res.status(200).json({
			status: "success",
			message: "blogs retrieved successfully",
			data: { blog: blogs },
		});
	} catch (error) {
		res.status(404).json({ status: "error", message: "blogs not found" });
	}
});

router.get("/blogCount", async (req, res) => {
	try {
		const blogs = await Article.find().exec();
		res.status(200).json({
			status: "success",
			message: "blogs retrieved successfully",
			data: { blogs: blogs.length },
		});
	} catch (error) {
		res.status(404).json({ status: "error", message: "blogs not found" });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const blog = await Article.findOne({ _id: req.body.id });
		res.status(200).json({
			status: "success",
			message: "blog retrieved successfully",
			data: { blog: blog },
		});
	} catch (error) {
		res.status(404).json({ status: "error", message: "blog not found" });
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
		res.status(200).json({
			status: "success",
			message: "blog post was a success",
			data: { blog: blogs },
		});
	} catch (error) {
		res.status(404).json({ status: "error", message: "blog not posted" });
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
		res.status(200).json({
			status: "success",
			message: "blog updated",
			data: { blog: blogs },
		});
	} catch {
		res
			.status(404)
			.json({ status: "error", message: "failed to update the blog" });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const blog = await Article.deleteOne({ _id: req.params.id });
		res.status(200).json({
			status: "success",
			message: "blog deleted",
			data: { blog: blog },
		});
	} catch {
		res.status(404).json({ status: "error", message: "blog not deleted" });
	}
});
export default router;
