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
        <IconButton aria-label="sort" color="secondary">
          <SortIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="filter" color="secondary">
          <span className="material-icons" style={{ fontSize: "2rem" }}>
            filter_alt
          </span>
        </IconButton>
        <IconButton aria-label="add" color="secondary">
          <AddIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="search" color="secondary">
          <SearchSharpIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

ExpenseListHeader.propTypes = {};

export default ExpenseListHeader;
