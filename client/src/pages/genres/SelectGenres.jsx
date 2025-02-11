import genres from "./genres"

const SelectGenres = ({setGenre}) => {
  return (
    <select onChange={(e)=>setGenre(e.target.value)} >
      {
        genres.map((genre,ind)=>{
          return <option key={ind} value={genre}>{genre}</option>
        })
      }
      </select>
  )
}

export default SelectGenres