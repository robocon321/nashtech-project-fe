import axios from "axios";
import { BACKEND_URL } from "../../../utils/contant";

export const ACTIONS = {
  CHANGE_FIELD: "CHANGE_FIELD",
  SET_CATEGORIES: "SET_CATEGORIES",
  SET_STATUS: "SET_STATUS",
  SET_PRODUCT: "SET_PRODUCT",
  SET_LOADING: "SET_LOADING",
  SET_MESSAGE: "SET_MESSAGE",
  SET_SUCCESS: "SET_SUCCESS"
};

export const changeFieldAction = ({ field, value }) =>
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
      setMessageAction(error.response.data.message)(dispatch);
      setSuccessAction(false)(dispatch);
    });
};

export const loadProductAction = (slug) => async (dispatch) => {
  await axios.get(`${BACKEND_URL}/products/category/${slug}`)
  .then((response) => {
    dispatch({
      type: ACTIONS.SET_PRODUCT,
      payload: response.data.data
    });
  }).catch(error => {
    setMessageAction(error.response.data.message)(dispatch);
    setSuccessAction(false)(dispatch);
  })
}

export const submitAction = (product) => async (dispatch) => {
  // const config = {
  //   headers: {
  //     "content-type": "multipart/form-data",
  //   },
  // };

  const formData =  new FormData();

  for (var key in product ) {
    if(key == 'thumbnail' && product.thumbnail == null) continue;
    if(key == 'gallery') {
      if(product.gallery == null) continue;
      for(var i = 0; i < product.gallery.length; i ++) {
        formData.append('gallery', product.gallery[i]);
      }
    }else {
      formData.append(key, product[key]);
    }
  }


  await axios
    .put(`${BACKEND_URL}/products`, formData)
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

export const setLoadingAction = (isLoading) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading
  })
}

export const setMessageAction = (message) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_MESSAGE,
    payload: message
  })
}

export const setSuccessAction = (success) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_SUCCESS,
    payload: success
  })
}