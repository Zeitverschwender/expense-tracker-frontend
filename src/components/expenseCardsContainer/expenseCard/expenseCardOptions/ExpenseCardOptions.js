import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconButton, Zoom } from "@material-ui/core";

import styles from "./ExpenseCardOptions.module.scss";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ConfirmBox from "../../../common/confirmBox/ConfirmBox";

function ExpenseCardOptions(props) {
  const [confirmBoxOpen, setConfirmBoxOpen] = useState(false);
  return (
    <div className={styles.options}>
      <ConfirmBox
        onYes={props.onDeletecCick}
        operationString="delete expense"
        msg="Are you sure you want to delete this expense?"
        hide={() => setConfirmBoxOpen(false)}
        isShown={confirmBoxOpen}
      />

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
          onClick={() => setConfirmBoxOpen(true)}
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
