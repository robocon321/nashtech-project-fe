import axios from 'axios';
import { BACKEND_URL } from '../../../utils/contant';

export const ACTIONS = {
  SET_FEATURED_PRODUCT: 'SET_FEATURED_PRODUCT',
  SET_BESTSELLER_PRODUCT: 'SET_BESTSELLER_PRODUCT',
  SET_NEWEST_PRODUCT: 'SET_NEWEST_PRODUCT',
  SET_PHONE_COMPUTER_PRODUCT: 'SET_PHONE_COMPUTER_PRODUCT',
  SET_TV_CAMERA_PRODUCT: 'SET_TV_CAMERA_PRODUCT',
  SET_STATUS: 'SET_STATUS',
  SET_LOADING: 'SET_LOADING',
  SET_MESSAGE: 'SET_MESSAGE',
  SET_SUCCESS: 'SET_SUCCESS'
}

export const setFeaturedProductAction = () => async dispatch => {
  await axios.get(`${BACKEND_URL}/products`, {
    params: {
      size: 10,
      sort: 'rating__desc',
      AND_status: 1
    }
  }).then(response => {
    dispatch({
      type: ACTIONS.SET_FEATURED_PRODUCT,
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

export const setBestSellerProductAction = () => async dispatch => {
  await axios.get(`${BACKEND_URL}/products`, {
    params: {
      size: 10,
      sort: 'order__desc',
      AND_status: 1
    }
  }).then(response => {
    dispatch({
      type: ACTIONS.SET_BESTSELLER_PRODUCT,
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

export const setNewestProductAction = () => async dispatch => {
  await axios.get(`${BACKEND_URL}/products`, {
    params: {
      size: 10,
      sort: 'modTime__desc',
      AND_status: 1
    }
  }).then(response => {
    dispatch({
      type: ACTIONS.SET_NEWEST_PRODUCT,
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

export const setPhoneComputerProductAction = () => async dispatch => {
  await axios.get(`${BACKEND_URL}/products`, {
    params: {
      size: 10,
      'IN_categories.id': "1,2,3,4,5,6,7,8",
      AND_status: 1
    }
  }).then(response => {
    dispatch({
      type: ACTIONS.SET_PHONE_COMPUTER_PRODUCT,
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

export const setTvCameraProductAction = () => async dispatch => {
  await axios.get(`${BACKEND_URL}/products`, {
    params: {
      size: 10,
      'IN_categories.id': "11,12,13,14,15,16,17,18",
      AND_status: 1
    }
  }).then(response => {
    dispatch({
      type: ACTIONS.SET_TV_CAMERA_PRODUCT,
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