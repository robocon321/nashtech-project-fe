import { ACTIONS } from "@contexts/actions/auth/ForgotPasswordAction";
import { createSlice } from "@reduxjs/toolkit";

const name = "forgot-password";

const initialState = {
  email: '',
  status: {
    isLoading: true,
    message: '',
    success: true
  }
}

const reducers =  {
  setEmail: (state, {payload}) => {
    state.email = payload;
  },
  setStatus: (state, {payload}) => {
    state.status = payload;
  }
}

const slice = createSlice({name, initialState, reducers});

export const { setEmail, setStatus } = slice.actions;

export default slice.reducer;