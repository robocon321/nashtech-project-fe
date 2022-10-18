import { createContext, useReducer, useEffect } from "react";
import AppReducer from "../reducers/AppReducer";
import { loadAccount } from "../actions/AppAction";

export const AppContext = createContext();

const initState = {
  user: {},
  status: {
    isLoading: true,
    message: '',
    success: false
  }
}

const AppProvider = (props) => {
  const [appState, dispatch] = useReducer(AppReducer, initState);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await loadAccount()(dispatch);
  }

  const value = {
    appState,
    loadData
  }
  
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  ) 
}

export default AppProvider;