import axios from 'axios';
import { BACKEND_URL } from '@utils/contant';
import { initData } from '@contexts/reducers/client/HomeSlice';

export const initDataAction = () => async (dispatch) => {
  const payload = {};
  const status = {
    isLoading: true,
    message: "",
    success: true,
  }
  const loadFeatureProduct = await setFeaturedProductAction();
  if(!loadFeatureProduct.status.success) {
    status.success = false;
    status.message += loadFeatureProduct.status.message;
  } else {
    payload.feature_products = loadFeatureProduct.data;
  }

  const loadBestSellerProduct = await setBestSellerProductAction();
  if(!loadBestSellerProduct.status.success) {
    status.success = false;
    status.message += loadBestSellerProduct.status.message;
  } else {
    payload.best_seller_products = loadBestSellerProduct.data;
  }

  const loadNewestProduct = await setNewestProductAction();
  if(!loadNewestProduct.status.success) {
    status.success = false;
    status.message += loadNewestProduct.status.message;
  } else {
    payload.newest_products = loadNewestProduct.data;
  }

  const loadPhoneComputerProduct = await setPhoneComputerProductAction();
  if(!loadPhoneComputerProduct.status.success) {
    status.success = false;
    status.message += loadPhoneComputerProduct.status.message;
  } else {
    payload.phone_computer_products = loadPhoneComputerProduct.data;
  }

  const loadTvCameraProduct = await setTvCameraProductAction();
  if(!loadTvCameraProduct.status.success) {
    status.success = false;
    status.message += loadTvCameraProduct.status.message;
  } else {
    payload.tv_camera_products = loadTvCameraProduct.data;
  }

  payload.status = status;
  dispatch(initData(payload));
} 

const setFeaturedProductAction = async () => {
  const result = {
    data: null,
    status: {
      message: '',
      success: true
    }
  }

  await axios.get(`${BACKEND_URL}/products`, {
    params: {
      size: 10,
      sort: 'rating__desc',
      AND_status: 1
    }
  }).then(response => {
    result.data = response.data.data.content;
  }).catch(error => {
    result.status = {
      message: error.response.data.message,
      success: false
    }
  });
  
  return result;
}

const setBestSellerProductAction = async () => {
  const result = {
    data: null,
    status: {
      message: '',
      success: true
    }
  }

  await axios.get(`${BACKEND_URL}/products`, {
    params: {
      size: 10,
      sort: 'order__desc',
      AND_status: 1
    }
  }).then(response => {
    result.data = response.data.data.content;
  }).catch(error => {
    result.status = {
      message: error.response.data.message,
      success: false
    }
  });

  return result;
}

const setNewestProductAction = async () => {
  const result = {
    data: null,
    status: {
      message: '',
      success: true
    }
  }

  await axios.get(`${BACKEND_URL}/products`, {
    params: {
      size: 10,
      sort: 'modTime__desc',
      AND_status: 1
    }
  }).then(response => {
    result.data = response.data.data.content;
  }).catch(error => {
    result.status = {
      message: error.response.data.message,
      success: false
    }
  });

  return result;
}

const setPhoneComputerProductAction = async () => {
  const result = {
    data: null,
    status: {
      message: '',
      success: true
    }
  }

  await axios.get(`${BACKEND_URL}/products`, {
    params: {
      size: 10,
      'IN_categories.id': "1,2,3,4,5,6,7,8",
      AND_status: 1
    }
  }).then(response => {
    result.data = response.data.data.content;
  }).catch(error => {
    result.status = {
      message: error.response.data.message,
      success: false
    }
  });

  return result;
}

const setTvCameraProductAction = async () => {
  const result = {
    data: null,
    status: {
      message: '',
      success: true
    }
  }

  await axios.get(`${BACKEND_URL}/products`, {
    params: {
      size: 10,
      'IN_categories.id': "11,12,13,14,15,16,17,18",
      AND_status: 1
    }
  }).then(response => {
    result.data = response.data.data.content;
  }).catch(error => {
    result.status = {
      message: error.response.data.message,
      success: false
    }
  });

  return result;
}
