import axios from "axios";

export const GetService = async () => {
    const response = await axios.get("https://nativemovies.free.beeceptor.com/movies");
    return response.data
}