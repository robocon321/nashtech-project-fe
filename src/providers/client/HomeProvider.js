import {
  initDataAction
} from "@contexts/actions/client/HomeAction";
import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import i18n from '../../i18n';


export const HomeContext = createContext();

const HomeProvider = (props) => {
  const dispatch = useDispatch();
  const homeState = useSelector(state => state.homeReducer);
  console.log(homeState);

  useEffect(() => {
    initDataAction()(dispatch);
  }, []);


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