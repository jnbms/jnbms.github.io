import React from "react";
import styled from "styled-components";
import BlogCardVertical from "../../components/BlogCardVertical";
import Header from "../../components/Header";
import { Column, Row } from "../../styles/StyledFlexComponents";
import { graphql } from "gatsby";
import { defineCustomElements } from "@deckdeckgo/highlight-code/dist/loader";
defineCustomElements();

const BlogTopBackgroundColorContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2em;
    background-color: ${props => props.theme.color == "black" ? "#f0f0f0f0" : ""};
    border-bottom: ${props => props.theme.color == "black" ? "none" : "1px dashed"};
`
// Column 태그에 작성하면 되는데 styld component가 태그를 추가해야하는 방식이고
// 그러므로 중복적인 코드를 작성하는 문제가 발생

export default function post(props) {
    console.log(props)
    // 전체 마크다운 문서에서 해당 문서만 가져온다(더 좋은 쿼리 구문 있는지 공부하기)
    console.log(props.data.allMarkdownRemark.nodes[0])
    const markdown = props.data.allMarkdownRemark.nodes[0];
    return (
        <Column align="center" width="100%">
            <BlogTopBackgroundColorContainer>
                <Column align="center" width="80%">
                    <Header/>
                    <BlogCardVertical {...markdown.frontmatter}/>
                </Column>
            </BlogTopBackgroundColorContainer>
            <Row width="100%" justify="center">
                <Column width="20%" align="flex-end" style={{position:"relative"}}>
                    <Column style={{position:"sticky",top:20,paddingRight:20,borderRight:"2px dashed",margin:20,textAlign:"right"}}>
                        <h3>함수지향이란 무엇인가?</h3>
                        <div>갑자기 흥한 이유</div>
                        <strong>객체 지향과의 차이</strong>
                    </Column>
                </Column>
                <Column
                    width="50%" justify="center" style={{margin:20}}
                    // markdown의 글을 html로 읽는다.
                    dangerouslySetInnerHTML={{__html: markdown.html}}
                />
                <Column width="20%" style={{margin:20}}>
                </Column>
            </Row>
                
        </Column>
    );
}

// "${id}"가 아니라 $id로 적는다.
// URL에 적힌 id값을 query의 $id로 대입하여 받은 데이터로 페이지를 구성한다.
export const query = graphql`
    query($id: String!) {
        allMarkdownRemark(filter: {id: {eq: $id}}) {
            nodes {
              frontmatter {
                category
                date
                description
                iconifyIconName
                title
              }
              id
              html
            }
        }
    }
`