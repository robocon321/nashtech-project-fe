import axios from "axios";
import { BACKEND_URL } from "@utils/contant";
import { resetAllField, setField, setStatus } from "@contexts/reducers/admin/NewUserAdminReducer";

export const submitAction = (user) => async (dispatch) => {

  await axios.post(`${BACKEND_URL}/users`, user)
  .then((response) => {
    dispatch(setStatus({
      isLoading: false,
      message: response.data.message,
      success: response.data.success
    }))
  }).catch(error => {
    dispatch(setStatus({
      isLoading: false,
      message: error.response.data.message,
      success: false
    }));
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
