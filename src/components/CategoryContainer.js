import React, {useContext} from 'react'
import { Column, Row } from '../styles/StyledFlexComponents'
import Category from './Category'
import { CategoryContext } from '../state/context/SelectedCategory';
// molecule
export default function Categories(props) {
    const {list} = props;
    const {setCategory} = useContext(CategoryContext);

    return (
        <Column witdh="100%" align="flex-end" gap="24px" style={{marginTop:20}}>
            <div onClick={() => setCategory("All")}>show All List</div>
            {list.map((item,index) => <Category key={index} title={item.title} list={item.list}/>)}
        </Column>
    )
}
