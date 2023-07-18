import {createSlice} from "@reduxjs/toolkit";

const name = "home";

const initialState = {
    feature_products: [],
    best_seller_products: [],
    newest_products: [],
    phone_computer_products: [],
    tv_camera_products: [],
    status: {
        isLoading: true,
        message: "",
        success: true
    }
};

const reducers = {
    initData: (state, {payload}) => {
        state.feature_products = payload.feature_products;
        state.newest_products = payload.newest_products;
        state.best_seller_products = payload.best_seller_products;
        state.phone_computer_products = payload.phone_computer_products;
        state.tv_camera_products = payload.tv_camera_products;
        state.status = payload.status;
    },
    setStatus: (state, {payload}) => {
        state.status = payload;
    }
}

const slice = createSlice({name, initialState, reducers});

export const {initData, setStatus} = slice.actions;
export default slice.reducer;
