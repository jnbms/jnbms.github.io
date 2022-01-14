import React from 'react'
import { Column, Row } from '../styles/StyledFlexComponents'

//atom
export default function SearchBar(){
    return (
        <Column gap="" style={{borderBottom:"1px dashed",paddingBottom:20}}>
            <div style={{width:"",fontWeight:"bold",textAlign:"right"}}>SEARCH</div>
            <Column>
                <input placeholder="검색" style={{textAlign:"right"}}/>
            </Column>
        </Column>
    )
}
