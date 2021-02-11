import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Fab } from "@material-ui/core";

import ExpenseCardsContainer from "../../components/expenseCardsContainer/ExpenseCardsContainer";
import ExpenseListHeader from "../../components/expenseCardsContainer/expenseListHeader/ExpenseListHeader";

import AddIcon from "@material-ui/icons/Add";

import Styles from "./Home.module.scss";
import CreateExpense from "../../components/createExpense/CreateExpense";

const Home = (props) => {
  const [isCreateShown, setIsCreateShown] = useState(false);
  const createExpenseRef = useRef(null);

  const showCreate = (e) => {
    e.preventDefault();

    setIsCreateShown(true);

    if (createExpenseRef.current) {
      createExpenseRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const hideCreate = (e) => {
    e.preventDefault();

    setIsCreateShown(false);
  };
  return (
    <React.Fragment>
      <div className={Styles.fab}>
        <Fab
          color="secondary"
          size="large"
          aria-label="add expense"
          onClick={showCreate}
        >
          <AddIcon />
        </Fab>
      </div>
      <section className={Styles.expenseCardsContainer}>
        <ExpenseListHeader showCreate={showCreate} />
        {isCreateShown && (
          <CreateExpense ref={createExpenseRef} close={hideCreate} />
        )}
        <ExpenseCardsContainer></ExpenseCardsContainer>
      </section>
    </React.Fragment>
  );
};

Home.propTypes = {};

export default Home;
