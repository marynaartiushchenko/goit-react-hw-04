import { useEffect, useState } from "react";
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "./images-api";
import { Toaster } from 'react-hot-toast';
import ImageCard from "./ImageCard/ImageCard";

export default function App() {
  const [images, setImages] = useState([]);
  
  const handleSearch = async (newQuery) => {
    const data = await fetchImages (newQuery)
      setImages(data);
   };
  
  return (
    <div >
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
<ImageCard />
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