import app from './app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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
