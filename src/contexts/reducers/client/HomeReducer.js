import { ACTIONS } from "@contexts/actions/client/HomeAction";

const initState = {
  feature_products: [],
  best_seller_products: [],
  newest_products: [],
  phone_computer_products: [],
  tv_camera_products: [],
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_FEATURED_PRODUCT:
      state = { ...state, feature_products: payload };
      break;
    case ACTIONS.SET_BESTSELLER_PRODUCT:
      state = { ...state, best_seller_products: payload };
      break;
    case ACTIONS.SET_NEWEST_PRODUCT:
      state = { ...state, newest_products: payload };
      break;
    case ACTIONS.SET_PHONE_COMPUTER_PRODUCT:
      state = { ...state, phone_computer_products: payload };
      break;
    case ACTIONS.SET_TV_CAMERA_PRODUCT:
      state = { ...state, tv_camera_products: payload };
      break;
    case ACTIONS.SET_STATUS:
      state = { ...state, status: payload };
      break;
    case ACTIONS.SET_LOADING:
      state = { ...state, status: { ...state.status, isLoading: payload } };
      break;
    case ACTIONS.SET_MESSAGE:
      state = { ...state, status: { ...state.status, message: payload } };
      break;
    case ACTIONS.SET_SUCCESS:
      state = { ...state, status: { ...state.status, success: payload } };
      break;
    default:
      break;
  }

  return { ...state };
};

export default reducer;
