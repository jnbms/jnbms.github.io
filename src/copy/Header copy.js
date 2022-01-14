import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import ColorContext from "../state/context/ColorContext";
import { Column, Row } from "../styles/StyledFlexComponents";

const Strong = styled.div`
    font-weight: bold;
    /* font-size: 24px; */
    /* text-decoration: underline; */
    border-bottom: 2px solid;
`

//atom
export default function Header(props){
    const {uri} = props;
    const {setDarkMode}  = useContext(ColorContext);
    
    function Select(props){
        const {children, to} = props;
        return ( to === uri ?
            <Strong><Link to={to}>{children}</Link></Strong> :
            <div><Link to={to}>{children}</Link></div> )
    }

    return (
            <Row tablet="Column" align="center" justify="space-around" width="100%">
                {/* LOGO */}
                <Row width="20%">
                    <Link to="/"><h2>JNBM</h2></Link>
                </Row>
                {/* NavigateBar */}
                <Row width="40%" justify="space-between">
                    <Select to="/">MY 블로그</Select>
                    <Select to="/project">개인 프로젝트</Select>
                    <Select to="/about">소개</Select>
                    <Select to="/resume">이력서</Select>
                    <div onClick={setDarkMode}>다크모드</div>
                </Row>
            </Row>
    )
}
