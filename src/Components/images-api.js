import axios from "axios";
import toast from 'react-hot-toast';

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
        return response.data.hits;
    } catch (error) {
        toast.error('An error occurred while fetching images.');
    }
};
