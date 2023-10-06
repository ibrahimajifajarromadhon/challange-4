import axios from "axios";

export const getMovieList = async () => {
    const movie = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=3c892387424c866050c27a24982a568e")
    return movie.data.results
}

export const searchMovieList = async (q) => {
    const search = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&api_key=3c892387424c866050c27a24982a568e`)
    return search.data
}