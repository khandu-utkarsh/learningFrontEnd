import React from "react";

import styles from "./card.module.css"
import Image from "next/image";
import Link from "next/link";

const Card = ({item, key}) => {
    return (
        <div className={styles.container} key={key}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>
                        {item.title}
                    </h1>
                </Link>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit assumenda autem perspiciatis harum perferendis inventore numquam deleniti. Vero eos labore ad nobis, culpa, illo libero itaque cumque fugiat est qui?
                </p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card