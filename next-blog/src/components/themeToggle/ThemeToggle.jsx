"use client"

import { ThemeContext } from "@/context/ThemeContext";
import styles from "./themeToggle.module.css"
import Image from "next/image";
import { useContext } from "react";
const ThemeToggle = () => {
    const {theme, toggle} = useContext(ThemeContext)

    console.log("Theme we got in ThemeToggle is: ", theme);
    console.log("Style applied:", theme === "dark" ? "dark style" : "light style");

    return <div className={styles.container} 
                onClick={toggle}
                style={
                    theme === "dark" 
                    ? {backgroundColor:"white"} 
                    : {backgroundColor: "#0f172a"}
                }    
    >
        <Image src="/moon.png" alt="" width={14} height={14}/>
        <div 
            className={styles.ball} 
            style={
                theme === "dark" 
                ? {left:1, backgroundColor:"#0f172a"} 
                : {right:1, backgroundColor: "white"}
            }
        ></div>
        <Image src="/sun.png" alt="" width={14} height={14}/>        
    </div>;    
};

export default ThemeToggle