import * as actionTypes from '../actionTypes';

const setNoError = () => ({
    hasError: false,
    error: null,
    errorDescription: ''
});

const initialState = {
    categories: [],
    ...setNoError()
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
                ...setNoError()
            };

        case actionTypes.REMOVE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(categories => categories._id != action.categoryId),
                ...setNoError()
            };

        case actionTypes.UPDATE_CATEGORY:
            let categories = [...state.categories];
            const updatedIndex = categories.findIndex(cat => cat._id == action.category._id);
            categories = [...categories.slice(0, updatedIndex), action.expense, ...categories.slice(updatedIndex + 1)];
            return {
                ...state,
                categories: categories,
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