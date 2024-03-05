import axios from "axios";
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://api.unsplash.com/'

export const fetchImages = async (searchQuery) => {
    try {
        const response = await axios.get("/search/photos", {
            params: {
                query: searchQuery,
            },
            headers: {
                Authorization: 'Client-ID PAkOFV46TDL2tAhwdIk4TDzaP7RT3Nhx6tyEaOvJQ54',
                'Accept-Version': 'v1'
            },
        });
        return response.data.data;
    } catch (error) {
        toast.error('An error occurred while fetching images.');
        throw error;
    }
};