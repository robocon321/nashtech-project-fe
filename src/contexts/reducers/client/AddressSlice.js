import { createSlice } from "@reduxjs/toolkit";

const name = "address";

const initialState = {
  contact: {},
  provinces: [],
  districts: [],
  wards: [],
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  isShowModal: false,
};

const reducers = {
    setContacts: (state, payload) => {
        state = { ...state, contacts: payload};
    },
    setFieldContact: (state, payload) => {
        state = {
            ...state,
            contact: { ...state.contact, [payload.field]: payload.value },
          };    
    },
    setShowModal: (state, payload) => {
        state = { ...state, isShowModal: payload };
    },
    setProvinces: (state, payload) => {
        state = { ...state, provinces: payload };
    },
    setDistricts: (state, payload) => {
        state = { ...state, provinces: payload };
    },
    setWards: (state, payload) => {
        state = { ...state, wards: payload };
    },
    setLoading: (state, payload) => {
        state = { ...state, status: { ...state.status, isLoading: payload } };
    },
    setMessage: (state, payload) => {
        state = { ...state, status: { ...state.status, message: payload } };
    },
    setSuccess: (state, payload) => {
        state = { ...state, status: { ...state.status, success: payload } };
    }
};

const slice = createSlice({
    name,
    initialState,
    reducers
})

export const { setContacts, setDistricts, setFieldContact, setLoading, setMessage, setSuccess, setProvinces, setShowModal } = slice.actions;
export default slice.reducer;