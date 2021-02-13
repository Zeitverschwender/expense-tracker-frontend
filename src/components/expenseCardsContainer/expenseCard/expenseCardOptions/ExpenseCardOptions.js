import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Zoom,
} from "@material-ui/core";

import styles from "./ExpenseCardOptions.module.scss";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function ExpenseCardOptions(props) {
  const [confirmBoxOpen, setConfirmBoxOpen] = useState(false);
  return (
    <div className={styles.options}>
      <Dialog
        open={confirmBoxOpen}
        onClose={() => setConfirmBoxOpen(false)}
        aria-labelledby="Delete dialog"
        aria-describedby="Delete Expense"
      >
        <DialogTitle id="delete-dialog-title">
          Are you sure you want to delete this expense?
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={() => setConfirmBoxOpen(false)}
            color="primary"
            autoFocus
          >
            no
          </Button>{" "}
          <Button
            onClick={() => {
              props.onDeletecCick();
              setConfirmBoxOpen(false);
            }}
            color="primary"
          >
            yes
          </Button>
        </DialogActions>
      </Dialog>

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
