import { ACTIONS } from "@contexts/actions/auth/SignUpAction" 
import { createSlice } from "@reduxjs/toolkit";

const name = "signup";

const initialState = {
  user: {
    username: '',
    fullname: '',
    email: '',
    phone: '',
    password: '',
    retype_password: ''  
  },
  status: {
    isLoading: true,
    message: '',
    success: true
  }
}

const reducers = {
  changeField: (state, {payload}) => {
    state.user[payload.field] = payload.value;
  },
  setStatus: (state, {payload}) => {
    state.status = payload;
  }
}

const slice = createSlice({ name, initialState, reducers });

export const { changeField, setStatus } = slice.actions;
export default slice.reducer;