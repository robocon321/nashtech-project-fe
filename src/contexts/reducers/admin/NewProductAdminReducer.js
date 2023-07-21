import { createSlice } from "@reduxjs/toolkit";
import { convertToSlug } from "@utils/convert";

const name = "new-product-admin";

const initialState = {
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  categories: [],
  product: {}
};

const reducers = {
  changeField: (state, {payload}) => {
    if(payload.field === 'name') {
      state.product.name = payload.value;
      state.product.slug = convertToSlug(payload.value);
    } else {
      state.product[payload.field] = payload.value
    }
  },
  setStatus: (state, {payload}) => {
    state.status = payload;
  },
  setCategories: (state, {payload}) => {
    state.categories = payload;
  }
};

const slice = createSlice({name, initialState, reducers});

export const {
  changeField,
  setStatus,
  setCategories
} = slice.actions;
export default slice.reducer;

