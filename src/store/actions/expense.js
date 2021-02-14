import * as actionTypes from '../actionTypes';
import axios from '../../axios';

const EXPENSES_ENDPOINT = 'expenses/'

export const setExpenses = ( expenses ) => {
    return {
        type: actionTypes.SET_EXPENSES,
        expenses: expenses
    };
};

export const expensesAPICallFailed = (error, description) => {
    return {
        type: actionTypes.EXPENSES_API_CALL_FAILED,
        error: error, 
        errorDescription: description
    };
};

export const getAllExpenses = () => {
    return dispatch => {
        axios.get( EXPENSES_ENDPOINT )
            .then( response => {
                dispatch(setExpenses(response.data));
            } )
            .catch( error => {
                dispatch(expensesAPICallFailed(
                    error.response.data,
                    "retrieving expenses failed"
                ));
            } );
    };
};

export const addExpense = ( expense ) => {
    return dispatch => {
        axios.post( EXPENSES_ENDPOINT, expense)
            .then( response => {
                dispatch({
                    type: actionTypes.ADD_EXPENSE,
                    expense: response.data.newExpense,
                });
            } )
            .catch( error => {
                dispatch(expensesAPICallFailed(
                    error.response.data,
                    "adding expense failed"
                ));
            } );
        };
};

export const updateExpense = ( expense ) => {
    const success_action = {
        type: actionTypes.UPDATE_EXPENSES
    };

    return dispatch => {
        axios.patch( EXPENSES_ENDPOINT + expense._id, expense)
            .then( response => {
                dispatch({
                    ...success_action,
                    expense: response.data.itemToUpdate
                });
            } )
            .catch( error => {
                dispatch(expensesAPICallFailed(
                    error.response.data,
                    `updating expense failed`
                ));
            } );
        };
};

export const removeExpense = ( expenseId ) => {
    const success_action = {
        type: actionTypes.REMOVE_EXPENSE,
        expenseId: expenseId
    };

    return dispatch => {
        axios.delete( EXPENSES_ENDPOINT + expenseId)
            .then( response => {
                dispatch(success_action);
            } )
            .catch( error => {
                dispatch(expensesAPICallFailed(
                    error.response.data,
                    "removing expense failed"
                ));
            } );
        };
};
