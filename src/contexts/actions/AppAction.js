import axios from 'axios';
import { setAuthToken } from '@utils/authToken';
import { LOCAL_STORAGE_TOKEN, BACKEND_URL } from '@utils/contant';
import { initData, removeUser } from '@contexts/reducers/AppSlice';

export const loadAccountAction = () => async (dispatch) => {
  const payload = {};

  const token = localStorage[LOCAL_STORAGE_TOKEN];
  if(token) {
    setAuthToken(token);
    await axios.get(`${BACKEND_URL}/sign-in`)
    .then(response => {
      payload.user = response.data.data;
      payload.status = {
        isLoading: false,
        message: "",
        success: true,    
      }
    }).catch(error => {
      payload.status = {
        isLoading: false,
        message: error.response.data.message,
        success: false
      }
    })
  } else {
    payload.status = {
      isLoading: false,
      message: "",
      success: true,    
    }  
  }

  dispatch(initData(payload));
}

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  dispatch(removeUser({}));
}
