import React, { useState } from "react";
import ExpenseCard from "./expenseCard/ExpenseCard";
// import PropTypes from 'prop-types'

const ExpenseCardsContainer = (props) => {
  const [expenses, setExpenses] = useState([
    {
      id: "1",
      date: "12/12",
      note: "note1",
      category: "food   ",
      paymentType: "card1",
      amount: 10000,
    },
    {
      id: "2",
      date: "13/13",
      note: "note2",
      category: "cat2",
      paymentType: "card2",
      amount: 20000,
    },
  ]);

  const expenseCards = expenses.map((expense) => (
    <ExpenseCard key={expense.id} expense={expense}></ExpenseCard>
  ));

  return <div>{expenseCards}</div>;
};

// ExpenseCardsContainer.propTypes = {

// }

export default ExpenseCardsContainer;
