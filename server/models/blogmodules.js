import mongoose from "mongoose";

const Schema = mongoose.Schema;
const blogSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		likes: {
			type: Array,
			default: [],
		},
		comments: {
			type: Array,
			default: [],
		},
		image: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const commentSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		comment: {
			type: String,
			required: true,
		},
		articleId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Article",
		},
	},
	{ timestamps: true }
);
const Article = mongoose.model("Article", blogSchema);
const Comment = mongoose.model("Comment", commentSchema);

export { Article, Comment };
