import * as actionTypes from "../actionTypes";

const setNoError = () => ({
  hasError: false,
  error: null,
  errorDescription: "",
});

const initialState = {
  user: {
    isLoggedIn: document.cookie.indexOf("isLoggedIn") !== -1,
  },
  ...setNoError(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_NAME:
      return {
        ...state,
        user: { ...state.user, username: action.username },
        ...setNoError(),
      };
    case actionTypes.SET_USER_PHOTO:
      return {
        ...state,
        user: { ...state.user, photo: action.photo },
        ...setNoError(),
      };
    case actionTypes.USER_API_CALL_FAILED:
      return {
        ...state,
        hasError: true,
        error: action.error,
        errorDescription: action.errorDescription,
      };
    default:
      return state;
  }
};

export default reducer;
