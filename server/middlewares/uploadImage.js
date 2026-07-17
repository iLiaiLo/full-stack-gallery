import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public");
  },
  filename: (req, file, cb) => {
    const regex = /\s+/g;
    cb(null, `${Date.now()}_${file.originalname.replace(regex, "_")}`);
  },
});
const upload = multer({
  storage,
  limits: {
    fileSize: 25 * 1024 * 1024,
    files: 1,
    fields: 2,
    fieldNestingDepth: 1,
  },
});

const uploadImage = upload.single("file");

export default uploadImage;
