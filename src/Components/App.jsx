import { useEffect, useState } from "react";
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "./images-api";
import { Toaster } from 'react-hot-toast';
import ImageCard from "./ImageCard/ImageCard";
import Loader from "./Loader/Loader";


export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleSearch = async (newQuery) => {
    try {
      setIsLoading(true); 
    const data = await fetchImages(newQuery)
      setImages(data);
      setIsLoading(false);
  } catch (error) {
      setError(error.message || 'An error occurred while fetching images.');
      setIsLoading(false);
    }
};
  
  
  return (
    <div >
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      <Toaster />
      <ImageCard />
      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
}



 // useEffect(() => {
  //   async function getImages() {
  //     const data = await fetchImages ()
  //     setImages(data);
  //   }

  //   getImages();
  // });