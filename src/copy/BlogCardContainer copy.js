import React, { useContext } from 'react'
import ColorContext from '../state/context/ColorContext';
import { Column } from '../styles/StyledFlexComponents';
import BlogCard from './BlogCard';

// 컨테이너의 역할은 QUERY 수신이다.
// molecule
export default function BlogCardContainer(props){
    const {postList} = props;
    return(
        <Column width="100%">
            {postList.map((post) => (
                <BlogCard
                    key={post.id}
                    linkTo={`/blog/${post.id}`}
                    date={post.frontmatter.date}
                    category={post.frontmatter.category}
                    title={post.frontmatter.title}
                    description={post.frontmatter.description}
                    iconifyIconName={post.frontmatter.iconifyIconName}
                />
            ))}
        </Column>
    )
}