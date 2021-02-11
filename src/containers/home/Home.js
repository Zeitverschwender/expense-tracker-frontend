import React from "react";
import PropTypes from "prop-types";
import { Fab } from "@material-ui/core";

import ExpenseCardsContainer from "../../components/expenseCardsContainer/ExpenseCardsContainer";
import ExpenseListHeader from "../../components/expenseCardsContainer/expenseListHeader/ExpenseListHeader";

import AddIcon from "@material-ui/icons/Add";

import Styles from "./Home.module.scss";

const Home = (props) => {
  return (
    <React.Fragment>
      <div className={Styles.fab}>
        <Fab color="secondary" size="large" aria-label="add expense">
          <AddIcon />
        </Fab>
      </div>
      <section className={Styles.expenseCardsContainer}>
        <ExpenseListHeader />
        <ExpenseCardsContainer></ExpenseCardsContainer>
      </section>
    </React.Fragment>
  );
};

Home.propTypes = {};

export default Home;
