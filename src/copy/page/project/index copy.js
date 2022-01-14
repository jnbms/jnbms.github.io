import React from "react";
import ProjectCardContainer from "../../components/ProjectCardContainer";
import SideMenuBar from "../../components/SideMenuBar";
import { Column, Row } from "../../styles/StyledFlexComponents";
import {graphql} from "gatsby";
import Layout from "../../layouts/Layout";
const PostList = [
    {
        title: "LANGUAGE",
        list: ["Javascript","Java"]
    }
]

function Index(props){
    const AllPosts = props.data.allMarkdownRemark.nodes;
    return (
    <Layout uri={props.uri} >
        <Row width="80%" align="cetner" justify="space-evenly">
            <Column width="15%">
                <SideMenuBar list={PostList}/>
            </Column>
            <ProjectCardContainer list={AllPosts} />
        </Row>
    </Layout>
    )
};
export default Index;

export const query = graphql`
    query{
        allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/project/"}},
            sort: {fields: frontmatter___date}
        ){
          nodes {
            frontmatter {
              category
              date
              description
              image
              title
            }
            id
          }
        }
    }
`
