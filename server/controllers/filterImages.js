import PictureModel from "../model/PictureModel.js";

const filterImages = async (req, res) => {
  try {
    const genre = req.query.genre;
    const filteredImages = await PictureModel.find({
      genre: { $regex: genre, $options: "i" },
    });

    return res.status(200).json(filteredImages);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default filterImages;
