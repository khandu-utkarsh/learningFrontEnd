import React from "react";

import styles from "./footer.module.css"
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="lama blog" width={50} height={50}></Image>
                    <h1 className={styles.logoText}>Lamablog</h1>                    
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem autem unde provident eaque et omnis, maxime consequatur eius porro expedita magni temporibus necessitatibus architecto veniam ab eligendi possimus officiis ipsa?
                </p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt="" width={18} height={18} />
                    <Image src="/instagram.png" alt="" width={18} height={18} />
                    <Image src="/tiktok.png" alt="" width={18} height={18} />
                    <Image src="/youtube.png" alt="" width={18} height={18} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/"> Homepage</Link>
                    <Link href="/"> Blog</Link>
                    <Link href="/"> About</Link>
                    <Link href="/"> Contact</Link>
                </div>

                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/"> Homepage</Link>
                    <Link href="/"> Blog</Link>
                    <Link href="/"> About</Link>
                    <Link href="/"> Contact</Link>
                </div>

                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/"> FB</Link>
                    <Link href="/"> Ins</Link>
                    <Link href="/"> Tiktok</Link>
                    <Link href="/"> Youtube</Link>
                </div>


            </div>
        </div>
    )
}

export default Footer