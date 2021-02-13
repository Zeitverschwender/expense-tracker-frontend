import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ExpenseCard.module.scss";
import { DateTime } from "luxon";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import SubjectSharpIcon from "@material-ui/icons/SubjectSharp";
import dollar from "../../../assets/images/dollar.svg";
import ExpenseCardOptions from "./expenseCardOptions/ExpenseCardOptions";
import clsx from "clsx";
import ExpenseCardNote from "./expenseCardNote/ExpenseCardNote";
import { removeExpense } from "../../../store/actions/expense";
import { useDispatch } from "react-redux";

const ExpenseCard = (props) => {
  const [clicked, setClicked] = useState(false);

  const time = DateTime.fromISO(props.expense.date).toFormat("dd/LL");

  const dispatch = useDispatch();

  return (
    <div className={clsx(styles.card, !clicked && styles.cardHover)}>
      <div className={styles.cardContent} onClick={() => setClicked(!clicked)}>
        <div className={styles.firstRow}>
          <div className={styles.amount}>
            ${props.expense.amount.toLocaleString()}
          </div>
          <div className={styles.date}>{time}</div>
        </div>
        <div className={styles.category}>
          {props.expense.category ? props.expense.category.title : "null"}
        </div>
        <div className={styles.iconsList}>
          {props.expense.paymentType === "Cash" ? (
            <img src={dollar} alt="Cash icon" />
          ) : (
            <CreditCardIcon />
          )}
          {props.expense.note && <SubjectSharpIcon />}
        </div>
      </div>
      <ExpenseCardOptions
        onEditClick={() => {
          alert("edit");
        }}
        onDeletecCick={() => dispatch(removeExpense(props.expense._id))}
        isShown={clicked}
      />
      <ExpenseCardNote note={props.expense.note} isShown={clicked} />
    </div>
  );
};

ExpenseCard.propTypes = {
  expense: PropTypes.object.isRequired,
};

export default ExpenseCard;
