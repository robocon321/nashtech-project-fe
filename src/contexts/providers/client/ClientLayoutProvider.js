import React, { createContext, useEffect, useReducer } from 'react';
import ClientLayoutReducer from "../../reducers/client/ClientLayoutReducer";
import { setCategoryAction, setLoadingAction } from "../../actions/client/ClientLayoutAction";

export const ClientLayoutContext = createContext();

const initState = {
  categories: [],
  status: {
    isLoading: false,
    message: "",
    success: true,
  },
};

const ClientLayoutProvider = props => {
  const [clientState, dispatch] = useReducer(ClientLayoutReducer, initState);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoadingAction(true)(dispatch);
    await setCategoryAction()(dispatch);
    setLoadingAction(false)(dispatch);
  }

  const value = {
    clientState
  }

  return (
    <ClientLayoutContext.Provider value={value}>
      {props.children}
    </ClientLayoutContext.Provider>
  )
}

export default ClientLayoutProvider;