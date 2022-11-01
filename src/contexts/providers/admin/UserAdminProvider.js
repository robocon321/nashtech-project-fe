import { useEffect } from "react";
import { createContext, useReducer } from "react";
import {
  deleteUserAction,
  loadUserAction,
  setFieldConditionAction,
  setLoadingAction,
  setSelectedAction,
  setStatusAction,
} from "../../actions/admin/UserAdminAction";
import UserAdminReducer from "../../reducers/admin/UserAdminReducer";

const initState = {
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  users: null,
  conditions: {
    page: 0,
    size: 10,
    sort: "id__asc",
  },
  selected: [],
};

export const UserAdminContext = createContext();

const UserAdminProvider = (props) => {
  const [userState, dispatch] = useReducer(UserAdminReducer, initState);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    console.log(userState);
  }, [userState]);

  useEffect(() => {
    loadUserAction(userState.conditions)(dispatch);
  }, [userState.conditions]);


  const loadData = async () => {
    setLoadingAction(false)(dispatch);
    loadUserAction(userState.conditions)(dispatch);
    setLoadingAction(true)(dispatch);
  };

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
    setPage
  };

  return (
    <UserAdminContext.Provider value={value}>
      {props.children}
    </UserAdminContext.Provider>
  );
};

export default UserAdminProvider;
