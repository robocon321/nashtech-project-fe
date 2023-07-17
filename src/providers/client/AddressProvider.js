import React, { useReducer, createContext, useEffect } from "react";
import {
  validateEmail,
  validateFullname,
  validatePhone,
} from "@utils/validate";
import {
  loadContactAction,
  loadDistrictAction,
  loadProvinceAction,
  loadWardAction,
  setFieldContactAction,
  setLoadingAction,
  setShowModalAction,
  setStatusAction,
  submitAction
} from "@contexts/actions/client/AddressAction";
import AddressReducer from "@contexts/reducers/client/AddressReducer";

const initState = {
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
  contacts: [],
};

export const AddressContext = createContext();

const AddressProvider = (props) => {
  const [addressState, dispatch] = useReducer(AddressReducer, initState);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadDistrictAction(addressState.contact.province)(dispatch);
  }, [addressState.contact.province]);

  useEffect(() => {
    loadWardAction(addressState.contact.district)(dispatch);
  }, [addressState.contact.district]);

  useEffect(() => {
    console.log(addressState);
  }, [addressState]);

  const loadData = async () => {
    setLoadingAction(true)(dispatch);

    await loadProvinceAction()(dispatch);
    await loadContactAction()(dispatch);

    setLoadingAction(false)(dispatch);
  };

  const submit = () => {
    if (validate()) {
      submitAction(addressState.contact)(dispatch);
    }
  };

  const validate = () => {
    if (!validateFullname(addressState.contact.fullName)) {
      setStatusAction({
        isLoading: false,
        message: "Fullname format incorrect",
        sucess: false,
      })(dispatch);
      return false;
    }

    if (!validatePhone(addressState.contact.phone)) {
      setStatusAction({
        isLoading: false,
        message: "Phone format incorrect",
        sucess: false,
      })(dispatch);
      return false;
    }

    if (!validateEmail(addressState.contact.email)) {
      setStatusAction({
        isLoading: false,
        message: "Email format incorrect",
        sucess: false,
      })(dispatch);
      return false;
    }

    if (
      addressState.contact.province == null ||
      addressState.contact.province.trim().length == 0
    ) {
      setStatusAction({
        isLoading: false,
        message: "Province not null",
        sucess: false,
      })(dispatch);
      return false;
    }

    if (
      addressState.contact.province == null ||
      addressState.contact.province.trim().length == 0
    ) {
      setStatusAction({
        isLoading: false,
        message: "Province not null",
        sucess: false,
      })(dispatch);
      return false;
    }

    if (
      addressState.contact.district == null ||
      addressState.contact.district.trim().length == 0
    ) {
      setStatusAction({
        isLoading: false,
        message: "District not null",
        sucess: false,
      })(dispatch);
      return false;
    }

    if (
      addressState.contact.ward == null ||
      addressState.contact.ward.trim().length == 0
    ) {
      setStatusAction({
        isLoading: false,
        message: "Ward not null",
        sucess: false,
      })(dispatch);
      return false;
    }

    if (
      addressState.contact.detail == null ||
      addressState.contact.detail.trim().length == 0
    ) {
      setStatusAction({
        isLoading: false,
        message: "Detail not null",
        sucess: false,
      })(dispatch);
      return false;
    }

    return true;
  };

  const resetStatus = () => {
    setStatusAction({
      isLoading: false,
      message: "",
      success: true,
    })(dispatch);
  };

  const setShowModal = () => {
    setShowModalAction(!addressState.isShowModal)(dispatch);
  };

  const setFieldContact = ({ field, value }) => {
    if (field == "province") {
      setFieldContact({
        field: "district",
        value: null,
      });
    }
    if (field == "district") {
      setFieldContact({
        field: "ward",
        value: null,
      });
    }

    setFieldContactAction({ field, value })(dispatch);
  };

  const value = {
    addressState,
    resetStatus,
    setShowModal,
    setFieldContact,
    submit,
  };

  return (
    <AddressContext.Provider value={value}>
      {props.children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
