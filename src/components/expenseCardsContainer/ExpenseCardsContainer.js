import React, { useState } from "react";
import ExpenseCard from "./expenseCard/ExpenseCard";

import Styles from "./ExpenseCardsContainer.module.scss";

const ExpenseCardsContainer = (props) => {
  const [expenses, setExpenses] = useState([
    {
      id: "1",
      date: "12/12",
      note: "note1",
      category: "food   ",
      paymentType: "Cash",
      amount: 10000,
    },
    {
      id: "2",
      date: "13/13",
      category: "not food",
      paymentType: "qweasd",
      amount: 20000,
    },
  ]);

  return (
    <div className={Styles.expensesCardsList}>
      {expenses.map((expense) => (
        <ExpenseCard key={expense.id} expense={expense}></ExpenseCard>
      ))}
    </div>
  );
};

export default ExpenseCardsContainer;
