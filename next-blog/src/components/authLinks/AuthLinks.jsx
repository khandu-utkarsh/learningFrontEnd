"use client"

import Link from "next/link";
import styles from "./authLinks.module.css"
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";



function LoginLogoutComp({compStatus, linkClassName}) {
    const loginLink = <Link href="/login" className={linkClassName}>Login</Link>
    const logoutLink = 
        <>
            <Link href="/write" className={linkClassName}>Write</Link>
            <span className={linkClassName} onClick={() => signOut()}>Logout</span>
        </>
    return (compStatus === "unauthenticated" ? loginLink :logoutLink )
}



const AuthLinks = () => {

    const [open, setOpen] = useState(false)

    const {status} = useSession();
    const burgerMenu =
        <div className={styles.burger} onClick={() => setOpen(!open)}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>    
        </div>

    const burgerMenuOpen = 
        <div className={styles.responsiveMenu}>
            <Link href="/" >Homepage</Link>
            <Link href="/" >Contact</Link>
            <Link href="/" >About</Link>
            <LoginLogoutComp compStatus={status}/>
        </div>
    return (
        <>
            <LoginLogoutComp compStatus={status} linkClassName={styles.link}/>
            {burgerMenu}
            {open && burgerMenuOpen}
        </>
    );
};

export default AuthLinks