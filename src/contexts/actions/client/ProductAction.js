import axios from 'axios';
import { BACKEND_URL } from '@utils/contant';
import { filterProducts, initData } from '@contexts/reducers/client/ProductSlice';

export const initDataAction = () => async (dispatch) => {
  const payload = {};
  const status = {
    isLoading: true,
    message: "",
    success: true,
  }

  const loadPopularProductResult = await loadPopularProductAction();
  if(!loadPopularProductResult.status.success) {
    status.success = false;
    status.message += loadPopularProductResult.status.message;
  } else {
    payload.popular_products = loadPopularProductResult.data;
  }

  payload.status = status;
  dispatch(initData(payload));
} 

export const fileterProductAction = (conditions) => async (dispatch) => {
  const payload = {};
  const status = {
    isLoading: true,
    message: "",
    success: true,
  }

  const loadProductResult = await loadProductAction(conditions);
  if(!loadProductResult.status.success) {
    status.success = false;
    status.message += loadProductResult.status.message;
  } else {
    payload.products = loadProductResult.data;
  }

  payload.status = status;
  payload.conditions = conditions;
  dispatch(filterProducts(payload));
}

const loadProductAction = async (conditions) => {
  const result = {
    data: null,
    status: {
      message: '',
      success: true
    }
  }

  await axios.get(`${BACKEND_URL}/products`, {
    params: {...conditions, OR_status: 1}
  }).then(response => {
    result.data = response.data.data
  }).catch(error => {
    result.status = {
      message: error.response.data.message,
      success: false
    }
  });
  
  return result;
}

const loadPopularProductAction = async () => {
  const result = {
    data: null,
    status: {
      message: '',
      success: true
    }
  }

  await axios.get(`${BACKEND_URL}/products`, {
    params: { sort: 'rating__desc', OR_status: 1, size: 5 }
  }).then(response => {
    result.data = response.data.data
  }).catch(error => {
    result.status = {
      message: error.response.data.message,
      success: false
    }
  });
  
  return result;
}