import { createSlice } from "@reduxjs/toolkit";

const name = "address";

const initialState = {
  contacts: [],
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
  addContact: (state, { payload }) => {
    state.contacts.push(payload);
  },
  setContacts: (state, { payload }) => {
    state.contacts = payload;
  },
  setFieldContact: (state, { payload }) => {
    const { field, value } = payload;
    if(field === "province") {
      state.contact.district = null;
      state.contact.ward = null;
      state.districts = [];
      state.wards = [];
    }
    if(field ===  "district") {
      state.contact.ward = null;
      state.wards = [];
    }
    state.contact[field] = value
  },
  setShowModal: (state, { payload }) => {
    state.isShowModal = payload;
  },
  setProvinces: (state, { payload }) => {
    state.provinces = payload;
  },
  setDistricts: (state, { payload }) => {
    state.districts = payload;
  },
  setWards: (state, { payload }) => {
    state.wards = payload;
  },
  setStatus: (state, { payload }) => {
    state.status = payload;
  },
  initData: (state, { payload }) => {
    state.status = payload.status;
    state.contacts = payload.contacts;
    state.provinces = payload.provinces;
  }
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  addContact,
  setContacts,
  setDistricts,
  setFieldContact,
  setProvinces,
  setWards,
  setStatus,
  setShowModal,
  initData
} = slice.actions;
export default slice.reducer;
