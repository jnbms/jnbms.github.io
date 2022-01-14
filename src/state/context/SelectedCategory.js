import React, {createContext, useState} from "react";

const CategoryContext = createContext("");
const CategoryProvider = ({children}) => {
    const [selectedCategory, setCategory] = useState("All");
    return <CategoryContext.Provider value={{selectedCategory,setCategory}}>{children}</CategoryContext.Provider>
}
export {CategoryContext, CategoryProvider};