import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import PictureModel from "./model/PictureModel.js";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

import getImages from "./controllers/getImages.js";
import uploadImage from "./middlewares/uploadImage.js";
import addImage from "./controllers/addImage.js";
import getSingleImage from "./controllers/getSingleImage.js";
import filterImages from "./controllers/filterImages.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: "Content-type",
  }),
);

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/display_images", getImages);
app.get("/display_images/filter", filterImages);

app.get("/display_images/:id", getSingleImage);

app.post("/upload_image", uploadImage, addImage);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  })
  .catch((e) => console.log(e));
