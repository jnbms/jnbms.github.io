import { graphql } from "gatsby";
import React, { useContext, useEffect, useState } from "react";
import BlogCardContainer from "../components/BlogCardContainer";
import Pagination from "../components/Pagination";
import SideMenuBar from "../components/SideMenuBar";
import { CategoryContext } from "../state/context/SelectedCategory";
import { Column } from "../styles/StyledFlexComponents";
import Layout from "../layouts/Layout";
import { DIV, Show } from "../styles/Layout/ResponsiveLayout";

const blogList = [
    {
        title: "Language",
        list:["Javascript","TypeScript","Kotlin","Dart","Swift"]
    },
    {
        title: "FRONTEND",
        list: ["React","Vue"]
    },
    {
        title: "MOBILE",
        list: ["React Native","Flutter","Android Studio","Swift UI"]
    },
    {
        title: "BAKEND",
        list: ["Nest","Spring Boot"]
    },
]

export default function Index(props){
    // 
    // const myRef = useRef()
    // console.log(myRef.current)

    const AllPosts = props.data.allMarkdownRemark.nodes;
    const [selectedPosts,setSelectedPosts] = useState(AllPosts);
    const {selectedCategory} = useContext(CategoryContext);
    useEffect(() => {
        selectedCategory === "All" ?
        setSelectedPosts(AllPosts) :
        setSelectedPosts(AllPosts.filter(list => list.frontmatter.category === selectedCategory))
    }, [selectedCategory])
    return(
        <Layout uri={props.uri}>
            <DIV width="90%" laptop="row" justify="space-between" laptop_align="flex-start">
                <Column width="25%">
                    <Show mobile><SideMenuBar list={blogList}/></Show>
                </Column>
                <DIV laptop_width="70%">
                    <BlogCardContainer postList={selectedPosts}/>
                    <Pagination/>
                </DIV>
            </DIV>
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
