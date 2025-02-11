import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import userContext from '../../assets/context'
import { URL } from '../../assets/URL'

const Images = () => {
  const {pictures}=useContext(userContext)
  return (
    pictures.length?<section className="image-container">
            {
                pictures.map((picture,ind)=>{
                    return(<div key={ind}>
                        <img src={`${URL}${picture.img_url}`} alt="media image" />
                        <span>genre : {picture.genre}</span>
                        <span><NavLink to={`/${picture.img_url}`}>view image</NavLink></span>
                    </div>)
                })
            }
    </section>:<h1 className="empty-message">No image of this genre so far</h1>
  )
}

export default Images