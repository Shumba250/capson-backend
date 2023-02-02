import express from 'express';
import {
  articleCount,
  createArticle,
  createComment,
  deleteSingleArticle,
  retrieveAllArticles,
  retrieveSingleArticle,
  updateSingleArticle,
  likes,
} from '../../controller/blogController.js';
import { createBlogValidations } from '../../middleWares/blogValidation.js';
import { createCommentValidation } from '../../middleWares/commentValidation.js';
import adminAccess from '../../middleWares/adminAccess.js';
import upload from '../../helper/uploadFile.js';
import { authorized } from '../../middleWares/authentication.js';
import updateBlogValidations from '../../middleWares/updateBlogValidation.js';
import userAccess from '../../middleWares/userAccess.js';

const articleRouter = express.Router();

/**
 * @openapi
 * /blogs:
 *   get:
 *     tags:
 *       - Articles
 *     summary: Retrieve all Articles/blogs
 *     security:
 *       - token: []
 *     responses:
 *       200:
 *         description: A list of all blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/BlogResponse'
 *       500:
 *         description: Internal error
 */

articleRouter.get('/', retrieveAllArticles);

/**
 * @openapi
 * /blogs/blogCount:
 *   get:
 *     tags:
 *       - Articles
 *     summary: Retrieve the number of Articles/blogs
 *     security:
 *       - token: []
 *     responses:
 *       200:
 *         description: blogCount
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  blogCount:
 *                      type: number
 *                      default: 0
 *       500:
 *         description: Internal error
 */

articleRouter.get('/blogCount', authorized, adminAccess, articleCount);

/**
 * @openapi
 * /blogs/{id}:
 *   get:
 *     tags:
 *       - Articles
 *     summary: Retrieve a single article/blog
 *     security:
 *       - token: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: use a unique article/blog id
 *         required: true
 *     responses:
 *       200:
 *         description: Article
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/BlogResponse'
 *       400:
 *         description: Invalid blog id
 *       404:
 *         description: blog not found
 *       500:
 *         description: Internal error
 */

articleRouter.get('/:id', retrieveSingleArticle);

/**
 * @openapi
 * /blogs:
 *   post:
 *     tags:
 *       - Articles
 *     summary: Create an Article
 *     security:
 *       - token: []
 *     requestBody:
 *         content:
 *           multipart/form-data:
 *             schema:
 *               $ref: '#/components/schemas/CreateBlog'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BlogResponse'
 *       400:
 *         description: invalid infor
 *       401:
 *         description: Should authorized( logged in)
 *       403:
 *         description: Should have an admin access to post an article
 *       500:
 *         description: Internal error
 */

articleRouter.post(
  '/',
  upload.single('image'),
  createBlogValidations,
  authorized,
  adminAccess,
  createArticle
);

/**
 * @openapi
 * /blogs/{id}:
 *   patch:
 *     tags:
 *       - Articles
 *     summary: Update an article/blog
 *     security:
 *       - token: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: use a unique blog id
 *         required: true
 *     requestBody:
 *         content:
 *           multipart/form-data:
 *             schema:
 *               $ref: '#/components/schemas/UpdateBlog'
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateBlogJson'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BlogResponse'
 *       400:
 *         description: invalid infor
 *       401:
 *         description: Should authorized( logged in)
 *       403:
 *         description: Should have an admin access to update a blog
 *       404:
 *         description: Blog doesn't exist
 *       500:
 *         description: Internal error
 */

articleRouter.patch(
  '/:id',
  upload.single('image'),
  updateBlogValidations,
  authorized,
  adminAccess,
  updateSingleArticle
);

/**
 * @openapi
 * /blogs/{id}:
 *   delete:
 *     tags:
 *       - Articles
 *     summary: Delete an artcile/blog
 *     security:
 *       - token: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: use a unique blog id
 *         required: true
 *     responses:
 *       204:
 *         description: Article deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  Message:
 *                      type: string
 *                      default: Article deleted
 *       400:
 *         description: invalid Article id
 *       401:
 *         description: Should authorized( logged in)
 *       403:
 *         description: Should have an admin access to delete a blog
 *       404:
 *         description: Blog doesn't exist
 *       500:
 *         description: Internal error
 */

articleRouter.delete('/:id', authorized, adminAccess, deleteSingleArticle);

/**
 * @swagger
 * /blogs/{id}/comments:
 *   post:
 *     tags:
 *       - Articles
 *     summary: Add a comment on a blog
 *     security:
 *       - token: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: A unique blog identifier
 *         required: true
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/addComment'
 *     responses:
 *       200:
 *         description: Comment saved
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/CommentResponse'
 *       400:
 *         description: Invalid infor
 *       401:
 *         description: Should authorized( logged in)
 *       404:
 *         description: Blog doen't exit
 *       500:
 *         description: Internal error
 */

articleRouter.post(
  '/:id/comments',
  authorized,
  createCommentValidation,
  createComment
);

articleRouter.put('/:id/likes', authorized, userAccess, likes);

export default articleRouter;
