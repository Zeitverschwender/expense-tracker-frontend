import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import styles from "./Sidebar.module.scss";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import { SwipeableDrawer } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import { Link } from 'react-router-dom';

const Sidebar = props => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setIsOpen(true);
    };

    const handleDrawerClose = () => {
        setIsOpen(false);
    };

    const sideMenuButton = 
        <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        classes={{ root: clsx(styles.sidemenuButton, isOpen && styles.hide) }}
        >
            <MenuIcon fontSize='large'/>
        </IconButton>

    const toggleDrawer = () => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(!isOpen);
    };

    return (
        <React.Fragment>
            { sideMenuButton }
            <SwipeableDrawer 
                className={styles.drawer}
                anchor="left"
                open={isOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                color="secondary"
                classes={{ root: styles.drawer, paper: styles.drawerPaper}}
            >
            <div>
                <div className={styles.collapseButton}>
                    <IconButton onClick={handleDrawerClose} classes={{ root: styles.collapseButton}}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button key={'Expenses'} component={Link} to="expenses" onClick = {toggleDrawer()}>
                            <ListItemIcon><MonetizationOnOutlinedIcon color='secondary'></MonetizationOnOutlinedIcon></ListItemIcon>
                            <ListItemText primary={'Expenses'} primaryTypographyProps={{variant:"h5"}}/>
                    </ListItem>
                    <ListItem button key={'Categories'} component={Link} to="categories" onClick = {toggleDrawer()}>
                            <ListItemIcon><LocalOfferOutlinedIcon color='secondary'></LocalOfferOutlinedIcon></ListItemIcon>
                            <ListItemText primary={'Categories'} primaryTypographyProps={{variant:"h5"}}/>
                    </ListItem>
                    <ListItem button key={'Graphs'} component={Link} to="graphs" onClick = {toggleDrawer()}>
                            <ListItemIcon><PieChartOutlinedIcon color='secondary'></PieChartOutlinedIcon></ListItemIcon>
                            <ListItemText primary={'Graphs'} primaryTypographyProps={{variant:"h5"}}/>
                    </ListItem>
                </List>
                <Divider />
            </div>
            <div>
                <Divider />
                <List>
                    <ListItem button key={'user-section?'}>
                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    <ListItemText primary={'user-section?'} primaryTypographyProps={{variant:"h5"}}/>
                    </ListItem>
                    <ListItem button key={'login/sign-out'}>
                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    <ListItemText primary={'login/sign-out'} primaryTypographyProps={{variant:"h5"}}/>
                    </ListItem>
                </List>
            </div>

            </SwipeableDrawer>
        </React.Fragment>

    )
}


export default Sidebar
