import { useState } from "react";
import { useHistory } from "react-router-dom";
import { searchMovies } from "../../utils";
import { ButtonLink } from "../atoms";

export const SearchMovies = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const history = useHistory();
    
    return(
        <div>
            <label htmlFor="searchInput"></label>
            <input id="searchInput" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onBlur={(e) => setSearchTerm(e.target.value)} />
            <ButtonLink 
                text="Search"
                bgColor={"119, 125, 167"}
                textColor={"243, 243, 247"}
                symbol
                onClick={() => {
                    searchMovies(searchTerm, 1)
                        .then(res => {
                            console.log("Res: ", res);
                            history.push(`/movies`, { movies: {
                                term: searchTerm,
                                results: res.Search,
                                totalResults: res.totalResults
                            } })
                        })
                }}
            />
        </div>
        
    );
}