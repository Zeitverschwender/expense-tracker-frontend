import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ExpenseCard from './expenseCard/ExpenseCard'
import * as actions from '../../store/actions/index';
import styles from "./ExpenseCardsContainer.module.scss";

const ExpenseCardsContainer = props => {
    // todo for sorting and filtering use local state
    // const [expenses, setExpenses] = useState([])

    const dispatch = useDispatch();

    const expenses = useSelector(state => state.expenses.expenses);
    const hasError = useSelector(state => state.expenses.hasError);
    const error = useSelector(state => state.expenses.error);
    const errorDescription = useSelector(state => state.expenses.errorDescription);

    const onGetAllExpenses = useCallback(() => dispatch(actions.getAllExpenses()), []);
    useEffect(() => {
        onGetAllExpenses()
    }, [onGetAllExpenses])

    const expenseCards = expenses.map(expense => <ExpenseCard key={expense._id} expense={expense}></ExpenseCard>)

    return (
        <div className={styles.expensesCardsList}>
            {expenseCards}
        </div>
    )       
}

export default ExpenseCardsContainer;
