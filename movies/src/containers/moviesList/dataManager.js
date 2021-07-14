import { GetService } from "../../services/movies";

export const HandleGetMovies = async () => {
    const result = await GetService();
    return result;
}