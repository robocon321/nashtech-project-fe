import axios from "axios";
import { BACKEND_URL } from "@utils/contant";

export const ACTIONS = {
  RESET_ALL_FIELD: "RESET_ALL_FIELD",
  SET_FIELD: "SET_FIELD",
  SET_STATUS: "SET_STATUS",
  SET_MESSAGE: "SET_MESSAGE",
  SET_LOADING: "SET_LOADING",
  SET_SUCCESS: "SET_SUCCESS"
};

export const submitAction = (user) => async (dispatch) => {

  await axios.post(`${BACKEND_URL}/users`, user)
  .then((response) => {
    dispatch({
      type: ACTIONS.SET_STATUS,
      payload: {
        isLoading: false,
        message: response.data.message,
        success: response.data.success
      }
    })
  }).catch(error => {
    dispatch({
      type: ACTIONS.SET_STATUS,
      payload: {
        isLoading: false,
        message: error.response.data.message,
        success: false
      }
    })
  });
}

export const resetAllFieldAction = () => dispatch => {
  dispatch({
    type: ACTIONS.RESET_ALL_FIELD    
  })
}

export const setFieldAction = ({field, value}) => dispatch => {
  dispatch({
    type: ACTIONS.SET_FIELD,
    payload: {field, value}
  })
}

export const setStatusAction = (status) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_STATUS,
    payload: status,
  });
};

export const setLoadingAction = (isLoading) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading,
  });
};

export const setMessageAction = (message) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_MESSAGE,
    payload: message,
  });
};

export const setSuccessAction = (success) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_SUCCESS,
    payload: success,
  });
};

