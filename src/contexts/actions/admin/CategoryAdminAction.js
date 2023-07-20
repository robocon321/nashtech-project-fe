import { changeField, deleteCategory, resetCategory, setCategories, setCategory, setConditions, setFieldCondition, setSelected, setStatus, updateCategory } from "@contexts/reducers/admin/CategoryAdminReducer";
import { BACKEND_URL } from "@utils/contant";
import axios from "axios";

export const changeFieldAction = ({ field, value }) => (dispatch) => {
    dispatch(changeField({field, value}));
};

export const setStatusAction = (status) => (dispatch) => {
  dispatch(setStatus(status));
};

export const setCategoryAction = (category) => (dispatch) => {
  dispatch(setCategory(category));
};

export const setFieldConditionAction = ({ field, value }) =>
  (dispatch) => {
    dispatch(setFieldCondition({field, value}))
};

export const setConditionsAction = (conditions) => (dispatch) => {
  dispatch(setConditions(conditions));
};

export const setSelectedAction = (selected) => (dispatch) => {
  dispatch(setSelected(selected));
};

export const resetCategoryAction = () => (dispatch) => {
  dispatch(resetCategory());
};

export const deleteCategoryAction = (ids) => async (dispatch) => {
  await axios
    .delete(`${BACKEND_URL}/categories`, {
      data: ids,
    })
    .then((response) => {
      dispatch(deleteCategory(ids));
    })
    .catch((error) => {
      handleError(error)(dispatch);
    });
};

export const submitFormAction = (category) => async (dispatch) => {
  if (category.id == null) {
    await axios
      .post(`${BACKEND_URL}/categories`, category)
      .then((response) => {
        dispatch(setStatus({
          isLoading: false,
          message: response.data.message,
          success: response.data.success,
        }));
      })
      .catch((error) => {
        handleError(error)(dispatch);
      });
  } else {
    await axios
      .put(`${BACKEND_URL}/categories`, category)
      .then((response) => {        
        dispatch(updateCategory(category));
      })
      .catch((error) => {
        handleError(error)(dispatch);
      });
  }
};

export const loadCategoryAction = (conditions) => async dispatch => {
  const payload = {
    status: {
      isLoading: false,
      message: "",
      success: true,
    }
  };

  await axios
    .get(`${BACKEND_URL}/categories`, {
      params: {
        ...conditions,
      },
    })
    .then((response) => {
      payload.categories = response.data.data;
      dispatch(setCategories(payload));
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
