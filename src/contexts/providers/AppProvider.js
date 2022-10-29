import { createContext, useReducer, useEffect } from "react";
import AppReducer from "../reducers/AppReducer";
import { loadAccountAction, logoutAction } from "../actions/AppAction";

export const AppContext = createContext();

const initState = {
  user: {},
  status: {
    isLoading: true,
    message: '',
    success: true
  }
}

const AppProvider = (props) => {
  const [appState, dispatch] = useReducer(AppReducer, initState);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await loadAccountAction()(dispatch);
  }

  const logout = () => {
    logoutAction()(dispatch);
  }

  const value = {
    appState,
    loadData,
    logout
  }
  
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  ) 
}

export default AppProvider;