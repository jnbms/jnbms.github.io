import React from 'react'
import Header from '../components/Header'
import Line from '../styles/components/Line'
import { Column, Row } from '../styles/StyledFlexComponents'


const HeadLine = (props) => (
    <Column align="center" width="90%">
        <Header uri={props.uri}/>
        <Line/>
    </Column>
)

export default function Layout(props){
    return (
        <Column width="100%" align="center">
            <HeadLine uri={props.uri}/>
                {props.children}
        </Column>
    )
}
