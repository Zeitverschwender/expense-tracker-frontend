import { Router } from "react-router-dom";
import * as actionTypes from "../actionTypes";

const setNoError = () => ({
  hasError: false,
  error: null,
  errorDescription: "",
});

const initialState = {
  isLoggedIn: document.cookie.indexOf("isLoggedIn") !== -1,
  name: "",
  photo: "",
  ...setNoError(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_NAME:
      return {
        ...state,
        name: action.username ,
        ...setNoError(),
      };
    case actionTypes.SET_USER_PHOTO:
      return {
        ...state,
        photo: action.photo,
        ...setNoError(),
      };
    case actionTypes.LOGOUT:
      document.cookie = "isLoggedIn=; expires=Thu, 18 Dec 2013 12:00:00 UTC";
      window.location.reload();
      return {
        ...state,
        user: { ...state.user, isLoggedIn: false },
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
