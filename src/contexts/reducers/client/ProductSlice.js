import { createSlice } from "@reduxjs/toolkit";

const name = "product";

const initialState = {
  products: {},
  status: {
    isLoading: true,
    message: '',
    success: true
  },
  popular_products: {}
}

const reducers = {
    initData: (state, { payload }) => {
        state.popular_products = payload.popular_products;
        state.status = payload.status;
    },
    filterProducts: (state, { payload }) => {
        state.products = payload.products;
        state.status = payload.status;
    },
    setProducts: (state, { payload }) => {
        state.products = payload.products;        
    }
}

const slice = createSlice({name, initialState, reducers});

export const {initData, filterProducts} = slice.actions;
export default slice.reducer;

