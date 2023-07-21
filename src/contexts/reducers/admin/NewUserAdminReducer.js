import { ACTIONS } from "@contexts/actions/admin/NewUserAdminAction";
import { createSlice } from "@reduxjs/toolkit";

const name = "new-user-admin";

const initialState = {
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  user: {}
};

const reducers = {
  resetAllField: (state, {payload}) => {
    state.user = {};
  },
  setField: (state, {payload}) => {
    state.user[payload.field] = payload.value;
  },
  setStatus: (state, {payload}) =>  {
    state.status = payload;
  },
};

const slice = createSlice({
  name, initialState, reducers
});

export const { resetAllField, setField, setStatus } = slice.actions;

export default slice.reducer;
