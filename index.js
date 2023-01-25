import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import router from './server/routes/routes';
import passport from 'passport';
import cors from 'cors';

import morgan from 'morgan';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server connected at port ${PORT}`);
      console.log('bd connected successfully');
    });
  })
  .catch((error) => console.log(error));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());
app.use('/', router);

export default app;
