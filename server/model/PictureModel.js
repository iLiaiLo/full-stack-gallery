import mongoose from "mongoose";
const PictureSchema = new mongoose.Schema({
  img_url: { type: String, required: true, trim: true },
  genre: { type: String, required: true, trim: true },
});

const PictureModel = new mongoose.model("pictures", PictureSchema);
export default PictureModel;
