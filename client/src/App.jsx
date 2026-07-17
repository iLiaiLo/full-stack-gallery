import { BrowserRouter, Routes, Route } from "react-router-dom";
import userContext from "./assets/context";
import Home from "./pages/Home";
import UploadImage from "./pages/UploadImage";
import Image from "./pages/Image";
import "./App.css";
import { useState } from "react";

function App() {
  const [pictures, setPictures] = useState([]);
  return (
    <userContext.Provider value={{ pictures, setPictures }}>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path={"uploadImage"} element={<UploadImage />} />
          <Route path={":id"} element={<Image />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
