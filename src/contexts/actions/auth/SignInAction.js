import axios from 'axios';
import { BACKEND_URL, LOCAL_STORAGE_TOKEN } from '@utils/contant';
import { setAuthToken } from '@utils/authToken';
import { changeField, setStatus, setUser } from '@contexts/reducers/auth/SignInReducer';

export const signInAction = (username, password) => async (dispatch) => {
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
      const payload = {};
      payload.user = response.data.data;
      payload.status = {
        isLoading: false,
        message: response.data.message,
        success: response.data.success
      }
      dispatch(setUser(payload));
    }).catch(error => {
      handleError(error)(dispatch);
    })
  })
  .catch(function (error) {
    handleError(error)(dispatch);
  });
}

export const changeFieldAction = (field, value) => (dispatch) => {
  dispatch(changeField({field, value}));
}

const handleError = (error) => (dispatch) => {
  dispatch(
      setStatus({message: error.response.data.message, success: false, isLoading: false})
  );
}