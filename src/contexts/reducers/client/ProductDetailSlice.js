import {createSlice} from "@reduxjs/toolkit";

const name = "product-detail";

const initialState = {
    product: {},
    ratings: {},
    related_products: [],
    rating_conditions: {
        page: 0,
        size: 10,
        sort: 'createTime__desc'
    },
    status: {
        isLoading: true,
        message: '',
        success: true
    },
    rating_form: {
        star: 5,
        content: ''
    },
    open_modal: false
}

const reducers = {
    initData: (state, {payload}) => {
        state.product = payload.product;
        state.related_products = payload.related_products;
        state.ratings = payload.ratings;
        state.status = payload.status;
        state.rating_form.productId = payload.product.id
    },
    reloadRating: (state, {payload}) => {
        state.status = payload.status;
        state.ratings = payload.ratings;
    },
    toggleModal: (state, {payload}) => {
        state.open_modal = !state.open_modal
    },
    setRatingForm: (state, {payload}) => {
        state.rating_form[payload.field] = payload.value;
    },
    setRatingConditions: (state, {payload}) => {
        state.rating_conditions[payload.field] = payload.value
    },
    setStatus: (state, {payload}) => {
        state.status = payload;
    }
}

const slice = createSlice({name, initialState, reducers});

export const {
    initData,
    toggleModal,
    setRatingForm,
    setRatingConditions,
    reloadRating,
    setStatus
} = slice.actions;

export default slice.reducer;
