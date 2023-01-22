import styles from './index.module.css';
import { useState } from 'react';
import Image from 'next/image';
import google from '../../images/google3.svg'
import Router from 'next/router';

async function googleSignup() {
    Router.push('http://localhost:3200/auth/google/');
}
export default () => {


    let [containerClass, setContainerClass] = useState(`container  ${styles.container}`)

    const openSignUpPage = () => {
        console.log('hello');
        setContainerClass(`container ${styles['right-panel-active']}  ${styles.container}`)
    }
    const openSignInPage = () => {
        console.log('bye');
        setContainerClass(`container ${styles.container}`)
    }
    const handelSignin = () => {
        //handel sigin
        console.log('handel sigin in');
    }
    const handelSignup = () => {
        //handel sigup
        console.log('handel sign up');
    }
    let mainClass = 'right-panel-active'

    mainClass = ''
    //${styles['right-panel-active']}

    // import Style from "./navbar.css"

    return (
        <div className={containerClass} id="container">
            <div className={`form-container sign-up-container ${styles['form-container']} ${styles['sign-up-container']}`}>
                <form className={styles.form} action="#">
                    <h1 className={styles.h1} >Create Account</h1>
                    <div className={`social-container ${styles['social-container']}`} onClick={googleSignup}>
                        {/* <a href="#" className={`social ${styles.social}`}><i className="fab fa-facebook-f"></i></a> */}
                        <a href="#" className={`social ${styles.social}`}><Image src={google} ></Image></a>
                        {/* <a href="#" className={`social ${styles.social}`}><i className="fab fa-linkedin-in"></i></a> */}
                    </div>
                    <span className={styles.span}>or use your email for registration</span>
                    <input type="text" placeholder="Name" className={styles.input} />
                    <input type="email" placeholder="Email" className={styles.input} />
                    <input type="password" placeholder="Password" className={styles.input} />
                    <button className={styles.button} onClick={handelSignup}>Sign Up</button>
                </form>
            </div>
            <div className={`form-container sign-in-container ${styles['form-container']} ${styles['sign-in-container']}`}>
                <form className={styles.form} action="#">
                    <h1 className={styles.h1} >Sign in</h1>
                    <div className={`social-container ${styles['social-container']}`} onClick={googleSignup}>
                        {/* <a href="#" className={`social ${styles.social}`}><i className="fab fa-facebook-f"></i></a> */}
                        <a href="#" className={`social ${styles.social}`}><Image src={google} ></Image></a>
                        {/* <a href="#" className={`social ${styles.social}`}><i className="fab fa-linkedin-in"></i></a> */}
                    </div>
                    <span className={styles.span}>or use your email for registration</span>
                    <input type="text" placeholder="Name" className={styles.input} />
                    <input type="email" placeholder="Email" className={styles.input} />
                    <input type="password" placeholder="Password" className={styles.input} />
                    <button className={styles.button}>Sign Up</button>
                </form>
            </div>
            <div className={`form-container sign-in-container ${styles['form-container']} ${styles['sign-in-container']}`}>
                <form className={styles.form} action="#">
                    <h1 className={styles.h1} >Sign in</h1>
                    <div className={`social-container ${styles['social-container']}`} onClick={googleSignup}>
                        {/* <a href="#" className={`social ${styles.social}`}><i className="fab fa-facebook-f"></i></a> */}
                        <a href="#" className={`social ${styles.social}`}><Image src={google} ></Image></a>
                        {/* <a href="#" className={`social ${styles.social}`}><i className="fab fa-linkedin-in"></i></a> */}
                    </div>
                    <span className={styles.span}>or use your account</span>
                    <input type="email" placeholder="Email" className={styles.input} />
                    <input type="password" placeholder="Password" className={styles.input} />
                    <a href="#" className={styles.a}>Forgot your password?</a>
                    <button className={styles.button} onClick={handelSignin} >Sign In</button>
                </form>
            </div>
            <div className={`overlay-container ${styles['overlay-container']}`}>
                <div className={`overlay ${styles.overlay}`}>
                    <div className={`overlay-panel overlay-left ${styles['overlay-panel']} ${styles['overlay-left']}`}>
                        <h1 className={styles.h1}>Welcome Back!</h1>
                        <p className={styles.p}>To keep connected with us please login with your personal info</p>
                        <button className={`ghost ${styles.ghost}`} onClick={openSignInPage} id="signIn">Sign In</button>
                    </div>
                    <div className={`overlay-panel overlay-right ${styles['overlay-panel']} ${styles['overlay-right']}`}>
                        <h1 className={styles.h1} > Hello, Friend!</h1>
                        <p className={styles.p}>Enter your personal details and start journey with us</p>
                        <button className={`ghost ${styles.special} ${styles.ghost}`} onClick={openSignUpPage} id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div >
    )
}


