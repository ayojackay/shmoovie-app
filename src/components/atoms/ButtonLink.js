import styled from "styled-components"
export const ButtonLink = ({text, symbol = false, previousSymbol = false, bgColor = null, textColor = null, onClick}) => {
    return(
        <Button 
            onClick={onClick}
            bgColor={bgColor}
            hoverBgColor={textColor}
            hoverTextColor={bgColor}
            textColor={textColor}
        >
            {previousSymbol && <span aria-hidden="true">&#8592;</span>}
            {text}
            { symbol && <span aria-hidden="true">&#8594;</span>}
        </Button>
    );
}

const Button = styled.a`
    background-color: ${({bgColor}) => bgColor ? `rgb(${bgColor})` : "rgb(250, 246, 239)"};
    color: ${({textColor}) => textColor ? `rgb(${textColor})` : "rgb(25, 19, 8)"};
    padding: .7rem 1.6rem;
    margin: 10px;
    text-align: center;
    text-decoration: none;
    box-shadow: -1px .8px 3px #aaa;
    border-radius: 10px;
    &:hover {
        background-color: ${({hoverBgColor}) => hoverBgColor ? `rgba(${hoverBgColor}, .6)`: "rgba(25, 19, 8, .6)" };
        color: ${({hoverTextColor}) => hoverTextColor ? `rgba(${hoverTextColor}, .8)` : "rgb(250, 246, 239)"};
        cursor: pointer;
    }
    span {
        padding-left: .5rem;
        font-weight: bolder;
    }
`;