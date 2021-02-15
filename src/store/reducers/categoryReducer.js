import * as actionTypes from '../actionTypes';

const setNoError = () => ({
    hasError: false,
    error: null,
    errorDescription: ''
});

const initialState = {
  categories: {},
  ...setNoError(),
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_CATEGORIES:
            const categories = action.categories.reduce((result, current) => {
              result[current._id] = current;
              return result;
            }, {});
            return {
              ...state,
              categories,
              ...setNoError(),
            };

        case actionTypes.ADD_CATEGORY:
            const newCategories = { ...state.categories };
            newCategories[action.category._id] = action.category;
            return {
                ...state,
                categories: newCategories,
                ...setNoError(),
            };
        case actionTypes.REMOVE_CATEGORY:
            const modifiedCategories = { ...state.categories };
            delete  modifiedCategories[action.categoryId];
            return {
                ...state,
                categories: modifiedCategories,
                ...setNoError()
            };
        case actionTypes.UPDATE_CATEGORY:
            const updatedCategories = { ...state.categories };
            updatedCategories[action.category._id] = action.category
            return {
                ...state,
                categories: updatedCategories,
                ...setNoError()
            };

        case actionTypes.CATEGORIES_API_CALL_FAILED:
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