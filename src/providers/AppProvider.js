import { loadAccountAction, logoutAction } from "@contexts/actions/AppAction";
import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AppContext = createContext();

const AppProvider = (props) => {
    const dispatch = useDispatch();
    const appState = useSelector(state => state.appReducer);

    useEffect(() => {
        loadAccountAction()(dispatch);
    }, []);

    const logout = () => {
        logoutAction()(dispatch);
    }

    const value = {
        appState,
        logout
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider;