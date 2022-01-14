// 마진은 다른 요소와의 간격을 설정하는 것이다.
// 요소들 자체의 마진은 설정하지 않고
// 최종 단계에서 마진을 정리해주는 방법이 어떨가 생각한다.
// styledComponent로 요소를 나눌 경우, 부모 태그가 하나씩 추가된다.
// 순서를 명확하게 하고 단계별로 진행한다.

import styled from "styled-components";

const Margin = styled.div`
    margin-top: ${props => props.top};
    margin-right: ${props => props.right};
    margin-left: ${props => props.left};
    margin-bottom: ${props => props.bottom};
`
export {Margin};