import React, { createContext, useEffect, useReducer } from "react";

import i18n from '../../i18n';


import {
  setBestSellerProductAction,
  setFeaturedProductAction,
  setLoadingAction,
  setNewestProductAction,
  setPhoneComputerProductAction,
  setTvCameraProductAction
} from "@contexts/actions/client/HomeAction";
import HomeReducer from "@contexts/reducers/client/HomeReducer";

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