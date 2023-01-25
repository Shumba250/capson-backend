import express from 'express';
import messagerouter from './apis/contactMessageRoutes.js';
import AdminRouter from './apis/AdminRoute.js';
import signupRouter from './apis/signupRoutes.js';
import { LogIn } from './apis/LogInRouter.js';
import articleRouter from './apis/blogRouter.js';
import swaggerUi from 'swagger-ui-express';
import specs from '../helper/swagger.js';

const router = express.Router();

router.use('/blogs', articleRouter);
router.use('/contactMessages', messagerouter);
router.use('/signups', signupRouter);
router.use('/Admin', AdminRouter);
router.use('/login', LogIn);
router.use('/capston/doc', swaggerUi.serve, swaggerUi.setup(specs));

export default router;
