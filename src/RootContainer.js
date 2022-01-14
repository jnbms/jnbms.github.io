import React, { Fragment, useContext} from 'react'
import GlobalStyledComponent from "./styles/globalStyledComponent"
import {ThemeProvider} from "styled-components";
import ColorContext, {ColorProvider} from './state/context/ColorContext';
import {CategoryProvider} from "./state/context/SelectedCategory";

function StyledContainer({children}){
    const {state} = useContext(ColorContext);
    return (
        <Fragment>
            <ThemeProvider theme={state}>
                <GlobalStyledComponent/>
                {children}
            </ThemeProvider>
        </Fragment>
    )
}
function ContextContainer({children}){
    return(
        <Fragment>
            <CategoryProvider>
            <ColorProvider>
                {children}
            </ColorProvider>
            </CategoryProvider>
        </Fragment>
    )
}

export default function RootContainer({children}){
    return (
        <ContextContainer>
            <StyledContainer>
                {children}
            </StyledContainer>
        </ContextContainer>
    )
}
