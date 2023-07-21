import axios from 'axios';
import { BACKEND_URL } from '@utils/contant';
import { changeField, setStatus } from '@contexts/reducers/auth/SignUpReducer';

export const changeFieldAction = (field, value) => dispatch => {
  dispatch(changeField({field, value}));
}

export const setStatusAction = (status) => dispatch => {
  dispatch(setStatus(status));
}

export const signUpAction = (user) => async (dispatch) => {
  await axios.post(`${BACKEND_URL}/sign-up`, {...user})
  .then((response) => {
    dispatch(setStatus({
      isLoading: false,
      message: response.data.message,
      success: response.data.success
    }));
  }).catch(error => {
    dispatch(setStatus({
      isLoading: false,
      message: error.response.data.message,
      success: false
    }));
  });
}
