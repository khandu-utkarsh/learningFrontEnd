"use client"
import { signIn, useSession } from "next-auth/react"
import styles from "./loginPage.module.css"
import { useRouter } from "next/navigation"

const LoginPage = () => {

    const {data, status} = useSession()
    console.log(`Output of the use session hook, in the form of data and status: `, data, status);

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>
    } 

    const router = useRouter()

    if (status === "authenticated") {
        router.push("/")
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