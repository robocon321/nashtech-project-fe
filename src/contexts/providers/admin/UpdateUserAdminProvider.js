import React, { useReducer, createContext, useEffect } from "react";
import UpdateUserAdminReducer from "../../reducers/admin/UpdateUserAdminReducer";
import {
  setFieldAction,
  resetAllFieldAction,
  setStatusAction,
  submitAction,
  loadUserAction,
  setLoadingAction,
} from "../../actions/admin/UpdateUserAdminAction";
import {
  validateEmail,
  validateFullname,
  validatePhone,
} from "../../../utils/validate";
import { useParams } from "react-router-dom";

export const UpdateUserAdminContext = createContext();

const initState = {
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  user: {},
};

const UpdateUserAdminProvider = (props) => {
  const [updateUserState, dispatch] = useReducer(UpdateUserAdminReducer, initState);
  const { id } = useParams();

  useEffect(() => {
    loadData();
  }, []);  

  useEffect(() => {
    console.log(updateUserState);
  }, [updateUserState]);

  const loadData = async () => {
    setLoadingAction(true)(dispatch);
    await loadUserAction(id)(dispatch);
    setLoadingAction(false)(dispatch);
  }

  const changeField = (e) => {
    setFieldAction({ field: e.target.name, value: e.target.value })(dispatch);
  };

  const switchVisible = (status) => {
    setFieldAction({ field: 'status', value: status})(dispatch);
  }

  const clearAllField = () => {
    resetAllFieldAction()(dispatch);
  };

  const submit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      submitAction(updateUserState.user)(dispatch);
    }
  };

  const validateForm = () => {
    if (!updateUserState.user.username || updateUserState.user.username.length < 6) {
      setStatusAction({
        isLoading: false,
        success: false,
        message: "Username not less 6 letters",
      })(dispatch);
      return false;
    }

    if (!updateUserState.user.fullname || !validateFullname(updateUserState.user.fullname)) {
      setStatusAction({
        isLoading: false,
        success: false,
        message: "Incorrect fullname format",
      })(dispatch);
      return false;
    }

    if (!updateUserState.user.email || !validateEmail(updateUserState.user.email)) {
      setStatusAction({
        isLoading: false,
        success: false,
        message: "Incorrect email format",
      })(dispatch);
      return false;
    }

    if (!updateUserState.user.phone || !validatePhone(updateUserState.user.phone)) {
      setStatusAction({
        isLoading: false,
        success: false,
        message: "Incorrect phone format",
      })(dispatch);
      return false;
    }

    return true;
  };

  const resetStatus = () => {
    setStatusAction({
      isLoading: false,
      message: "",
      success: false,
    })(dispatch);
  };

  const value = {
    updateUserState,
    changeField,
    clearAllField,
    submit,
    resetStatus,
    switchVisible
  };

  return (
    <UpdateUserAdminContext.Provider value={value}>
      {props.children}
    </UpdateUserAdminContext.Provider>
  );
};

export default UpdateUserAdminProvider;
