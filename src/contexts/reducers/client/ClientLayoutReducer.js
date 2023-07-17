import { ACTIONS } from "@contexts/actions/client/ClientLayoutAction";

const initState = {
  categories: [],
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  cart: {},
  isShowModal: false
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_SHOW_MODAL:
      state = { ...state, isShowModal: payload};
      break;
    case ACTIONS.UPDATE_CART_ITEM:      
      state = { ...state, cart: { ...state.cart, cartItems: state.cart.cartItems.map(item => {
        if(item.id === payload.id) return payload;
        else return item;
      })}};
      break;
    case ACTIONS.ADD_CART_ITEM:
      state = { ...state, cart: {...state.cart, cartItems: [...state.cart.cartItems, payload]}}
      break;
    case ACTIONS.DELETE_CART_ITEM:
      state = { ...state, cart: {...state.cart, cartItems: state.cart.cartItems.filter(item => !payload.includes(item.id))}}
      break;
    case ACTIONS.SET_CART:
      state = { ...state, cart: payload};
      break;
    case ACTIONS.SET_SEARCH:
      state = { ...state, search: payload};
      break;
    case ACTIONS.SET_CATEGORIES:
      state = { ...state, categories: payload };
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
