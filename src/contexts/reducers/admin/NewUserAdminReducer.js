import { ACTIONS } from "../../actions/admin/NewUserAdminAction";

const initState = {
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  user: {}
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTIONS.RESET_ALL_FIELD:
      state = { ...state, user: {}};
      break;
    case ACTIONS.SET_FIELD:
      state = { ...state, user: {
        ...state.user,
        [payload.field]: payload.value}
      };
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
