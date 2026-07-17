import PictureModel from "../model/PictureModel.js";

const getSingleImage = async (req, res) => {
  try {
    const { id } = req.params;
    const single = await PictureModel.findById(id);
    if (!single) {
      return res.status(404).json({ message: "image not found" });
    }
    return res.status(200).json(single);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default getSingleImage;
