import { ACTIONS } from "@contexts/actions/admin/UserAdminAction";
import { createSlice } from "@reduxjs/toolkit";

const name = "user-admin";

const initialState = {
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

const reducers = {
  setUsers: (state, {payload}) => {
    state.users = payload;
  },
  setConditions: (state, {payload}) => {
    state.conditions = payload;
  },
  setFieldCondition: (state, {payload}) => {
    state.conditions[payload.field] = payload.value;
  },
  setSelected: (state, {payload}) => {
    state.selected = payload;
  },
  deleteUser: (state, {payload}) => {
    state.users.content.forEach((item) => {
      if (payload.ids.includes(item.id)) {
        item.status = 0;
      }
    });
    state.status = payload.status;
  },
  setStatus: (state, {payload}) => {
    state.status = payload;
  }
};

const slice = createSlice({name, initialState, reducers});

export const { setUsers, setConditions, setFieldCondition, setSelected, deleteUser, setStatus } = slice.actions;

export default slice.reducer;
