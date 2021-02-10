import React from "react";
import PropTypes from "prop-types";
import ExpenseCardsContainer from "../../components/expenseCardsContainer/ExpenseCardsContainer";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import styles from "./Home.module.scss";

const Home = (props) => {
  return (
    <React.Fragment>
      <div className={styles.fab}>
        <Fab color="secondary" size="large" aria-label="add expense">
          <AddIcon />
        </Fab>
      </div>
      <ExpenseCardsContainer></ExpenseCardsContainer>
    </React.Fragment>
  );
};

Home.propTypes = {};

export default Home;
