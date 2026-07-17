import PictureModel from "../model/PictureModel.js";
const addImage = async (req, res) => {
  try {
    const genre = req.body.genre;
    const { filename, mimetype } = req.file;
    if (mimetype !== "image/jpeg") {
      return res.status(400).json({ message: "file type must be image/jpeg" });
    }
    const dest = process.env.IMG_DEST;
    const img_url = dest + filename;
    const newImg = await PictureModel.create({ img_url, genre });

    const { _id } = newImg;

    return res.status(201).json({ _id, img_url, genre });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
export default addImage;
