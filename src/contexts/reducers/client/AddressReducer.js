import { ACTIONS } from "@contexts/actions/client/AddressAction";

const initState = {
  contact: {},
  provinces: [],
  districts: [],
  wards: [],
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  isShowModal: false,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_CONTACTS:
      state = { ...state, contacts: payload};
      break;
    case ACTIONS.SET_FIELD_CONTACT:
      state = {
        ...state,
        contact: { ...state.contact, [payload.field]: payload.value },
      };
      break;
    case ACTIONS.SET_SHOW_MODAL:
      state = { ...state, isShowModal: payload };
      break;
    case ACTIONS.SET_PROVINCES:
      state = { ...state, provinces: payload };
      break;
    case ACTIONS.SET_DISTRICTS:
      state = { ...state, districts: payload };
      break;
    case ACTIONS.SET_WARDS:
      state = { ...state, wards: payload };
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
