import axios from "axios";
import { BACKEND_URL } from "@utils/contant";
import { deleteProduct, setCategories, setCondition, setFieldConditions, setProducts, setSelected, setStatus } from "@contexts/reducers/admin/ProductAdminReducer";

export const loadCategoriesAction = () => async (dispatch) => {
  await axios
    .get(`${BACKEND_URL}/categories`, {
      params: {
        size: 100,
      },
    })
    .then((response) => {
      dispatch(setCategories(response.data.data.content));
    })
    .catch((error) => {
      handleError(error)(dispatch);
    });

}

export const loadProductAction = (conditions) => async (dispatch) => {
  await axios
    .get(`${BACKEND_URL}/products`, {
      params: {
        ...conditions,
      },
    })
    .then((response) => {
      dispatch(setProducts(response.data.data));
    })
    .catch((error) => {
      handleError(error)(dispatch);
    });
};


export const setStatusAction = (status) => (dispatch) => {
  dispatch(setStatus(status));
};


export const setFieldConditionAction = ({ field, value }) =>
  (dispatch) => {
    dispatch(setFieldConditions({field, value}));
};

export const setConditionAction = (conditions) => (dispatch) => {
  dispatch(setCondition(conditions));
};

export const setSelectedAction = (selected) => (dispatch) => {
  dispatch(setSelected(selected));
};

export const deleteProductAction = (ids) => async (dispatch) => {
  await axios
    .delete(`${BACKEND_URL}/products`, {
      data: ids,
    })
    .then((response) => {
      dispatch(deleteProduct(ids));
    })
    .catch((error) => {
      handleError(error)(dispatch);
    });
};

const handleError = (error) => (dispatch) => {
  dispatch(setStatus({
    message: error.response.data.message,
    success: false,
    isLoading: false
  }));
}
