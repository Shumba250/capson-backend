import dotenv from 'dotenv';
import express from 'express';
import router from './src/routes/routes';
import passport from 'passport';
import cors from 'cors';

import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());
app.use('/', router);

export default app;
