const mongoose=require("mongoose");

const PictureSchema=new mongoose.Schema({
    img_url:{type:String},
    genre:{type:String}
})

const PictureModel=new mongoose.model("picture_collection",PictureSchema);
module.exports=PictureModel;