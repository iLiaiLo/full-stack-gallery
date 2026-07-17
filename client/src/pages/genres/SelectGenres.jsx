import genres from "./genres";

const SelectGenres = ({ setGenre }) => {
  const handleGenreChange = (e) => {
    const genre = e.target.value;
    setGenre(genre);
  };
  return (
    <select onChange={handleGenreChange}>
      {genres.map((genre, ind) => {
        return (
          <option key={ind} value={genre}>
            {genre}
          </option>
        );
      })}
    </select>
  );
};

export default SelectGenres;
