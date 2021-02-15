import React, { useEffect } from "react";
import * as actions from "../../../../store/actions/index";
import styles from "./UserSection.module.scss";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch, useSelector } from "react-redux";
import { ListItemText } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BASE_URL } from "../../../../axios";

const UserSection = (props) => {
	const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getUsername());
    dispatch(actions.getUserPhoto());
  });

  const userPhoto = useSelector((state) => state.user.photo);
  const userName = useSelector((state) => state.user.name);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const logout = () => {
    props.setIsOpen(false);
    dispatch(actions.logout());
  };

  const login = () => {
    window.open(BASE_URL + "auth/google", "_self");
  };

  return (
    <List>
      <Avatar
        alt="User Google Photo"
        src={userPhoto}
        classes={{ root: styles.LargeAvatar }}
      />
      <ListItem >
        <ListItemText
          primary={userName}
					classes={{root: styles.Center}}
          primaryTypographyProps={{ variant: "h5" }}
        />
      </ListItem>
      <ListItem button>
				<ListItemIcon>
					<span className={`material-icons ${styles.LogIcon}`}>
						{isUserLoggedIn ? "logout" : "login"}
					</span>
				</ListItemIcon>
				<ListItemText
					primary={isUserLoggedIn ? "Log Out" : "Log In"}
					onClick={isUserLoggedIn ? logout : login}
					primaryTypographyProps={{ variant: "h5" }}
				/>
     	</ListItem>
  	</List>
  );
};

export default UserSection;
