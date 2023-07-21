import axios from "axios";
import { BACKEND_URL } from "@utils/contant";
import { changeField, initData, setStatus } from "@contexts/reducers/admin/UpdateProductReducer";

export const initDataAction = (slug) => async (dispatch) => {
  const payload = {};
  const status = {
    isLoading: true,
    message: "",
    success: true,
  }

  const loadCategoriesResult = await loadCategoriesAction();
  if(!loadCategoriesResult.status.success) {
    status.success = false;
    status.message += loadCategoriesResult.status.message;
  } else {
    payload.categories = loadCategoriesResult.data;
  }

  const loadProductResult = await loadProductAction(slug);
  if(!loadProductResult.status.success) {
    status.success = false;
    status.message += loadProductResult.status.message;
  } else {
    payload.product = loadProductResult.data;
  }

  payload.status = status;
  dispatch(initData(payload));

}

export const changeFieldAction = ({ field, value }) =>
  (dispatch) => {
    dispatch(changeField({field, value}));
  };

export const submitAction = (product) => async (dispatch) => {
  const formData =  new FormData();

  for (var key in product ) {
    if(key == 'thumbnail' && product.thumbnail == null) continue;
    if(key == 'gallery') {
      if(product.gallery == null) continue;
      for(var i = 0; i < product.gallery.length; i ++) {
        formData.append('gallery', product.gallery[i]);
      }
    }else {
      formData.append(key, product[key]);
    }
  }


  await axios
    .put(`${BACKEND_URL}/products`, formData)
    .then((response) => {
      dispatch(setStatus({
        isLoading: false,
        message: response.data.message,
        success: true
      }))
    })
    .catch((error) => {
      handleError(error)(dispatch);
    });
};

export const setStatusAction = (status) => (dispatch) => {
  dispatch(setStatus(status));
};

const handleError = (error) => (dispatch) => {
  dispatch(setStatus({
    message: error.response.data.message,
    success: false,
    isLoading: false
  }));
}

const loadCategoriesAction = async () => {
  const result = {
    data: null,
    status: {
      message: '',
      success: true
    }
  };

  await axios
    .get(`${BACKEND_URL}/categories`, {
      params: {
        size: 100,
        AND_status: 1
      },
    })
    .then((response) => {
      result.data = response.data.data.content;
    })
    .catch((error) => {
      result.status = {
        message: error.response.data.message,
        success: false
      }
    });
  
    return result;
};

const loadProductAction = async (slug) => {
  const result = {
    data: null,
    status: {
      message: '',
      success: true
    }
  };

  await axios.get(`${BACKEND_URL}/products/category/${slug}`)
  .then((response) => {
    result.data = response.data.data;
  }).catch(error => {
    result.status = {
      message: error.response.data.message,
      success: false
    };
  });

  return result;
}