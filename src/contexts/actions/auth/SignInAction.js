import axios from 'axios';
import { BACKEND_URL, LOCAL_STORAGE_TOKEN } from '../../../utils/contant';
import { setAuthToken } from '../../../utils/authToken';

export const ACTIONS = {
  CHANGE_FIELD: 'CHANGE_FIELD',
  SET_USER: 'SET_USER',
  SET_STATUS: 'SET_STATUS'
}

export const signInAction = (username, password) => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_STATUS,
    payload: {
      isLoading: true,
      message: '',
      success: false
    }
  })

  // sign in
  await axios.post(`${BACKEND_URL}/sign-in`, {
    username,
    password
  })
  .then(async (response) => {
    const token = response.data.data;
    localStorage[LOCAL_STORAGE_TOKEN] = token;

    // get user info
    setAuthToken(token);

    await axios.get(`${BACKEND_URL}/sign-in`)
    .then(response => {
      dispatch({
        type: ACTIONS.SET_USER,
        payload: response.data.data
      });
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
      })
  })
  .catch(function (error) {
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

export const changeFieldAction = (field, value) => (dispatch) => {
  dispatch({
    type: ACTIONS.CHANGE_FIELD,
    payload: {
      field,
      value
    }
  })
}