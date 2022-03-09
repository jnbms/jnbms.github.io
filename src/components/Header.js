import { Icon } from "@iconify/react";
import { Link } from "gatsby";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import ColorContext from "../state/context/ColorContext";
import { DIV } from "../styles/Layout/ResponsiveLayout";
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
    const [menu,setMenu] = useState(false);
    const openMenu = () => menu ? setMenu(false) : setMenu(true);
    
    function Select(props){
        const {children, to} = props;
        return ( to === uri ?
            <Strong><Link to={to}>{children}</Link></Strong> :
            <div><Link to={to}>{children}</Link></div> )
    }

    return (
        <DIV laptop="row" justify="space-between" width="90%">
                {/* <div style={{position:"absolute",top:25,right:25}}>
                    <Icon
                        icon={menu ? "eva:close-outline" : "eva:menu-outline"}
                        onClick={openMenu}
                        width="36px" height="36px"/>
                </div> */}
                {/* LOGO */}
                <DIV laptop_width="10%">
                    <Link to="/"><h2>JNBM</h2></Link>
                </DIV>
                {/* NavigateBar */}
                {/* Col align center */}
                <DIV mobile="row" tablet="row"  laptop="row" 
                width="100%" tablet_width="90%" laptop_width="45%"
                justify="space-around"
                >
                    <Select to="/">블로그</Select>
                    <Select to="/project">프로젝트</Select>
                    {/* <Select to="/about">소개</Select> */}
                    {/* <Select to="/">이력서</Select> */}
                    <div onClick={setDarkMode}>다크모드</div>
                </DIV>
            </DIV>
    )
}
