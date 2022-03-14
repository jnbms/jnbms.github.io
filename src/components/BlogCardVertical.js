import React from 'react';
import { Column } from '../styles/StyledFlexComponents';
import { Icon } from "@iconify/react";

// atom
export default function BlogCardVertical(props) {
    const {date, category, title, description, iconifyIconName, image} = props;

    return (
        <Column height="" width="50%" align="center" justify="center" style={{textAlign:"center"}}>
            <Icon height="112px" width="112px" icon={iconifyIconName} />
            <div>{category}</div>          
            <div style={{fontSize:24, fontWeight:"bold"}}>{title}</div>
            <div>{description}</div>
            <div style={{fontSize:"small", opacity:"80%"}}>{date}</div>
        </Column>
    )
}
