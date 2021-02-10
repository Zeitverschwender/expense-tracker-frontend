import * as actionTypes from '../actionTypes';
import axios from '../../axios';
import category from '../../../../expense-tracker-backend/db/models/category';

CATEGORIES_ENDPOINT = 'categories/'
// todo implement these stuff
export const addCategory = ( expense ) => {
    return {
        type: actionTypes.ADD_EXPENSE,
        expense: expense
    };
};

export const removeCategory = ( expenseId ) => {
    return {
        type: actionTypes.REMOVE_EXPENSE,
        expenseId: expenseId
    };
};

export const setCategories = ( categories ) => {
    return {
        type: actionTypes.SET_CATEGORIES,
        categories: categories
    };
};

export const updateCategory = ( category ) => {
    return {
        sad: 'sad'
    }
}

export const fetchCategoriesFailed = () => {
    return {
        type: actionTypes.CATEGORIES_API_CALL_FAILED
    };
};

export const getAllCategories = () => {
    return dispatch => {
        axios.get( CATEGORIES_ENDPOINT )
            .then( response => {
                dispatch(setCategories(response.data));
            } )
            .catch( error => {
                dispatch(fetchIngredientsFailed());
            } );
    };
};