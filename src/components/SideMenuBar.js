import React from 'react'
import { Column } from '../styles/StyledFlexComponents'
import CategoryContainer from './CategoryContainer'
import SearchBar from './SearchBar'

//molecule
export default function SideMenuBar(props){
    return(
        <Column width="100%" align="flex-end">
            <SearchBar/>                   
            <CategoryContainer {...props}/>
        </Column>
    )
}
