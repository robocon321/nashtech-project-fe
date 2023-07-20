import axios from 'axios';
import { setAuthToken } from '@utils/authToken';
import { LOCAL_STORAGE_TOKEN, BACKEND_URL } from '@utils/contant';
import { initData, removeUser } from '@contexts/reducers/AppSlice';

export const initDataAction = () => async (dispatch) => {
  const payload = {};
  const status = {
    isLoading: false,
    message: "",
    success: true,
  }

  const loadAccountResult = await loadAccountAction();

  if(!loadAccountResult.status.success) {
    status.success = false;
    status.message += loadAccountResult.status.message;
  } else {
    payload.user = loadAccountResult.data;
  }

  payload.status = status;
  dispatch(initData(payload));

}

const loadAccountAction = async () => {
  const result = {
    data: null,
    status: {
      message: '',
      success: true
    }
  }

  const token = localStorage[LOCAL_STORAGE_TOKEN];
  if(token) {
    setAuthToken(token);
    await axios.get(`${BACKEND_URL}/sign-in`)
    .then(response => {
      result.data = response.data.data;
    }).catch(error => {
      result.status = {
        message: error.response.data.message,
        success: false
      }
    })
  }

  return result;
}

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  dispatch(removeUser({}));
}
