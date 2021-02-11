import React from 'react'
import styles from './Footer.module.scss'
import github from "../../assets/images/iconmonstr-github-1.svg";

const Footer = props => {
    return (
        <footer className={styles.appFooter}>
            <a
                href="https://github.com/Zeitverschwender/expense-tracker-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.github}
            >
            <img src={github} alt="Github Logo" />
            </a>
        </footer>
    )
}


export default Footer
