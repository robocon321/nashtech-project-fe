import React, { createContext, useEffect, useReducer } from "react";

import { withNamespaces } from 'react-i18next';
import i18n from '../../../i18n';


import HomeReducer from "../../reducers/client/HomeReducer";
import {
  setBestSellerProductAction,
  setFeaturedProductAction,
  setLoadingAction,
  setNewestProductAction,
  setPhoneComputerProductAction,
  setTvCameraProductAction
} from "../../actions/client/HomeAction";

const initState = {
  feature_products: [],
  best_seller_products: [],
  newest_products: [],
  phone_computer_products: [],
  tv_camera_products: [],
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
};

export const HomeContext = createContext();

const HomeProvider = (props) => {

  const [homeState, dispatch] = useReducer(HomeReducer, initState);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    // console.log(homeState.feature_products);
  }, [homeState]);

  const loadData = async () => {
    setLoadingAction(true);

    await setBestSellerProductAction()(dispatch);
    await setFeaturedProductAction()(dispatch);
    await setNewestProductAction()(dispatch);
    await setTvCameraProductAction()(dispatch);
    await setPhoneComputerProductAction()(dispatch);

    setLoadingAction(false);
  }

  const value = {
    homeState,
    t: props.t,
    lang: i18n.language    
  };

  return (
    <HomeContext.Provider value={value}>{props.children}</HomeContext.Provider>
  );
};

export default HomeProvider;