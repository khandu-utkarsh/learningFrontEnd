import React from "react";
import styles from "./singlePage.module.css"

import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quos dign</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar}/>
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}> John Doe</span>
                            <span className={styles.date}> 20-12-2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>                
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.desc}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic corrupti delectus ducimus, quas amet odit possimus obcaecati molestiae voluptatem, iusto omnis ipsa deserunt rerum, architecto dolores molestias nostrum dolore voluptas?
                        </p>
                        <h2>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic corrupti delectus ducimus, quas amet odit possimus obcaecati molestiae voluptatem, iusto omnis ipsa deserunt rerum, architecto dolores molestias nostrum dolore voluptas?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic corrupti delectus ducimus, quas amet odit possimus obcaecati molestiae voluptatem, iusto omnis ipsa deserunt rerum, architecto dolores molestias nostrum dolore voluptas?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic corrupti delectus ducimus, quas amet odit possimus obcaecati molestiae voluptatem, iusto omnis ipsa deserunt rerum, architecto dolores molestias nostrum dolore voluptas?
                        </p>
                    </div>
                    <div className={styles.comments}>
                        <Comments />
                    </div>

                </div>
                <Menu />
            </div>

        </div>
    )

}

export default SinglePage