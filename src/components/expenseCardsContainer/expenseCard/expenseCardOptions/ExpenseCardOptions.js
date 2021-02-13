import React from "react";
import PropTypes from "prop-types";
import { IconButton, Zoom } from "@material-ui/core";

import styles from "./ExpenseCardOptions.module.scss";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function ExpenseCardOptions(props) {
  return (
    <div className={styles.options}>
      <Zoom in={props.isShown} mountOnEnter unmountOnExit>
        <IconButton
          aria-label="edit"
          size="small"
          color="inherit"
          onClick={props.onEditClick}
        >
          <EditIcon classes={{ root: styles.icons }} />
        </IconButton>
      </Zoom>
      <Zoom
        in={props.isShown}
        style={{ transitionDelay: props.isShown ? "150ms" : "0ms" }}
      >
        <IconButton
          aria-label="delete"
          size="small"
          color="inherit"
          onClick={props.onDeletecCick}
        >
          <DeleteIcon classes={{ root: styles.icons }} />
        </IconButton>
      </Zoom>
    </div>
  );
}

ExpenseCardOptions.propTypes = {
  onEditClick: PropTypes.func.isRequired,
  onDeletecCick: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired,
};

export default ExpenseCardOptions;
