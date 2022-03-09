import React from 'react'
import Header from '../components/Header'
import Line from '../styles/components/Line'
import { Column, Row } from '../styles/StyledFlexComponents'


const HeadLine = (props) => (
    <Column align="center" width="100%">
        <Header uri={props.uri}/>
        <Line/>
    </Column>
)

export default function Layout(props){
    return (
        <Column width="100%" align="center">
            {/* 항상 브라우저 사이즈의 80%를 담당하면 된다. */}
            <Column className="max-width" style={{width:"80%"}} align="center">
                <HeadLine uri={props.uri}/>
                    {props.children}
            </Column>
        </Column>
    )
}
