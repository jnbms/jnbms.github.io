import styled from "styled-components"

const LinkButton = styled.div`
    cursor: pointer;
    /* min-width: 2em; */
    text-align: center;
    font-size: ${props => props.size + "px"};
    font-weight: ${props => props.checked ? "bold" : "nomal"};
    /* text-decoration: ${props => props.checked ? "underline" : "none"}; */
    &:hover{
        text-decoration: underline;
        font-weight: bold;
    }
`
export default LinkButton;