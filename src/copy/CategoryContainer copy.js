import React from 'react'
import { Column, Row } from '../styles/StyledFlexComponents'
import Category from './Category'

// molecule
export default function Categories(props) {
    const {list} = props;
    return (
        <Column align="flex-end" gap="32px" style={{marginTop:20}}>
            <div>show All List</div>
            {list.map((item,index) => <Category key={index} title={item.title} list={item.list}/>)}
        </Column>
    )
}
