import React from 'react'
import Header from '../../components/Header'
import Layout from '../../layouts/Layout'
import Line from "../../styles/components/Line"

import { Column, Row } from '../../styles/StyledFlexComponents'

export default function index(props){
    return (
        <Layout>
            <Row width="70%" justify="space-around">
            <Column width="20%" justify="space-around"  align="flex-end" style={{textAlign:"right"}}>
                <div>
                    <h3>Design and Develop</h3>
                    <div>이 준범</div>
                    <div>Lee June beom</div>
                    <div>DEPARTMENT : ELECTRONICS</div>
                </div>
                <div>
                    <h3>CONTACT</h3>
                    <div>GOOGLE: CREAT.BLIV@GMAIL.COM</div>
                    <div>GITHUB: JNBMS</div>
                    <div>PHONE: 010 - 8352 - 5741</div>
                </div>
            </Column>
                <img src="/me.png" alt="me" width="40%" height="40%"/>
                <Column width="20%" justify="space-around">
                    <div>
                        <h3>ABOUT ME</h3>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor congue netus cursus risus faucibus. Turpis adipiscing nulla purus elit purus interdum odio accumsan. Adipiscing risus mi aliquet in habitasse. Pharetra orci enim in pulvinar sit nibh. Sagittis, amet imperdiet morbi viverra quis at praesent duis nisi.</div>
                    </div>              
                </Column>
            </Row>
        </Layout>
    )
}
