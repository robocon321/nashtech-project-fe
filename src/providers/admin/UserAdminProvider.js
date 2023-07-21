import {
  deleteUserAction,
  loadUserAction,
  setFieldConditionAction,
  setSelectedAction,
  setStatusAction,
} from "@contexts/actions/admin/UserAdminAction";
import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const UserAdminContext = createContext();

const UserAdminProvider = (props) => {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.userAdminReducer);
  const navigate = useNavigate();

  useEffect(() => {
    loadUserAction(userState.conditions)(dispatch);
  }, [userState.conditions]);

  const setPage = (page) => {
    setFieldConditionAction({
      field: "page",
      value: page,
    })(dispatch);
  };

  const setSort = (sort) => {
    if (sort[0].field == "visibleType") {
      setFieldConditionAction({
        field: "sort",
        value: sort.length ? "status" + "__" + sort[0].sort : "id__asc",
      })(dispatch);
    } else {
      setFieldConditionAction({
        field: "sort",
        value: sort.length ? sort[0].field + "__" + sort[0].sort : "id__asc",
      })(dispatch);
    }
  };

  const setSelected = (selected) => {
    setSelectedAction(selected)(dispatch);
  };

  const setSearch = (e) => {
    setFieldConditionAction({
      field: e.target.name,
      value: e.target.value,
    })(dispatch);
  };

  const resetStatus = () => {
    setStatusAction({
      isLoading: false,
      message: "",
      success: false,
    })(dispatch);
  };

  const deleteUser = async (ids) => {
    await deleteUserAction(ids)(dispatch);
  };

  const value = {
    userState,
    setSort,
    setSelected,
    setSearch,
    resetStatus,
    deleteUser,
    setPage,
    navigate
  };

  return (
    <UserAdminContext.Provider value={value}>
      {props.children}
    </UserAdminContext.Provider>
  );
};

export default UserAdminProvider;
