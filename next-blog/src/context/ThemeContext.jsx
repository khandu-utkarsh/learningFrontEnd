"use client"

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

const getFromLocalStorage = () => {
    if(typeof window !== "undefined") {
        const value = localStorage.getItem("theme")
        console.log("Theme value fetched from it is: ", value)
        return value || "light"   
    }
    return "light";
}


export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(() => getFromLocalStorage());

    const toggle = () => {
        setTheme(theme==="light" ? "dark" : "light")
    }

    useEffect(()=>{
        localStorage.setItem("theme", theme)
    },[theme]);
    console.log("Theme passed by provide is: ", theme)
    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
}