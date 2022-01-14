import styled, {css} from "styled-components"

// 반응형은 가로 방향의 변화에 따라 움직인다.
//모바일을 기본으로 minWidth를 기준으로 타블릿과 PC로 변화를 감지한다.
// 기본 단계는 당연히 모두 Column이고 Row처럼 두 개의 요소가 잇지 않을 경우
// width는 100%이고 align은 center이다.
// Row로 변화될 경우 차지하는 비중에 따라 width를 선정하고 jusify를 준다.

// styled.div`${flex}`로 styledComponent에서 props로 쓰거나
// ${flex(props)}로 props를 넣어 mixin처럼 쓸 수 있다.
const device = { mobile: "375px", tablet: "768px", laptop: "1024px"}
const responsive = (props) => css`
    gap: ${props.gap};
    display: flex;
    flex-direction: ${props => props.mobile ? props.mobile : "column"};
    width: ${props => props.width ? props.width : "100%"};
    align-items: ${props.align};
    justify-content: ${props.justify};
    order: ${props.order};
    
    @media(min-width: ${device["tablet"]}){
        flex-direction: ${props.tablet};
        width: ${props.tablet_width};
        order: ${props.tablet_order};
        align-items: ${props.tablet_align};
        justify-content: ${props.tablet_justify};
    }
    @media(min-width: ${device["laptop"]}){
        flex-direction: ${props.laptop};
        width: ${props.laptop_width};
        order: ${props.laptop_order};
        align-items: ${props.laptop_align};
        justify-content: ${props.laptop_justify};
    }
`
const DIV = styled.div`
    display: flex;
    align-items: center;
    ${responsive}
`
const Show = styled.div`
 @media(max-width: ${device["mobile"]}){display: ${props => !props.mobile ? "none" : ""}}
 @media(max-width: ${device["tablet"]}){display: ${props => !props.tablet ? "none" : ""}}
 @media(max-width: ${device["laptop"]}){display: ${props => !props.laptop ? "none" : ""}}
`


export {DIV, Show};
