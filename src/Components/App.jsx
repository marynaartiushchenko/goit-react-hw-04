import { useEffect, useState } from "react";
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "./images-api";
import { Toaster } from 'react-hot-toast';
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
   const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState('');
  
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
  
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  
const handleImageClick = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImageUrl('');
        setIsModalOpen(false);
    };

  return (
    <div >
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      <Toaster />
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      <ImageModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                imageUrl={selectedImageUrl}
            />
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