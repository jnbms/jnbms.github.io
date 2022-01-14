import styled from "styled-components";

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    gap: ${props => props.gap};
    height: ${props => props.height};
    width: ${props => props.width};

    @media (max-width: 768px){
        flex-direction: ${props => props.tablet};
    }
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    gap: ${props => props.gap};
    height: ${props => props.height};
    width: ${props => props.width};
    
    @media (max-width: 768px){
        flex-direction: ${props => props.tablet};
    }
`

export {Column, Row};