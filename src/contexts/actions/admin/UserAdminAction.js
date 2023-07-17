import axios from "axios";
import { BACKEND_URL } from "@utils/contant";

export const ACTIONS = {
  SET_USERS: "SET_USERS",
  SET_CONDITIONS: "SET_CONDITIONS",
  SET_FIELD_CONDITION: "SET_FIELD_CONDITION",
  SET_SELECTED: "SET_SELECTED",
  DELETE_USER: "DELETE_USER",
  SET_STATUS: "SET_STATUS",
  SET_MESSAGE: "SET_MESSAGE",
  SET_LOADING: "SET_LOADING",
  SET_SUCCESS: "SET_SUCCESS"
};


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

export const loadUserAction = (conditions) => async (dispatch) => {
  await axios
    .get(`${BACKEND_URL}/users`, {
      params: {
        ...conditions,
      },
    })
    .then((response) => {
      dispatch({
        type: ACTIONS.SET_USERS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: ACTIONS.SET_STATUS,
        payload: {
          isLoading: false,
          message: error.response.data.message,
          success: false,
        },
      });
    });
};

export const setFieldConditionAction = ({ field, value }) =>
  (dispatch) => {
    dispatch({
      type: ACTIONS.SET_FIELD_CONDITION,
      payload: { field, value },
    });
};

export const setConditionAction = (conditions) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_CONDITIONS,
    payload: conditions,
  });
};

export const setSelectedAction = (selected) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_SELECTED,
    payload: selected,
  });
};

export const deleteUserAction = (ids) => async (dispatch) => {
  await axios
    .delete(`${BACKEND_URL}/users`, {
      data: ids,
    })
    .then((response) => {
      setStatusAction({
        isLoading: true,
        message: response.data.message,
        success: response.data.success,
      });
      dispatch({
        type: ACTIONS.DELETE_USER,
        payload: ids,
      });
    })
    .catch((error) => {
      dispatch({
        type: ACTIONS.SET_STATUS,
        payload: {
          isLoading: false,
          message: error.response.data.message,
          success: false,
        },
      });
    });
};
