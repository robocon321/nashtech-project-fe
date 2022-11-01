import { ACTIONS } from "../../actions/admin/UserAdminAction";

const initState = {
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  users: null,
  conditions: {
    page: 0,
    size: 10,
    sort: "id__asc",
  },
  selected: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_USERS:
      state = { ...state, users: payload };
      break;

    case ACTIONS.SET_CONDITIONS:
      state = { ...state, conditions: payload };
      break;
    case ACTIONS.SET_FIELD_CONDITION:
      state = {
        ...state,
        conditions: {
          ...state.conditions,
          [payload.field]: payload.value,
        },
      };
      break;
    case ACTIONS.SET_SELECTED:
      state = { ...state, selected: payload };
      break;
    case ACTIONS.DELETE_USER:
      state.users.content.forEach((item) => {
        if (payload.includes(item.id)) {
          item.status = 0;
        }
      });
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
