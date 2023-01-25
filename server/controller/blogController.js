import { Article } from '../models/blogmodules.js';
import cloudinary from '../utils/cloudinary.js';

//post a blog
const createArticle = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'articles',
    });
    const blog = new Article({
      title: req.body.title,
      description: req.body.description,
      image: { publicId: result.public_id, url: result.secure_url },
    });
    const blogs = await blog.save();
    res.status(200).json({
      status: 'success',
      message: 'blog post was a success',
      data: { blog: blogs },
    });
  } catch (error) {
    res.status(404).json({ status: 'error', message: 'blog not posted' });
  }
};
//retrieve all articles
const retrieveAllArticles = async (req, res) => {
  try {
    const blog = await Article.find().exec();
    res.status(200).json({
      status: 'success',
      message: 'blogs retrieved successfully',
      data: { blogCount: blog.length, blog: blog },
    });
  } catch (error) {
    res.status(404).json({ status: 'error', message: 'blogs not found' });
  }
};
//counting all the saved articles
const articleCount = async (req, res) => {
  try {
    const blogs = await Article.find().exec();
    res.status(200).json({
      status: 'success',
      message: 'blogs retrieved successfully',
      data: { blogs: blogs.length },
    });
  } catch (error) {
    res.status(404).json({ status: 'error', message: 'blogs not found' });
  }
};
//retieve a single blog
const retrieveSingleArticle = async (req, res) => {
  try {
    const blog = await Article.findOne({ _id: req.params.id });
    res.status(200).json({
      status: 'success',
      message: 'blog retrieved successfully',
      data: { blog: blog },
    });
  } catch (error) {
    res.status(404).json({ status: 'error', message: 'blog not found' });
  }
};
//update a single blog
const updateSingleArticle = async (req, res) => {
  try {
    const blog = await Article.findOne({ _id: req.params.id });
    if (req.body.title) {
      blog.title = req.body.title;
    }

    if (req.body.description) {
      blog.description = req.body.description;
    }
    if (req.body.image) {
      const result = await cloudinary.uploader.upload(req.body.image);
      blog.image.publicId = result.public_id;
      blog.image.url = result.secure_url;
    }
    const blogs = await blog.save();
    res.status(200).json({
      status: 'success',
      message: 'blog updated',
      data: { blog: blogs },
    });
  } catch {
    res
      .status(404)
      .json({ status: 'error', message: 'failed to update the blog' });
  }
};
//delete a blog
const deleteSingleArticle = async (req, res) => {
  try {
    const blog = await Article.deleteOne({ _id: req.params.id });
    res.status(200).json({
      status: 'success',
      message: 'blog deleted',
      data: { blog: blog },
    });
  } catch {
    res.status(404).json({ status: 'error', message: 'blog not deleted' });
  }
};
//create a comment
const createComment = async (req, res) => {
  try {
    const { name, email, comment } = req.body;
    const comments = new Comment({
      name,
      email,
      comment,
    });
    const commentSave = await comments.save();
    await Article.findByIdAndUpdate(req.params.id, {
      $push: { comments: commentSave },
    });
    res.status(200).json(commentSave);
  } catch (error) {
    res.status(500).json(error);
  }
};

export {
  createArticle,
  retrieveSingleArticle,
  retrieveAllArticles,
  updateSingleArticle,
  deleteSingleArticle,
  createComment,
  articleCount,
};
