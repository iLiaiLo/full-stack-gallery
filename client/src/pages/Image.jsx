import { useState,useEffect} from "react";
import { URL } from "../assets/URL";
import { useParams,NavLink } from "react-router-dom"
const Image = () => {
  
  const {imageUrl}=useParams();
  const [imageData,setImageData]=useState({})


  useEffect(()=>{
    async function getData(){
      try {
        const res=await fetch("http://localhost:8000/display_images");
        const Data=await res.json();
        const singleImage=Data.find(image=>image.img_url===imageUrl)
                
        setImageData(singleImage)
      } catch (error) {
        console.log(error)
      }
    }
    getData()

  },[])

  const handleDownload=async (image_url)=>{

    try {
      const response=await fetch(image_url);
      const blob=await response.blob();

      const url =window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;

      const dotIndex=image_url.lastIndexOf(".");
      const extname=image_url.slice(dotIndex);

      a.download=`${Date.now()}_image${extname}`

      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error)
    }
  
  }

  return (
    <div className="single-image">
      <img src={`${URL}${imageData.img_url}`} alt="media image" />
      <span>genre : {imageData.genre}</span>
      <span><NavLink to={`/`}>back to home page</NavLink></span>
      <button onClick={()=>handleDownload(`${URL}${imageData.img_url}`)}>download image</button>
    </div>
  )
}

export default Image