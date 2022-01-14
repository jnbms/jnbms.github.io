import { graphql } from "gatsby";
import React, { useContext, useEffect, useState } from "react";
import BlogCardContainer from "../components/BlogCardContainer";
import Header from "../components/Header";
import Line from "../styles/components/Line";
import Pagination from "../components/Pagination";
import SideMenuBar from "../components/SideMenuBar";
import { CategoryContext } from "../state/context/SelectedCategory";
import { Column, Row } from "../styles/StyledFlexComponents";
import Layout from "../layouts/Layout";

const blogList = [
    {
        title: "Language",
        list:["Javascript","TypeScript","Kotlin","Dart"]
    },
    {
        title: "FRONTEND",
        list: ["React","Vue","Angular","Svelte"]
    },
    {
        title: "MOBILE",
        list: ["Android Studio","React Native","Flutter"]
    },
    {
        title: "BAKEND",
        list: ["Express","Nest","Spring"]
    },
]

export default function Index(props){
    // 
    const AllPosts = props.data.allMarkdownRemark.nodes;
    const [selectedPosts,setSelectedPosts] = useState(AllPosts);
    const {selectedCategory} = useContext(CategoryContext);
    useEffect(() => {
        selectedCategory == "All" ?
        setSelectedPosts(AllPosts) :
        setSelectedPosts(AllPosts.filter(list => list.frontmatter.category === selectedCategory))
    }, [selectedCategory])
    return(
        <Layout uri={props.uri}>
            <Row width="80%" align="cetner" justify="space-evenly">
                <Column width="15%">
                    <SideMenuBar list={blogList}/>
                </Column>
                <Column align="center" width="55%">
                    <BlogCardContainer postList={selectedPosts}/>
                    <Pagination/>
                </Column>
            </Row>
        </Layout>
    );
}


export const query = graphql`
    query{
        allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/blog/"}},
            sort: {fields: frontmatter___date}
        ){
          nodes {
            frontmatter {
              category
              date
              description
              iconifyIconName
              title
            }
            id
          }
        }
    }
`
