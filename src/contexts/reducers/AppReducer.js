import { ACTIONS } from "../actions/AppAction"

const initState = {
  role: 'ADMIN',
  status: {
    isLoading: true,
    message: '',
    isSuccess: false
  }
}

const reducer = (state = initState, {type, payload}) => {
  switch(type) {
    case ACTIONS.LOAD_ACCOUNT:
      state = {...payload}
      break;
    default:
      break;
  }
  return state;
}

export default reducer;