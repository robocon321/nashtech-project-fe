import axios from 'axios';
import { BACKEND_URL } from '../../../utils/contant';

export const ACTIONS = {
  SET_PRODUCT: 'SET_PRODUCT',
  SET_RATING: 'SET_RATING',
  SET_RATING_CONDITIONS: 'SET_RATING_CONDITIONS',
  SET_RELATED_PRODUCTS: 'SET_RELATED_PRODUCTS',
  SET_STATUS: 'SET_STATUS',
  SET_LOADING: 'SET_LOADING',
  SET_MESSAGE: 'SET_MESSAGE',
  SET_SUCCESS: 'SET_SUCCESS'
}

export const loadProductAction = (slug) => async dispatch => {
  await axios.get(`${BACKEND_URL}/products/category/product_image/${slug}`)
  .then(response => {
    dispatch({
      type: ACTIONS.SET_PRODUCT,
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

export const loadRatingAction = (conditions, productId) => async dispatch => {
  await axios.get(`${BACKEND_URL}/ratings/user`, {
    params: {
      ...conditions,
      'OR_product.id': productId
    }
  })
  .then(response => {
    dispatch({
      type: ACTIONS.SET_RATING,
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

export const loadRelatedProductAction = (categoryIds) => async dispatch => {
  await axios.get(`${BACKEND_URL}/products`, {
    params: {
      size: 10,
      'IN_categories.id': categoryIds.join(),
      AND_status: 1
    }
  }).then(response => {
    dispatch({
      type: ACTIONS.SET_RELATED_PRODUCTS,
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