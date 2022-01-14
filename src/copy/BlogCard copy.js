import React from 'react'
import {Icon} from "@iconify/react";
import { Column, Row } from '../styles/StyledFlexComponents';
import { Link } from "gatsby";

// atom
export default function BlogCard(props) {
    console.log(props)
    const {date, category, title, description, iconifyIconName, linkTo} = props;
    return (
        <Link to={linkTo} className='card'>
            <Column width="100%" height="100%" align="center" justify="space-around"
                 style={{minHeight:"6em", borderBottom:"1px dashed"}}>
                <Column width="20%" align="cetner" justify="center">
                    <div style={{fontSize:20,opacity:"80%"}}>{category}</div>
                    <div style={{fontSize:12}}>{date}</div>
                </Column>
                <Column width="50%" height="" align="flex-start">
                    <div style={{fontSize:24, fontWeight:"bold"}}>{title}</div>
                    <div style={{fontSize:14,height:""}}>{description}</div>
                </Column>
                    <Icon icon={iconifyIconName} width="15%" height="80%"/>
            </Column>
        </Link>
    )
}
