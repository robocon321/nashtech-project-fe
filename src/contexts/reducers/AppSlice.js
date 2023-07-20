import { createSlice } from "@reduxjs/toolkit";

const name = "app";

const initialState = {
  user: null,
  status: {
    isLoading: true,
    message: '',
    success: true
  }
}

const reducers = {
  initData: (state, {payload}) => {
    state.status = payload.status;
    state.user = payload.user;
  },
  setStatus: (state, {payload}) => {
    state.status = payload.status;
  },
  removeUser: (state, {payload}) => {
    state.user = null;
  }
}


const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  setStatus,
  initData,
  removeUser
} = slice.actions;
export default slice.reducer;
