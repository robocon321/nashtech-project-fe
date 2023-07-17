import axios from "axios";
import { BACKEND_URL } from "@utils/contant";

export const ACTIONS = {
  CHANGE_FIELD: "CHANGE_FIELD",
  SET_CATEGORIES: "SET_CATEGORIES",
  SET_STATUS: "SET_STATUS",
};

export const changeFieldAction =
  ({ field, value }) =>
  (dispatch) => {
    dispatch({
      type: ACTIONS.CHANGE_FIELD,
      payload: { field, value },
    });
  };

export const loadCategoriesAction = () => async (dispatch) => {
  await axios
    .get(`${BACKEND_URL}/categories`, {
      params: {
        size: 100,
        AND_status: 1
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
};

export const submitAction = (product) => async (dispatch) => {
  // const config = {
  //   headers: {
  //     "content-type": "multipart/form-data",
  //   },
  // };

  const formData =  new FormData();

  for (var key in product ) {
    if(key == 'gallery') {
      for(var i = 0; i < product.gallery.length; i ++) {
        formData.append('gallery', product.gallery[i]);
      }
    }else {
      formData.append(key, product[key]);
    }
  }


  await axios
    .post(`${BACKEND_URL}/products`, formData)
    .then((response) => {
      dispatch({
        type: ACTIONS.SET_STATUS,
        payload: {
          isLoading: false,
          message: response.data.message,
          success: true,
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
};

export const setStatusAction = (status) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_STATUS,
    payload: status,
  });
};
