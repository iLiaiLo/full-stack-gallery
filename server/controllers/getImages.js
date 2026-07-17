import PictureModel from "../model/PictureModel.js";

const getImages = async (req, res) => {
  try {
    const pictureData = await PictureModel.find().select({
      _id: 1,
      img_url: 1,
      genre: 1,
    });
    return res.status(200).json(pictureData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default getImages;
