import axios from "axios";
import { BACKEND_URL } from "@utils/contant";

export const ACTIONS = {
  SET_CATEGORIES: "SET_CATEGORIES",
  CHANGE_FIELD: "CHANGE_FIELD",
  SET_STATUS: "SET_STATUS",
  SET_CATEGORY: "SET_CATEGORY",
  SET_CONDITIONS: "SET_CONDITIONS",
  SET_FIELD_CONDITION: "SET_FIELD_CONDITION",
  SET_SELECTED: "SET_SELECTED",
  RESET_CATEGORY: "RESET_CATEGORY",
  DELETE_CATEGORY: "DELETE_CATEGORY",
  UPDATE_CATEGORY: "UPDATE_CATEGORY",
};

export const loadCategoryAction = (conditions) => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_STATUS,
    payload: {
      isLoading: false,
      message: "",
      success: false,
    },
  });

  await axios
    .get(`${BACKEND_URL}/categories`, {
      params: {
        ...conditions,
      },
    })
    .then((response) => {
      dispatch({
        type: ACTIONS.SET_CATEGORIES,
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

export const changeFieldAction = ({ field, value }) => (dispatch) => {
    dispatch({
      type: ACTIONS.CHANGE_FIELD,
      payload: { field, value },
    });
};

export const setStatusAction = (status) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_STATUS,
    payload: status,
  });
};

export const setCategoryAction = (category) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_CATEGORY,
    payload: category,
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

export const resetCategoryAction = () => (dispatch) => {
  dispatch({
    type: ACTIONS.RESET_CATEGORY,
  });
};

export const deleteCategoryAction = (ids) => async (dispatch) => {
  await axios
    .delete(`${BACKEND_URL}/categories`, {
      data: ids,
    })
    .then((response) => {
      setStatusAction({
        isLoading: true,
        message: response.data.message,
        success: response.data.success,
      });
      dispatch({
        type: ACTIONS.DELETE_CATEGORY,
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

export const submitFormAction = (category) => async (dispatch) => {
  if (category.id == null) {
    await axios
      .post(`${BACKEND_URL}/categories`, category)
      .then((response) => {
        dispatch({
          type: ACTIONS.SET_STATUS,
          payload: {
            isLoading: true,
            message: response.data.message,
            success: response.data.success,
          },
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
  } else {
    await axios
      .put(`${BACKEND_URL}/categories`, category)
      .then((response) => {
        dispatch({
          type: ACTIONS.SET_STATUS,
          payload: {
            isLoading: true,
            message: response.data.message,
            success: true,
          },
        });
        
        dispatch({
          type: ACTIONS.UPDATE_CATEGORY,
          payload: category
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
  }
};
