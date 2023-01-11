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

export default mongoose.model("Article", blogSchema);
