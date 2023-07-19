import {createSlice} from "@reduxjs/toolkit";

const name = "cart";

const initialState = {
    status: {
        isLoading: true,
        message: "",
        success: true
    },
    contacts: [],
    ship: 0,
    contactSelected: null
};

const reducers = {
    initData: (state, {payload}) => {
        state.contacts = payload.contacts;
        state.status = payload.status;
    },
    setContactSelected: (state, {payload}) => {
        state.contactSelected = payload;
    },
    setShippingPrice: (state, {payload}) => {
        state.ship = payload;
    },
    setStatus: (state, {payload}) => {
        state.status = payload;
    }
}

const slice = createSlice({name, initialState, reducers});

export const {setContactSelected, setContacts, setShippingPrice, setStatus, initData} = slice.actions;

export default slice.reducer;
