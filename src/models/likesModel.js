import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const likes = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'singup',
  },
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
  },
});

export default mongoose.model('Likes', likes);
