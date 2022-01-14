import React, {useState, useContext, useEffect} from 'react'
import { CategoryContext } from '../state/context/SelectedCategory';
import LinkButton from '../styles/components/LinkButton'
import { Column, Row } from '../styles/StyledFlexComponents'

export default function Pagination(){
    const {selectedCategory} = useContext(CategoryContext);
    useEffect(()=>{setPageNumber(1)},[selectedCategory]);
    const [pageNumber,setPageNumber] = useState(1);
    const increase = () => setPageNumber(getStartInex(pageNumber + 4) + 1);
    const dicrease = () => getStartInex(pageNumber) !== 0 ? setPageNumber(getStartInex(pageNumber - 4) + 4) : "";
    const getStartInex = (number) => ((Math.ceil(number / 4) - 1) * 4);
    const sequence = Array.from(Array(4).keys(),(x => x + 1 + getStartInex(pageNumber)))
    return (
        <Row width="100%" height="4em" align="center" justify="space-evenly">
            <LinkButton onClick={dicrease}>＜이전 페이지</LinkButton>
            {sequence.map((item,index) => (
                <LinkButton
                    key={index}
                    onClick={() => setPageNumber(item)}
                    checked={item == pageNumber}
                    >{item}</LinkButton>
            ))}
            <LinkButton onClick={increase}>다음 페이지＞</LinkButton>
        </Row>
    )
}
