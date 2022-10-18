import { ACTIONS } from "../actions/AppAction"

const initState = {
  user: {},
  status: {
    isLoading: true,
    message: '',
    success: false
  }
}

const reducer = (state = initState, {type, payload}) => {
  switch(type) {
    case ACTIONS.SET_USER:
      state = {...state, user: {...payload}};
      break;
    case ACTIONS.SET_STATUS:
      state = {...state, status: {...payload}};
      break;
    default:
      break;
  }
  return state;
}

export default reducer;