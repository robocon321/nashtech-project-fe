import axios from 'axios';
import { setAuthToken } from '../../utils/authToken';
import { LOCAL_STORAGE_TOKEN, BACKEND_URL } from '../../utils/contant';

export const ACTIONS = {
  SET_USER: 'SET_USER',
  SET_STATUS: 'SET_STATUS'
}

export const loadAccountAction = () => async (dispatch) => {
  const token = localStorage[LOCAL_STORAGE_TOKEN];
  if(token) {
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
          success: error.response.data.success
        }
      })
    })
  
  } else {
    dispatch({
      type: ACTIONS.SET_STATUS,
      payload: {
        isLoading: false,
        message: '',
        success: true
      }
    })
  
  }
}

export const logoutAction = () => (dispatch) => {
  console.log(1);
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  dispatch({
    type: ACTIONS.SET_USER,
    payload: {}
  });
}
