const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const multer=require("multer");
const PictureModel=require("./model/PictureModel");
require("dotenv").config();
const app=express();

const PORT=process.env.PORT;
const URI=process.env.URI;

app.use(express.json())

app.use(cors({
    origin:'http://localhost:5173',
    methods:["GET","POST","PUT","PATCH","DELETE"],
    allowedHeaders:"Content-type"
}))

app.use(express.static("Public"))

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'Public/Pictures')
    },
    filename:(req,file,cb)=>{
        const regex=/\s+/g
        cb(null,`${Date.now()}_${file.originalname.replace(regex,"_")}`)
    }
})
const upload=multer({storage})


app.get('/display_images',async (req,res)=>{
    try {
        const pictureData=await PictureModel.find();
        res.status(200).json(pictureData);
    } catch (error) {
        res.status(500).json({msg:error});
    }
})


app.post('/upload_image',upload.single("file"),async (req,res)=>{
    try {
        const genre=req.body.genre;
        const img_url=req.file.filename;
        const newPicture=new PictureModel({img_url:img_url,genre:genre});
        await newPicture.save();

        res.status(201).json({img_url:img_url,genre:genre});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error});
    }
})

mongoose.connect(URI).then(()=>{
    console.log("connected to database")
    app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
}
).catch(e=>console.log(e))
