import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ExpenseCard.module.scss";

const ExpenseCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.amount}>$ {props.expense.amount}</div>
      <div className={styles.category}>{props.expense.category}</div>
      <div className={styles.details}>det </div>
      <div className={styles.date}>{props.expense.date}</div>

      <div className={styles.categoryColor}></div>
    </div>
  );
};

ExpenseCard.propTypes = {};

export default ExpenseCard;
