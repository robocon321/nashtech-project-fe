import { createSlice } from "@reduxjs/toolkit";

const name = "update-user-admin";

const initialState = {
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  user: {}
};

const reducers = {
  setUser: (state, {payload}) => {
    state.user = payload;
  },
  resetAllField: (state, {payload}) => {
    state.user = {id: state.user.id, status: 1};
  },
  setField: (state, {payload}) => {
    state.user[payload.field] = payload.value;
  },
  setStatus: (state, {payload}) => {
    state.status = payload;
  }
};

const slice = createSlice({name, initialState, reducers});

export const { setUser, resetAllField, setField, setStatus } = slice.actions;

export default slice.reducer;

