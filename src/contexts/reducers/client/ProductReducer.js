import { ACTIONS } from "../../actions/client/ProductAction";

const initState = {
  products: {},
  status: {
    isLoading: true,
    message: '',
    success: true
  },
  conditions: {
    page: 0,
    size: 12,
    sort: 'createTime__desc'
  },
  popular_products: []
}

const reducer = (state = initState, {type, payload}) => {
  switch(type) {
    case ACTIONS.SET_CONDITIONS:
      state = { ...state, conditions: {...state.conditions, ...payload} };
      break;
    case ACTIONS.SET_POPULAR_PRODUCTS:
      state = { ...state, popular_products: payload};
      break;
    case ACTIONS.SET_PRODUCTS:
      state = { ...state, products: payload}
      break;
    case ACTIONS.SET_FIELD_CONDITION:
      state = { ...state, conditions: { ...state.conditions, [payload.field]: payload.value}}
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
  return { ...state }
}

export default reducer;