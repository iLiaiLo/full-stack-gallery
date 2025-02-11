import { BrowserRouter,Routes,Route} from 'react-router-dom'
import userContext from './assets/context'
import Home from './pages/Home'
import UploadImage from './pages/UploadImage'
import Image from './pages/Image'
import './App.css'
import { useState } from 'react'

function App() {

  const [pictures,setPictures]=useState([])
  return (
    <userContext.Provider value={{pictures,setPictures}}>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
      <Route path={"uploadImage"} element={<UploadImage />} />
      <Route path={":imageUrl"} element={<Image />} />
    </Routes>
    </BrowserRouter>
    </userContext.Provider>
  )
}

export default App
