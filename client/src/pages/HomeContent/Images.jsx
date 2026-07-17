import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "../../context/context";

const Images = () => {
  const { pictures } = useContext(userContext);
  return pictures.length ? (
    <section className="image-container">
      {pictures.map((picture, ind) => {
        return (
          <div key={picture._id}>
            <img src={`${picture.img_url}`} alt="media image" />
            <span>genre : {picture.genre}</span>
            <span>
              <NavLink to={`${picture._id}`}>view image</NavLink>
            </span>
          </div>
        );
      })}
    </section>
  ) : (
    <h1 className="empty-message">No image so far</h1>
  );
};

export default Images;
