import { Link } from 'gatsby';
import React from 'react'
import { Column } from '../styles/StyledFlexComponents'

// atom
export default function ProjectCard(props){
    const {date, linkTo,titleImage, title, description, usedSkills} = props;
    // const {date, category, title, description, iconifyIconName, linkTo} = props;
    return (
        <Link to={linkTo}>
            <Column className='projectCard' style={{border:"1px solid darkgray",paddingBottom:"1em"}}>
                <img src={titleImage} width="100%"/>
                <Column>
                    <div>{title}</div>
                    {/* <strong>e-cumerse</strong> */}
                    <div>{description}</div>
                    <div>{date}</div>
                </Column>
            </Column>
        </Link>
    )
}
// export default를 따로 쓰는 것이 좋지 않다 : 수정할 때 두번 수정해야한다.