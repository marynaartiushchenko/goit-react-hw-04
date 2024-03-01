import axios from "axios";

export const fetchImages = async () => {
     const response = await axios.get("/search/photos");
    return response.data.hits;
}