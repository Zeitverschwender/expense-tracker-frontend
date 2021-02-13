import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ExpenseCard.module.scss";

import ExpenseCardOptions from "./expenseCardOptions/ExpenseCardOptions";
import clsx from "clsx";
import ExpenseCardNote from "./expenseCardNote/ExpenseCardNote";
import { removeExpense } from "../../../store/actions/expense";
import { useDispatch } from "react-redux";
import ExpenseCardContent from "./expenseCardContent/ExpenseCardContent";

const ExpenseCard = (props) => {
  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();

  const toggleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <div className={clsx(styles.card, !clicked && styles.cardHover)}>
      <ExpenseCardContent
        expense={props.expense}
        toggleClicked={toggleClicked}
      />
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
