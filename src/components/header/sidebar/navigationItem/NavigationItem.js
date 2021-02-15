import React from 'react'
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const NavigationItem = props => {
    const textCapitalized = props.toLink.charAt(0).toUpperCase() + props.toLink.slice(1);
    const IconComponent = props.icon
    return (
        <ListItem button key={props.toLink} component={Link} to={props.toLink} onClick = {props.action()}>
            <ListItemIcon>
                <IconComponent color='secondary'></IconComponent>
            </ListItemIcon>
            <ListItemText primary={textCapitalized} primaryTypographyProps={{variant:"h5"}}/>
        </ListItem>
    )
}

export default NavigationItem
