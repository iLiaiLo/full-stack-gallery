import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../assets/context";
import SelectGenres from "./genres/SelectGenres";

const URL = import.meta.env.VITE_URL;
const UploadImage = () => {
  const Navigate = useNavigate();

  const { setPictures } = useContext(userContext);

  const [genre, setGenre] = useState("any");
  const [file, setFile] = useState(null);
  const fileRef = useRef(null);

  const handleUpload = async () => {
    if (fileRef.current.files.length == 0) {
      alert("please provide image name");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("genre", genre);
      formData.append("file", file);

      const res = await fetch(`${URL}/upload_image`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        console.log(res.statusText);
        return;
      }
      const newImage = await res.json();

      if (newImage) {
        alert("image uploaded");
      }

      const img = new Image();
      img.src = `${newImage.img_url}`;

      img.onerror = () => {
        console.log("error loading image");
        return;
      };

      img.onload = () => {
        const obj = { genre: newImage.genre, img_url: newImage.img_url };
        setPictures((prew) => [...prew, obj]);
      };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="upload-image-page">
      <label>Select genre</label>
      <SelectGenres setGenre={setGenre} />
      <input
        ref={fileRef}
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>upload</button>
      <button onClick={() => Navigate("")}>Back to home page</button>
    </div>
  );
};

export default UploadImage;
