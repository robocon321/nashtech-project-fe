import axios from 'axios';
import { BACKEND_URL } from '@utils/contant';

export const ACTIONS = {
  SET_EMAIL: 'SET_EMAIL',
  SET_STATUS: 'SET_STATUS',
  SET_LOADING: 'SET_LOADING',
  SET_MESSAGE: 'SET_MESSAGE',
  SET_SUCCESS: 'SET_SUCCESS',
}

export const submitAction = (email) => async dispatch => {
  console.log(email);
  await axios.post(`${BACKEND_URL}/forgot-password`, {
    email
  }).then(response => {
    setStatusAction({
      isLoading: false,
      message: response.data.message,
      success: response.data.success
    })(dispatch)
  }).catch(error => {
    setStatusAction({
      isLoading: false,
      message: error.response.data.message,
      success: false
    })(dispatch)
  })
}

export const setEmailAction = (email) => dispatch => {
  dispatch({
    type: ACTIONS.SET_EMAIL,
    payload: email
  })
}

export const setStatusAction = (status) => dispatch => {
  dispatch({
    type: ACTIONS.SET_STATUS,
    payload: status
  })
}

export const setLoadingAction = (isLoading) => dispatch => {
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading
  })
}

export const setMessageAction = (message) => dispatch => {
  dispatch({
    type: ACTIONS.SET_MESSAGE,
    payload: message
  })
}

export const setSuccessAction = (success) => dispatch => {
  dispatch({
    type: ACTIONS.SET_SUCCESS,
    payload: success
  })
}

export const setConditionAction = (conditions) => dispatch => {
  dispatch({
    type: ACTIONS.SET_CONDITIONS,
    payload: conditions
  })
}