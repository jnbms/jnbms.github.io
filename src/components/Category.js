import React, { useContext } from 'react'
import {CategoryContext} from '../state/context/SelectedCategory';
import LinkButton from '../styles/components/LinkButton';
import { Column } from '../styles/StyledFlexComponents';

//atom
export default function Category(props){
    const {title, list} = props;
    const {setCategory} = useContext(CategoryContext);
    return (
        <Column align="flex-end">
            {/* 폰트 성향상 눈에 들어오지 않고 전체적으로 크기가 작다. */}
            <strong onClick={() => setCategory("All")}>{title}</strong>
                <Column align="flex-end">
                    {list ? list.map((item)=>(
                        <LinkButton key={item} onClick={() => setCategory(item)}>{item}</LinkButton>
                    )) : ""}
                </Column>
        </Column>
    )
}


