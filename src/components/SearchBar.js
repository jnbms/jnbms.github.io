import React from 'react'
import { Column, Row } from '../styles/StyledFlexComponents'

//atom
export default function SearchBar(){
    return (
        <Column align="flex-end"
            style={{borderBottom:"1px dashed",paddingBottom:20}}>
            <div style={{fontWeight:"bold"}}>SEARCH</div>
            <Column width="100%">
                <input placeholder="검색" style={{textAlign:"right"}}/>
            </Column>
        </Column>
    )
}
