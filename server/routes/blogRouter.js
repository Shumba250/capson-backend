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
import adminAccess from "../middleWares/adminAccess.js";
import userAccess from "../middleWares/userAccess.js";

const router = express.Router();
import { Article, Comment } from "../models/blogmodules.js";
import { authorized } from "../middleWares/authentication.js";

router.get("/", authorized, retrieveAllArticles);

router.get("/blogCount", authorized, articleCount);

router.get("/:id", authorized, retrieveSingleArticle);

router.post("/", createBlogValidations, authorized, adminAccess, createArticle);

router.patch(
	"/:id",
	createBlogValidations,
	authorized,
	adminAccess,
	updateSingleArticle
);

router.delete("/:id", authorized, adminAccess, deleteSingleArticle);

router.post(
	"/:id/comments",
	createCommentValidation,
	authorized,
	createComment
);

export default router;
