import axios from 'axios';
import { BACKEND_URL } from '@utils/contant';

export const ACTIONS = {
  CHANGE_FIELD: 'CHANGE_FIELD',
  SET_STATUS: 'SET_STATUS'
}

export const changeFieldAction = (field, value) => dispatch => {
  dispatch({
    type: ACTIONS.CHANGE_FIELD,
    payload: {
      field, value
    }
  })
}

export const setStatusAction = (status) => dispatch => {
  dispatch({
    type: ACTIONS.SET_STATUS,
    payload: status
  })
}

export const signUpAction = (user) => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_STATUS,
    payload: {
      isLoading: true,
      message: '',
      success: false
    }
  })

  await axios.post(`${BACKEND_URL}/sign-up`, {...user})
  .then((response) => {
    dispatch({
      type: ACTIONS.SET_STATUS,
      payload: {
        isLoading: false,
        message: response.data.message,
        success: response.data.success
      }
    })
  }).catch(error => {
    dispatch({
      type: ACTIONS.SET_STATUS,
      payload: {
        isLoading: false,
        message: error.response.data.message,
        success: false
      }
    })
  });
}
