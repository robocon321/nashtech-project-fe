import { ACTIONS } from "../../actions/auth/ForgotPasswordAction";

const initState = {
  email: '',
  status: {
    isLoading: true,
    message: '',
    success: true
  }
}

const reducer = (state = initState, {type, payload}) => {
  switch (type) {
    case ACTIONS.SET_EMAIL:
      state = { ...state, email: payload};
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