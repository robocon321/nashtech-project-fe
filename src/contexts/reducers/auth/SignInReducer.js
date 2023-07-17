import { ACTIONS } from "@contexts/actions/auth/SignInAction";

const initState = {
  username: "",
  password: "",
  user: {},
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTIONS.CHANGE_FIELD:
      state = {
        ...state,
        [payload.field]: payload.value,
      };
      break;
    case ACTIONS.SET_USER:
      state = { ...state, user: { ...payload } };
      break;
    case ACTIONS.SET_STATUS:
      state = { ...state, status: { ...payload } };
      break;
    default:
      break;
  }
  return { ...state };
};

export default reducer;
