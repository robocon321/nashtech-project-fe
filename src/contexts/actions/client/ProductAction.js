import axios from 'axios';
import { BACKEND_URL } from '@utils/contant';

export const ACTIONS = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_FIELD_CONDITION: 'SET_FIELD_CONDITION',
  SET_POPULAR_PRODUCTS: 'POPULAR_PRODUCTS',
  SET_STATUS: 'SET_STATUS',
  SET_LOADING: 'SET_LOADING',
  SET_MESSAGE: 'SET_MESSAGE',
  SET_SUCCESS: 'SET_SUCCESS',
  SET_CONDITIONS: 'SET_CONDITIONS'
}

export const loadProductAction = (conditions) => async dispatch => {
  await axios.get(`${BACKEND_URL}/products`, {
    params: {...conditions, OR_status: 1}
  }).then(response => {
    dispatch({
      type: ACTIONS.SET_PRODUCTS,
      payload: response.data.data
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

export const loadPopularProductAction = () => async dispatch => {
  await axios.get(`${BACKEND_URL}/products`, {
    params: { sort: 'rating__desc', OR_status: 1, size: 5 }
  }).then(response => {
    dispatch({
      type: ACTIONS.SET_POPULAR_PRODUCTS,
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

export const setFieldAction = ({field, value}) => async dispatch => {
  dispatch({
    type: ACTIONS.SET_FIELD_CONDITION,
    payload: {field, value}
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