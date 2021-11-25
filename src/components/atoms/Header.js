import { NavLink } from "react-router-dom"
import styled from "styled-components";
import { Home as HomeIcon}from "@styled-icons/foundation/Home"
export const Header = () => {
    return(
        <header>
            <Navigation>
                <li>
                    <NavLink to="/">
                        <HomeIcon/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movies" activeClassName="selected">
                        Movies
                    </NavLink>
                </li>
            </Navigation>
        </header>
    );
}

const Navigation = styled.ul`
    margin: 0;
    padding: .5rem;
    background-color: #eee;
    li {
        display: inline-block;
        margin: 0 .45rem;
        padding: .5rem;
        border-radius: .75rem;
        a {
            text-decoration: none;
            padding: .5rem 1rem;
        }
        .selected {
            background-color: #aaa;

        }
    }
`;