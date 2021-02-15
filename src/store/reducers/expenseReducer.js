import * as actionTypes from '../actionTypes';

const setNoError = () => ({
    hasError: false,
    error: null,
    errorDescription: ''
});

const initialState = {
    expenses: [],
    ...setNoError()
};

function getChronoSortedExpenses(expenses) {
  return expenses.sort((first, second) => {
    const firstDate = new Date(first.date);
    const secondDate = new Date(second.date);
    return firstDate < secondDate ? 1 : firstDate > secondDate ? -1 : 0;
  });
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_EXPENSES:
            return {
                ...state,
                expenses: getChronoSortedExpenses(action.expenses),
                ...setNoError()
            };

        case actionTypes.ADD_EXPENSE:
            return {
                ...state,
                expenses: getChronoSortedExpenses([action.expense, ...state.expenses]),
                ...setNoError()
            };

        case actionTypes.REMOVE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense._id !== action.expenseId),
                ...setNoError()
            };

        case actionTypes.UPDATE_EXPENSES:
            let expenses = [...state.expenses];
            const updatedIndex = expenses.findIndex(expense => expense._id === action.expense._id);
            expenses = [...expenses.slice(0, updatedIndex), action.expense, ...expenses.slice(updatedIndex + 1)];
            return {
                ...state,
                expenses: getChronoSortedExpenses(expenses),
                ...setNoError()
            };

        case actionTypes.EXPENSES_API_CALL_FAILED:
            return {
                ...state,
                hasError: true,
                error: action.error,
                errorDescription: action.errorDescription
            };
        default:
            return state;
    }
};

export default reducer;