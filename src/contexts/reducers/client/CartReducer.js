import { ACTIONS } from "@contexts/actions/client/CartAction";

const initState = {
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  contacts: [],
  ship: 0,
  contactSelected: null
};


const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_CONTACT_SELECTED:
      state = { ...state, contactSelected: payload};
      break;
    case ACTIONS.SET_SHIPPING_PRICE:
      state = { ...state, ship: payload};      
      break;
    case ACTIONS.SET_CONTACTS:
      state = { ...state, contacts: payload};
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