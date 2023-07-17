import axios from 'axios';
import { BACKEND_URL } from '@utils/contant';

export const ACTIONS = {
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_STATUS: 'SET_STATUS',
  SET_LOADING: 'SET_LOADING',
  SET_MESSAGE: 'SET_MESSAGE',
  SET_SUCCESS: 'SET_SUCCESS',
  SET_SEARCH: 'SET_SEARCH',
  SET_CART: 'SET_CART',
  ADD_CART_ITEM: 'ADD_CART_ITEM',
  DELETE_CART_ITEM: 'DELETE_CART_ITEM',
  UPDATE_CART_ITEM: 'UPDATE_CART_ITEM',
  SET_SHOW_MODAL: 'SET_SHOW_MODAL'
};

export const loadCartItemAction = () => async dispatch => {
  await axios.get(`${BACKEND_URL}/carts/cart_item/product`)
  .then(response => {
    dispatch({
      type: ACTIONS.SET_CART,
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

export const setSearchAction = (search) => dispatch => {
  dispatch({
    type: ACTIONS.SET_SEARCH,
    payload: search
  })
}

export const loadCategoryAction = () => async dispatch => {
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

export const saveCartItemAction = (cartItem) => async dispatch => {
  await axios.post(`${BACKEND_URL}/cart_items`, cartItem)
  .then(response => {
    dispatch({
      type: ACTIONS.ADD_CART_ITEM,
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

export const deleteCartItemAction = (ids) => async dispatch => {
  console.log(ids);
  await axios.delete(`${BACKEND_URL}/cart_items`, {data: ids})
  .then(response => {
    dispatch({
      type: ACTIONS.DELETE_CART_ITEM,
      payload: ids
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

export const updateCartItemAction = (cartItem) => async dispatch => {
  await axios.put(`${BACKEND_URL}/cart_items`, cartItem)
  .then(response => {
    dispatch({
      type: ACTIONS.UPDATE_CART_ITEM,
      payload: cartItem
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

export const setCartAction = (cart) => dispatch => {
  dispatch({
    type: ACTIONS.SET_CART,
    payload: {}
  })
} 

export const setShowModalAction = (isShow) => dispatch => {
  dispatch({
    type: ACTIONS.SET_SHOW_MODAL,
    payload: isShow
  })
}