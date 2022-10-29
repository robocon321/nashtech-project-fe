import { ACTIONS } from "../../actions/admin/UpdateProductAction";
import { convertToSlug } from "../../../utils/convert";

const initState = {
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  categories: [],
  product: {},
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_PRODUCT:
      state = { ...state, product: {
        ...payload,
        thumbnail: null,
        gallery: null,
        categories: payload.categories.map(item => item.id)
      }};
      break;
    case ACTIONS.CHANGE_FIELD:
      if (payload.field === "name") {
        state = {
          ...state,
          product: {
            ...state.product,
            name: payload.value,
            slug: convertToSlug(payload.value),
          },
        };
      } else {
        state = {
          ...state,
          product: {
            ...state.product,
            [payload.field]: payload.value,
          },
        };
      }

      break;
    case ACTIONS.SET_STATUS:
      state = { ...state, status: payload };
      break;
    case ACTIONS.SET_CATEGORIES:
      state = { ...state, categories: payload };
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
