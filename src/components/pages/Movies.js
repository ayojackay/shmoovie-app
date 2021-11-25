import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getTotalPages, searchMovies } from "../../utils";
import { ButtonLink } from "../atoms";

export const Movies = ({ searchResults }) => {
  console.log(searchResults);
  const { term: searchTerm, results, totalResults } = searchResults.movies;
  const [movies, setMovies] = useState({
    term: searchTerm,
    results,
    totalPages: getTotalPages(totalResults),
  });

  console.log("Movies: ", movies);

  const [page, setPage] = useState(1);
  const [actionType, setActionType] = useState("");
  let isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      searchMovies(searchTerm, page)
        .then((res) => {
          setMovies({
            term: searchTerm,
            results: res.Search,
            totalPages: actionType === "next" ? (movies.totalPages - 1) : (movies.totalPages + 1),
          });
        })
        .catch((err) => {
          console.error("An error occured: " + err);
          throw err;
        });
    }
  }, [page]);

  const nextPage = () => {
    if (page >= movies.totalPages) {
      console.log("HERE in nextPage IF");
      return;
    }
    setActionType("next")
    setPage(page + 1);
  };
  const previousPage = () => {
    if (page < 1) {
      console.log("HERE in previousPage IF");
      return;
    }
    console.log("Page before: ", page);
    setActionType("previous");
    setPage(page - 1);
    console.log("Page: ", page);
  };
  return (
    <>
      <h1>Movies</h1>
      <h2>
        Here are your results for{" "}
        <span style={{ textTransform: "uppercase" }}>{movies.term}</span>:
      </h2>
      <ListOfMovies>
        {movies.results.length ? (
          movies.results.map((movie) => (
            <li>
              <img src={movie.Poster} alt={`Movie poster for ${movie.Title}`} />
              <h3>{movie.Title}</h3>
              <p>{movie.plot}</p>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ListOfMovies>
      <footer>
        {page === 1 ? (
          <ButtonLink
            text="Next Page"
            bgColor={"119, 125, 167"}
            textColor={"243, 243, 247"}
            symbol
            onClick={nextPage}
          />
        ) : (
          <>
            <ButtonLink
              text="Previous Page"
              bgColor={"119, 125, 167"}
              textColor={"243, 243, 247"}
              previousSymbol
              onClick={previousPage}
            />
            |{" "}
            <ButtonLink
              text="Next Page"
              bgColor={"119, 125, 167"}
              textColor={"243, 243, 247"}
              symbol
              onClick={nextPage}
            />
          </>
        )}
      </footer>
    </>
  );
};

const ListOfMovies = styled.ul`
  list-type: none;

  li {
    min-width: 40%;
    margin: 0 1rem;
    padding: 0.5rem;
    background-color: pink;
    img {
      width: 100px;
    }
  }
`;
