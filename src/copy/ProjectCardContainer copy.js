import React from 'react'
import { Column, Row } from '../styles/StyledFlexComponents'
import ProjectCard from './ProjectCard'

export default function ProjectCardContainer(props) {
    const {list} = props;
    console.log(list);
    const oddList = list.filter((_,index) => index % 2 == 0) // 배열은 0부터 시작하므로
    const evenList = list.filter((_,index) => index % 2 != 0)
    return (
            <Row gap="0.5em" width="55%">
                <Column  gap="0.5em">
                {oddList.map((post,index) => (
                  <ProjectCard
                    linkTo={`/project/${post.id}`}
                    key={index}
                    titleImage={post.frontmatter.image}
                    title={post.frontmatter.title}
                    description={post.frontmatter.description}
                    />
                  ))}                  
                </Column>
                <Column gap="0.5em">
                {evenList.map((post,index) => (
                   <ProjectCard
                    linkTo={`/project/${post.id}`}
                    key={index}
                    titleImage={post.frontmatter.image}
                    title={post.frontmatter.title}
                    description={post.frontmatter.description}
                   />
                  ))}    
                </Column>
            </Row>         
    )
}
