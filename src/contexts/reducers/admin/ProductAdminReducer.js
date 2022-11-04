import { ACTIONS } from "../../actions/admin/ProductAdminAction";

const initState = {
  status: {
    isLoading: true,
    message: '',
    success: true
  },
  products: null,
  conditions: {
    page: 0,
    size: 10,
    sort: 'id__asc'
  },
  selected: [],
  categories: []
}

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_PRODUCTS:
      state = { ...state, products: payload };
      break;
    case ACTIONS.SET_STATUS:
      state = { ...state, status: payload };
      break;
    case ACTIONS.SET_CONDITIONS:
      state = { ...state, conditions: payload};
      break;
    case ACTIONS.SET_FIELD_CONDITION:
      state = { ...state, conditions: {
        ...state.conditions,
        [payload.field]: payload.value
      }};
      break;
    case ACTIONS.SET_SELECTED:
      state = { ...state, selected: payload};
      break;
    case ACTIONS.DELETE_PRODUCT: 
    // state.products.content = state.products.content.filter(item => !payload.includes(item.id));

      state.products.content.forEach(item => {
        if(payload.includes(item.id)) {
          item.status = 0
        }
      })
      break;
    case ACTIONS.SET_CATEGORIES:
      state = { ...state, categories: payload};
      break;
    default:
      break;
  }
  return {...state};
};

export default reducer;
