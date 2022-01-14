import React from "react";
import ProjectCardContainer from "../../components/ProjectCardContainer";
import SideMenuBar from "../../components/SideMenuBar";
import { Column, Row } from "../../styles/StyledFlexComponents";
import {graphql} from "gatsby";
import Layout from "../../layouts/Layout";
import { DIV, Show } from "../../styles/Layout/ResponsiveLayout";
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
        <DIV width="90%" laptop="row" justify="space-between" laptop_align="flex-start">
            <Column width="25%">
                <Show><SideMenuBar list={PostList}/></Show>
            </Column>
            <DIV laptop_width="70%">
                <ProjectCardContainer list={AllPosts} />
            </DIV>
        </DIV>
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
