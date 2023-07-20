import {createSlice} from "@reduxjs/toolkit";
import {convertToSlug} from "@utils/convert";

const name = "category-admin";

const initialState = {
    category: {
        status: 1
    },
    status: {
        isLoading: true,
        message: '',
        success: true
    },
    categories: null,
    conditions: {
        page: 0,
        size: 10,
        sort: 'id__asc'
    },
    selected: []
}

const reducers = {
    setCategories: (state, {payload}) => {
        state.categories = payload.categories;
        state.status = payload.status;
    },
    changeField: (state, {payload}) => {
        if (payload.field === 'name') {
            state.category.name = payload.value;
            state.category.slug = convertToSlug(payload.value);
        } else {
            state.category[payload.field] = payload.value;
        }
    },
    setStatus: (state, {payload}) => {
        state.status = payload;
    },
    setCategory: (state, {payload}) => {
        state.category = payload;
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
    resetCategory: (state, {payload}) => {
        if (state.category.id) {
            state.category = {
                id: state.category.id,
                status: 1
            }
        } else {
            state.cateogry = {
                status: 1
            }
        }
    },
    deleteCategory: (state, {payload}) => {
        state
            .categories
            .content
            .forEach(item => {
                if (payload.includes(item.id)) {
                    item.status = 0
                }
            })
    },
    updateCategory: (state, {payload}) => {
        state.categories.content = state
            .categories
            .content
            .map(
                item => item.id === payload.id
                    ? payload
                    : item
            );
    }
};

const slice = createSlice({name, initialState, reducers});

export const {
    setCategories,
    changeField,
    setStatus,
    setCategory,
    setConditions,
    setFieldCondition,
    setSelected,
    resetCategory,
    deleteCategory,
    updateCategory
} = slice.actions;
export default slice.reducer;
