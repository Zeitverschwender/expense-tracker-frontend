import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ExpenseCard.module.scss";

import clsx from "clsx";
import { removeExpense } from "../../../store/actions/expense";
import { useDispatch } from "react-redux";
import ExpenseCardContent from "./expenseCardContent/ExpenseCardContent";
import CreateExpense from "../../createExpense/CreateExpense";
import CardOptions from "../../common/cardOptions/CardOptions";
import CardNote from "../../common/cardNote/CardNote";

const ExpenseCard = (props) => {
  const [clicked, setClicked] = useState(false);
  const [editing, setEditing] = useState(false);

  const dispatch = useDispatch();

  const toggleClicked = () => {
    setClicked(!clicked);
  };

  return editing ? (
    <CreateExpense
      close={() => setEditing(false)}
      expense={props.expense}
      afterAction={() => setEditing(false)}
      isCreate={false}
    />
  ) : (
    <div className={clsx(styles.card, !clicked && styles.cardHover)}>
      <ExpenseCardContent
        expense={props.expense}
        toggleClicked={toggleClicked}
      />
      <CardOptions
        cardType="expense"
        onEditClick={() => setEditing(true)}
        onDeletecCick={() => dispatch(removeExpense(props.expense._id))}
        isShown={clicked}
      />
      <CardNote note={props.expense.note} isShown={clicked} />
    </div>
  );
};

ExpenseCard.propTypes = {
  expense: PropTypes.object.isRequired,
};

export default ExpenseCard;
