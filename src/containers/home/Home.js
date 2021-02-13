import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { getAllCategories } from "../../store/actions/index";

import ExpenseCardsContainer from "../../components/expenseCardsContainer/ExpenseCardsContainer";
import ExpenseListHeader from "../../components/expenseCardsContainer/expenseListHeader/ExpenseListHeader";

import Styles from "./Home.module.scss";
import CreateExpense from "../../components/createExpense/CreateExpense";
import AddExpenseFab from "../../components/addExpenseFab/AddExpenseFab";

const Home = (props) => {
  const [isCreateShown, setIsCreateShown] = useState(false);
  const createExpenseRef = useRef(null);

  const dispatch = useDispatch();
  const onGetAllCategories = useCallback(
    () => dispatch(getAllCategories()),
    []
  );
  useEffect(() => {
    onGetAllCategories();
  }, [onGetAllCategories]);

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
      <AddExpenseFab showCreate={showCreate} />
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
