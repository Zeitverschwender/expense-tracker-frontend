import React, { useState } from "react";
import PropTypes from "prop-types";
import { Fab } from "@material-ui/core";

import ExpenseCardsContainer from "../../components/expenseCardsContainer/ExpenseCardsContainer";
import ExpenseListHeader from "../../components/expenseCardsContainer/expenseListHeader/ExpenseListHeader";

import AddIcon from "@material-ui/icons/Add";

import Styles from "./Home.module.scss";
import CreateExpense from "../../components/createExpense/CreateExpense";

const Home = (props) => {
  const [isCreateShown, setIsCreateShown] = useState(false);

  const showCreate = (e) => {
    e.preventDefault();
    setIsCreateShown(true);
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
        {isCreateShown && <CreateExpense />}
        <ExpenseCardsContainer></ExpenseCardsContainer>
      </section>
    </React.Fragment>
  );
};

Home.propTypes = {};

export default Home;
