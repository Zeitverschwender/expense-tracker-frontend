import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import styles from "./Sidebar.module.scss";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import { SwipeableDrawer } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import NavigationItem from './navigationItem/NavigationItem'

const Sidebar = props => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setIsOpen(true);
    };

    const handleDrawerClose = () => {
        setIsOpen(false);
    };

    const sideMenuButton = (
      <div className={styles.sidemenuButton}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          classes={{ root: isOpen && styles.hide }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </div>
    );

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
                    <NavigationItem 
                        toLink='expenses' action={toggleDrawer} icon={MonetizationOnOutlinedIcon}>
                        </NavigationItem>
                    <NavigationItem 
                        toLink='categories' action={toggleDrawer} icon={LocalOfferOutlinedIcon}>
                        </NavigationItem>
                    <NavigationItem 
                        toLink='graphs' action={toggleDrawer} icon={PieChartOutlinedIcon}>
                        </NavigationItem>
                </List>
                <Divider />
            </div>
            <div>
                <Divider />
                <List>
                    {/* todo auth, user section */}
                    <ListItem button key={'user-section?'}>
                        <ListItemText primary={'user-section?'} primaryTypographyProps={{variant:"h5"}}/>
                    </ListItem>
                    <ListItem button key={'login/sign-out'}>
                        <ListItemText primary={'login/sign-out'} primaryTypographyProps={{variant:"h5"}}/>
                    </ListItem>
                </List>
            </div>

            </SwipeableDrawer>
        </React.Fragment>

    )
}


export default Sidebar
