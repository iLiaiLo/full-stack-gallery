import { useContext , useEffect,useRef} from "react";
import userContext from "../assets/context";
import Menu from "./HomeContent/Menu";
import Images from "./HomeContent/Images";

const Home = () => {

    const DataRef=useRef(null);
    const {pictures,setPictures}=useContext(userContext);

    useEffect(()=>{
        async function getPictures(){
            try {
                const res=await fetch("http://localhost:8000/display_images");
                const ImageData=await res.json()
                DataRef.current=ImageData
                
                setPictures(ImageData)
            } catch (error) {
                console.log(error)
            }
        }
        getPictures()

    },[])
    const FilterImageTypes=(e)=>{
        e.preventDefault();
    
        const formData = new FormData(e.target);
        
        const selectedGenre = formData.get('genre');
       
        const filteredArr = selectedGenre==="any"?DataRef.current:pictures.filter(picture=>picture.genre==selectedGenre)
        setPictures(filteredArr)
    }
  return (
    <div>
        <Menu FilterImageTypes={FilterImageTypes}/>
        <Images />
    </div>
  )
}

export default Home