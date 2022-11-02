import React, { useReducer, createContext, useEffect } from "react";
import NewUserAdminReducer from "../../reducers/admin/NewUserAdminReducer";
import {
  setFieldAction,
  resetAllFieldAction,
  setStatusAction,
  submitAction,
} from "../../actions/admin/NewUserAdminAction";
import {
  validateEmail,
  validateFullname,
  validatePhone,
} from "../../../utils/validate";

export const NewUserAdminContext = createContext();

const initState = {
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  user: {},
};

const NewUserAdminProvider = (props) => {
  const [newUserState, dispatch] = useReducer(NewUserAdminReducer, initState);

  useEffect(() => {
    console.log(newUserState);
  }, [newUserState]);

  const changeField = (e) => {
    setFieldAction({ field: e.target.name, value: e.target.value })(dispatch);
  };

  const clearAllField = () => {
    resetAllFieldAction()(dispatch);
  };

  const submit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      submitAction(newUserState.user)(dispatch);
    }
  };

  const validateForm = () => {
    if (!newUserState.user.username || newUserState.user.username.length < 6) {
      setStatusAction({
        isLoading: false,
        success: false,
        message: "Username not less 6 letters",
      })(dispatch);
      return false;
    }

    if (!newUserState.user.fullname || !validateFullname(newUserState.user.fullname)) {
      setStatusAction({
        isLoading: false,
        success: false,
        message: "Incorrect fullname format",
      })(dispatch);
      return false;
    }

    if (!newUserState.user.email || !validateEmail(newUserState.user.email)) {
      setStatusAction({
        isLoading: false,
        success: false,
        message: "Incorrect email format",
      })(dispatch);
      return false;
    }

    if (!newUserState.user.phone || !validatePhone(newUserState.user.phone)) {
      setStatusAction({
        isLoading: false,
        success: false,
        message: "Incorrect phone format",
      })(dispatch);
      return false;
    }

    if (!newUserState.user.password || newUserState.user.password.length < 6) {
      setStatusAction({
        isLoading: false,
        success: false,
        message: "Password not less 6 letters",
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
    newUserState,
    changeField,
    clearAllField,
    submit,
    resetStatus
  };

  return (
    <NewUserAdminContext.Provider value={value}>
      {props.children}
    </NewUserAdminContext.Provider>
  );
};

export default NewUserAdminProvider;
