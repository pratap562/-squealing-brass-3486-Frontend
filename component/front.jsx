import Link from "next/link"
import Image from "next/image"
// import logo from "../images/logo.jpg"
import styles from "./front.module.css"
// import Style from "./navbar.css"

export const Front = () => {
    return (
        <div className={styles.front}>
            <div className={styles.left}>
                <div>
                    <div>Easy</div>
                    <div>scheduling</div>
                    <div>ahead</div>
                </div>
                <div>
                    SchedulMeet is your scheduling automation platform for eliminating the back-and-forth emails for finding the perfect time — and so much more.
                </div>
                <div>
                    <input placeholder="Enter your email" />
                    <div>Sign up</div>
                </div>
                <div>
                    Create your free account. No credit card required
                </div>
            </div>
            <div className={styles.right}>
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/46W8NE43rD54MveL20rPp5/e18c62fb5617db69691c4ec475005c06/Homepage-Hero-new.png?w=1366&h=1132&q=50&fm=webp" />
            </div>
        </div>
    )
}

