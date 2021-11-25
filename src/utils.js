const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API}&` 

const searchMovieByTitle = (title) => fetchData("t",title)

const searchMovieById = (movieId) => fetchData("i", movieId);

const searchMovies = (searchTerm, page = null) => fetchData("s", searchTerm, page);

const getTotalPages = (results) =>  Math.round(parseInt(results) / 10);

async function fetchData(parameter, value, page=null) {
    const fetchUrl = !page ? `${API_URL}${parameter}=${value}`: `${API_URL}${parameter}=${value}&page=${page}`;
    try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        return data;
    } catch(err) {
        throw err;
    }
}

export { searchMovieById, searchMovieByTitle, searchMovies, getTotalPages }