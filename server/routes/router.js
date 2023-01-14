import express from "express";
import {
	articleCount,
	createArticle,
	createComment,
	deleteSingleArticle,
	retrieveAllArticles,
	retrieveSingleArticle,
	updateSingleArticle,
} from "../controller/blogController.js";
import { createBlogValidations } from "../middleWares/blogValidation.js";
import { createCommentValidation } from "../middleWares/commentValidation.js";
const router = express.Router();
import { Article, Comment } from "../models/blogmodules.js";

router.get("/", retrieveAllArticles);

router.get("/blogCount", articleCount);

router.get("/:id", retrieveSingleArticle);

router.post("/", createBlogValidations, createArticle);

router.patch("/:id", createBlogValidations, updateSingleArticle);

router.delete("/:id", deleteSingleArticle);

router.post("/:id/comments", createCommentValidation, createComment);

export default router;
