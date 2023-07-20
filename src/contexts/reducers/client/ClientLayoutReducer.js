import { createSlice } from "@reduxjs/toolkit";

const name = "client-layout";

const initialState = {
  categories: [],
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  cart: {},
  isShowModal: false
};

const reducers = {
  initData: (state, {payload}) => {
    state.categories = payload.categories;
    state.cart = payload.cart;
    state.status = payload.status;
  },
  setShowModal: (state, {payload}) => {
    state.isShowModal = payload;
  },
  setCartItems: (state, {payload}) => {
    state.cart.cartItems = payload;
  },
  updateCartItem: (state, {payload}) => {
    state.cart.cartItems = state.cart.cartItems.map(item => {
      if(item.id === payload.id) return payload;
      else return item;  
    })
  },
  addCartItem: (state, {payload}) => {
    state.cart.cartItems.push(payload);
  },
  deleteCartItem: (state, {payload}) => {
    state.cart.cartItems.filter(item => !payload.includes(item.id)); 
  },
  setSearch: (state, {payload}) => {
    state.search = payload;
  },
  setStatus: (state, {payload}) => {
    state.status = payload;
  }
};

const slice = createSlice({name, initialState, reducers});

export const {initData, setShowModal, setCartItems, updateCartItem, addCartItem, deleteCartItem, setSearch, setCategories, setStatus} = slice.actions;

export default slice.reducer;
