//multer stores data in temporary storage then uploads on cloudinary
// u cant understand it , u have to read the documentations from github 

import multer from "multer";

// to save on disk storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); //path to temporary folder
  },
  filename: function (req, file, cb) {
    
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage, });