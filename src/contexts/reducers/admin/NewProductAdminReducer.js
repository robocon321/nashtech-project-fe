import { ACTIONS } from "@contexts/actions/admin/NewProductAdminAction";
import { convertToSlug } from "@utils/convert";

const initState = {
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  categories: [],
  product: {}
};

const reducer = (state = initState, { type, payload }) => {
  switch(type) {
    case ACTIONS.CHANGE_FIELD:
      if(payload.field === 'name') {
        state = { ...state, product: {
          ...state.product,
          name: payload.value,
          slug: convertToSlug(payload.value)
        }};
  
      } else {
        state = { ...state, product: {
          ...state.product,
          [payload.field]: payload.value
        }};  
      }

      break;
    case ACTIONS.SET_STATUS:
      state = { ...state, status: payload};
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
