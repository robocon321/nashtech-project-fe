import axios from "axios";
import { BACKEND_URL } from "../../../utils/contant";

export const ACTIONS = {
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_STATUS: "SET_STATUS",
  SET_CONDITIONS: "SET_CONDITIONS",
  SET_FIELD_CONDITION: "SET_FIELD_CONDITION",
  SET_SELECTED: "SET_SELECTED",
  DELETE_PRODUCT: "DELETE_PRODUCT",
  SET_CATEGORIES: "SET_CATEGORIES"
};

export const loadCategoriesAction = () => async (dispatch) => {
  await axios
    .get(`${BACKEND_URL}/categories`, {
      params: {
        size: 100,
      },
    })
    .then((response) => {
      dispatch({
        type: ACTIONS.SET_CATEGORIES,
        payload: response.data.data.content,
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

export const loadProductAction = (conditions) => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_STATUS,
    payload: {
      isLoading: false,
      message: "",
      success: false,
    },
  });

  await axios
    .get(`${BACKEND_URL}/products`, {
      params: {
        ...conditions,
      },
    })
    .then((response) => {
      dispatch({
        type: ACTIONS.SET_PRODUCTS,
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


export const setStatusAction = (status) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_STATUS,
    payload: status,
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

export const deleteProductAction = (ids) => async (dispatch) => {
  await axios
    .delete(`${BACKEND_URL}/products`, {
      data: ids,
    })
    .then((response) => {
      setStatusAction({
        isLoading: true,
        message: response.data.message,
        success: response.data.success,
      });
      dispatch({
        type: ACTIONS.DELETE_PRODUCT,
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
