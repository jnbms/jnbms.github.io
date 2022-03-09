import { createGlobalStyle } from "styled-components";
import font_poorstory from "../fonts/poorstory.ttf"
import font_gowndodum from "../fonts/GowunDodum.ttf"

const GlobalStyledComponent = createGlobalStyle`
@font-face {
    font-family: "Gowun Dodum";
    src: url(${font_gowndodum});
}
*{
    transition: color 0.5s;
    transition: background-color 0.5s;
}
body{
    font-family: "Gowun Dodum", sans-serif;
    font-size: 18px;
    margin: 0;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    user-select: none;
}
input{
    background-color:  ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    font-family: 'Gowun Dodum', sans-serif;
    border: 1px solid;
}
input::placeholder{
    color: ${props => props.theme.color};
}
li {
    /* transition: font-size 0.1s; */
    /* list-style: none; */
    /* font-size: 1.2em; */

}
a{
    /* color: black; */
    color: ${props => props.theme.color};
    text-decoration: none;
}
`
export default GlobalStyledComponent;