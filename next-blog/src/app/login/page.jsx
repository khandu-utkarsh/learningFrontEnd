"use client"
import { signIn, useSession } from "next-auth/react"
import styles from "./loginPage.module.css"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const LoginPage = () => {

    const {data, status} = useSession()
    console.log(`Output of the use session hook, in the form of data and status: `, data, status);

    const router = useRouter()
    // Redirect to homepage if authenticated
    useEffect(() => {
        if (status === "authenticated") {
            router.push("/");
        }
    }, [status, router]); // Depend on `status` and `router`

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>
    } 

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton} onClick={() => signIn("google")}>Sign In with Google</div>
                <div className={styles.socialButton}>Sign In with Github</div>
                <div className={styles.socialButton}>Sign In with Facebook</div>
            </div>

        </div>
    )
}

export default LoginPage