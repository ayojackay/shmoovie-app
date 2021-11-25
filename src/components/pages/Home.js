import { useEffect } from "react";
import { searchMovies } from "../../utils";
import { Stage } from "../atoms";
import { SearchMovies, TopThree } from "../organisms";

export const Home = () => {
    let movies = {}; 
    const filterAndSetMovies = (term, results) => {
        const movieOne = results.filter((movie) =>
            term === "Avengers"
            ? movie.imdbID === "tt4154796"
            : term === "The Godfather"
            ? movie.imdbID === "tt0068646"
            : movie.imdbID === "tt1099212"
        )[0];
        const movieTwo = results.filter((movie) =>
            term === "Avengers"
            ? movie.imdbID === "tt4154756"
            : term === "The Godfather"
            ? movie.imdbID === "tt0071562"
            : movie.imdbID === "tt1259571"
        )[0];
        const movieThree = results.filter((movie) =>
            term === "Avengers"
            ? movie.imdbID === "tt0848228"
            : term === "The Godfather"
            ? movie.imdbID === "tt0099674"
            : movie.imdbID === "tt1325004"
        )[0];
        return [
            movieOne,
            movieTwo,
            movieThree
        ];
    }

    useEffect(() => {
        searchMovies("Avengers")
            .then(response => filterAndSetMovies("Avengers",response.Search))
            .then(res => Object.assign(movies, {
                avengers: res
            }))
            .catch(err => {throw err});
        searchMovies("The Godfather")
            .then(response => filterAndSetMovies("The Godfather", response.Search))
            .then(res => Object.assign(movies, {
                theGodfather: res
            }))
            .catch(err => { throw err})
        searchMovies("Twilight")
            .then(response => filterAndSetMovies("Twilight", response.Search))
            .then(res => Object.assign(movies, {
                twilight: res
            }))
            .catch(err => { throw err})
    }, [])

    return (
        <Stage
            heading="Schmoovie"
            headingColor="#AED6BE"
        >
            <div className="row">
                <main style={{margin: "0 auto"}}> 
                    <TopThree movies={movies}/>
                    <SearchMovies/>
                </main>
            </div>
        </Stage>
    );
}