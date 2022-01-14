import "./reset.css";
import React from "react";
import RootContainer from "./src/RootContainer";
// CONTEXT API의 Provider와 Consumer가 한 컴포넌트 내부에 있는 경우 오류가 발생한다.
// Layout 단계 위에 Provider 단계가 필요해 보인다.
export const wrapRootElement = ({element}) => <RootContainer>{element}</RootContainer>;



