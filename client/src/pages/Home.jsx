import { useContext, useEffect, useRef } from "react";
import userContext from "../context/context";
import Menu from "./HomeContent/Menu";
import Images from "./HomeContent/Images";

const URL = import.meta.env.VITE_URL;
const Home = () => {
  const DataRef = useRef(null);
  const { pictures, setPictures } = useContext(userContext);

  useEffect(() => {
    async function getPictures() {
      try {
        const res = await fetch(`${URL}/display_images`);
        const ImageData = await res.json();
        DataRef.current = ImageData;

        setPictures(ImageData);
      } catch (error) {
        console.log(error);
      }
    }
    getPictures();
  }, []);
  const FilterImageTypes = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);

      const selectedGenre = formData.get("genre");

      const genreInput = selectedGenre == "any" ? "" : selectedGenre;
      const params = new URLSearchParams({ genre: genreInput });

      const res = await fetch(
        `${URL}/display_images/filter?${params.toString()}`,
      );
      const filteredData = await res.json();
      setPictures(filteredData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Menu FilterImageTypes={FilterImageTypes} />
      <Images />
    </div>
  );
};

export default Home;
