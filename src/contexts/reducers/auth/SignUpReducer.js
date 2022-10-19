import { ACTIONS } from "../../actions/auth/SignUpAction" 

const initState = {
  user: {
    username: '',
    fullname: '',
    email: '',
    phone: '',
    password: '',
    retype_password: ''  
  },
  status: {
    isLoading: false,
    message: '',
    success: false
  }
}

const reducer = (state = initState, {type, payload}) => {
  switch(type) {
    case ACTIONS.CHANGE_FIELD:
      state = {...state, user: {...state.user, [payload.field]: payload.value}};
      break;
    case ACTIONS.SET_STATUS:
      state = {...state, status: payload};
      break;
    default:
      break;
  }

  return state;
}

export default reducer;