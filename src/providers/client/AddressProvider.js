import React, { createContext, useEffect } from "react";
import {
  validateEmail,
  validateFullname,
  validatePhone,
} from "@utils/validate";
import {
  initDataAction,
  loadDistrictAction,
  loadWardAction,
  setFieldContactAction,
  setShowModalAction,
  setStatusAction,
  submitAction
} from "@contexts/actions/client/AddressAction";
import { useDispatch, useSelector } from "react-redux";

export const AddressContext = createContext();

const AddressProvider = (props) => {
  const dispatch = useDispatch();
  const addressState = useSelector(state => state.addressReducer);  

  useEffect(() => {
    initDataAction()(dispatch);
  }, []);

  useEffect(() => {
    loadDistrictAction(addressState.contact.province)(dispatch);
  }, [addressState.contact.province, dispatch]);

  useEffect(() => {
    loadWardAction(addressState.contact.district)(dispatch);
  }, [addressState.contact.district, dispatch]);


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
