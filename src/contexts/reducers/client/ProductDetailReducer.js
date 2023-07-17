import { ACTIONS } from "@contexts/actions/client/ProductDetailAction";

const initState = {
  product: {},
  ratings: {},
  related_products: [],
  rating_conditions: {
    page: 0,
    size: 10,
    sort: 'createTime__desc'
  },
  status: {
    isLoading: true,
    message: '',
    success: true
  },
  rating_form: {
    star: 5,
    content: ''
  },
  open_modal: false
}

const reducer = (state = initState, {type, payload}) => {
  switch (type) {
    case ACTIONS.TOGGLE_MODAL:
      state = { ...state, open_modal: !state.open_modal}
      break;
    case ACTIONS.SET_RATING_FORM: 
      state = { ...state, rating_form: { ...state.rating_form, [payload.field]: payload.value}}
      break;
    case ACTIONS.SET_RELATED_PRODUCTS:
      state = { ...state, related_products: payload};
      break;
    case ACTIONS.SET_PRODUCT:
      state = { ...state, product: payload};
      break;
    case ACTIONS.SET_RATING_CONDITIONS:
      state = { ...state, rating_conditions: { ...state.rating_conditions, [payload.field]: payload.value}};
      break;
    case ACTIONS.SET_RATINGS:
      state = { ...state, ratings: payload};
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
  return { ...state}
}

export default reducer;