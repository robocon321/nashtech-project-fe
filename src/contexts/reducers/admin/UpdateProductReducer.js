import { ACTIONS } from "@contexts/actions/admin/UpdateProductAction";
import { createSlice } from "@reduxjs/toolkit";
import { convertToSlug } from "@utils/convert";

const name = "update-product";

const initialState = {
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  categories: [],
  product: {},
};

const reducers = {
  initData: (state, {payload}) => {
    console.log(payload);
    state.product = {
      ...payload.product,
      thumbnail: null,
      gallery: null,
      categories: payload.product.categories.map(item => item.id)
    }
    state.status = payload.status;
    state.categories = payload.categories;    
  },
  changeField: (state, {payload}) => {
    if (payload.field === "name") {
      state.product = {
        ...state.product,
        name: payload.value,
        slug: convertToSlug(payload.value),
      }
    } else {
      state.product[payload.field] = payload.value;
    }
  },
  setStatus: (state, {payload}) => {
    state.status = payload;
  }
};

const slice = createSlice({name, initialState, reducers});

export const { initData, changeField, setStatus } = slice.actions;

export default slice.reducer;