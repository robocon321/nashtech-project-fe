import { ACTIONS } from "../../actions/admin/CategoryAdminAction";
import { convertToSlug } from "../../../utils/convert";

const initState = {
  category: {},
  status: {
    isLoading: false,
    message: '',
    success: false
  },
  categories: null,
  conditions: {
    page: 0,
    size: 10,
    sort: 'id__asc'
  },
  selected: []
}

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_CATEGORIES:
      state = { ...state, categories: payload };
      break;
    case ACTIONS.CHANGE_FIELD:
      if(payload.field === 'name') {
        state = { ...state, category: {
          ...state.category,
          name: payload.value,
          slug: convertToSlug(payload.value)
        }};
  
      } else {
        state = { ...state, category: {
          ...state.category,
          [payload.field]: payload.value
        }};  
      }
      break;
    case ACTIONS.SET_STATUS:
      state = { ...state, status: payload };
      break;
    case ACTIONS.SET_CATEGORY:      
      state = { ...state, category: payload };
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
    case ACTIONS.RESET_CATEGORY:
      state = { ...state, category: {
        id: state.category.id
      }};
      break;
    case ACTIONS.DELETE_CATEGORY: 
      state.categories.content.forEach(item => {
        if(payload.includes(item.id)) {
          item.visibleType = 'INVISIBLE'
        }
      })
      break;
    case ACTIONS.UPDATE_CATEGORY:
      console.log(payload);
      state.categories.content = state.categories.content.map(item =>  item.id === payload.id ? payload : item);
      break;
    default:
      break;
  }
  return {...state};
};

export default reducer;
