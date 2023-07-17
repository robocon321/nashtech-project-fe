import React, { createContext, useEffect, useReducer } from "react";

import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n';

import ClientLayoutReducer from "@contexts/reducers/client/ClientLayoutReducer";
import {
  deleteCartItemAction,
  loadCartItemAction,
  loadCategoryAction,
  saveCartItemAction,
  setCartAction,
  setLoadingAction,
  setSearchAction,
  setShowModalAction,
  setStatusAction,
  updateCartItemAction,
} from "@contexts/actions/client/ClientLayoutAction";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from '@providers/AppProvider';

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
  isShowModal: false
};

const ClientLayoutProvider = (props) => {
  const navigate = useNavigate();
  const [clientState, dispatch] = useReducer(ClientLayoutReducer, initState);
  const { appState } = useContext(AppContext);  

  useEffect(() => {
    loadData();
  }, [appState.user]);

  const onSearch = () => {
    const searchStr = document.getElementById("search").value;
    navigate("/product?LIKE_name=" + searchStr);
    setSearchAction(searchStr)(dispatch);
  };

  const loadData = async () => {
    setLoadingAction(true)(dispatch);
    await loadCategoryAction()(dispatch);
    if(appState.user.id != null) {
      await loadCartItemAction()(dispatch);
    } else {
      setCartAction({})(dispatch);
    }
    setLoadingAction(false)(dispatch);
  };

  const saveCartItem = async (cartItem) => {
    if(appState.user.id) {
      saveCartItemAction(cartItem)(dispatch);
    } else {
      setShowModal(true); 
    }
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

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  }

  const setShowModal = (isShow) => {
    setShowModalAction(isShow)(dispatch);
  }

  const value = {
    clientState,
    onSearch,
    saveCartItem,
    deleteCartItem,
    updateCartItem,
    resetStatus,
    changeLang,
    t: props.t,
    lang: i18n.language,
    setShowModal
  };

  return (
    <ClientLayoutContext.Provider value={value}>
      {!clientState.status.isLoading && props.children}
    </ClientLayoutContext.Provider>
  );
};

export default withNamespaces()(ClientLayoutProvider);