"use client"

import Link from "next/link";
import styles from "./authLinks.module.css"
import { useState } from "react";

const AuthLinks = () => {

    const [open, setOpen] = useState(false)


    const status = "notAuthenticated"   //!Temp

    const loginLink = <Link href="/login" className={styles.link}>Login</Link>
    const logoutLink = 
        <>
            <Link href="/write" className={styles.link}>Write</Link>
            <span className={styles.link}>Logout</span>
        </>
    const burgerMenu =
        <div className={styles.burger} onClick={() => setOpen(!open)}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>    
        </div>

    const burgerMenuOpen = 
        <>
            <Link href="/" >Homepage</Link>
            <Link href="/" >Contact</Link>
            <Link href="/" >About</Link>
            {status === "notAuthenticated" ? loginLink :logoutLink }
        </>
    return (
        <>
            {status === "notAuthenticated" ? loginLink :logoutLink }
            {burgerMenu}
            {open && burgerMenuOpen}
        </>
    );
};

export default AuthLinks