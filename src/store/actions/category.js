import * as actionTypes from '../actionTypes';
import axios from '../../axios';

const CATEGORIES_ENDPOINT = 'categories/'

export const categoriesAPICallFailed = (error, description) => {
    return {
        type: actionTypes.CATEGORIES_API_CALL_FAILED,
        error: error, 
        errorDescription: description
    };
};

export const addCategory = ( category ) => {
    return dispatch => {
        axios.post( CATEGORIES_ENDPOINT, category)
            .then( response => {
                dispatch({
                    type: actionTypes.ADD_CATEGORY,
                    category: response.data.newCategory,
                });
            } )
            .catch( error => {
                dispatch(categoriesAPICallFailed(
                    error.response.data,
                    "adding category failed"
                ));
            } );
        };
};


export const removeCategory = ( categoryId ) => {
    const success_action = {
        type: actionTypes.REMOVE_CATEGORY,
        categoryId: categoryId
    };

    return dispatch => {
        axios.delete( CATEGORIES_ENDPOINT + categoryId)
            .then( response => {
                dispatch(success_action);
            } )
            .catch( error => {
                dispatch(categoriesAPICallFailed(
                    error.response.data,
                    "removing category failed"
                ));
            } );
        };
};

export const updateCategory = ( category ) => {
    const success_action = {
        type: actionTypes.UPDATE_CATEGORY
    };

    return dispatch => {
        axios.patch( CATEGORIES_ENDPOINT + category._id, category)
            .then( response => {
                dispatch({
                    ...success_action,
                    category: response.data.categoryToUpdate
                });
            } )
            .catch( error => {
                dispatch(categoriesAPICallFailed(
                    error.response.data,
                    `updating category failed`
                ));
            } );
        };
};

export const setCategories = ( categories ) => {
    return {
        type: actionTypes.SET_CATEGORIES,
        categories: categories
    };
};

export const getAllCategories = () => {
    return dispatch => {
        axios.get( CATEGORIES_ENDPOINT )
            .then( response => {
                dispatch(setCategories(response.data));
            } )
            .catch( error => {
                dispatch(categoriesAPICallFailed(
                    error.response.data,
                    `fetching categories failed`
                ));
            } );
    };
};