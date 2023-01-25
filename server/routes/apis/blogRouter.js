import express from 'express';
import {
  articleCount,
  createArticle,
  createComment,
  deleteSingleArticle,
  retrieveAllArticles,
  retrieveSingleArticle,
  updateSingleArticle,
} from '../../controller/blogController.js';
import { createBlogValidations } from '../../middleWares/blogValidation.js';
import { createCommentValidation } from '../../middleWares/commentValidation.js';
import adminAccess from '../../middleWares/adminAccess.js';
import upload from '../../utils/uploadFile.js';

const articleRouter = express.Router();
import { authorized } from '../../middleWares/authentication.js';
import updateBlogValidations from '../../middleWares/updateBlogValidation.js';

articleRouter.get('/', authorized, adminAccess, retrieveAllArticles);

articleRouter.get('/blogCount', authorized, adminAccess, articleCount);

articleRouter.get('/:id', authorized, adminAccess, retrieveSingleArticle);

articleRouter.post(
  '/',
  upload.single('image'),
  createBlogValidations,
  authorized,
  adminAccess,
  createArticle
);

articleRouter.patch(
  '/:id',
  upload.single('image'),
  updateBlogValidations,
  authorized,
  adminAccess,
  updateSingleArticle
);

articleRouter.delete('/:id', authorized, adminAccess, deleteSingleArticle);

articleRouter.post(
  '/:id/comments',
  authorized,
  createCommentValidation,
  createComment
);

export default articleRouter;
