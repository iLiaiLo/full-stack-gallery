import { useState, useEffect } from "react";
// import { URL } from "../assets/URL";
import { useParams, NavLink } from "react-router-dom";

const URL = import.meta.env.VITE_URL;
const Image = () => {
  const { id } = useParams();
  const [imageData, setImageData] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`${URL}/display_images/${id}`);
        const singleImage = await res.json();

        setImageData(singleImage);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  const handleDownload = async (image_url) => {
    try {
      const response = await fetch(image_url);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;

      const dotIndex = image_url.lastIndexOf(".");
      const extname = image_url.slice(dotIndex);

      a.download = `${Date.now()}_image${extname}`;

      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single-image">
      <img src={`${imageData.img_url}`} alt="media image" />
      <span>genre : {imageData.genre}</span>
      <span>
        <NavLink to={"/"}>back to home page</NavLink>
      </span>
      <button onClick={() => handleDownload(`${imageData.img_url}`)}>
        download image
      </button>
    </div>
  );
};

export default Image;
