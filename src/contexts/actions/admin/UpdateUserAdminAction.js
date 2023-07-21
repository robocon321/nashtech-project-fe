import axios from "axios";
import { BACKEND_URL } from "@utils/contant";
import { resetAllField, setField, setStatus, setUser } from "@contexts/reducers/admin/UpdateUserAdminReducer";

export const loadUserAction = (id) => async dispatch => {
  await axios.get(`${BACKEND_URL}/users/${id}`)
  .then((response) => {
    dispatch(setUser({
      ...response.data.data,
      birthday: response.data.data.birthday ? response.data.data.birthday.substring(0, 10) : ''
    }));
  }).catch(error => {
    handleError(error)(dispatch);
  });  
}

export const submitAction = (user) => async (dispatch) => {

  await axios.put(`${BACKEND_URL}/users`, user)
  .then((response) => {
    dispatch(setStatus({
      isLoading: false,
      message: response.data.message,
      success: response.data.success
    }));
  }).catch(error => {
    handleError(error)(dispatch);
  });
}

export const resetAllFieldAction = () => dispatch => {
  dispatch(resetAllField());
}

export const setFieldAction = ({field, value}) => dispatch => {
  dispatch(setField({field, value}));
}

export const setStatusAction = (status) => (dispatch) => {
  dispatch(setStatus(status));
};

const handleError = (error) => (dispatch) => {
  dispatch(setStatus({
    message: error.response.data.message,
    success: false,
    isLoading: false
  }));
}
