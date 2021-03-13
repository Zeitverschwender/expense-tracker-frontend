import React from "react";
import PropTypes from "prop-types";

import { IconButton } from "@material-ui/core";

import SortIcon from "@material-ui/icons/Sort";
import AddIcon from "@material-ui/icons/Add";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";

import Styles from "./ExpenseListHeader.module.scss";

function ExpenseListHeader(props) {
  return (
    <div className={Styles.expensesHeader}>
      <h2>Expenses</h2>
      <div className={Styles.headerIcons}>
        <IconButton
          aria-label="sort"
          classes={{ root: Styles.icons }}
          color="inherit"
        >
          <SortIcon fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="filter"
          classes={{ root: Styles.icons }}
          color="inherit"
        >
          <span className="material-icons " style={{ fontSize: "2rem" }}>
            filter_alt
          </span>
        </IconButton>
        <IconButton
          aria-label="add"
          onClick={props.showCreate}
          classes={{ root: Styles.icons }}
          color="inherit"
        >
          <AddIcon fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="search"
          classes={{ root: Styles.icons }}
          color="inherit"
        >
          <SearchSharpIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

ExpenseListHeader.propTypes = {
  showCreate: PropTypes.func.isRequired,
};

export default ExpenseListHeader;
