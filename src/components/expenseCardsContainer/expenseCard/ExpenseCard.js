import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './ExpenseCard.module.scss'
import { DateTime } from 'luxon'
import CreditCardIcon from "@material-ui/icons/CreditCard";
import SubjectSharpIcon from "@material-ui/icons/SubjectSharp";

import styles from "./ExpenseCard.module.scss";

import dollar from "../../../assets/images/dollar.svg";

const ExpenseCard = (props) => {
  const time = DateTime.fromISO(props.expense.date).toFormat('dd/LL');

  return (
    <div className={styles.card}>
      <div className={styles.firstRow}>
        <div className={styles.amount}>
          ${props.expense.amount.toLocaleString()}
        </div>
        <div className={styles.date}>{time}</div>
      </div>
      <div className={styles.category}>{props.expense.category.title}</div>
      <div className={styles.iconsList}>
        {props.expense.paymentType === "Cash" ? (
          <img src={dollar} alt="Cash icon" />
        ) : (
          <CreditCardIcon />
        )}
        {props.expense.note && <SubjectSharpIcon />}
      </div>
    </div>
  );
};

ExpenseCard.propTypes = {
  expense: PropTypes.object.isRequired,
};

export default ExpenseCard;
