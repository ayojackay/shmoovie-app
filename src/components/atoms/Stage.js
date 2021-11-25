import styled from "styled-components";

export const Stage = ({heading, headingColor = null, children}) => {
    return(
        <>
            <Heading color={headingColor}>{heading}</Heading>
            <Content>
                {children}
            </Content>
        </>
    );
}

const Heading = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    color: ${({color}) => color ? color : "#000"};
    font-size: 4.2rem;
    font-family: 'Rubik', sans-serif;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem 2.5rem;
    padding: 0 .5rem;
`