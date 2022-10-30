import React, { createContext, useEffect, useReducer } from 'react';
import ClientLayoutReducer from "../../reducers/client/ClientLayoutReducer";
import { setCategoryAction, setLoadingAction, setSearchAction } from "../../actions/client/ClientLayoutAction";
import { useNavigate } from 'react-router-dom';

export const ClientLayoutContext = createContext();

const initState = {
  categories: [],
  status: {
    isLoading: true,
    message: "",
    success: true,
  },
  search: ''
};

const ClientLayoutProvider = props => {
  const navigate = useNavigate();
  const [clientState, dispatch] = useReducer(ClientLayoutReducer, initState);

  useEffect(() => {
    loadData();
  }, []);

  const onSearch = () => {
    const searchStr = document.getElementById("search").value;
    navigate('/product?LIKE_name=' + searchStr);
    setSearchAction(searchStr)(dispatch);
  }

  const loadData = async () => {
    setLoadingAction(true)(dispatch);
    await setCategoryAction()(dispatch);
    setLoadingAction(false)(dispatch);
  }

  const value = {
    clientState,
    onSearch
  }

  return (
    <ClientLayoutContext.Provider value={value}>
      {!clientState.status.isLoading && props.children}
    </ClientLayoutContext.Provider>
  )
}

export default ClientLayoutProvider;