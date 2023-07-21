import {createSlice} from "@reduxjs/toolkit";

const name = "product-admin"

const initialState = {
    status: {
        isLoading: true,
        message: '',
        success: true
    },
    products: null,
    conditions: {
        page: 0,
        size: 10,
        sort: 'id__asc'
    },
    selected: [],
    categories: []
}

const reducers = {
    setProducts: (state, {payload}) => {
        state.products = payload;
    },
    setStatus: (state, {payload}) => {
        state.status = payload;
    },
    setCondition: (state, {payload}) => {
        state.conditions = payload;
    },
    setFieldConditions: (state, {payload}) => {
        state.conditions[payload.field] = payload.value;
    },
    setSelected: (state, {payload}) => {
        state.selected = payload;
    },
    deleteProduct: (state, {payload}) => {
        state
            .products
            .content
            .forEach(item => {
                if (payload.includes(item.id)) {
                    item.status = 0
                }
            });
        state.status.isLoading = false;
    },
    setCategories: (state, {payload}) => {
        state.categories = payload;
    }
};

const slice = createSlice({name, initialState, reducers});

export const {
    setProducts,
    setStatus,
    setCondition,
    setFieldConditions,
    setSelected,
    deleteProduct,
    setCategories
} = slice.actions;

export default slice.reducer;