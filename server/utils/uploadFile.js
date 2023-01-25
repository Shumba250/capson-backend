import multer from 'multer';
import path from 'path';

const uploadFile = multer({
  storage: multer.diskStorage({}),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  fileFilter: (req, file, cb) => {
    let extention = path.extname(file.originalname);
    if (
      !extention === '.jpg' &&
      !extention === '.jpeg' &&
      extention === '.png'
    ) {
      cb(new Error('wrong format', false));
      return;
    }
    cb(null, true);
  },
});

export default uploadFile;
