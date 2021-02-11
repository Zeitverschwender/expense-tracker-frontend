import React from 'react'
import styles from "./Sidebar.module.scss";

const Sidebar = props => {
    return (
        <span className={"material-icons " + styles.sidemenuButton} onclick={'sad'}>
            menu
        </span>
    )
}


export default Sidebar
