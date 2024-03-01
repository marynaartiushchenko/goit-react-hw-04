import { useEffect, useState } from "react";
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "./images-api";

export default function App() {
  const [images, setImages] = useState([]);
  
  const handleSearch = () => { };
  
  return (
    <div >
      <SearchBar onSearch={handleSearch} />
{images.length > 0 && <ImageGallery items = {images} />}
    </div>
  )
}



 // useEffect(() => {
  //   async function getImages() {
  //     const data = await fetchImages ()
  //     setImages(data);
  //   }

  //   getImages();
  // });