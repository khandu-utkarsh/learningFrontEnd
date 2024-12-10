import Link from "next/link";
import styles from "./authLinks.module.css"

const AuthLinks = () => {

    const status = "notAuthenticated"   //!Temp

    const loginLink = <Link href="/login">Login</Link>
    const logoutLink = 
        <>
            <Link href="/write">Write</Link>
            <span className={styles.link}>Logout</span>
        </>

    return (
        <>
            {status === "notAuthenticated" ? loginLink :logoutLink }
        </>
    );
};

export default AuthLinks