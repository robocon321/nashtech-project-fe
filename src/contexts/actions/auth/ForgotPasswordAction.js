import axios from 'axios';
import { BACKEND_URL } from '@utils/contant';
import { setEmail, setStatus } from '@contexts/reducers/auth/ForgotPasswordReducer';

export const ACTIONS = {
  SET_EMAIL: 'SET_EMAIL',
  SET_STATUS: 'SET_STATUS',
}

export const submitAction = (email) => async dispatch => {

  await axios.post(`${BACKEND_URL}/forgot-password`, {
    email
  }).then(response => {
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
  })
}

export const setEmailAction = (email) => dispatch => {
  dispatch(setEmail(email));
}

export const setStatusAction = (status) => dispatch => {
  dispatch(setStatus(status));
}