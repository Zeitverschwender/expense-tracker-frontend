import React from "react";
import PropTypes from "prop-types";
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";

function ConfirmBox(props) {
  return (
    <Dialog
      open={props.isShown}
      onClose={() => props.hide()}
      aria-labelledby={`${props.operationString} dialog`}
      aria-describedby={`${props.operationString}`}
    >
      <DialogTitle id={`${props.operationString}-dialog-title`}>
        {props.msg}
      </DialogTitle>
      <DialogActions>
        <Button onClick={() => props.hide()} color="primary" autoFocus>
          no
        </Button>{" "}
        <Button
          onClick={() => {
            props.onYes();
            props.hide();
          }}
          color="primary"
        >
          yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmBox.propTypes = {
  msg: PropTypes.string.isRequired,
  onYes: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired,
  operationString: PropTypes.string.isRequired,
};

export default ConfirmBox;
