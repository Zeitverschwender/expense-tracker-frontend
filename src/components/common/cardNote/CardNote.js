import React from "react";
import PropTypes from "prop-types";
import { Divider, Grow } from "@material-ui/core";

import styles from "./CardNote.module.scss";

function CardNote(props) {
  return (
    <Grow
      in={props.isShown}
      {...(props.isShown ? { timeout: 550 } : {})}
      mountOnEnter
      unmountOnExit
    >
      <div className={styles.noteContent}>
        <Divider className={styles.divider} />
        {props.note ? (
          <div className={styles.note}>{props.note}</div>
        ) : (
          <div className={styles.notePlaceHolder}>no note...</div>
        )}
      </div>
    </Grow>
  );
}

CardNote.propTypes = {
  note: PropTypes.string.isRequired,
  isShown: PropTypes.bool.isRequired,
};

export default CardNote;
