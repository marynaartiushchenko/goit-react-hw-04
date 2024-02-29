import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from './SearchBar/SearchBar'

export default function App() {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    async function getImages() {
      const responce = await axios.get("https://api.unsplash.com/");
      setImages(responce.data.hits);
    }

    getImages();
  });
  
  return (
    <div className=(css.container) >
    </div >
  )
}
