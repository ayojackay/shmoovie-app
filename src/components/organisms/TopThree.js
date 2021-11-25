import { useEffect, useState } from "react";
import styled from "styled-components";


  /* 
    Avengers: 
        Avengers: endgame - tt4154796
        Avengers: Infinity War - tt4154756
        Avengers - tt0848228

    The Godfather:
        The Godfather - tt0068646
        The Godfather: Part II - tt0071562
        The Godfather: Part III - tt0099674

    Twilight:
        Twilight: tt1099212
        The Twilight Saga: New Moon - tt1259571
        The Twilight Saga: Eclipse - tt1325004
*/


export const TopThree = ({movies}) => {
    
    const topSetMoviesArr = [movies.avengers, movies.theGodfather, movies.twilight];
    const [topSetMovies, setTopSetMovies] = useState(topSetMoviesArr ? topSetMoviesArr[0] : [])
    let count = 1;
    const refreshTopSetMovies = () => {
        setInterval(() => {
            setTopSetMovies(topSetMoviesArr[count])
            count++
            if(count === 3) {
                count = 0;
            }
        }, 20000)
    };
    useEffect(() => {
        refreshTopSetMovies()
        
        return () => {
            setTopSetMovies([]);
        }
    }, [])
    
  return (
    
      <div className="column flex_center_center">
        <h2 style={{WebkitTextStroke: "2px #AED6BE", color: "#fff",fontWeight: "900", fontFamily: "'Rubik', sans-serif", fontSize: "2.2rem"}}>Top Three Movies</h2>
        <div className="row">
        {
            topSetMovies && topSetMovies.length ?  topSetMovies.map((movie, index) => (
                <Card key={movie.imdbID} className={index === 1 && "middle_card"}>
                    <img src={movie?.Poster} alt={movie.Title} />
                    <h3>{movie.Title}</h3>
                    <p>{movie.Title}</p>
                    <span>{movie.Year}</span>
                </Card>
            )) : <p>Loading...</p>
        }
        </div>
      
      
    </div>
  );
};

const Card = styled.div`
    border-radius: .8rem;
    padding: 1rem 2.5rem;
    background-color: rgba(243, 243, 247, 1);
    margin: 0 0.8rem;
    height: 400px;
    img {
        width: 200px;
        margin-left: 1.4rem;
        box-shadow: -20px 8px 2px rgba(174, 214, 190,.7)
    }
     &.middle_card {
        transform: translateY(-1rem);
        animation: 6s upAndDown infinite both; 
        transition: transform 2s, animation 2s;
        &:hover {
            animation: none;
            transform: scale(0.95);
        }
    }

    @keyframes upAndDown {
        0% {
            transform: translateY(-1.2rem);
        }
        
        50% {
            transform: translateY(-1.1rem);
        }
        75% {
            transform: translateY(-.7rem);
        }
        100% {
            transform: translateY(-1.2rem);
        }
        
    }
`;
