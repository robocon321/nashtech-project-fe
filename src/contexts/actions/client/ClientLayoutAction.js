import axios from 'axios';
import { BACKEND_URL } from '../../../utils/contant';

export const ACTIONS = {
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_STATUS: 'SET_STATUS',
  SET_LOADING: 'SET_LOADING',
  SET_MESSAGE: 'SET_MESSAGE',
  SET_SUCCESS: 'SET_SUCCESS',
  SET_SEARCH: 'SET_SEARCH'
}

export const setSearchAction = (search) => dispatch => {
  dispatch({
    type: ACTIONS.SET_SEARCH,
    payload: search
  })
}

export const setCategoryAction = () => async dispatch => {
  await axios.get(`${BACKEND_URL}/categories`, {
    params: {
      size: 100,
      AND_status: 1
    }
  }).then(response => {
    dispatch({
      type: ACTIONS.SET_CATEGORIES,
      payload: response.data.data.content
    })
  }).catch(error => {
    dispatch({
      type: ACTIONS.SET_MESSAGE,
      payload: error.response.data.message
    });
    dispatch({
      type: ACTIONS.SET_SUCCESS,
      payload: false
    })
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