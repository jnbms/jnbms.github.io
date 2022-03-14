import React, { createContext, useState } from "react";

// interface나 type처렴 형식 구성;
const ColorContext = createContext({});
export default ColorContext;

const ColorProvider = ({children}) => {
    const [color,setColor] = useState("black");
    const [backgroundColor,setBackgroundColor] = useState("white");
    const setDarkMode = () => {
        // return을 작성하지 않아서 오류가 발생했다.
        return color !== "black" ? 
        (setColor("black"),setBackgroundColor("white")) :
        (setColor("white"),setBackgroundColor("black"))
    }
    const thisValue = {
        state: {color, backgroundColor},
        setDarkMode
    };
    return <ColorContext.Provider value={thisValue}>{children}</ColorContext.Provider>
}
export {ColorProvider};