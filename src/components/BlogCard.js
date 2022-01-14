import React from 'react'
import {Icon} from "@iconify/react";
import { Link } from "gatsby";
import { DIV } from '../styles/Layout/ResponsiveLayout';

// atom
export default function BlogCard(props) {
    const {date, category, title, description, iconifyIconName, linkTo} = props;
    return (
        <Link to={linkTo} style={{textAlign:"center",display:"flex",width:"100%",flexDirection:"column",alignItems:"center"}}>
        <DIV    tablet="row" justify="space-between"
                className='card' height="100%" align="center"
                style={{minHeight:"6em",borderBottom:"1px dashed"}}>
                <DIV tablet_width="20%" align="cetner">
                    <div style={{fontSize:20,opacity:"80%"}}>{category}</div>
                    <div style={{fontSize:12}}>{date}</div>
                </DIV>
                <DIV tablet_width="50%" align="center">
                    <div style={{fontSize:24, fontWeight:"bold"}}>{title}</div>
                    <p style={{fontSize:14,height:""}}>{description}</p>
                </DIV>
                <DIV width="15%" order="-1" tablet_order="0">
                    <Icon icon={iconifyIconName} style={{order:-1, margin:12}} width="72px" height="72px"/>
                </DIV>
        </DIV>
            </Link>
    )
}
