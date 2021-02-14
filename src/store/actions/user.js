import * as actionTypes from "../actionTypes";
import axios from "../../axios";

const USER_ENDPOINT = "user/";
const USER_NAME_ENDPOINT = USER_ENDPOINT + "name";
const USER_PHOTO_ENDPOINT = USER_ENDPOINT + "photo";

export const expensesAPICallFailed = (error, description) => {
  return {
    type: actionTypes.USER_API_CALL_FAILED,
    error: error,
    errorDescription: description,
  };
};

export const getUsername = () => {
  return (dispatch) => {
    axios
      .get(USER_NAME_ENDPOINT)
      .then((response) => {
        dispatch({
          type: actionTypes.SET_USER_NAME,
          username: response.data,
        });
      })
      .catch((error) => {
        dispatch(
          expensesAPICallFailed(error.response.data, "getting username failed")
        );
      });
  };
};
export const getUserPhoto = () => {
  return (dispatch) => {
    axios
      .get(USER_PHOTO_ENDPOINT)
      .then((response) => {
        dispatch({
          type: actionTypes.SET_USER_PHOTO,
          photo: response.data,
        });
      })
      .catch((error) => {
        dispatch(
          expensesAPICallFailed(
            error.response.data,
            "getting user photo failed"
          )
        );
      });
  };
};
