
import genres from '../genres/genres';
import { useNavigate } from 'react-router-dom';


const Menu = ({FilterImageTypes}) => {
    const Navigate=useNavigate()

    
  return (
    <nav className="navigation">
            <section className="form-section">
            <form onSubmit={FilterImageTypes}>
                <label htmlFor="genre">Filter images by genre</label>
                <select name="genre">
                    {
                        genres.map((genre,ind)=>{
                            return <option key={ind} value={genre}>{genre}</option>
                        })
                    }
                </select>
                <button type="submit">Filter</button>
            </form>
            </section>

            <section className="upload-image">
                <span onClick={()=>Navigate("/uploadImage")}>Upload image</span>
            </section>
        </nav>
  )
}

export default Menu