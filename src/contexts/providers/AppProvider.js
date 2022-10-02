import { createContext, useReducer, useEffect } from "react";
import AppReducer from "../reducers/AppReducer";
import { loadAccount } from "../actions/AppAction";

export const AppContext = createContext();

const initState = {
  role: 'ADMIN',
  status: {
    isLoading: true,
    message: '',
    isSuccess: false
  }
}

const AppProvider = (props) => {
  const [appState, dispatch] = useReducer(AppReducer, initState);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    console.log(appState);
  }, [appState]);

  const loadData = async () => {
    await loadAccount()(dispatch);
  }

  const value = {
    appState
  }
  
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  ) 
}

export default AppProvider;