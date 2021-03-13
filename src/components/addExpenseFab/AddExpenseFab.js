import React from "react";
import PropTypes from "prop-types";

import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";

import styles from "./AddExpenseFab.module.scss";

function AddExpenseFab(props) {
  return (
    <Fab
      classes={{ root: styles.fab }}
      className={styles.fab}
      size="large"
      color="secondary"
      aria-label="add expense"
      onClick={props.showCreate}
    >
      <AddIcon
        fontSize="inherit"
        classes={{ root: styles.addIcon }}
      />
    </Fab>
  );
}

AddExpenseFab.propTypes = {
  showCreate: PropTypes.func.isRequired,
};

export default AddExpenseFab;
