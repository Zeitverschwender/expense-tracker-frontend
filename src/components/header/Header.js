import React from 'react'
import styles from './Header.module.scss'
import Sidebar from "../sidebar/Sidebar";

const Header = props => {
    return (
        <header className={styles.appHeader}>
            <Sidebar></Sidebar>
            <h1>EXPENSE TRACKER</h1>
        </header>
    )
}

export default Header
