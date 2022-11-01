import React, { createContext, useEffect, useReducer } from "react";
import ClientLayoutReducer from "../../reducers/client/ClientLayoutReducer";
import {
  deleteCartItemAction,
  loadCartItemAction,
  loadCategoryAction,
  saveCartItemAction,
  setLoadingAction,
  setSearchAction,
  setStatusAction,
  updateCartItemAction,
} from "../../actions/client/ClientLayoutAction";
import { useNavigate } from "react-router-dom";

export const ClientLayoutContext = createContext();

const initState = {
  categories: [],
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  search: "",
  cart: {},
};

const ClientLayoutProvider = (props) => {
  const navigate = useNavigate();
  const [clientState, dispatch] = useReducer(ClientLayoutReducer, initState);

  useEffect(() => {
    loadData();
  }, []);

  const onSearch = () => {
    const searchStr = document.getElementById("search").value;
    navigate("/product?LIKE_name=" + searchStr);
    setSearchAction(searchStr)(dispatch);
  };

  const loadData = async () => {
    setLoadingAction(true)(dispatch);
    await loadCategoryAction()(dispatch);
    await loadCartItemAction()(dispatch);
    setLoadingAction(false)(dispatch);
  };

  const saveCartItem = async (cartItem) => {
    saveCartItemAction(cartItem)(dispatch);
  };

  const deleteCartItem = async (ids) => {
    deleteCartItemAction(ids)(dispatch);
  };

  const updateCartItem = async (cartItem) => {
    updateCartItemAction(cartItem)(dispatch);
  };

  const resetStatus = () => {
    setStatusAction({
      isLoading: false,
      message: "",
      success: true,
    })(dispatch);
  };

  const value = {
    clientState,
    onSearch,
    saveCartItem,
    deleteCartItem,
    updateCartItem,
    resetStatus,
  };

  return (
    <ClientLayoutContext.Provider value={value}>
      {!clientState.status.isLoading && props.children}
    </ClientLayoutContext.Provider>
  );
};

export default ClientLayoutProvider;
