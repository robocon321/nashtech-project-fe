import {
  loadUserAction,
  resetAllFieldAction,
  setFieldAction,
  setStatusAction,
  submitAction,
} from "@contexts/actions/admin/UpdateUserAdminAction";
import {
  validateEmail,
  validateFullname,
  validatePhone,
} from "@utils/validate";
import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const UpdateUserAdminContext = createContext();

const UpdateUserAdminProvider = (props) => {
  const dispatch = useDispatch();
  const updateUserState = useSelector(state => state.updateUserAdminReducer);
  console.log(updateUserState.user.sex);
  const { id } = useParams();

  useEffect(() => {
    loadUserAction(id)(dispatch);
  }, []);  

  const changeField = (e) => {
    if(e.target.name == 'sex') {
      e.target.value = e.target.value == 1;
    }
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
      console.log(updateUserState.user.fullname ,validateFullname(updateUserState.user.fullname));
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
