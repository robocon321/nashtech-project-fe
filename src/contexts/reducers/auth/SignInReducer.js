import { createSlice } from "@reduxjs/toolkit";

const name = "signin";

const initialState = {
  username: "",
  password: "",
  user: {},
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
};

const reducers =  {
  changeField: (state, {payload}) => {
    state[payload.field] = payload.value;
  },
  setUser: (state, {payload}) => {
    state.user = payload.user;
    state.status = payload.status;
  },
  setStatus: (state, {payload}) => {
    state.status = payload;
  }
};

const slice = createSlice({name, initialState, reducers});

export const { changeField, setUser, setStatus } = slice.actions;

export default slice.reducer;
